import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCartForm from '../SimpleCartForm/SimpleCartForm';



const stripePromise = loadStripe('pk_test_51IhHe5AhmHqgPNtFOnFb0wFDoiz7FNl9SUaQuxrnTq6Bf7JnO9Eb0yyjVRJGdWv9yOCA7pGioeCB29dlNaICInbs00dp2PmWx7');
const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCartForm></SimpleCartForm>
        </Elements>
    );
};

export default PaymentProcess;