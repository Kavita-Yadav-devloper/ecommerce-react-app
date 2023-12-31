import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Cart } from './features/cart/Cart';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  { // only for testing -> then page will be added
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage/>,
  },
]);

function App() {
  return (
    <div className="App">
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
