import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import dynamic from 'next/dynamic';
import CheckoutForm from './stripes';
const Stripe= dynamic((import('./stripes'),{ssr:false})) ;

const Payment=()=>{
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '',
      };
      const stripePromise = loadStripe('pk_test_51N0m7LDiPPRi11QZ5ijdcG0QQUD1GvsXZp2CHVcw8OlCwEXK0Lk6CPGgO2BL2F7WKyrXSzVJWzShs5tQY2e9da4Q00fM3dLDKF');

    return <Elements stripe={stripePromise} options={options}>
      <CheckoutForm/>
    </Elements> 

    
}
export default Payment;