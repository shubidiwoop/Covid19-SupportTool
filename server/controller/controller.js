const requestDb = require('../model/model');
var request = require('../model/model');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message : "Content Empty"});
        return;
    }

    const request = new requestDb({
        pname : req.body.name,
        location : req.body.location,
        age : req.body.age,
        requirement : req.body.requirement,
        gender : req.body.gender,
        cname : req.body.cname,
        cpho : req.body.cpho,
        blood : req.body.blood,
        status : false
    })

    request
    .save(request)
    .then(data => {
        res.send(data._id);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured"
        });
    });
}

exports.find = (req,res) => {

}

exports.update = (req,res) =>{

}

exports.delete = (req,res) => {

}