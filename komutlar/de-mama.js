const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()

      .setThumbnail('https://cdn.discordapp.com/attachments/806828474366820364/808306565501288478/Kedi-Ve-Kopek-Ayni-Evde-Yasar-Mi-1.jpg')

    
      .setColor('#ffc163')
      .setDescription(`
       

Merhaba :wave: Ben ZeynepBOT :innocent:  Sahibimin Başlatığı Projeye Destek Olmak İstermisin :thinking: 

___Destek Projesi___
Bu Projede Toplanan Paralarla Sokak taki Doslarımıza VE Barınaktaki Doslarımıza Yardım Etmek İçin Başlatılmıştır. :heart_eyes: 

___Bu Projede Bi Kaç Şartımız Var Tabiki___

1-Ailenizden izin almanız lazım :family_man_woman_boy: 
2-Can Dostunuz Varsa Onunla Fotorafınızı Paylaşabilirsiniz **(İsterseniz)** :dog: 
3-Ailenizden İzin Aldıktan Sonra kart bilgileri Vericektir :credit_card: 
4-Para Geldikten Hemen 1GÜN Sonra **Mamaları** Almaya Gidiceğiz. **Fotoğrafları Hemen Paylaşılcaktır** :partying_face: 
5-Bize Bu Yolda Destek Çıkanlara Teşşekürler 💖

İninal = 4785002843800441



`,true)
      .setThumbnail('https://cdn.discordapp.com/attachments/806828474366820364/808307577682657320/a2bef5ef2dac0ebc72d0d3b0137e5db6.jpg')
      .setFooter(`Zeynep 💖 Can Dostlarımıza Destek Çıkalım ! 😻  `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'mama-destek',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};