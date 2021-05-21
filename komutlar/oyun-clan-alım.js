const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`

Clan'a Alım şartları



1.Saygı Seviye basta gelır

-------------------------------------------

2.Clan'a Gelen arkadaş En az 1 tane 30 düzeyinde karakteri Olması zorunludur

-------------------------------------------

3.Clanımızda bayan arkadaşlar MEVCUT oldugundan Küfür KESİNLİKLE yasaktır

-------------------------------------------


4.Herhangibi Bağış İstemiyorum Klan kasamıza ZATEN Sizler istediginiz Zaman Bağış yapabilirsiniz ..

-------------------------------------------

5.Vs 6.Tenno, taktikleri dinleyip Uyumlu sekilde Hareket edebilcek komutları uyacak yeri geldiğinde komut vericek .. [YETENEKLİ]

-------------------------------------------

6.Yaş Sınırlandırılması vardır +16

--------------------------------------------------------------------------------------------------------------

SOHBETLERİMİZİN EĞLENCESİNDEN geçilmez :)

-------------------------------------------




AİLEMİZE Bekliyoruz

`,true)
      .setFooter(`Ailemiz Herkese Açık`)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'clan-alım',
  description: 'Vampir Köylü Yardım.',
  usage: 'clan-alım'
};