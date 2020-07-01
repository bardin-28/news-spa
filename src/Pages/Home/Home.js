import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './Home.css'
import News from '../../Pages/News/News.js';
import NewsItem from '../../Components/NewsItem/NewsItem.js'
import { withRouter } from 'react-router-dom'

const Home = props => {
    const newsArr = props.news;
    const news = newsArr && newsArr.filter((newsItem, index) => index < 6).map((newsItem, index) => (
        <NewsItem
            key={index}
            link={newsItem.url}
            title={newsItem.title}
            source={newsItem.source.name}
            date={newsItem.publishedAt}
            onClick={() => {
                props.history.push('/news/' + newsItem.title)
            }}
        />
    ))

    return (
        <div className="homePage">
            <h1>Всегда <br /> свежие <span>новости</span></h1>
            <div className="homeNewsWrapper">
                {news}
                <div className="getNews">
                    <NavLink
                        to="/news"
                        exact
                    >Быть в курсе событий
                </NavLink>
                    <Route exact path="/news" component={News} />
                </div>
            </div>
        </div>
    )

}

export default withRouter(Home);