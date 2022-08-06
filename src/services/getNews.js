import axios from 'axios';

export function getNews() {
    const API_KEY = 'cb4f148df9a141b79469daa37a25a820'
    const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=in`

    return axios.get(`${API_Endpoint}&apiKey=${API_KEY}`)
        
}
