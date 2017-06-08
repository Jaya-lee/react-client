import React, { Component } from 'react';
import Form from './Form'
import axios from 'axios'


  const NewPost = (props) => {
    const publishPost = (data) => {
      axios.post('http://express-api.haoqicat.com/post', data)
      .then(res => {
        console.log(res.data.message)
        props.history.push('/')
      })
    }
    return (
      <div className='post'>
        <p>写文章</p>
        <Form publishPost={publishPost} label='发布文章' />
      </div>
    )
  }
export default NewPost
