import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import Product from './product';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Products ()  {

  const [products,setProducts]=useState([]);


  const fetchData = async () => {
    const response = await fetch("http://103.4.15.180:5000/product");
    const data = await response.json();
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  
    <Container>
  
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}

    </Container>

  );
};

export default Products;