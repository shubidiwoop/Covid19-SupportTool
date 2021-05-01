const requestDb = require('../model/model');
const volunteerDb = require('../model/volunteer');

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

exports.volunteer = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "Invalid Input"});
        return;
    }

    const volunteer = new volunteerDb({
        fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone,
        location:req.body.location,
        email:req.body.email
    })

    volunteer
    .save(volunteer)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occured"
        });
    });
}

exports.find = (req,res) => {

}

exports.update = (req,res) =>{

}

exports.delete = (req,res) => {

}