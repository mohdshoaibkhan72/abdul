import React from "react";
import "../products/ProductCard.css";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );

    if (existingItemIndex > -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Added to cart!");

    // Trigger a storage event manually for other tabs/components to update
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="product-card">
      {product.sale && <div className="badge">SALE!</div>}
      <img src={product.image} alt={product.name} className="product-img" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">
        <span className="old-price">₹{product.oldPrice}</span>
        <span className="new-price"> ₹{product.newPrice}</span>
      </p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
