import React from 'react';

type props = {
    text: string
    type?: any
    value?: string
}

const Button = ({ text, type, value }: props) => {
  return (
    <button className="button-swipe" type={type} value={value}>
        {text}
    </button>
  )
};

export default Button;