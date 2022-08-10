import React, { useState, useEffect } from 'react';
import { getNews } from '../services/getNews';
import moment from 'moment';
import Navbar from './Navbar';
import Footer from './Footer';
import alanBtn from '@alan-ai/alan-sdk-web';



export default function NewsData() {
    const ALAN_KEY =`960b2165ba50f1284b7b232de95c3a892e956eca572e1d8b807a3e2338fdd0dc/stage`
    const [categorySelected, setCategorySelected] = useState('');
    const [newsData, setNewsData] = useState([])
    const getAllNews = async () => {
        let data = await getNews(categorySelected);
        setNewsData(data.data?.articles)

    }

    


    const selectCategory = (event) =>{
        const category = (event.target.value);
        setCategorySelected(category);

    }
    useEffect(() => {
        alanBtn({
            key: ALAN_KEY,
            onCommand: (commandData) => {
              setCategorySelected(commandData.data);
            }
        });
      },[])



    useEffect(() => {
        getAllNews();


    }, [categorySelected])


    return (
        <>
            <Navbar selectCategory={selectCategory}/>

            <div className='main'>
                <h1>TOP {categorySelected.toUpperCase()} HEADLINES</h1>


                <div className='grid-main'>
                    {newsData?.map((news , index) => {
                        
                        return (
                            
                            <div className='grid-child' key={index}>

                                <img className='news-image'
                                    src={news?.urlToImage } alt='Images'/>

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

            <Footer />


        </>


    )
}

