import React, { Component } from 'react'
import {getInitialData} from './utils/api'

class App extends Component {

  state = {
    users: {},
    questions: {}
  }

  componentDidMount() {
    getInitialData()
      .then(([users, questions]) => {
        this.setState({
          users,
          questions
        })
    })
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {console.log(this.state.users)}
      </div>
    );
  }
}

export default App;
