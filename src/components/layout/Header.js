import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdClose, IoIosMenu } from "react-icons/io";

import "./style.scss";

import { Link1 } from "../utils/links";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <div className="header-title-container">
        <Link to="/">
          <h1 className="header-title">Taskboy</h1>
        </Link>
      </div>
      <div className="header-links-desktop">
        <Link1 to="/work" text="work" />
        <Link1 to="/about" text="about" />
        <Link1 to="/blog" text="blog" />
        <Link1 to="/signup" text="sign-up" />
      </div>
      {menuOpen && (
        <>
          <div
            className="header-links-mobile-outer"
            onClick={() => setMenuOpen(false)}
          ></div>
          <motion.div
            className="header-links-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link1 to="/work" text="work" />
            <Link1 to="/about" text="about" />
            <Link1 to="/blog" text="blog" />
            <Link1 to="/signup" text="sign-up" />
          </motion.div>
        </>
      )}
      {menuOpen ? (
        <IoMdClose
          className="header-links-mobile-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      ) : (
        <IoIosMenu
          className="header-links-mobile-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
    </motion.header>
  );
};

export default Header;
