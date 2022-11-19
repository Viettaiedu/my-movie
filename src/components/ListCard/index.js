import React, { useEffect, useState , memo, useCallback } from 'react';
import { Autoplay, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import apiConfig from '~/api/apiConfig';
import tmdbClient, { category } from '~/api/tmdbClient';
import ItemCard from '../ItemCard'
import './ListCard.scss'
function ListCard({ cate, type }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
       
            const getListCard = async () => {
                let res = null;
                const params = {
                    params: {
                        api_key: apiConfig.apiKey,
                    },
                };
    
                try {
                    switch (cate) {
                        case category.movie:
                            res = await tmdbClient.getMoviesList(type, params);
                            setItems(res.data.results);
                            break;
                            case category.tv:
                              res = await tmdbClient.getTvList(type, params);
                              setItems(res.data.results);
                              break;
                        default:
                            console.log('Error');
                    }
                } catch (e) {
                    console.log(e);
                }
            };
            getListCard();
           
    
        
    }, [cate ,type ]);
    return (
        <div className="list-card">
            <Swiper
                modules={[Autoplay, Navigation, Scrollbar]}
                slidesPerView={6}
                spaceBetween={50}
                grabCursor={true}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    // when window width is >= 640px
                    200: {
                        width: 414,
                        slidesPerView: 2,
                        spaceBetween:10
                    },
                    // when window width is >= 768px
                    760: {
                        width: 768,
                        slidesPerView: 3,
                        spaceBetween:10
                    },
                    1024 : {
                      slidesPerView: 5,
                        spaceBetween:40
                    }
                }}
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                          <ItemCard  item={item} cate={cate}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default memo(ListCard);
