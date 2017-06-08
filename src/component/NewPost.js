import React, { Component } from 'react';
import axios from 'axios'

class NewPost extends Component {

  handleSubmit(e){
    e.preventDefault();
      if(this.category.value && this.title.value && this.content.value){
      axios.post('http://express-api.haoqicat.com/post',{
        category: this.category.value,
        title: this.title.value,
        content: this.content.value
      })
      .then(this.props.history.push('/'))
      e.target.reset()
      }
    }
  render() {
    let id=this.props.match.params.id
    console.log(id);
    console.log(this.props);
    return (
      <div className='post'>
        {
          id　==='new' ? <p>写文章</p> : <p>修改文章</p>
        }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label htmlFor='category'>分类</label>
            <input type='text' id='category' ref={input => this.category=input}
              // value={id==='new' ? ' ' : ''  }
            />
          </div>
          <div>
            <label htmlFor='title'>标题</label>
            <input　type='text' id='title' ref={input => this.title=input}/>
          </div>
          <div>
            <label htmlFor='content'>内容</label>
            <textarea id='content' rows='10'
              ref={input => this.content=input}></textarea>
          </div>
          <div　className='bot'>
            <button>发布文章</button>
            <span>取消</span>
          </div>
        </form>
      </div>
    )
  }
}

export default NewPost;
