import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footerTitle">
                    <h3>Новостник</h3>
                    <p>Single Page Application</p>
                </div>
                <div>
                    Дипломный проект
                </div>
                <div className="footerAutor">
                    <p>Made by</p>
                    <h3>Vladyslav Bardin</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer