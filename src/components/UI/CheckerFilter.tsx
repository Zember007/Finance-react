import React from 'react';

interface InputProps {
    active: boolean;
    title: string;
    change: any;
}

const CheckerFilter = (props: InputProps) => {
    return (
        <div className={props.active ? 'checker_box active' : 'checker_box'}>
            <button onClick={() => props.change(false)}><img src="/images/icons/close.svg" alt="close" /></button>
            <div className='checker' onClick={() => props.change(true)}>
                {props.title}</div>
        </div>
    );
};

export default CheckerFilter;