import React from 'react';
const BasketCard = ({item}) => {

    const countDiscount = () => {
        if (item.discount) {
            return item.price * item.quantity - item.discount
        } else {
            return item.price * item.quantity
        }
    }

    return (
        <>
            <h5>{item.name} {item.quantity} items = {countDiscount()}$</h5>
            <img alt='fruits' src={item.img}/>

        </>
    );
};

export default BasketCard;