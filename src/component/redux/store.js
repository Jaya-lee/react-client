import {createStore} from 'redux'

let posts=[]
function rootReducer(state=posts,action){
  switch(action.type){
    case 'FIRST' : return action.posts
    default : return state
  }
}
const store= createStore(rootReducer)
export default store
