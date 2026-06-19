import React from "react";
import logo from "../images/logo.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function toggleMenu() {
        setIsMenuOpen(prev => !prev);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <button
                type="button"
                className="menu-toggle"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="site-nav"
            >
                Menu
            </button>
            <div id="site-nav" className={isMenuOpen ? "nav nav-open" : "nav"}>
                <a href="#sweetHome" onClick={closeMenu}>Sweet Home</a>
                <a href="#collection" onClick={closeMenu}>Collection</a>
                <a href="#Story" onClick={closeMenu}>Story</a>
            </div>
        </header>
    )
}