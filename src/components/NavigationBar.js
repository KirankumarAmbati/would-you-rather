import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'
class NavigationBar extends React.Component {
    handleLogout = () => {
        const {dispatch} = this.props
        dispatch(login(null))
    }

    render() {

        const {loggedUser, users} = this.props

        if(loggedUser === null) {
            return <Redirect to='/' />
        }

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
                <Link to={'/dashboard'} className='button'>Dashboard</Link>
                <Link to={'/newpoll'} className='button'>Add Poll</Link>
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

export default connect(mapStateToProps)(NavigationBar)