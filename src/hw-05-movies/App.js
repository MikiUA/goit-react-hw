import Section from "generalComponents/Section"
import { Navigate, Route, Routes} from "react-router-dom"
import Cast from "./components/Cast"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import Movies from "./components/Movies"
import Reviews from "./components/Reviews"
import MovieNavPanel from "./MovieNavPanel"

export default function App() {
    
    return (
    <Section type="task" title="">
        <MovieNavPanel/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:movieID" element={<MovieDetails/>}>
                <Route path="./cast" element={<Cast/>}/>
                <Route path="./reviews" element={<Reviews/>}/>
            </Route>
            <Route path="/*" element={<Navigate to="./" replace/>}/>   {/* Redirect to <Home /> */}
        </Routes>
    </Section>
)}
