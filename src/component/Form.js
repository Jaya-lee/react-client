import React,{Component} from 'react'

import axios from 'axios'

class Form extends Component{
  handleSubmit(e){
    e.preventDefault();

      axios.post('http://express-api.haoqicat.com/post',{
        category: this.category.value,
        title: this.title.value,
        content: this.content.value
      })
      .then(this.props.history.push('/'))
      e.target.reset()

    }
  render(){
    let id=this.props.id
    console.log(this.props);
    return(
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
    )
  }
}
export default Form
