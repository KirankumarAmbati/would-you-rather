import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

class Question extends React.Component {
    render() {
        const {loggedUser, question, id} = this.props

        if(loggedUser === null) {
            return <Redirect to='/' />
        }

        return(
            <Link
                to={`/question/${id}`}
                className='link'
            >
                <h3>Would you rather : </h3>
                <p>A) {question.optionOne.text}</p>
                <p>B) {question.optionTwo.text}</p>
            </Link>
        )
    }
}

function mapStateToProps({login, questions}, {id}) {
    return {
        loggedUser:login ? login.loggedUser : null,
        question: questions[id]
    }
}

export default connect(mapStateToProps)(Question)