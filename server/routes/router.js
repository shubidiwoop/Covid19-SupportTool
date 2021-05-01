const { render } = require('ejs');
var express = require('express');
const path = require('path');
const route = express.Router();
//const services = require('../services/render');
const controller = require('../controller/controller');



route.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'../../views/index.html'))
})


route.post('/api/request', controller.create);
route.post('/api/volunteer', controller.volunteer);
route.get('/api/request', controller.find);
route.put('/api/request/:id', controller.update);
route.delete('/api/request/:id', controller.delete);

module.exports = route