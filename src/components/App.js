import React, { Component, Fragment } from 'react'
import LoginPage from './LoginPage'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Dashboard  from './Dashboard'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import {handleInitialLoad} from '../actions/initialLoad'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialLoad())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Route path='/' exact component={LoginPage} />
          <Route path='/newpoll' component={AddQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/question/:id' component={QuestionPage} />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App)
