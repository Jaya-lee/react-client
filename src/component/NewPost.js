import React, { Component } from 'react';
import Form from './Form'
class NewPost extends Component {

  render() {
    let id=this.props.match.params.id
    console.log(id);
    console.log(this.props);
    return (
      <div className='post'>
        {
          id　==='new' ? <p>写文章</p> : <p>修改文章</p>
        }
        <Form id={id} props={this.props}/>
      </div>
    )
  }
}

export default NewPost;
