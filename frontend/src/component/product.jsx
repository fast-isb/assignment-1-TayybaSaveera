import {Link} from "react-router-dom"
import styled from "styled-components";
import React,{useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { DeleteOutline } from "@mui/icons-material";
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
  flex=1;
    height: 350px;
    width:280px;
    display: flex;
    z-index: 3;
    align-items: center;
    justify-content: center;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const Product = ({ item }) => {
    
    
    // const [product, setProduct] = useState([]);

  const handleSubmitDelete = async (id)=>  { 


    console.log("hhhhhhh")
   const postURL = 'http://103.4.15.180:5000/product/delete/'+id 
   console.log(postURL)
  await fetch(postURL,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            _id: id,
        })
    })
    .then(()=>{
        console.log(item);
        alert('Your product has been deleted!');
  ????})
  }


    return (
      <Container>
        <Circle />
        <Image src={item.image} />
        <Info>
        <Link to="/EditProduct">
          <Button  type="submit">
          <Icon>
          <EditIcon/>
          </Icon></Button></Link>
          <Button onClick={()=>handleSubmitDelete(item._id)}>
          <Icon>
          <DeleteOutline  />
            
          </Icon>
          </Button>
        </Info>
      </Container>
    );
  };
  
  export default Product;