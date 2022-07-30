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
    const [pageNumber,setPageNumber]=useState(1)
    
    useEffect(()=>{
        axiosInstance.get('/'+location.state.catType,{params:{
            page:pageNumber
        }}).then((res)=>setMoviesList(()=>res.data.results))

    },[pageNumber])

    function prevPage(){
            
            setPageNumber(()=>{
                if(pageNumber <= 1){
                   return pageNumber
               }
               else{
                return pageNumber -1
               }
            } )
    }
    function nextPage(){
        let counter = pageNumber
        counter ++
        setPageNumber(()=> pageNumber +1 )
}

console.log(pageNumber)
    return (
        <div className="mainMovieContainer">
        <h1>more {location.state.title} Movies</h1>
        <div className="movieContainer">

            {moviesList.map((element, i) => <MovieDetails element={element} key={i} />)}
            
        </div>
        <div style={{display:"flex"}}>
        <button onClick={prevPage}>previous</button><h1>{pageNumber}</h1><button onClick={nextPage}>Next</button>
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