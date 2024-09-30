import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ContextObject from './context/context'
import Home from './components/Home'
import Repository from './components/Repository'
import RepositoryItem from './components/RepositoryItem'
import Analysis from './components/Analysis'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {activeTab: '/'}

  activeTabChange = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {activeTab} = this.state
    return (
      <ContextObject.Provider
        value={{activeTab, activeTabChange: this.activeTabChange}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/repositories" component={Repository} />
          <Route
            exact
            path="/repositories/:repoName"
            component={RepositoryItem}
          />
          <Route exact path="/analysis" component={Analysis} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextObject.Provider>
    )
  }
}

export default App
