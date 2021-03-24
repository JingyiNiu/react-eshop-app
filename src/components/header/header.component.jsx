import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.config";
import CardIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/home.svg";

import "./header.style.scss";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>

      {
        // if there is a user, render a div. if not, render a link
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='./signin'>
            SIGN IN
          </Link>
        )
      }
      <CartIcon />
    </div>
    {
      // if it's hidden, render nothing. if not, render dropdown cart
      hidden ? null : <CartDropdown />
    }
  </div>
);

// destruct currentUser of user
// destruct hidden of cart
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
