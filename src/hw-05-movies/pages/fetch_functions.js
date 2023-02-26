function actually_send_get_request(RelativeURL){
    let querySymbol='?'
    if (RelativeURL.indexOf('?')!==-1) querySymbol='&'

    const fullURL=baseURL()+RelativeURL+querySymbol+'api_key='+api_key();

    return new Promise((resolve,reject)=>{
        fetch(fullURL).then(response=>{
            console.log(response);
            if (response.ok) response.json().then(jsonres=>{
                console.log(jsonres);
                resolve(jsonres)
            });
            else reject(null);
        }).catch(err=> reject(null))
    })
}

export function getTrending(){
    const url=`/trending/movie/week`
    return actually_send_get_request(url);
};

export function getSearchMovies(filter,page=1){
    const url=`/search/movie?query=${filter}&page=${page}`
    return actually_send_get_request(url);
}

export function getMovieDetails(movieID){
    const url=`/movie/${movieID}?language=en-US`
    return actually_send_get_request(url);

}

export function getMovieCredits(movieID){
    const url=`/movie/${movieID}/credits?language=en-US`
    return actually_send_get_request(url);

}

export function getMovieReviews(movieID){
    const url=`/movie/${movieID}/reviews?language=en-US`
    return actually_send_get_request(url);

}



function baseURL(){return 'https://api.themoviedb.org/3'}
function api_key(){return '08afc14184aa63504b5201f5497d7cf1'}