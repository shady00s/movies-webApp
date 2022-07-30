import { useEffect, useState } from "react"
import MovieDetails from "../components/movieCard/movieCard";
import { NavBarComponent } from "../components/navbar"
import axiosInstance from './../axios/inestance';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './pagesStyle.css'
import FavPage from './favPage';
import MoreMoviesPage from './moreMoviesPage';
import { useSelector } from "react-redux";
import Loading from './../components/loading';
export default function HomePage() {
   
    return (<>
        <BrowserRouter>
        <NavBarComponent />
            <Routes>
                <Route exact path="/" element={<HomePageMovies />} />
                <Route exact path="/favorites" element={<FavPage />} />
                <Route exact path="/more" element={<MoreMoviesPage />} />
            </Routes>
        </BrowserRouter>
    </>)
}


function HomePageMovies() {
    const loader = useSelector((state)=>state.loading.isLoading)
    const favorites = useSelector((state)=>state.loading.favoriteMovies)
    

    return (
        <>
                {loader && <Loading/>}
            <PopularMoviesContainer />
            <TopRatedMoviesContainer/>
        </>
    )
}

function PopularMoviesContainer() {
    const [popMovies, setPopMovies] = useState([])

    useEffect(() => {
        axiosInstance.get('/popular').then((res) => setPopMovies(() => res.data.results)).catch(e => console.log(e))
    }, [])


    return (
        <div className="mainMovieContainer">
            <h1>Popular Movies</h1>
            <div className="movieContainer">

                {popMovies.map((element, i) => <MovieDetails element={element} key={i} />)}
                <Link to={{
                    pathname: "/more",
                }}
                state={{catType:"popular",title:"Popular"}}
                 > More popular movies</Link>
            </div>

        </div>

    )
}

function TopRatedMoviesContainer() {
    const [popMovies, setPopMovies] = useState([])
   
    useEffect(() => {
        axiosInstance.get('/top_rated').then((res) => setPopMovies(() => res.data.results)).catch(e => console.log(e))
    }, [])

   
    return (
        <div className="mainMovieContainer">
            <h1>Top Rated Movies</h1>
            <div className="movieContainer">

                {popMovies.map((element, i) => <MovieDetails element={element} key={i} />)}
                <Link to={{
                    pathname: "/more",
                }}
                state={{catType:"top_rated",title:"Top rated"}}
                 > More Top rated movies</Link>
            </div>

        </div>

    )
}