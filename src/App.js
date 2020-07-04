import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import './App.css';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {  
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
              <div className="container mt-4">
                <Alert />
                <Switch>
                    <Route exact path='/' render={props => (
                        <Fragment>
                          <Search  />
                          <Users />
                        </Fragment>
                    )} />

                    <Route exact path='/about' component={About} />
                    <Route exect path="/user/:login" component={User} />
                  
                </Switch>
              </div>
            </div>
          </Router>
          </AlertState>
      </GithubState>
    );
}

export default App;