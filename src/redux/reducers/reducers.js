const INITIAL_STATE = {
    isLoading :false,
    favoriteMovies:[]
}

export  function loaderReducer(state= INITIAL_STATE,action){
    if(action.type === "loaderData"){
        return {...state,isLoading: action.payload}
    }
    else{
        return state
    }
}

export function favoriteReducer(state= INITIAL_STATE,action){
    if(action.type === "favoriteAction"){
        return {...state,favoriteMovies: action.payload}
    }
    else{
        return state
    }
}


export function apiReducer(state =[],action){
    if(action.type === "apiReducer"){
        return action.payload
    }
    else {
        return state
    }
}