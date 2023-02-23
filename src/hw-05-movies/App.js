import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import Movies from "./components/Movies"

export default function App() {
    const hw5path='/hw-05-movies';
    const location=useLocation();

    function Logloc({location}){
        console.log(location);
        return <></>
    }
    Logloc({location});

    return (  
    <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieID/*" element={<MovieDetails/>}/>
        {/* <Route path="/*" element={<Navigate to={hw5path}/>}/> */}
        <Route path="/*" element={<Link to="/">Link</Link>}/>
    </Routes>)
}
