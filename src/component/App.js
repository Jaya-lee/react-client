import React, { Component } from 'react';
import '../css/main.css'
import Header from './Header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import PostList from './PostList'
import NewPost from './NewPost'
import EditPost from './EditPost'
import ShowPost from './ShowPost'

class App extends Component {
  render() {

    return (

        <Router>

            <div className="app">
              <Header/>
              <Switch>
                <Route exact path='/' component={PostList}/>
                <Route path='/post/new' component={NewPost}/>
                <Route path='/post/:id/edit' component={EditPost} />
                <Route path='/post/:id' component={ShowPost} />
              </Switch>
            </div>

        </Router>
    )
  }
}

export default App;
