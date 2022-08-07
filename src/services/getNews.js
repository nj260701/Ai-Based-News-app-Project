import axios from 'axios';

export function getNews(category) {
    const API_KEY = 'cb4f148df9a141b79469daa37a25a820'
    const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=in`
    
    const selectCategory = category;
    console.log(selectCategory);

    
    // https://newsapi.org/v2/top-headlines/sources?category=${selectedCategory}apiKey=API_KEY



    return axios.get(`${API_Endpoint}&apiKey=${API_KEY}`)
        
}
