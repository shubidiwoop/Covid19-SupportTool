const requestDb = require('../model/model');
const volunteerDb = require('../model/volunteer');
const post = require('../bot/telegram');
const dotenv = require('dotenv');
dotenv.config({path:'config.env'})
const tlink = {"Delhi" : process.env.TLINK_DEL}
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
        res.send(data);
        const msg = "New Requirement Alert." + "\nPatient name : " + data.pname + " \nRequirement : " + data.requirement + "\nContact Name : " + data.cname + "\nContact Number : " + data.cpho;
        post(data.location,msg);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occured"
        });
    });
}

exports.volunteer = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "Invalid Input"});
        return;
    }

    const volunteer = new volunteerDb({
        vfname: req.body.vfname,
        vlname: req.body.vlname,
        vphone: req.body.vphone,
        vlocation:req.body.vlocation,
        vmail:req.body.vmail,
        vhometown:req.body.vhometown
    })

    volunteer
    .save(volunteer)
    .then(data => {
        res.jsonp({link1 : tlink[data.vlocation],link2: tlink[data.vhometown]});
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