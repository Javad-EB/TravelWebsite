import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Styles = ['btn--primary', 'btn--outline', 'btn--special', 'btn--search', 'btn--tour', '.btn--search--place']
const Sizes = ['btn--medium', 'btn--large']
function Button(props) {
    const { to, children, btnStyle, btnSize } = props
    const ButtonStyle = Styles.includes(btnStyle) ? btnStyle : Styles[0]
    const ButtonSize = Sizes.includes(btnSize) ? btnSize : Sizes[0]
    return (
        <Link to={to} className='btn-mobile'>
            <button
                className={`btn ${ButtonStyle} ${ButtonSize}`}
                >
                {children}
            </button>
        </Link>
    )
}

export default Button