import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Question extends React.Component {
    render() {
        const {question, id, users} = this.props

        return(
            <Link
                to={`/question/${id}`}
                className='link'
            >
                <img
                    src={users[question.author].avatarURL}
                    alt={`Avatar of ${users[question.author].name}`}
                    width='100px' 
                    height='100px'
                    style={{borderRadius:'50%'}}
                />
                <h3>Would you rather : </h3>
                <p>A) {question.optionOne.text}</p>
                <p>B) {question.optionTwo.text}</p>
            </Link>
        )
    }
}

function mapStateToProps({login, questions, users}, {id}) {
    return {
        loggedUser:login ? login.loggedUser : null,
        question: questions[id],
        users
    }
}

export default connect(mapStateToProps)(Question)