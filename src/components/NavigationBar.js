import React from 'react'
import {Link} from 'react-router-dom'

export default function NavigationBar() {
    return (
        <div>
            <Link to={'/dashboard'} className='button'>Dashboard</Link>
            <Link to={'/newpoll'} className='button'>Add Poll</Link>
            <Link to={'/leaderboard'} className='button'>Leaderboard</Link>
        </div>
    )
}