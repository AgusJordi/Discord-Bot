const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    
    console.log(client.user.presence.status);
    
    // const testChannel = client.channels.find(channel => channel.name === 'test');
    // // console.log(testChannel);
})

client.on('message', message => {
    
    if(message.content === 'ping') {
        message.reply('pong');
    }

    if (message.content === 'hola') {
        message.channel.send(`Hola ${message.author}!`);
    }

    if(message.content.includes('!test')) {
        message.channel.send(`Me alegra que estes testeandome${message.author}!`);
    }

    if(message.content === '!jordi') {
        message.channel.send('https://twitter.com/agusrojasrp');
    }


});



client.login('NzU1NjMxMzA5NzIzNzk1NTY2.X2GGfw.uQKbXM2D4yoHt_Ef5-q-ttNpfPg');
