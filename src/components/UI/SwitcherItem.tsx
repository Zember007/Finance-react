import React from 'react';

interface InputProps {
    data: string;
    active: string;
    title: string;
    change: any;
}

const SwitcherItem = (props: InputProps) => {
    return (
        <button onClick={() => props.change(props.data)} className={props.active == props.data?"switcher-item active":"switcher-item"}>{props.title}</button>
    );
};

export default SwitcherItem;