import { Navigate, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from "react"

import Section from "generalComponents/Section"
import MovieNavPanel from "./MovieNavPanel"

const Home = lazy(()=>import("./pages/Home"));
const Movies = lazy(()=>import("./pages/Movies"));
const MovieDetails = lazy(()=>import("./pages/MovieDetails"));
const Reviews = lazy(()=>import("./pages/components/Reviews"));
const Cast = lazy(()=>import("./pages/components/Cast"));

export default function App() {
    
    return (
    <Section type="task" title="">
        <MovieNavPanel/>
        <Suspense fallback={<></>}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:movieID/" element={<MovieDetails/>}>
                <Route path="cast" element={<Cast/>}/>
                <Route path="reviews" element={<Reviews/>}/>
            </Route>
            <Route path="/*" element={<Navigate to="./" replace/>}/>   {/* Redirect to <Home /> */}
        </Routes>
        </Suspense>
    </Section>
)}
