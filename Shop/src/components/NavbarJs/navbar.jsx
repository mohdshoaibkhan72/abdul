import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";
import navbarlogo from "../../assets/image.png";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLang = () => setLangOpen(!langOpen);
  const changeLang = (l) => {
    setLang(l);
    setLangOpen(false);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const handleCartClick = () => {
    navigate("/checkout");
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="lang-switcher" onClick={toggleLang}>
          {lang} <FaChevronDown className="chevron" />
        </div>
        {langOpen && (
          <ul className="lang-dropdown">
            {["EN", "FR", "ES", "HI"].map((l) => (
              <li key={l} onClick={() => changeLang(l)}>
                {l}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="navbar-center">
        <Link to="/" className="logo">
          <img src={navbarlogo} alt="Stutimehndi" />
        </Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          SHOP
        </NavLink>

        <div className="icon-btn" onClick={handleCartClick}>
          <FaShoppingCart />
          <span className="badge">{cartCount}</span>
        </div>

        <Link to="/" className="icon-btn" onClick={() => setMenuOpen(false)}>
          <FaUser />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
