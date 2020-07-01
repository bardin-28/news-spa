import React, { useState, useEffect } from 'react';
import './Header.css'
import { Route, NavLink } from 'react-router-dom';
import Home from '../../Pages/Home/Home.js';
import News from '../../Pages/News/News.js';
import Contacts from '../../Pages/Contacts/Contacts.js'
import NewsDetail from '../NewsDetail/NewsDetail.js'

const Header = props => {
    const newsApiUrl = 'http://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=13b2c197966e4ec3b16369e5fc4856b1';
    const [news, setNews] = useState([]);
    useEffect(() => {
        const getNews = async () => {
            const response = await fetch(newsApiUrl).then(res => res.json()).then((data) => { setNews(data.articles) });
        }
        getNews()
    }, []);
    return (
        <>
            <div className="container">
                <div className="hat d-flex">
                    <div><h2>Новостник</h2></div>
                    <nav>
                        <ul className="d-flex">
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                >
                                    Главная
                            </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/news"
                                    exact
                                >
                                    Новости
                            </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contacts"
                                    exact
                                >
                                    Контакты
                            </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="container">
                <Route exact path="/" render={() => news.length > 0 ? <Home news={news} /> : null} />
                <Route exact path="/news" render={() => <News news={news} />} />
                <Route exact path="/news/:name" component={NewsDetail} />
                <Route exact path="/contacts" component={Contacts} />
            </div>

        </>
    )

}

export default Header;