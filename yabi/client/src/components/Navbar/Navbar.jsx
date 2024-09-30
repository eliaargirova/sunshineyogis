import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Optional close icon for mobile menu
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/bg.jpeg" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>BGN</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">All products</Link>
          </div>
        </div>

        <div className="center">
          <img src="/images/sun.png" className="sun-image" alt="" />
          <Link className="link logo" to="/">SUNRISE YOGIS</Link>
          <img src="/images/sun.png" className="sun-image" alt="" />
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>

        {/* Burger Menu Icon for small screens */}
        <div className="burger-menu" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>Stores</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
