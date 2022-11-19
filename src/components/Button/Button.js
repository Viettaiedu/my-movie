import classNames from 'classnames/bind'
import styles from './Button.scss'
import React from 'react'

const cx = classNames.bind(styles);
function Button({children ,primary , outline , viewmore , onClick}) {
    const myClass = cx("btn", {
        primary,
        outline,
        viewmore
    })
  return (
    <button onClick={onClick} className={myClass}>{children}</button>
  )
}

export default Button