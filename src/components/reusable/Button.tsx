import React from 'react';

type props = {
    text: string
    type?: any
    value?: string
    className?: string
}

const Button = ({ text, type, value, className }: props) => {
  return (
    <button className={`button-swipe ${className}`} type={type} value={value}>
        {text}
    </button>
  )
};

export default Button;