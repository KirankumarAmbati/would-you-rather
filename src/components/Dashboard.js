import React from 'react'
import {connect} from 'react-redux'
import '../assets/main.css'
import NavigationBar from './NavigationBar'
import Question from './Question'
import LoginPage from './LoginPage'
import {
    getAnsweredQuestions,
    getUnansweredQuestions
} from '../utils/helper'
class Dashboard extends React.Component {
    state = {
        renderUnanswered: true
    }

    changeQuestions() {
        this.setState((prevState) => ({
            renderUnanswered: !prevState.renderUnanswered
        }))
    }

    render() {
        const {loggedUser, answeredQuestionIds, unansweredQuestionIds} = this.props

        if(loggedUser === null) {
            return <LoginPage />
        }

        const questionIds = this.state.renderUnanswered ? unansweredQuestionIds:answeredQuestionIds

        return(
            <div className='container'>
                <NavigationBar />
                <h2 style={{marginTop:'20px'}}>Dashboard</h2>
                <span style={{fontSize:'20px', fontWeight:'bold', marginRight:'20px'}}>{this.state.renderUnanswered ? 'Unanswered' : 'Answered' }</span>
                <button
                    onClick={this.changeQuestions.bind(this)}
                    className='button'
                >
                    Toggle
                </button>
                <ul>
                    {
                        questionIds.map((id) => (
                            <li
                                key={id}
                                className='leaderBoard-card'>
                                <Question id={id} />
                            </li>
                        ))
                    }
                </ul>
            </div>            
        )
    }
}

function mapStateToProps({login, questions}) {
    const loggedUser = login ? login.loggedUser : null

    return {
        loggedUser,
        unansweredQuestionIds: getUnansweredQuestions(loggedUser, questions),
        answeredQuestionIds: getAnsweredQuestions(loggedUser, questions)
    }
}

export default connect(mapStateToProps)(Dashboard)