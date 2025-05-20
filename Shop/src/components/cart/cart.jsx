import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.newPrice * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.newPrice} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{getTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
