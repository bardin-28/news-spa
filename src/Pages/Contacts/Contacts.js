import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
        <div className="contactsPage">
            <div className="contactsTitle">
                <div className="contactsAutor">
                    <h1>+380 99 36 91 888</h1>
                    <h2>Владислав <br />Бардин</h2>
                    <p>Bardin-28@yandex.ua</p>
                </div>
                <div className="contactsCaption">
                    <h4>Front-end разработчик</h4>
                    <p>
                        ES5, ES6, React
                    </p>
                </div>
            </div>
            <div className="contactsImgWrapper">
                <div className="contactsImg">
                    <img src={require('./author.jpg')} alt="author"></img>
                </div>
            </div>

        </div>
    )

}

export default Contacts;