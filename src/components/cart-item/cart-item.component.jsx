import './cart-item.styles.scss'

import React from 'react'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span>{name}</span>
                 <span className="price">{quantity} X $ {price}</span>
            </div>
        </div>
    )
}

export default CartItem
