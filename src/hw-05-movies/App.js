import { Navigate, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
// import MovieDetails from "./components/MovieDetails"
import Movies from "./components/Movies"

export default function App() {
    
    return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>

        <Route path="/*" element={<Navigate to="./" replace/>}/>   {/* Redirect to <Home /> */}
    </Routes>
)}
