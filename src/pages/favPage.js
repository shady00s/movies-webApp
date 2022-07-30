import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieDetails from '../components/movieCard/movieCard';
export default function FavPage() {

    const [favList, setFavList] = useState([])


    const favFromRedux = useSelector((state) => state.favorites.favoriteMovies)

    useEffect(() => {
        setFavList(() => favFromRedux)
    }, [])

    console.log(favList)
    return (

        <div>
            <h1>Favorite Movies</h1>
            {favList.length === 0 ? <div> No favorites </div> :<div style={{display:"flex",flexWrap:"wrap"}}> {favFromRedux.map(element=><MovieDetails key={element.id} element={element}/>)}</div> }

        </div>
    )
}