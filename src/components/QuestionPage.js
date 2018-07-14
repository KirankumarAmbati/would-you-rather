import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleAnswerPoll} from '../actions/questions'
import {Link} from 'react-router-dom'

class QuestionPage extends React.Component {
    submitAnswer = (option) => {
        const {dispatch, loggedUser, id} = this.props
        
        dispatch(handleAnswerPoll({
            authedUser:loggedUser,
            qid:id,
            answer:option
        }))
    }

    render() {
        const {loggedUser, question} = this.props

        if(loggedUser === null) {
            return <Redirect to='/' />
        }

        const optionSelectedByUser = isPollAnsweredByCurrentUser(loggedUser, question)

        const renderQuestion = optionSelectedByUser.answered
                                ? (
                                <div className='leaderBoard-card'>
                                    <p>
                                        You have answered the question.
                                    </p>
                                    <h3>
                                        Your selection is: {question[optionSelectedByUser.optionSelected].text}
                                    </h3>
                                    <p>
                                        {question.optionOne.text}: <span style={{fontWeight:'bold'}}>{optionSelectedByUser.numberOfOptionOneVotes.length}</span>
                                        ({((optionSelectedByUser.numberOfOptionOneVotes.length/(optionSelectedByUser.numberOfOptionOneVotes.length+optionSelectedByUser.numberOfOptionTwoVotes.length))*100).toPrecision(3)}%)
                                        
                                    </p>
                                    <p>
                                        {question.optionTwo.text}: <span style={{fontWeight:'bold'}}>{optionSelectedByUser.numberOfOptionTwoVotes.length}</span>
                                        ({((optionSelectedByUser.numberOfOptionTwoVotes.length/(optionSelectedByUser.numberOfOptionOneVotes.length+optionSelectedByUser.numberOfOptionTwoVotes.length))*100).toPrecision(3)}%)
                                    </p>
                                </div>
                                )
                                : (
                                    <div className='leaderBoard-card'>
                                        <h1>Would You Rather</h1>
                                        <button className='button' onClick={() => this.submitAnswer('optionOne')}>{question.optionOne.text}</button>
                                        <button className='button' onClick={() => this.submitAnswer('optionTwo')}>{question.optionTwo.text}</button>
                                    </div>
                                )

        return (
            <div>
                { renderQuestion }
                <Link to='/dashboard' className='button' style={{marginLeft:'35px'}}>Home</Link>
            </div>
        )
    }
}

function isPollAnsweredByCurrentUser(loggedUser, question) {
    let answered = question.optionOne.votes.includes(loggedUser) || question.optionTwo.votes.includes(loggedUser)
    return {
        answered,
        optionSelected: answered ? (question.optionOne.votes.includes(loggedUser) ? 'optionOne':'optionTwo') : null,
        numberOfOptionOneVotes:question.optionOne.votes,
        numberOfOptionTwoVotes:question.optionTwo.votes
    }
}

function mapStateToProps({questions, login}, props) {
    const {id} = props.match.params
    const question = questions[id]

    return {
        loggedUser: login ? login.loggedUser : null,
        question,
        id
    }
}

export default connect(mapStateToProps)(QuestionPage)