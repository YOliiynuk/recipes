import React from 'react';
import './style.css';

const MainItem  = (props) => {
    return (
        <div className={'MainItem'}>
        <h6>{props.user.name}</h6>
            <img src={props.user.image} alt="image"/>
            <p>{props.user.description}</p>
        </div>
    );
};

export default MainItem;
        