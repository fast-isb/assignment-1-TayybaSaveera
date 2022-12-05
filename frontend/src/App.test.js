import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './component/navbar';
import React from "react";
import Newsletter from './component/newsletter';
import Product from './component/product';
import Products from './component/products';
import Addproduct from './homepage/AddProduct';
import EditProduct from './homepage/EditProduct';
import ProductList from './homepage/productList';
import { BrowserRouter } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//for All pages
test('product page',()=>{
render(<BrowserRouter>
<ProductList/>
</BrowserRouter>
);
const linkElement = screen.getByTestId("product page");
expect(linkElement).toBeInTheDocument();
})

test('Add product page',()=>{
  render(<BrowserRouter>
  <Addproduct/>
  </BrowserRouter>
  );
  const linkElement = screen.getByTestId("Add product page");
  expect(linkElement).toBeInTheDocument();
  })

  test('Edit product page',()=>{
    render(<BrowserRouter>
    <Editproduct/>
    </BrowserRouter>
    );
    const linkElement = screen.getByTestId("Edit product page");
    expect(linkElement).toBeInTheDocument();
    })


//for All components
test('Navbar',()=>{
  render(<Navbar />);
  const linkElement = screen.getByTestId("Navbar");
  expect(linkElement).toBeInTheDocument();
})
test('newsletter',()=>{
  render(<Newsletter />);
  const linkElement = screen.getByTestId("newsletter");
  expect(linkElement).toBeInTheDocument();
})
test('product',()=>{
  render(<Product />);
  const linkElement = screen.getByTestId("product");
  expect(linkElement).toBeInTheDocument();
})
test('products',()=>{
  render(<Products />);
  const linkElement = screen.getByTestId("products");
  expect(linkElement).toBeInTheDocument();
})
test('Addproduct',()=>{
  render(<Addproduct />);
  const linkElement = screen.getByTestId("Addproduct");
  expect(linkElement).toBeInTheDocument();
})
test('Editproduct',()=>{
  render(<EditProduct />);
  const linkElement = screen.getByTestId("Editproduct");
  expect(linkElement).toBeInTheDocument();
})
test('ProductList',()=>{
  render(<ProductList />);
  const linkElement = screen.getByTestId("ProductList");
  expect(linkElement).toBeInTheDocument();
})

//for micro component
test('button of product page',()=>{
  const {getByTestId}=
  render(<BrowserRouter>
  <ProductList/>
  </BrowserRouter>
  );
  const button = getByTestId("button");
  expect(button).toBeTruthy();
  })

  test('Addproduct button',()=>{
    const {getByTestId}=
    render(<BrowserRouter>
    <Addproduct/>
    </BrowserRouter>
    );
    const button = getByTestId("button");
    expect(button).toBeTruthy();
    })