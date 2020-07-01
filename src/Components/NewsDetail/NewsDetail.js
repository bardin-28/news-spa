import React, { useState, useEffect } from 'react';
import './NewsDetail.css'

const NewsDetail = props => {
    const newsApiUrl = 'http://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=13b2c197966e4ec3b16369e5fc4856b1';
    const requestforNews = new Request(newsApiUrl);
    const [news, setNews] = useState([]);
    useEffect(() => {
        const getNews = async () => {
            const response = await fetch(requestforNews).then(res => res.json()).then((data) => { setNews(data.articles) });
        }
        getNews()
    }, []);

    let currentNews = news.filter((newsItem, index) => {
        if (newsItem.title === props.match.params.name) {
            return newsItem
        }
    })

    const detailNews = () => {
        const newDate = new Date(Date.parse(currentNews[0].publishedAt || null))
        let month = newDate.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        let day = newDate.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        return (
            <div className="d-flex">
                <div className="NewsDetail">
                    <h2>{props.match.params.name}</h2>
                    <p>{props.location.author}</p>
                    <p className="detailDate">  <span> {day} </span>/ {month}</p>
                </div>
                <div className="NewsDetailCaption">
                    <div className="NewsDetailImg"><img src={currentNews[0].urlToImage} alt={props.match.params.name}></img></div>
                    <div>{currentNews[0].content}</div>
                </div>
            </div>
        )
    }
    return (
        <>
            {currentNews.length > 0 ? detailNews() : null}
        </>
    )
}

export default NewsDetail