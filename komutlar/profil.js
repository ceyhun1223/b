const Discord = require('discord.js')
const moment = require('moment')
const db = require('wio.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");


const prefix = ayarlar.prefix

exports.run = async (bot, msg, args) => {


      let user = msg.mentions.users.first() || msg.author;
          let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    var kontrol;    const gün = moment.duration(kurulus).format("D")   

    if (kurulus < 1296000000) kontrol = 'Güvenilir Değil'
    if (kurulus > 1296000000) kontrol = 'Güvenilir'
  
      let userinfo = {};
        
      userinfo.avatar= user.displayAvatarURL();
       
      userinfo.id = user.id;
        
      userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
       
      userinfo.status = user.presence.status.toString()
        .replace("dnd", `:octagonal_sign:  Rahatsız Etmeyin`)
        .replace("online", `:green_circle:  Çevrimiçi`)
        .replace("idle", `:orange_circle:  Boşta`)
        .replace("offline", `:black_circle:  Çevrimdışı`)  
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('DD/MM/YYYY HH:mm')
  
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY HH:mm')
  
        const uembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .addField(`ID`, userinfo.id, true)
        .addField(`Discord İsmi`,`${user.username}`,true)
        .setColor('RED')
        .addField(`Katılım Tarihi`, userinfo.dctarihkatilma, true)
        .addField(`Hesap Oluşturma Tarihi`, userinfo.dctarih, true)
        .addField(`Durum`, userinfo.status, true)
        .addField(`Güvenirlik Seviye (3)`,kontrol  , true)
    
        
        msg.channel.send(uembed)
  
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kullanıcı', 'kullanıcıbilgi','profil','pf'],
  kategori: 'kullanıcı',
  permLevel: 0
};
exports.help = {
  name: 'profil',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'profil'
};