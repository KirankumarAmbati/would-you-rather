import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {handleAddQuestion} from '../actions/questions'
import NavigationBar from './NavigationBar'

class AddQuestion extends React.Component {
    handleSubmit() {
        const optionOneText = this.optionOne.value
        const optionTwoText = this.optionTwo.value
        const { loggedUser, dispatch } = this.props
        
        dispatch(handleAddQuestion({
            optionOneText,
            optionTwoText,
            author: loggedUser
        }))

        this.props.history.push('/dashboard')
    }

    render() {

        const { loggedUser } = this.props

        if(loggedUser === null) {
            return <Redirect to='/' />
        }

        return(
            <div className='container'>
                <NavigationBar />
                <div className='leaderBoard-card'>
                    <h3>
                        Would You Rather ?
                    </h3>
                    <input
                        type='text'
                        ref={input => this.optionOne = input}
                        style={{
                            width: '200px',
                            height: '30px',
                            marginRight: '10px'
                        }}
                    />
                    <input
                        type='text'
                        ref={input => this.optionTwo = input}
                        style={{
                            width: '200px',
                            height: '30px'
                        }}
                    />
                    <button
                        className='button'
                        onClick={this.handleSubmit.bind(this)}
                        style={{marginBottom: '10px'}}
                    >
                        Add Question
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({login}) {
    return {
        loggedUser: login ? login.loggedUser : null
    }
}
export default withRouter(connect(mapStateToProps)(AddQuestion))