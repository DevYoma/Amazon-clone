import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home'
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './Context/StateProvider';
import {auth} from './Firebase/Firebase';


function App() {

  //DATA LAYER
  const [{user}, dispatch] = useStateValue();

  // piece of code that runs based on a given condition ie useEffect();
  //the useEffect is listening to the authentication changes in the application
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // user logged in 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
      return () => {
        //cleanup
        unsubscribe();
      }
  }, [])

  //to see the user..
  console.log("User is >>>>> ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
