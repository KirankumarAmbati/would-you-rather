import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import NavigationBar from './NavigationBar'

class LeaderBoard extends React.Component {
    render() {
        const {users, userIds, questions, loggedUser} = this.props

        if(loggedUser === null) {
            return <Redirect to='/' />
        }

        return(
            <div className='container'>
                <NavigationBar />
                <h2>LeaderBoard</h2>
                <ul>
                    {userIds.map((userId) => (
                        <li key={userId} className='leaderBoard-card'>
                            <h1
                                style={userId === loggedUser ? {color:'red'} : {color:'black'}}
                            >
                                {users[userId].name}
                            </h1>
                            <p>Questions Asked: {noOfQuestionsAsked(userId, questions)}</p>
                            <p>Questions Answered: {noOfQuestionsAnswered(userId, questions)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function noOfQuestionsAsked(userId, questions) {
    let questionsAsked = 0
    Object.keys(questions).map((qid) => questions[qid].author === userId && questionsAsked++ )
    return questionsAsked
}

function noOfQuestionsAnswered(userId, questions) {
    let questionsAnswered = 0
    Object.keys(questions).map((qid) => (questions[qid].optionOne.votes.includes(userId) || questions[qid].optionTwo.votes.includes(userId)) && questionsAnswered++ )
    return questionsAnswered
}

function totalQuestionsByUser(userId, questions) {
    return noOfQuestionsAsked(userId, questions) + noOfQuestionsAnswered(userId, questions)
}

function mapStateToProps({users, questions, login}) {
    return {
        users,
        userIds: Object.keys(users).sort((a,b) => totalQuestionsByUser(b, questions) - totalQuestionsByUser(a, questions)),
        questions,
        loggedUser: login ? login.loggedUser : null,
    }
}
export default connect(mapStateToProps)(LeaderBoard)