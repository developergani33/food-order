import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ orderItems, totalPrice }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      tableNumber,
      contactNumber,
      totalPrice,
      orderItems,
      orderDate: new Date(),
    };

    await axios.post('http://localhost:5000/orders', orderData);
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        placeholder="Table Number"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        required
      />
      <input className='input'
        type="text"
        placeholder="Contact Number (optional)"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <button className="button" type="submit">Place Order to complete</button>
    </form>
  );
};

export default OrderForm;
