import { combineReducers, createStore } from "redux";

const initialStateHome = {
    blogPosts : []
}

const HomeReducer = (state = initialStateHome, action) => {
    if(action.type === 'UPDATE_BLOG_POST') {
        return { ...state, blogPosts : action.payload }
    }
    
    return state
}


const initialState = {
    name : "Sigit"
}

const GlobalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return { ...state, name : "Nugroho" }
    }
    
    return state
}

const reducer = combineReducers({HomeReducer, GlobalReducer})

const store = createStore(reducer)

export default store