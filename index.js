const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = 'm!';

const quoteResponses = ["It's Muffin Time!", "I wanna die!", "Why wont you let me die!", "Hey Joey!, Wanna eat me?", "Anybody want a muffin?", "Hey, somebody kill me!"];

bot.on('ready', () =>{
    console.log('This bot is online!');
});


bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case 'quote':
            var response = quoteResponses[Math.floor(Math.random()*quoteResponses.length)];    

            msg.channel.send(response).then().catch(console.error);
        break;
    }
});



bot.login(process.env.BOT_TOKEN);
