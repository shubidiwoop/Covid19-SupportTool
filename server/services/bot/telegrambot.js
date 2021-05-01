// require('dotenv').config({path:'env'})
// const {Telegraf} = require('telegraf');
// const axios =require('axios')
// BOT_TOKEN="1783367946:AAGhQQkOo_Vm3Znab09pkdpKcaztCyAJqCA"
// const bot = new Telegraf(BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome')) // display Welcome text when we start bot
// bot.hears('hi', (ctx) => ctx.reply('Hey there')) // listen and handle when user type hi text
// bot.launch() // start

const axios =require('axios')
//https://api.telegram.org/bot1783367946:AAGhQQkOo_Vm3Znab09pkdpKcaztCyAJqCA/sendMessage?chat_id=-420622491&text=RakshitMadarchod

const state_chatid={"Maharashtra": "-1001316206741","Delhi":"-1001153051458"}

async function groupPost(state,msg)
{  try{
   // console.log(state_chatid[state])
    axios.post("https://api.telegram.org/bot1783367946:AAGhQQkOo_Vm3Znab09pkdpKcaztCyAJqCA/sendMessage",{
        chat_id:state_chatid[state],
        text:msg
    })
}
    catch(error){console.log(error)}
}
module.exports={groupPost}
groupPost("Delhi","Pay 1000")