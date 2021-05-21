const ayarlar = require('../ayarlar.json');
const db = require('wio.db');
const Discord = require('discord.js');
module.exports = async message => {
let devtr = db.fetch(`devtr.botbakim`)
  let client = message.client;
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
  if(message.author.id !== ayarlar.sahip && devtr) return message.channel.send(`https://tenor.com/view/lrp-fidelcan-gif-20004349  **ZeynepBOT** Bakımdadır Kısa Sürede Bakımdan Çıkarılıcaktır.`)
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};