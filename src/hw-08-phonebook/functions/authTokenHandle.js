export const getAuthToken=()=>{
    return localStorage.getItem('authToken');
}

export const setAuthToken = (token)=>{
    localStorage.setItem('authToken',token);
}