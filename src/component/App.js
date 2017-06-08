import React, { Component } from 'react';
import '../css/main.css'
import PostList from './PostList'
import Header from './Header'
import NewPost from './NewPost'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends Component {
  render() {

    return (
        <Router>
          <div className="app">
            <Header/>
            <Route exact path='/' component={PostList}/>
            <Route path='/post/:id' component={NewPost} />
          </div>
        </Router>
    )
  }
}

export default App;
