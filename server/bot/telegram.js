const axios =require('axios')
require('dotenv').config({path:'env'})


const state_chatid= {
    "Maharashtra": " -385757489",
    "Delhi/Noida":"-420648164",
    "Jharkhand/Bihar":"-551400524",
    "Bangalore ":"-544925856",
    "Uttar Pradesh":" -590361618",
    "Madhya Pradesh":"-542132814",
    "AP/Telangana":" -568320408",
    "West Bengal": "-522167446",
    "Uttarakhand":" -561165129",
    "Rajasthan":"-488101019",
    }
    

async function groupPost(state,msg)
{  try{
   const token = process.env.TELEGRAM_TOKEN
   
    axios.post('https://api.telegram.org/'+token+'/sendMessage',{
        chat_id:state_chatid[state],
        text:msg
    }).catch(error=>{
        console.log(error.data)
    })
}
    catch(error){
        console.log(error.data)
    }
}

module.exports= groupPost