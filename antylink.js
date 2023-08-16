const Discord = require('discord.js');
const client = new Discord.Client();

const allowedRole = 'idroliktóramozelinkowac'; 

client.on('ready', () => {
  console.log(`Zalogowany jako ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content.includes('http') || message.content.includes('www')) {
    const member = message.guild.member(message.author);
    if (!member.roles.cache.has(allowedRole)) {
      message.delete();
      message.reply('Linki są zabronione dla Twojej roli!');
    }
  }
});