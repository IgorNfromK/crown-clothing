import './checkout.styles.scss'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import React from 'react'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

const CheckoutPage = ({cartItems, total}) =>  (
        <div className='checkout-page'>
           <div className="checkout-header">
               <div className='header-block'>
                    <span>Product</span>
               </div>
               <div className='header-block'>
                    <span>Description</span>
               </div>
               <div className='header-block'>
                    <span>quantity</span>
               </div>
               <div className='header-block'>
                    <span>Price</span>
               </div>
               <div className='header-block'>
                    <span>Remove</span>
               </div>
           </div>
           {
               cartItems.map(cartItem=><CheckoutItem key={cartItems.id} cartItem={cartItem}/>)
           }
           <div className="total">
               <span>TOTAL: ${total}</span>
             
           </div>
           <div className="test-warning"> *Please use the following test bank card for payments:*</div>
           <br />
           4242 4242 4242 4242 - Exp: 01/23 -CVV: 123
             <StripeCheckoutButton price={total} />
        </div>
    )
const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
