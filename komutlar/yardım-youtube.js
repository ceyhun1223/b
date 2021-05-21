
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`

       ●▬▬▬▬▬▬▬๑「ZeynepBOT Youtube Sistemleri Başı」๑▬▬▬▬▬▬▬●


___Zeynep Bot YouTube Sistemleri___

?abonekanal-ayarla = abone kanalını belirlersiniz
?abonerol-ayarla = abone rolü belirlersiniz
?abonesistem-kapat = abone sistemini kapatırsınız
?aboneistatistik = istatistiklerini çıkarırsınız
?abonesayısını-sıfırla = abone istatistigini sıfırlar
?aboneyetkilisi-ayarla = abone yetkilisini ayarlarsınız
?abone = abone  vericek kişi etiketleyin

       ●▬▬▬▬▬▬▬๑「ZeynepBOT Youtube Sistemleri Son」๑▬▬▬▬▬▬▬●


`,true)
      .setFooter(`Zeynep 💖 Abone Menüsü `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'abone-sistemi',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};