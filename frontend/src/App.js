import React, { Fragment } from "react";
import Home from "./homepage/home";
import ProductList from "./homepage/productList";
import Addproduct from "./homepage/AddProduct";
import EditProduct from "./homepage/EditProduct";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route exact path="/Addproduct" element={<Addproduct/>}/>
        <Route exact path="/EditProduct" element={<EditProduct/>}/>        
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
