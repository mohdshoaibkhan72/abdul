import React from "react";
import ProductCard from "../products/products";
import "../products/shop.css";

const products = [
  {
    name: "1 KG Mehndi Powder (Triple Filter Super smooth & stringy)",
    oldPrice: 450,
    newPrice: 400,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-powder-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 Litre Mehndi Oil for Darkstain",
    oldPrice: 1500,
    newPrice: 1100,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-oil-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 Pieces Acrylic Practice Hands (17 Inches)",
    oldPrice: 300,
    newPrice: 250,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-powder-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "100 Pre Rolled Empty Ready to Use Frozen Silver Golden Cones",
    oldPrice: 400,
    newPrice: 300,
    image:
      "https://stutimehndi.com/wp-content/uploads/2025/04/img_0503-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 KG Mehndi Powder (Triple Filter Super smooth & stringy)",
    oldPrice: 450,
    newPrice: 400,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-powder-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 Litre Mehndi Oil for Darkstain",
    oldPrice: 1500,
    newPrice: 1100,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-oil-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 Pieces Acrylic Practice Hands (17 Inches)",
    oldPrice: 300,
    newPrice: 250,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-powder-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "100 Pre Rolled Empty Ready to Use Frozen Silver Golden Cones",
    oldPrice: 400,
    newPrice: 300,
    image:
      "https://stutimehndi.com/wp-content/uploads/2025/04/img_0503-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 KG Mehndi Powder (Triple Filter Super smooth & stringy)",
    oldPrice: 450,
    newPrice: 400,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-powder-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 Litre Mehndi Oil for Darkstain",
    oldPrice: 1500,
    newPrice: 1100,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-oil-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "1 Pieces Acrylic Practice Hands (17 Inches)",
    oldPrice: 300,
    newPrice: 250,
    image:
      "https://stutimehndi.com/wp-content/uploads/2023/11/mehndi-powder-scaled-300x300.jpeg",
    sale: true,
  },
  {
    name: "100 Pre Rolled Empty Ready to Use Frozen Silver Golden Cones",
    oldPrice: 400,
    newPrice: 300,
    image:
      "https://stutimehndi.com/wp-content/uploads/2025/04/img_0503-300x300.jpeg",
    sale: true,
  },
];

const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Our Shop</h1>
      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
