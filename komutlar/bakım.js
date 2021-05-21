const Discord = require('discord.js');
const db = require('wio.db')
exports.run = async(client, message, args) => {
if (!message.author.id == "758775600835198977") return message.reply('Bokumu ye')
let devtr = db.fetch(`devtr.botbakim`)
if(devtr) {
message.channel.send(`Bot başarıyla bakım modundan çıkarıldı.`)
db.delete(`devtr.botbakim`)
};

if(!devtr) {
message.channel.send(`Botu başarıyla bakıma aldınız, bakımdan çıkarmak için aynı mesaj yazınız.`)
db.set(`devtr.botbakim`, 'aktif')
}};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [`bakim`],
permLevel: 4
};

exports.help = {
name: 'bakım',
description: 'Botu bakıma alırsınız.',
usage: 'bakım'
};