import React, { Component } from 'react';
import axios from 'axios';

class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentWillMount() {
    axios.get(`http://express-api.haoqicat.com/post/${this.props.match.params.id}`).then(res => {
      this.setState({
        post: res.data.post
      })
    })
  }

  render() {
     return (
       <div className='post'>
         <div className='class'>{this.state.post.category}</div>
         <div className='title'>{this.state.post.title}</div>
         <div className='content'>{this.state.post.content}</div>
       </div>
     );
   }
 }

 export default ShowPost
