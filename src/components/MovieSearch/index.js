import React, { useEffect, useState } from 'react';
import Input from '../Input';
import './MovieSearch.scss';
import { FcSearch } from 'react-icons/fc';
import { TbArrowBackUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

function MovieSearch({ defaultKey, cate }) {
    const [keyword, setKeyword] = useState(defaultKey ? defaultKey : '');
    const navigate = useNavigate();
    const movieSearch = document.querySelector('.movie-search');
    const searchInput = document.querySelector('.movie-search input');
    const searchButton = document.querySelector('.movie-search button');
    const backBtn = document.querySelector('.back-btn');
    const handleInput = () => {
        movieSearch.style.width = '400px';
        searchInput.style.width = '88%';
        searchButton.style.width = '12%';

        if (searchInput && searchInput.value) {
            goToSearch();
        } else {
            searchInput.focus();
        }
    };
    const handleBlur = (e) => {
        if (e.target.value.trim() === '' || null) {
            movieSearch.style.width = '50px';
            searchInput.style.display = 'initial';
            searchButton.style.width = 'initial';
        }
    };

    const handleScrollSearch = () => {
        if (window.scrollY > 153) {
            if (movieSearch) {
                Object.assign(movieSearch.style, {
                    position: 'fixed',
                    left: '50%',
                    top: '50px',
                    transform: 'translateX(-50%)',
                });
            }
            if (backBtn) {
                Object.assign(backBtn.style, {
                    position: 'fixed',
                    top: '130px',
                });
            }
        } else {
            if (movieSearch) {
                Object.assign(movieSearch.style, {
                    position: 'relative',
                    left: 'unset',
                    top: 'unset',
                    transform: 'translateX(0)',
                });
            }
            if (backBtn) {
                Object.assign(backBtn.style, {
                    position: 'relative',
                    top: '45px',
                });
            }
        }
    };
    window.addEventListener('scroll', handleScrollSearch);
    const goToSearch = () => {
        let link = `/${cate}/search/${keyword}`;
        if (keyword.trim().length > 0) {
            navigate(link);
            if (searchInput) {
                searchInput.value = '';
            }
        }
    };

    useEffect(() => {
        const enter = (e) => {
            if (searchInput && e.target === searchInput && e.code === 'Enter') {
                goToSearch();
            }
        };
        document.addEventListener('keyup', enter);
        return () => {
            document.removeEventListener('keyup', enter);
        };
    }, [keyword, cate]);
    const handleBackPage = () => {
        navigate(`/${cate}`);
    };
    return (
        <>
            {defaultKey && (
                <button className="back-btn" onClick={handleBackPage}>
                    <TbArrowBackUp className="go-back" />
                </button>
            )}
            <div className="movie-search">
                <>
                    <Input
                        onBlur={handleBlur}
                        onChange={(e) => setKeyword(e.target.value)}
                        text="text"
                        placeholder="Search here..."
                        value={keyword || ''}
                    />
                </>
                <button onClick={handleInput}>
                    <FcSearch />
                </button>
            </div>
        </>
    );
}

export default MovieSearch;

// position: fixed;
// left :50%;
//top: 50px;
//     transform: translateX(-50%);
