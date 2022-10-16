const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
  //  apiKey: '71ac15ffe22bdfacf02df1a3a2a23146',
    apiKey: process.env.REACT_APP_API2,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;