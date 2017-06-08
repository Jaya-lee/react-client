import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

class EditPost extends Component {
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

  publishPost(data) {
    axios.put(`http://express-api.haoqicat.com/post/${this.props.match.params.id}`, data)
    .then(res => this.props.history.push('/'))
  }

  render() {
    console.log(this.state.post);
    return (
      <div className='post'>
        <p>修改文章</p>
        {
        Object.keys(this.state.post).length !== 0 ? <Form label='更新文章' publishPost={this.publishPost.bind(this)} post={this.state.post} /> : ''
        }
      </div>
    );
  }
}

export default EditPost
