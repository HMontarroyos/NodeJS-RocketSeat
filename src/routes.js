const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductControllers');
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products",ProductController.store);
routes.put("/products/:id",ProductController.update);
routes.delete("/products/:id",ProductController.destroy);


module.exports = routes;

//(req,res)=>{
    /*Product.create({
       title: "React Native",
       description: "Build native apps react",
       url: "http:github.com/facebook/react-native",
    });
    Product.create({
        title: "React",
        description: "Build apps react",
        url: "http:github.com/facebook/react",
    })
*/
   // return res.send("Hello Word");

//});
