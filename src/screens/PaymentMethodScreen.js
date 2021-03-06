import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        
        <div>
          <div>
            <input
              type="radio"
              id="Cash on Delivery"
              value="Cash on Delivery"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="Cash on Delivery">Cash on Delivery</label>
          </div>
        </div>
        <div>     
    </div>
    <div>
    <div>
      <input
        type="radio"
        id="Google Pay"
        value="Google Pay"
        name="paymentMethod"
        required
        onChange={(e) => setPaymentMethod(e.target.value)}
      ></input>
      <label htmlFor="Google Pay">Google Pay</label>
    </div>
  </div>
  <div>
  </div>
  <label />
  <button className="primary" type="submit">
            Continue
          </button>
</form>
</div>
  );
}

/*<div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>*/