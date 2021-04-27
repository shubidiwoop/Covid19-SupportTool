var express = require('express');
const route = express.Router();


route.get('/', (req,res)=>{
    res.send("Covid App");
})

module.exports = route