import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar wrapper">
      <div className="left">
        <span className="logo">Azaelyse.</span>
      </div>
      <div className="mid">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="right">
        <Link to="/wishlist" className="wishlist-link">
          Wishlist <span>10</span>
        </Link>
        <Link to="/cart" className="cart-link">
          Cart <span>15</span>
        </Link>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;
