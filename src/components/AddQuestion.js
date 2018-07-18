import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {handleAddQuestion} from '../actions/questions'
import NavigationBar from './NavigationBar'
import LoginPage from './LoginPage'

class AddQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayErrorMessage1:false,
            displayErrorMessage2:false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        const optionOneText = this.optionOne.value
        const optionTwoText = this.optionTwo.value
        const { loggedUser, handleAddQuestion } = this.props
        
        this.setState({
            displayErrorMessage1:false,
            displayErrorMessage2:false
        })

        if(optionOneText && optionTwoText) {
            handleAddQuestion({
                optionOneText,
                optionTwoText,
                author: loggedUser
            })

            this.props.history.push('/')
        } else {
            optionOneText === '' && this.setState(() => ({displayErrorMessage1:true}))
            optionTwoText === '' && this.setState(() => ({displayErrorMessage2:true}))
        }
    }

    render() {
        const { loggedUser } = this.props
        const { displayErrorMessage1, displayErrorMessage2} = this.state

        if(loggedUser === null) {
            return <LoginPage />
        }

        const errorMessage1 = {
            color: 'red',
            display: displayErrorMessage1?'block':'none'
        }

        const errorMessage2 = {
            color: 'red',
            display: displayErrorMessage2?'block':'none'
        }

        return(
            <div className='container'>
                <NavigationBar />
                <div className='leaderBoard-card'>
                    <h3>
                        Would You Rather ?
                    </h3>
                    <div>
                        <input
                            type='text'
                            ref={input => this.optionOne = input}
                            style={{
                                width: '200px',
                                height: '30px',
                                marginRight: '10px',
                                marginBottom: '10px'
                            }}
                        />
                        <p style={errorMessage1}>* This is a mandatory field.</p>
                    </div>
                    <div>
                        <input
                            type='text'
                            ref={input => this.optionTwo = input}
                            style={{
                                width: '200px',
                                height: '30px',
                                marginBottom: '10px'
                            }}
                        />
                        <p style={errorMessage2}>* This is a mandatory field.</p>
                    </div>
                    <button
                        className='button'
                        onClick={this.handleSubmit}
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

export default withRouter(connect(mapStateToProps, { handleAddQuestion })(AddQuestion))