import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe=price *100;
    const publishableKey='pk_test_51IqaU1He6Xvt5lr9STNg0hWoyHO2nlhp864xVEXdSHbDVrQ0o4q13SHu1BDDZWcssdLACqoi1h6sZBC1YFdmEGKu00TDnUEWAY'

    const onToken=token=>{
        alert('Payment processed successfully')
    }
    return (
       <StripeCheckout
          label='Pay Now'
          name='Crown Clothing Store LTD'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
                />
    )
}

export default StripeCheckoutButton
