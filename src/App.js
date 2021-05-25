import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndRegisterPage from "./pages/sign-in-and-register/sign-in-and-register";
import CheckoutPage from "./pages/checkout/checkout"
import ContactPage from "./pages/contact/conntact"

import { auth, createUserProfileDocument } from "./firebase/firebase.config";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if userAuth exists
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // get back userRef, and combine uid and other properties
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // if userAuth doesn't exist, set currentUser to null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          {/*if currentUser property exist, redirect to homepage. 
          if not, go to sign-in-and-register page}*/}
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndRegisterPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// redux store ==pull state==> props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// props ==update state==> redux store
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
