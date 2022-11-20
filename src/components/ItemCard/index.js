import React from 'react';
import {useNavigate} from 'react-router-dom'
import { AiFillYoutube } from 'react-icons/ai';
import apiConfig from '~/api/apiConfig';
function ItemCard({ item , cate ,className}) {
    const navigate = useNavigate();
    const bgFake = "my-movie/static/media/fake-img.6183707c5c155d57c3f5.webp";
    return (
        <div className={`movie-card ${className}`} onClick={() => navigate(`/${cate}/${item.id}`)} >
            <div className={`list-card__item ${className}__item`}>
                <img
                    className={`list-card__item__img ${className}__img`}
                    style={{ width: '100%', height: '100%' }}
                    src={apiConfig.w500Image(item.poster_path || item.backdrop_path || bgFake)}
                />
                <div className="list-card__item__icon">
                    <AiFillYoutube />
                </div>
            </div>
            <h3 className="list-card__title">{item.title || item.name}</h3>
        </div>
    );
}

export default ItemCard;
