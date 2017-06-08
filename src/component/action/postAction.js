import axios from 'axios'

const fetchComments =()=>(
    dispatch =>{
      axios.get('http://express-api.haoqicat.com/posts')
      .then(res => dispatch({type:'FIRST',posts:res.data.posts}))
    }
)
export {fetchComments}
