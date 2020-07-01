import React from 'react';
import { withRouter } from 'react-router-dom'
import './News.css'
import NewsItem from '../../Components/NewsItem/NewsItem.js'

const News = props => {
    const newsArr = props.news;
    const news = newsArr && newsArr.filter((newsItem, index) => index < 11).map((newsItem, index) => (
        <NewsItem
            key={index}
            link={newsItem.url}
            title={newsItem.title}
            source={newsItem.source.name}
            date={newsItem.publishedAt}
        />
    ))
    return (
        <div className="newsPage">
            <h1>Быть <br /> в курсе <span>событий</span></h1>
            <div className="newsWrapper">
                {news}
            </div>
        </div>
    )

}

export default withRouter(News);