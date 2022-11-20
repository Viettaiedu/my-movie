import React from 'react';

function Input({ keyword, placeholder, text, onChange, onBlur }) {
    return <input onBlur={onBlur} onChange={onChange} type={text} value={keyword} placeholder={placeholder} />;
}

export default Input;
