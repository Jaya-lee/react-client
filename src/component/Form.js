import React,{Component} from 'react'
import axios from 'axios'

class Form extends Component{
  handleSubmit(e){
    e.preventDefault();
    const category = this.category.value;
     const title = this.title.value;
     const content = this.content.value;
    if(category && title && content){
    this.props.publishPost({category, title, content});
    e.target.reset()
    }else{
      alert('请将信息全部填完')
    }
  }
  render(){

    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label htmlFor='category'>分类</label>
          <input type='text' id='category' ref={input => this.category=input}
          defaultValue={this.props.post ? this.props.post.category : ''}
          />
        </div>
        <div>
          <label htmlFor='title'>标题</label>
          <input　type='text' id='title' ref={input => this.title=input}
           defaultValue={this.props.post ? this.props.post.title : ''}/>
        </div>
        <div>
          <label htmlFor='content'>内容</label>
          <textarea id='content' rows='10'
             defaultValue={this.props.post ? this.props.post.content : ''}
            ref={input => this.content=input}></textarea>
        </div>
        <div　className='bot'>
          <button>{this.props.label}</button>
          <span>取消</span>
        </div>
      </form>
    )
  }
}
export default Form
