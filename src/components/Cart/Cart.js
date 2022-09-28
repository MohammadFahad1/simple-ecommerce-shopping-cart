import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = (total * 10) / 100;
    const grandTotal = total + shipping + tax;

    console.log(cart);
    return (
        <aside className='cart'>
            <p>Selected Products: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </aside>
    );
};

export default Cart;