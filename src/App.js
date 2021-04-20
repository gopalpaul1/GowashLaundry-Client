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
import Login from './Component/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminOrderList from './Component/Services/AdminOrderList/AdminOrderList';


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
          <PrivateRoute path="/service">
            <Service />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/product">
            <Product />
          </Route>
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <Route path="/orderlist">
            <Orderlist />
          </Route>
          <Route path="/addinOrderList">
            <AdminOrderList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/manage">
            <ManageService />
          </Route>
          <Route path="/login">
            <Login />
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
