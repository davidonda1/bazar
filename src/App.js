import React from 'react';
import {FaShoppingBasket, AiFillLinkedin, AiOutlineMail} from "react-icons/all";
import './App.css';
import {email, fruits, linkedIn} from "./utils/constants";
import Card from "./components/Card/card";
import {useState} from "react";
import BasketCard from "./components/BasketCard/BasketCard";

const App = () => {
    const [basket, setBasket] = useState({value: 0, items: []})
    const [edit, setEdit] = useState(true)

    const addToBasket = (value, item) => {
        const items = [...basket.items];
        if (!basket.items.includes(item)) {
            item.quantity = 1;
            items.push(item)
        } else {
            item.quantity++;
            const indexOfPapaya = items.indexOf(item)
            if (item.name === 'Papaya') saleChecker(indexOfPapaya)
        }
        setBasket({...basket, value: basket.value + value, items})
    }
    const saleChecker = (indexOfPapaya) => {
        if (basket.items[indexOfPapaya].quantity % 3 === 0) {
            const items = [...basket.items];
            if (!items[indexOfPapaya].discount) {
                items[indexOfPapaya].discount = 5;
            } else {
                items[indexOfPapaya].discount += 5;
            }
            setBasket({...basket, items})
        }
    }
    const totalPrice = () => {
        if (basket.items.length) {
            let price = 0;
            basket.items.forEach(item => {
                item.discount ?
                    price += item.price * item.quantity - item.discount
                    : price += item.price * item.quantity
            })
            return price
        }
    }
    const renderNorm = () => {
        return (<div>
            <div className='my_header container-fluid'>
                <div className='row'>
                    <h2 className='offset-3'>Bazar</h2>
                    <p onClick={() => setEdit(false)} className='my_basket offset-4 mt-1'><FaShoppingBasket
                        size='2rem'/> : {basket.value} </p>
                </div>
            </div>
            <div className='my_main'>{fruits.map((item, index) => {
                return (
                    <Card key={index} index={index} fruit={item} addToBasket={addToBasket}/>
                );
            })}
            </div>
            <div className='my_footer modal-footer'>
                <p><AiFillLinkedin size='2rem'/><a className='linkedin' target='_blank' rel='noreferrer'
                                                   href={linkedIn}>{linkedIn}</a><AiOutlineMail size='2rem'/>{email}</p>
                <p>Created by David Miasnikov</p>
            </div>
        </div>);
    }
    const renderEdit = () => {
        const renderNorm = () => {
            return (
                <>
                    {basket.items.map(item => <BasketCard key={item.img} item={item}/>)}
                    <h3 className='my_total'>Total price: {JSON.stringify(totalPrice())}$</h3>
                </>
            )
        }
        return (<div>
            <div className='my_header container-fluid'>
                <div className='row'>
                    <h2 className='offset-3'>Bazar</h2>
                </div>
            </div>
            <div className='my_main  container-fluid '>
                <h3>Shopping cart</h3>
                {basket.items.length ? renderNorm() :
                    <h1 className='badge-warning'>You have not selected anything click on the button below to go back to
                        shopping</h1>}

                <div>
                    <button className='my_btn mt-2' onClick={() => setEdit(true)}>Back to shop</button>
                </div>
            </div>
            <div className='my_footer modal-footer'>
                <p>Created by David Miasnikov</p>
            </div>
        </div>);
    }
    return (
        edit ? renderNorm() : renderEdit()
    );
}

export default App;

