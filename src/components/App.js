import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Dashboard  from './Dashboard'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import {handleInitialLoad} from '../actions/initialLoad'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialLoad()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Route path='/' exact component={Dashboard} />
          <Route path='/add' component={AddQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/question/:id' component={QuestionPage} />
        </Fragment>
      </Router>
    );
  }
}

export default connect(null, { handleInitialLoad })(App)
