import React from 'react'
import { ButtonPropsType } from './button.types'

const Button: React.FC<ButtonPropsType> = (
    {
        handler,
        text,
        type = 'button',
        className
    }
) => {
    return (
        <button
            type={type}
            onClick={handler}
            className={`
                ${className}
                btn              
            `}
        >
            {text}
        </button>
    )
}

export default Button