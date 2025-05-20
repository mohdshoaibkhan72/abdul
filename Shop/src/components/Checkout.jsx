import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // ✅ Add this

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="checkout-list">
            {cartItems.map((item, index) => (
              <li key={index} className="checkout-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="checkout-img"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.newPrice}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-total">
            <h3>Total: ₹{getTotal()}</h3>
            <button className="checkout-btn">Place Order</button>
          </div>
        </>
      )}

      <button onClick={goToHome} className="go-home-btn">
        Go to Home
      </button>
    </div>
  );
};

export default Checkout;
