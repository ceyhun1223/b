const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`
       
       ●▬▬▬▬▬▬▬๑「ZeynepBOT Kayıt Sistemleri Başı」๑▬▬▬▬▬▬▬●


___Zeynep Bot kayıt Sistemleri___

?kayıt-kanal-ayarla = #kanalnÜyelerin Kayıt Olacağı Kanal
?kayıt-log-ayarla = #kanal Üyeler Kayıt Olunca Bildirim Yollanan Kanal
?giriş-mesajı = #kanal Belirtilen Kanala Giriş Mesajı Yollar
?kayıt-verilecek-rol-ayarla = @rol Kayıt Olan Kullanıcıya Verilecek Rol
?kayıt-alınacak-rol-ayarla = @rol Kayıt Olan Kullanıcıdan Alınacak Rol
?kayıt-sistemini-kapat Kayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar

       ●▬▬▬▬▬▬▬๑「ZeynepBOT Kayıt Sistemi Son」๑▬▬▬▬▬▬▬●


`,true)
      .setFooter(`Zeynep 💖 Kayıt Menüsü `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};