const express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');

router.get('/supermarkets', function(req, res){
  console.log('Got request for all supermarkets');
  User.find({})
  .exec(function(err, users){
    if(err){
      console.log("ERROR retieving supermarkets");
    }else {
      res.json(users);
    }
  })
});

router.get('/supermarkets/:_id', function(req, res){
  console.log('Got request user\'s products');
  User.aggregate([{
    $match:{_id:new ObjectId(req.params._id)}},
    {
      $lookup: {
        from: "notes",
        localField: '_id',
        foreignField: "user",
        as: "availableProducts"}
      }
    ])
    .exec(function(err, products){
      if(err){
        console.log("ERROR retieving user\'s products");
      }else {
        res.json(products);
        //console.log(products)
      }
    })
});

module.exports = router;
