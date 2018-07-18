import React from 'react'
import {connect} from 'react-redux'
import NavigationBar from './NavigationBar'
import LoginPage from './LoginPage'
import {
    noOfQuestionsAsked,
    noOfQuestionsAnswered,
    totalQuestionsByUser
} from '../utils/helper'

function LeaderBoard({users, userIds, questions, loggedUser}) {
    if(loggedUser === null) {
        return <LoginPage />
    }

    return(
        <div className='container'>
            <NavigationBar />
            <h2>LeaderBoard</h2>
            <ul>
                {userIds.map((userId) => (
                    <li key={userId} className='leaderBoard-card'>
                        <img
                            src={users[userId].avatarURL}
                            alt={`Avatar of ${users[userId].name}`}
                            width='100px' 
                            height='100px'
                            style={{borderRadius:'50%'}}
                        />
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

function mapStateToProps({users, questions, login}) {
    return {
        users,
        userIds: Object.keys(users).sort((a,b) => totalQuestionsByUser(b, questions) - totalQuestionsByUser(a, questions)),
        questions,
        loggedUser: login ? login.loggedUser : null,
    }
}

export default connect(mapStateToProps)(LeaderBoard)