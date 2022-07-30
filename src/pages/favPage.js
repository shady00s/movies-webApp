import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieDetails from '../components/movieCard/movieCard';
export default function FavPage() {

    const favFromRedux = useSelector((state) => state.favorites.favoriteMovies)
    return (

        <div>
            <h1>Favorite Movies</h1>
            {favFromRedux.length === 0 ? <div> No favorites </div> :<div style={{display:"flex",flexWrap:"wrap"}}> {favFromRedux.map(element=><MovieDetails key={element.element.id} element={element.element}/>)}</div> }

        </div>
    )
}