import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Payment from './stripe'
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './stripes'
import Checkout from './home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const stripePromise = loadStripe('pk_test_51N0m7LDiPPRi11QZ5ijdcG0QQUD1GvsXZp2CHVcw8OlCwEXK0Lk6CPGgO2BL2F7WKyrXSzVJWzShs5tQY2e9da4Q00fM3dLDKF');

const options:any = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // "automatic_payment_methods[enabled]":true,
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  } ,
};
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
       <>STRIPE</>
       {/* <Payment/> */}
       {/* <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements> */}
  <button onClick={(()=>Checkout({
    lineItems:[{price:"price_1NXdzTSGFGL0t2agB9JyhQvd",quantity:1}]
  }))}>Pay</button>
      </main>
    </>
  )
}
