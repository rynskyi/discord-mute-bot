const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.login(config.BOT_TOKEN);

client.on('message', (message) => {
    const channel = message.channel;
    const members = channel.members;

    if (message.content == '/mute') {
        members.forEach(member => {
            member.voice.channel && member.voice.setMute(true)
        });
    };

    if (message.content == '/unmute') {
        members.forEach(member => {
            member.voice.channel && member.voice.setMute(false)
        });
    };
});
