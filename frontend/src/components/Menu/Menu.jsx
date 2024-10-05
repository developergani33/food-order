
import React, { useEffect, useState } from 'react';


const MenuPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [orderDetails, setOrderDetails] = useState({ tableNumber: '', contactNumber: '', date: '', time: '' });

    useEffect(() => {
        const getMenu = async () => {
            const menu = await fetchMenu();
            setMenuItems(menu);
        };
        getMenu();
    }, []);

    const addToCart = (item) => {
        if (item.available_quantity > 0) {
            setCart([...cart, item]);
        }
    };

    const handleOrderSubmit = async () => {
        const total_price = cart.reduce((acc, item) => acc + item.price, 0);
        const order = { tableNumber: orderDetails.tableNumber, contactNumber: orderDetails.contactNumber, date: orderDetails.date, time: orderDetails.time, items: cart, total_price };
        await placeOrder(order);
        setCart([]);
    };

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.category}</p>
                        <p>${item.price} - Available: {item.available_quantity}</p>
                        <button onClick={() => addToCart(item)} disabled={item.available_quantity === 0}>Add to Order</button>
                    </li>
                ))}
            </ul>

            <h2>Order Details</h2>
            <input type="text" placeholder="Table Number" onChange={(e) => setOrderDetails({ ...orderDetails, tableNumber: e.target.value })} />
            <input type="text" placeholder="Contact Number (optional)" onChange={(e) => setOrderDetails({ ...orderDetails, contactNumber: e.target.value })} />
            <input type="date" onChange={(e) => setOrderDetails({ ...orderDetails, date: e.target.value })} />
            <input type="time" onChange={(e) => setOrderDetails({ ...orderDetails, time: e.target.value })} />
            <button onClick={handleOrderSubmit}>Place Order</button>
        </div>
    );
};

export default MenuPage;
