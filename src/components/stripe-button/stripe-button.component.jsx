import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // make price in cents
  const publishableKey =
    "pk_test_51Id5DHJc1Yyc1hdbx4P5SgyCx5diWirCZopiTlsYfa5Ln5yPctJteIrBmGZy7Z3zNDUxpypqI8DuGvSheo3MRqB700jMLmr32p";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='JY Clothing Ltd.'
      billingAddress
      shippingAddress
      alipay
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
