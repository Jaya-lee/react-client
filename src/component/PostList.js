import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeletePost from './DeletePost'

class PostList extends Component{
  constructor(){
    super();
    this.state={
      post:[],
      id:'',
      show:false
    }
  }
  componentWillMount(){
    axios.get('http://express-api.haoqicat.com/posts')
    .then(res => this.setState({post:res.data.posts}))
  }
  handleClick(postId){
    this.setState({id:postId,show:true})
  }
  handleDelete(postId){
    this.setState({show:false,post:this.state.post.filter(item => item._id!== postId)})

  }
  handleClose(state){
    this.setState({show:state})
  }
  render () {
    let styleShade= {
      position:'fixed',
      margin:"auto",
      top:"0",
      bottom:"0",
      left:"0",
      right:"0",
      backgroundColor:"rgba(0, 0, 0, 0.6)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:"999"
    }

    return(
     <div>
        <Link to='/post/new' className='write'>写文章</Link>
        {
          this.state.post.map(item =>
          <div className='list' key={Math.random()}>
            <div>{item.title}</div>
            <div className='do'>
              <Link to={`/post/${item._id}`}>查看</Link>
              <Link to={`/post/${item._id}/edit`}>编辑</Link>
              <Link to='/' onClick={this.handleClick.bind(this,item._id)}>删除</Link>
            </div>
          </div>)
        }
        {
          this.state.show ?
          <div style={styleShade}>
          <DeletePost id={this.state.id} delete={this.handleDelete.bind(this)}
          show={this.handleClose.bind(this)}/>
        </div>  : ''
        }
        </div>

    )
  }
}

export default PostList
