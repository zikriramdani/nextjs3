const apiUrl = process.env.API_URL === 'development' 
    ? 'http://localhost:3000/api' // development api
    : 'http://localhost:3000/api'; // production api

export {
    apiUrl
};