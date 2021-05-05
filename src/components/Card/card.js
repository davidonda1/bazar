import React from 'react';
import {useState} from "react";
import './card.css'

const Card = (props) => {
    const [basket, setBasket] = useState(1);
    const handleClickAddToBasket = () => {
        // setBasket(basket + 1);
        props.addToBasket(basket, props.fruit)
    }
    return (
        <div className='my_card container shadow  col-4 mt-3 '>
            <div className='row'>
                <img src={props.fruit.img}/>
                <p  className='my_text offset-3'>{props.fruit.text}</p>
            </div>
            <h3  onClick={() => console.log(props.fruit.name)}>{props.fruit.name} {props.fruit.price}$</h3>
            <button className='my_btn mb-1' onClick={() => handleClickAddToBasket()}>Add to basket</button>
        </div>
    );
};

export default Card;