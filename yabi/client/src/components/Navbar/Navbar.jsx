import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu automatically on larger screens (938px and above)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 938) {
        setIsMenuOpen(false); // Close the mobile menu
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <Link className="link" to="/products/1">Жени</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Мъже</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Всички Продукти</Link>
          </div>
        </div>

        <div className="center">
          <img src="/images/sun.png" className="sun-image-1" alt="" />
          <Link className="link logo" to="/">SUNRISE YOGIS</Link>
          <img src="/images/sun.png" className="sun-image-2" alt="" />
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Начало</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">За нас</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Контакти</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Блог</Link>
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
            <Link className="link" to="/" onClick={toggleMenu}>Начало</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>Продукти</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>За нас</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>Контакти</Link>
          </div>
          <div className="item">
            <Link className="link" to="/" onClick={toggleMenu}>Блог</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

