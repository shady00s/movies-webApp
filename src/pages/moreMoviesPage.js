import { useLocation } from "react-router-dom"
import { useEffect, useState } from 'react';
import axiosInstance from "../axios/inestance";
import MovieDetails from "../components/movieCard/movieCard";


export default function MoreMoviesPage() {
    
   return(
    <>
        <MoviesContainer/>
    </>
   )
    
   
}

function MoviesContainer(){
    const location = useLocation()

    const [moviesList,setMoviesList]=useState([])

    useEffect(()=>{
        axiosInstance.get('/'+location.state.catType,{params:{
            page:3
        }}).then((res)=>setMoviesList(()=>res.data.results))

    },[])

    
    return (
        <div className="mainMovieContainer">
        <h1>more {location.state.title} Movies</h1>
        <div className="movieContainer">

            {moviesList.map((element, i) => <MovieDetails element={element} key={i} />)}
            
        </div>

    </div>
    )
}

// function paginationContainer(){
//     const [pageNumber,setPageNumber]=useState(1)
//     const [firstPageNumber,setFirstPageNumber]=useState()
//     return(
//         <>

//         </>
//     )
// }