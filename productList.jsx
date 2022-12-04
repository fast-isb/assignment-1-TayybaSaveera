import styled from "styled-components";
import Navbar from "../component/navbar";
import Newsletter from "../component/newsletter";
import React from "react";
import Products from "../component/products";
import Product from "../component/product";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px;
`;


  

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  
`;
const Wrapper=styled.div`
padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 `;

export const ProductList= ()=> {
//   const addproduct=()=> Alert.Button("Add New Product")

//   }
  return (
    <Container>
      <Navbar />
      <Wrapper>
      <Title>Products</Title>
      <Link to="/Addproduct">
      <Button type="submit"
              //fullWidth
              size="medium"
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}>
              Add New Product
            </Button>  
            </Link>         
      </Wrapper>


      {/* <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer> */}
      
      <Products/>
      <Newsletter />
    </Container>
  );
};

export default ProductList;