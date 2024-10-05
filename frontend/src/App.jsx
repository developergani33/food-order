import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import OrderForm from './components/OrderForm/OrderForm';
import OrderHistory from './components/OrderHistory/OrderHistory';

const App = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  return (
    <div className='app-container' >
      <Menu addToOrder={addToOrder} />
      <OrderForm orderItems={orderItems} totalPrice={totalPrice} />
      <OrderHistory />
    </div>
  );
};

export default App;
