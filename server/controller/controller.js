const requestDb = require('../model/model');
const volunteerDb = require('../model/volunteer');
const post = require('../bot/telegram');
const tlink = {
                "Delhi" : "https://t.me/joinchat/BDVF0yUrqPpkYzg1",
                "Rajasthan" : "https://t.me/joinchat/GDxfOaN_t24xNTg9",
                "Uttarakhand" : "https://t.me/joinchat/e3JSySsRCdVhYTU1", 
                "ArunachalPradesh" :"https://t.me/joinchat/MQsJGuCkAPwzNGM1",
                "Telangana":"https://t.me/joinchat/MQsJGuCkAPwzNGM1",
                "MadhyaPradesh":"https://t.me/joinchat/YYbOjpxJiDo5Y2M1",
                "UttarPradesh":"https://t.me/joinchat/tpLea_QGyTYxZWI1",
                "Maharashtra":"https://t.me/joinchat/yigX9vqT8oJiNDg1",
                "Karnataka":"https://t.me/joinchat/xHScWmlJZx40NzQ1",
                "Jharkhand":"https://t.me/joinchat/N9lE9R61PZgwNDZl",
                "Bihar":"https://t.me/joinchat/N9lE9R61PZgwNDZl"
            }
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
        status : false,
        pcity: req.body.pcity
    })

    request
    .save(request)
    .then(data => {
        res.send(data);
        const msg = "New Requirement Alert." +"\nPatient Name : " + data.pname + "\nPatient City : " + data.pcity + "\nAge : " + data.age +"\nGender :" + data.gender+"\nRequirement : " + data.requirement  + "\nBlood : " + data.blood  + "\nContact Name : " + data.cname + "\nContact Number : " + data.cpho;
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