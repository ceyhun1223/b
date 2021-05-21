const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`
      
       ●▬▬▬▬▬▬▬๑「ZeynepBOT Ayarlamalı Sistemler Başı  」๑▬▬▬▬▬▬▬●

      
___Zeynep Bot Ayarlamalı Sistemler___

?uyarı-log = uyarıları log alıcak yeri belirlersiniz
?uyar = birisini uyarırsınız
?sa-as = sa-as sistemini ayarlarsınız
?otorol-ayarla = otorol sistemini ayarlarsınız
?otorolkapat

       ●▬▬▬▬▬▬▬๑「ZeynepBOT Ayarlamalı Sistemler Son」๑▬▬▬▬▬▬▬●


`,true)
      .setFooter(`Zeynep 💖 Sistemler Menüsü `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'ayarlamalı-sistemler',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};