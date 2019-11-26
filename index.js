const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = 'm!';

const quoteResponses = ["Got your nose!","Look out! He's got a nose!","You gotta help me man! My tie is evil and its gonna kill me!","please don't hurt me....","Hello parking meter!","Hey- Hey guy,smell my flower","Oh","Hey ma- Aw what the hell is wrong with you?","Level up!","Somebody help me, Im being robbed!","I'll save you! Tree powers, ACTIVATE!"," Die potato!","mmm, yum","AUGHHHH, WHY WOULD YOU DO THIS??!?","I HAVE A WIFE AND FAMILY!", ];

bot.on('ready', () =>{
    console.log('This bot is online!');
})


bot.on('message', msg=>{

    let args = msg.content.startsWith(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case 'quote':
            var response = quoteResponses[Math.floor(Math.random()*quoteResponses.length)];    

            msg.channel.send(response).then().catch(console.error);
        break;
        case 'help':
            var embed = new Discord.RichEmbed()
                .setTitle("Commands List")
                .addField("**Fun Commands**","m!quote")
                .setFooter("Use m!help and any command after to find info about that command")
            msg.channel.sendEmbed(embed);
        break;
    }
})



bot.login(process.env.BOT_TOKEN);
