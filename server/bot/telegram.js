const axios =require('axios')
require('dotenv').config({path:'env'})
const state_chatid={"Maharashtra": "-1001316206741","Delhi":"-1001153051458"}

async function groupPost(state,msg)
{  try{
   const token = process.env.TELEGRAM_TOKEN
    axios.post('https://api.telegram.org/'+token+'/sendMessage',{
        chat_id:state_chatid[state],
        text:msg
    })
}
    catch(error){
        console.log(error)
    }
}

module.exports= groupPost