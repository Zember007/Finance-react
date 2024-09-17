import React from 'react';

const Button = ({action, title}:{action:any;title: string}) => {
    return (
        <button className='finances__btn' onClick={() => { action(true) }}>{title}</button>
    );
};

export default Button;