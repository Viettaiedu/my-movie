import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '~/api/apiConfig';
import tmdbClient, { category, tvType, movieType } from '~/api/tmdbClient';
import ItemCard from '../ItemCard';
import './MovieGrid.scss';
import MovieSearch from '~/components/MovieSearch'
let totalPage = 0;
function MovieGrid({ cate }) {
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    let options = {
        params: {
            api_key: apiConfig.apiKey,
            page: page,
        },
    };
  
    const { keyword } = useParams();
    useEffect(() => {
        const getMovie = async () => {
            let res;
            try {
                if (keyword === undefined) {
                    switch (cate) {
                        case category.movie:
                            res = await tmdbClient.getMoviesList(movieType.upcoming, options);
                            setItem(res.data.results);
                            totalPage = res.data.total_pages;
                            break;
                        case category.tv:
                            res = await tmdbClient.getTvList(tvType.on_the_air, options);
                            setItem(res.data.results);
                            totalPage = res.data.total_pages;
                            break;
                        default:
                    }
                }else{
                    options = {
                        params: {
                            api_key: apiConfig.apiKey,
                            page: page,
                            query : keyword,
                        },
                    };
                    res = await tmdbClient.search(cate,options);
                    console.log("grid Ok")
                    setItem(res.data.results);
                }
            } catch (e) {
                console.log('error');
            }
        };
        getMovie();
    }, [cate,keyword]);

    const handleMorePage = useCallback(() => {
        options = {
            params: {
                api_key: apiConfig.apiKey,
                page: page + 1,
            }
        }
        const getMovie = async () => {
            let res;
            try {
                if (keyword === undefined) {
                    switch (cate) {
                        case category.movie:
                            res = await tmdbClient.getMoviesList(movieType.upcoming, options);
                            setItem([...item,...res.data.results]);
                            break;
                        case category.tv:
                            res = await tmdbClient.getTvList(tvType.on_the_air, options);
                            setItem([...item,...res.data.results]);
                            break;
                        default:
                    }
                }
            } catch (e) {
                console.log('error');
            }
        };
        getMovie();
        setPage(page + 1);
    }, [page]);
    return (    
        <>
        <>
            <MovieSearch cate={cate} defaultKey={keyword}/>
        </>
        <div className="movie-grid">
            {item.map((item, i) => (
                <ItemCard className={'movie-grid__card'} key={i} item={item} cate={cate} />
            ))}
            {page < totalPage ? (
                <button onClick={handleMorePage} className="movie-grid__more">
                    More
                </button>
            ) : (
                ''
            )}
        </div>
        </>
    );
}

export default MovieGrid;
