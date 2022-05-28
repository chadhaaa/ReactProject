import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import StatusMessages, {useMessages} from './StatusMessages';
import './style.css';
import axios from 'axios';

export const CardForm = ({price,plan}) => {
  
    const stripe = useStripe();
    const elements = useElements();
    const [messages, addMessage] = useMessages();
  
    const handleSubmit = async (e) => {
      
      e.preventDefault();
  
      if (!stripe || !elements) {
        
        addMessage('Stripe.js has not yet loaded.');
        return;
      }
  
      const {error: backendError, clientSecret} = await fetch(
        'http://localhost:8000/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: price,
            paymentMethodType: 'card',
            currency: 'usd',
          }),
        }
      ).then((r) => r.json());
  
      if (backendError) {
        addMessage(backendError.message);
        return;
      }
  
      addMessage('Client secret returned');
  
      const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'Coach Hassen',
            },
          },
        }
      );
  
      if (stripeError) {
        // Show error to your customer (e.g., insufficient funds)
        addMessage(stripeError.message);
        return;
      }
  
     
      addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
      // send fetch request to backend to create the subscription for coach 
      // and send email to coach
      if(paymentIntent.status === 'succeeded'){
        try {
          await axios.post('http://localhost:8000/api/create-subscription', {
            plan: plan,
            payement : paymentIntent,
            coachId: localStorage.getItem('coachId') || '6251fe0b2aac2a06394a280d' 
          });
          addMessage('subscription for the plan '+plan+ ' is successfully Done' + (localStorage.getItem('coachId') || '6251fe0b2aac2a06394a280d'));
        }catch(e){
          addMessage('error creating subscription  ' + e.message);
        } 
      }
    };
  
    return (
      <>
        <h2>Card to test</h2>
        <p>
          <div>
            <code>4242424242424242</code> (Visa)
          </div>
          <div>
            <code>5555555555554444</code> (Mastercard)
          </div>
        
        </p>
  
        <form id="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="card">Card</label>
          <CardElement id="card" />
  
          <button type="submit">Pay</button>
        </form>
        <StatusMessages messages={messages} />
  
        <p> <a href="https://youtu.be/IhvtIbfDZJI" target="_blank">Watch a demo walkthrough</a> </p>
      </>
    );
  };
  
  export default CardForm;
  