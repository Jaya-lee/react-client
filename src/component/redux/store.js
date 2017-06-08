import {createStore,applyMiddleWare} from 'redux'

import thunk from 'react-thunk'
let data=[]
function rootReducer(state=data,action){
  switch(action.type){
    case 'FIRST' : return action.posts
    default : return state
  }

}

const store = createStore(rootReducer,applyMiddleWare(thunk))

export default store
