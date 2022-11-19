

const apiConfig = {
    baseUrl : "https://api.themoviedb.org/3/",
    apiKey:"728ffa592a039ebe2fb020e5f409462b",
    originalImage:(imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image:(imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
}

export default apiConfig;