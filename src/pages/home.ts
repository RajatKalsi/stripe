import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
const Checkout=async(lineItems:any)=>{
let stripePromise :any;

const getStripe=async()=>{
    if(!stripePromise){
        stripePromise=loadStripe("pk_test_51NXLIhSGFGL0t2agEAJrQ1lFaghgnhx7LvCrkLMQ4djOHk92xqgitizClgptirtxQFGFfwcNA0jjpr6ovWqcIuER008PVIozWq")
    }
    return stripePromise;
}
const stripe= await getStripe();
console.log(stripe,"stripe");
await stripe.redirectToCheckout({
    mode:"payment",
    lineItems:lineItems.lineItems,
    successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`
})
}
export default Checkout;