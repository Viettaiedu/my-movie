import React, { useEffect, useState , useRef } from 'react';

import './Modal.scss';
function Modal({ isActive, id  , item}) {
    const [active, setActive] = useState(false);
    const ifRef = useRef(null)

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);
    return (
        <div className={`modal ${active ? "active" : ""}`} id={id}>
            <div className='modal__content'>
            <iframe  ref={ifRef} style={{width:"100%", height:"100%"}} className='modal__content__iframe' src="" title=""></iframe>
            </div>
        </div>
    );
}

export default Modal;
