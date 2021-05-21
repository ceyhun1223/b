

const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`
       
       ●▬▬▬▬▬▬▬๑「ZeynepBOT Arama Sistemleri Başı」๑▬▬▬▬▬▬▬●


___Zeynep Bot arama Sistemleri___


?film-öner = size güzel filmleri bulur ve önerir
?havadurumu = bi il yazın ve size havadurumunu gösterir
?steamoyun = istediginiz oyunu arata bilirsiniz
?çeviri = sizin için türkçeyi ingilizceye çevirir
___Zeynep Bot Arama Komutları___

       ●▬▬▬▬▬▬▬๑「ZeynepBOT Arama Sistemleri Son」๑▬▬▬▬▬▬▬●


`,true)
      .setFooter(`Zeynep 💖 Arama Menüsü `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'arama-sistemleri',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};