import React from 'react'
import { theme } from '../theme'

const Button = ({children, style, onClick, variant}) => {

    let type = theme.button
    if(variant !== 'primary') {
        if(variant == 'outlined') {
            type = theme.outlinedButton
        }
        else {
            type = theme.plainButton
        }
    }

    return (
        <button className={type} style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
