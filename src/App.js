import React, {useEffect, useState} from 'react';

import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

import MyAccount from './components/myAccount';
import ProductDisplay from './components/productDisplay';
import { BrowserRouter as Router, Route, Switch  ,Redirect } from 'react-router-dom';
import SignUp from './components/signUp';
import Cart from './components/cart';
import ProductDetails from './components/ProductsDetails';
import Start from './components/start';
import Login from './components/login';
import Subheader1 from './components/subheader1';
export const UserContext = React.createContext();


function App() {
  const [token,setToken] = useState(false)
  const [token1,setToken1] = useState(true)
  const func = ()=>
  {
    const token = localStorage.getItem('login');
      if(token)
      {
          setToken(true)
          setToken1(false)}
  }
    useEffect(() => {
      func()
    }, [func])
    // if(token === false && token1 === true)
    // {
    //   return(null)
    // }
  return (
    <div>
      <UserContext.Provider value = {{loads:func}}>
      <Router>
        <Header />
       {console.log(token1)}
        <div className="container mt-md-4">
          <Switch>
            
            <Route path="/" exact component={Home}></Route>
            <Route path="/myAccount">{token === true? <MyAccount/>: <Redirect exact to = "/"/>}</Route>
            <Route path="/product" component={ProductDisplay}></Route>
            <Route path="/signUp" component={SignUp}></Route>
            <Route path="/cart" >{token === true? <Cart/>: <Redirect exact to = "/"/>}
              </Route> 
            <Route path="/productdetail/:id" component={ProductDetails}></Route>
            
          </Switch>
        </div>
        <Footer />
      </Router>
      </UserContext.Provider>
    </div >
  );
}

export default App;
