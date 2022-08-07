import React, { useState, useEffect } from 'react';
import { getNews } from '../services/getNews';
import moment from 'moment';
import Navbar from './Navbar';
import Footer from './Footer';


export default function NewsData() {
    const[selectedCategory , setSelectedCategory] = useState('');
    const [newsData, setNewsData] = useState([])
    const getAllNews = async () => {
        let data = await getNews();
        setNewsData(data.data?.articles)
        
    }
    
    

    
    useEffect(() => {
        getAllNews(selectedCategory);
        setSelectedCategory(selectedCategory)
    }, [selectedCategory])

    // console.log(newsData?.data?.articles); 

    return (
        <>
            <Navbar />
            <div className='main'>
                <h1>Top headlines</h1>


                <div className='grid-main'>
                    {newsData?.map((news) => {
                        return (
                            <div className='grid-child'>

                                <img classname='news-image'
                                    src={news?.urlToImage} />

                                <p className='news-title'>{news?.title}</p>
                                <p className='news-content'>{news?.content}</p>
                                <div className='name-date'>
                                    <p className='news-author'>Author: {news?.author ? news?.author : 'Unknown'}</p>
                                    <p className='news-date'>Date: {moment(news?.publishedAt).format('LL')}</p>
                                </div>
                                <a href={news?.url} target="blank">Read More...</a>

                            </div>
                        )
                    })}
                </div>
            </div>

            <Footer/>


        </>


    )
}

