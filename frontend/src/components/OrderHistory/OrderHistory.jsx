import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:5000/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <div className='container'>
      <h2 className='heading'>Order History</h2>
      <ul className='unorder-list'>
        {orders.map(order => (
          <li className='list' key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Total Price: ${order.total_price}</p>
            <p>Date: {new Date(order.order_date).toLocalString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
