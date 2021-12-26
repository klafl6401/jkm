const {Client, Intents} = require('discord.js');
 
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILDS]});
 
client.once('ready', () => {
 console.log('bot online B)))');
})


client.login(process.env.TOKEN);
