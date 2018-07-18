import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'
class NavigationBar extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        const {login, history } = this.props
        login(null)
        history.push('/')
    }

    render() {

        const {loggedUser, users} = this.props

        return (
            <div>
                <img
                    src={users[loggedUser].avatarURL}
                    alt={`Avatar of ${users[loggedUser].name}`}
                    width='100px' 
                    height='100px'
                    style={{borderRadius:'50%'}}
                />
                <h3>Hello {users[loggedUser].name} !</h3>
                <Link to={'/'} className='button'>Dashboard</Link>
                <Link to={'/add'} className='button'>Add Poll</Link>
                <Link to={'/leaderboard'} className='button'>Leaderboard</Link>
                <a href='' className='button' onClick={this.handleLogout}>Logout</a>
            </div>
        )
    }
}

function mapStateToProps({users, login}) {
    return {
        users,
        loggedUser: login ? login.loggedUser : null,
    }
}

export default withRouter(connect(mapStateToProps, { login })(NavigationBar))