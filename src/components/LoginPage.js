import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/login'

class LoginPage extends React.Component {
    handleClick = (userId) => {
        this.props.login(userId)
    }

    render() {
        const {users} = this.props

        return(
            <div>
                <ul>
                    {Object.keys(users).map(key => (
                        <a
                            key={key}
                            style={{
                                color:'blue',
                                textDecoration:'underline',
                                cursor:'pointer',
                                listStyle:'none'
                            }}
                            onClick={() => this.handleClick(key)}
                        >
                            <li>
                                <img
                                    src={users[key].avatarURL}
                                    alt={`Avatar of ${users[key].name}`}
                                    width='100px' 
                                    height='100px'
                                    style={{borderRadius:'50%'}}
                                />
                                {users[key].name}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}
export default connect(mapStateToProps, { login })(LoginPage)