import React from 'react';
import './NewsItem.css'
import { withRouter } from 'react-router-dom'

const NewsItem = props => {
    const newDate = new Date(Date.parse(props.date))
    let month = newDate.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = newDate.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    return (
        <a target="_blank" className="newsItem" onClick={() => {
            props.history.push(props.date)
            props.history.push(props.url)
            props.history.push('/news/' + props.title)

        }}>
            <div className="newsTitle">
                <h2>{props.title}</h2>
            </div>
            <div className="d-flex newsCaption">
                <p>{props.source}</p>
                <div className="newsDate">
                    <p>{day} <span> / {month}</span> </p>
                </div>
            </div>

        </a>
    )
}
export default withRouter(NewsItem)