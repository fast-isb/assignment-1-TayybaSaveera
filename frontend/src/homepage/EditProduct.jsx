import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FileBase64 from "react-file-base64";

const theme = createTheme();

 export const EditProduct=()=> {
   const [product, setProduct] = useState({
    name: "",
    description: "",
    price:"", 
    quantity: "",
    image: "",
 });
   const handleSubmit= async (event)=>  {      event.preventDefault();

     const postURL = "http://103.4.15.180:5000/product/add" 
    console.log(product.image)

    await fetch(postURL,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            name: product.name,
            description:product.description,
            quantity:product.quantity,
            price:product.price,
            image:product.image,
            clockedIn:false,
            dates:[]
        })
    })
    .then(()=>{
        console.log(product);
        // Once posted, the user will be notified 
        alert('Your product has been changes!');
    })
}


  const handleChange = (event) => {
     console.log(event.target.value)
     setProduct({ ...product, [event.target.name]: event.target.value });
   };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Product Name"
                  autoFocus
                  value={product.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="family-name"
                  value={product.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="family-name"
                  value={product.quantity}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  value={product.description}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FileBase64
                  type="file"
                  name="uploader"
                  multiple={false}
                  value={product.image}
                  onDone={ ({base64})=>setProduct({ ...product, image:base64 }) }
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Save Changes
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default EditProduct;
