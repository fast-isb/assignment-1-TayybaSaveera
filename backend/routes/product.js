const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const app = express.Router();

// This will help us connect to the database
const dbo = require("../db/connect");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;



app.route("/product/add").post(function (req, response) {
    console.log(req)
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        dscp: req.body.description,
        price:req.body.price,
        quantity:req.body.quantity,
        image:req.body.image
    };
    db_connect.collection("products").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

app.route("/product").get(function (req, res) {
    let db_connect = dbo.getDb("products");
    db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        console.log(result)
        res.json(result); 
    });
});
app.route('/product/delete/:id').delete(function (req, res) {
    let db_connect = dbo.getDb();
    var _id = req.body._iid
    db_connect.collection("products").deleteOne(
        {id : _id}
    );
});

// app.delete("/product/delete/:id", async (req, res, next) => {
//     const name = req.params.name;
  
//     try {
//       student
//         .remove({ _id: name })
//         .exec()
//         .then(data => {
//           res.json(data);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   });


module.exports = app;

// const express = require("express")
// let app = express.Router()
// const productSchema = require("../ProductModel/productModel")



// app.post("/addproduct", async (req,res)=>{
//     console.log(req.body.name);
//     const newproduct = await productSchema({
//         name: req.body.name,
//         dscp: req.body.dscp,
//         price:req.body.price,
//         quantity:req.body.quantity
//     });
//     console.log("New Product Created")
//     })
