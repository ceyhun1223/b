const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async (client, message, args) => {
 let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send('Lütfen Kayıt Kanalını Etiketlermisin?')
   
  db.set(`kayıtk_${message.guild.id}`, kanal.id)

 
  message.channel.send(`Kayıt Kanalı Başarıyla Ayarlandı; **${kanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-kanal-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};