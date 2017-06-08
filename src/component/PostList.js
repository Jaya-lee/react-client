import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostList extends Component{
  constructor(){
    super();
    this.state=({
      data:[]
    })
  }
  componentWillMount(){
    axios.get('http://express-api.haoqicat.com/posts')
    .then(res => this.setState({data:res.data.posts}))
  }
  render(){

    return(
      <div>
        <Link to='/post/new' className='write'>写文章</Link>
        {
          this.state.data.map(item =>
            <div className='list' key={Math.random()}>
              <div>{item.title}</div>
              <div className='do'>
                <Link to='/post/read'>查看</Link>
                <Link to='/post/write'>编辑</Link>
                <Link to='/'>删除</Link>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  posts:state.posts
})
export default PostList
