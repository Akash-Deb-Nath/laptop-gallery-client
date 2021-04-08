import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import AdminProfile from './components/AdminProfile/AdminProfile';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/adminProfile">
            <AdminProfile></AdminProfile>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/checkout/:productName'>
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path='/order/:productName'>
            <Order></Order>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
