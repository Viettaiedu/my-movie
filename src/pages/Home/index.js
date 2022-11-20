import classNames from 'classnames';
import styles from './Home.scss';
import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import apiConfig from '../../api/apiConfig';
import tmdbClient, { movieType, category, tvType } from '../../api/tmdbClient';
import HeroItem from '~/components/HeroItem/HeroItem';
import Button from '~/components/Button/Button';
import ListMoviesCard from '~/components/ListCard';
import Modal from '../../components/Modal';

const cx = classNames.bind(styles);
function Home() {
    const [movies, setMovies] = useState([]);
    SwiperCore.use([Autoplay]);
    useEffect(() => {
        const getMovies = async () => {
            const params = {
                params: {
                    api_key: apiConfig.apiKey,
                },
            };
            try {
                const res = await tmdbClient.getMoviesList(movieType.popular, params);
                const results = res.data.results;
                setMovies(results);
            } catch (e) {}
        };
        getMovies();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('home')}>
                <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    autoplay={{ delay: 3000 }}
                >
                    {movies.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => <HeroItem item={item} className={isActive ? 'active' : ''} />}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

           
                       
                             {movies.map((item, i) => (
                <Modal key={i} item={item} isActive={false} id={`modal-${item.id}`} />
            ))}
                       
            <>
                <div className="home__list">
                    <h3 className="home__list__title">Trending Movies</h3>
                </div>
                <ListMoviesCard cate={category.movie} type={movieType.popular} />
            </>

            <>
                <div className="home__list">
                    <h3 className="home__list__title">Top rated Movies</h3>
                </div>
                <ListMoviesCard cate={category.movie} type={movieType.top_rated} />
            </>

            <>
                <div className="home__list">
                    <h3 className="home__list__title">Upcoming Movies</h3>
                </div>
                <ListMoviesCard cate={category.movie} type={movieType.upcoming} />
            </>

            <>
                <div className="home__list">
                    <h3 className="home__list__title">TV popular</h3>
                </div>
                <ListMoviesCard cate={category.tv} type={tvType.popular} />
            </>
            <>
                <div className="home__list">
                    <h3 className="home__list__title">TV on the air</h3>
                </div>
                <ListMoviesCard cate={category.tv} type={tvType.on_the_air} />
            </>
        </div>
    );
}

export default Home;
