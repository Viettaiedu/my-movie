import classNames from 'classnames'
import styles from './HeroItem.scss'
import React from 'react'

import apiConfig from '~/api/apiConfig';
import Button from '../Button/Button';
import tmdbClient , {category} from '~/api/tmdbClient';
const cx = classNames.bind(styles);
function HeroItem({item , className}) {
    const classNames = cx('hero' , {
        active : className
    })
        const background = apiConfig.originalImage(item.backdrop_path || item.poster_path )

        const setModalActive = async () => {
               const params = {
                   params : {
                       api_key : apiConfig.apiKey
                   }
               }
            
            const res = await tmdbClient.getVideos(category.movie , item.id ,params);
            const modal = document.querySelector(`#modal-${item.id}`);
            console.log(modal)
           const video =  res.data.results[0];
           if(res.data.results.length > 0 ) {
               const videoSrc = `https://www.youtube.com/embed/${video.key}`
               let iframe = document.querySelector('.modal__content__iframe');
               iframe.setAttribute('src',videoSrc);
           }
           modal.classList.toggle('active');
        }
  return (
    <div className={classNames}>
            <div className='hero__background' style={{backgroundImage:`url(${background })`}}>
            </div>
            <div className='hero__content'>
                    <div className='hero__content__info'>
                        <h3 className='hero__content__info__title hero--show'>
                                {item.title || item.name}
                        </h3>
                        <p className='hero__content__info__dsription  hero--show'>
                            {item.overview}
                        </p>
                        <div className='btns'>
                            <Button primary>Watch now</Button>
                            <Button outline onClick={setModalActive} >Trailer</Button>
                        </div>
                    </div>
                    <div className='hero__content__img hero-show--img'>
                        <img src={apiConfig.w500Image(item.poster_path )} alt={item.title || item.name} />
                    </div>
            </div>

            
    </div>
  )
}

export default HeroItem