import classNames from 'classnames/bind';
import styles from './Header.scss';
import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const headerItems = [
    { display: 'Home', path: '/' },
    { display: 'Movie', path: '/movie' },
    { display: 'TV Series', path: '/tv' },
];
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <Link to="/">
                        <img className={cx('header-left__img')} src={logo} alt="Netfix" />
                    </Link>
                    <Link to="/" className={cx('header-left__title')}>
                        TMovies
                    </Link>
                </div>
                <div className={cx('header-right')}>
                    <ul className={cx('header-right__list')}>
                        {headerItems.map((item, i) => (
                            <Link key={i} to={item.path} className={cx('header-right__list__link')}>
                                {item.display}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
