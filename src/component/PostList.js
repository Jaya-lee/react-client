import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import store from './redux/store'
// import {connect} from 'react-redux'
class PostList extends Component{
  constructor(){
    super();
    this.state={
      post:[]
    }
  }
  componentWillMount(){
    axios.get('http://express-api.haoqicat.com/posts')
    .then(res => this.setState({post:res.data.posts}))
  }

  render(){
    console.log(this.state.post);
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
                <Link to=''>删除</Link>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
// const mapStateToProps = (state) =>({
//   posts:state
// })
export default PostList
