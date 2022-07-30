import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar ,faHeart} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import store from './../../redux/store';
import { FavoriteAction } from './../../redux/actions/favoriteAction';
import { useSelector } from 'react-redux';
export default function MovieDetails(params) {
    let pastList = useSelector((state)=>state.favorites.favoriteMovies)
    let favList = []
    const [fav,setFav]=useState(false)
    function FavoritesBtn(){
        setFav(!fav)
            console.log(pastList)
            favList = [...pastList,params]
        
        store.dispatch(FavoriteAction(favList))
    }
    return <>
        <div className="movieCardContainer bg-white">
            <div className='favContainer'><FontAwesomeIcon onClick={e=>FavoritesBtn()} className='icon' icon={faHeart} style={{color:fav ===true?'red':'grey' }} /></div>
            <img src={"https://image.tmdb.org/t/p/w500/"+ params.element.poster_path} style={{width:"80%" ,margin:'auto'}}  alt="" />
            <span>
                <strong>{params.element.original_title}</strong>
            </span>
          

            <div className='rating'>
                <FontAwesomeIcon color='rgb(255,215,0)' icon={faStar} />
                <span>{params.element.vote_average}</span>
            </div>
             <span>Release Date:{params.element.release_date}</span> 
            <button className='btn m-auto btn-primary'>More Details</button>
        </div>
    </>
}