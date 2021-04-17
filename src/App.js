import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Component/Home/Home/Home';
import Service from './Component/Services/Service/Service';
import Product from './Component/Services/AddService/Product';
import Order from './Component/Services/Order/Order';
import Orderlist from './Component/Services/Orderlist/Orderlist';
import Review from './Component/Services/Review/Review';
import ManageService from './Component/Services/ManageServices/ManageService';
import Admin from './Component/Services/Admin/Admin';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/order/:id">
            <Order />
          </Route>
          <Route path="/orderlist">
            <Orderlist />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/manage">
            <ManageService />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
