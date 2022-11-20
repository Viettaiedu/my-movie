import React from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import './Footer.scss'
function Footer() {
    return (
        <div className="footer">
            <h3 className="footer__heading">TMovies</h3>
            <div className="footer__content">
                <ul className="footer__item">
                    <Link className='footer__link' to={config.routes.home}>Home</Link>
                    <Link className='footer__link'>Contact us</Link>
                    <Link className='footer__link'>Term of services</Link>
                    <Link className='footer__link'>About us</Link>
                </ul>
                <ul className="footer__item">
                    <Link className='footer__link'>Live</Link>
                    <Link className='footer__link'>FAQ</Link>
                    <Link className='footer__link'>Premium</Link>
                    <Link className='footer__link'>Pravacy policy</Link>
                </ul>
                <ul className="footer__item">
                    <Link className='footer__link'>You must watch</Link>
                    <Link className='footer__link'>Recent release</Link>
                    <Link className='footer__link'>Top IMDB</Link>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
