const axios =require('axios')
require('dotenv').config({path:'env'})


const state_chatid= {
    "Maharashtra": "-385757489",
    "Delhi":"-420648164",
    "Jharkhand":"-551400524",
    "Bihar":"-551400524",
    "Karnataka ":"-544925856",
    "UttarPradesh":"-590361618",
    "MadhyaPradesh":"-542132814",
    "AndhraPradesh":"-568320408",
    "Telangana":"-568320408",
    "WestBengal": "-522167446",
    "Uttarakhand":"-561165129",
    "Rajasthan":"-488101019",
    }
    

async function groupPost(state,msg)
 {  try{
    const token = process.env.TELEGRAM_TOKEN
     axios.post('https://api.telegram.org/'+token+'/sendMessage',{
         chat_id:state_chatid[state],
         text:msg
     })
 }
     catch(error){
         console.log(error.data)
     }
 }
module.exports= groupPost