import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderPage from '~/components/HeaderPage';
import MovieGrid from '~/components/MovieGrid';
import './Catalog.scss'
function Catalog() {
    const { category } = useParams();
    return (
        <>
            <HeaderPage> 
            <h3 className='header-page__heading'>
            {category === 'movie' ? 'Movie' : 'Tvseries'}
            </h3></HeaderPage>

            <div className='catalog'>
                  <MovieGrid cate={category}/>
            </div>
        </>
    );
}

export default Catalog;
