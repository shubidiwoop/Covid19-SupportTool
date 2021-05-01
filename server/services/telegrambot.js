require('dotenv').config({path:'env'})
const {Telegraf} = require('telegraf');

BOT_TOKEN=
const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome')) // display Welcome text when we start bot
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // listen and handle when user type hi text
bot.launch() // start

//https://api.telegram.org/bot1783367946:AAGhQQkOo_Vm3Znab09pkdpKcaztCyAJqCA/sendMessage?chat_id=-420622491&text=RakshitMadarchod