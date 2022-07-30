const INITIAL_STATE = {
    isLoading :false,
    favoriteMovies:[]
}
const initTwo= {
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