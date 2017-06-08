import React,{Component} from 'react'
import axios from 'axios'

class DeletePost extends Component{
  
  handleClick(){
    axios.delete(`http://express-api.haoqicat.com/post/${this.props.id}`).then(
      res => {
        this.props.delete(this.props.id)
      })
  }
  handleClose(){
    return this.props.show(false)
  }
  render(){
    console.log(this.props);
    return(
      <div className='delete'>
        <p>确定要删除吗?</p>
        <div>
          <span onClick={this.handleClick.bind(this)}>确定</span>
          <span onClick={this.handleClose.bind(this)}>取消</span>
        </div>
      </div>
    )
  }
}
export default DeletePost
