import React, { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Main.css';

const Main = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <main className='main'>
            <Products addToCart={addToCart}></Products>
            <Cart cart={cart}></Cart>
        </main>
    );
};

export default Main;