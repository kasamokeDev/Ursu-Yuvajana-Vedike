import axios from 'axios';
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function displayRazorpay(
  customerName,
  customerEmail,
  customerPhone,
  customerAddress
) {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?');
    return;
  }

  // creating a new order
  const result = await axios.post('http://localhost:3000/payment/orders', {
    amount: 500,
  });

  if (!result) {
    alert('Server error. Are you online?');
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: 'rzp_test_r9GRtfFhRztmp4', // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: customerName,
    description: 'Ursu Yuvajana Vedike',
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post(
        'http://localhost:3000/payment/success',
        data
      );

      alert(result.data.msg);
    },
    prefill: {
      name: customerName,
      email: customerEmail,
      contact: customerPhone,
    },
    notes: {
      address: customerAddress,
    },
    theme: {
      color: '#000000',
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
