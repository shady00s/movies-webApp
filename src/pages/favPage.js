import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function FavPage(){

    const [favList , setFavList]= useState([])
    

    const favFromRedux = useSelector((state)=>state.favorites.favoriteMovies)

    useEffect(()=>{
        setFavList(()=> favFromRedux)
    },[])

    console.log(favList)
    return(
        <div>
            <h1>Favorite Movies</h1>
        </div>
    )
}