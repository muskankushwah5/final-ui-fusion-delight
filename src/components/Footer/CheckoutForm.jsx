import React from 'react';
import toast from 'react-hot-toast';
import StripeCheckout from 'react-stripe-checkout';
import { getPaymentValidate } from '../../services/orderApi';

const StripeButton = ({totalAmount}) => {
  const publishableKey = 'pk_test_51MhFkcSENPXAHQcJcWVQvL5MHUpFKiLGR7dmVZhS7JvYsrODgOPMu1fnHy8LMgFppqaJVaW7uN0pntcMULAe1wqC00Udy3ngAg';

  const cart = JSON.parse(localStorage.getItem("cart"));
  
  // Function to format the cart items as a string
  const getDescriptionString = () => {
    return cart.map(item => `${item.foodTitle} x ${item.Quantity}`).join(', ');
  }

  const onToken = async (token) => {

    try {
        toast.loading("Waiting for this ..");

        const response = await getPaymentValidate({
            token : token,
            amount : totalAmount,
            description : getDescriptionString()
        });

        toast.dismiss();


      if (response.ok) {
        // Payment was successful
        console.log('Payment successful');
             } else {
        // Payment failed
        console.log('Payment failed');
        // You can handle errors or display an error message.
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      
    }
  };
  return (
    <StripeCheckout
      label="Pay with Stripe"
      name="Fusion Delight"
      amount={totalAmount } // Amount in cents
      token={onToken}
      currency="USD"
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
