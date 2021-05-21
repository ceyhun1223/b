const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`

●Öncelikle server'e giren 'Tüm Klan Oyuncuların 'Discord girmesi zorunludur'. Gelmeyenler, 3. uyarıdan sonra banlanır.
●Küfür etmek, hakaret etmek yasaktır. Bu kurala küfürlü şarkı açmak da dahildir.
●İsim ile trollemek yasaktır.
●Dini, milli değerlere hakaret etmek, ırkçılık, Siyaset yapmak yasaktır. Cezası en az 7 gün yasaklamadır.
●Her türlü reklam yasaktır.
• Cvar Ayarları İle Oynamak Yasaktır !
• Başka Servera Gitmek Kesinlikle Yasaktır !
• Yetkililerin Serverde Kavga Etmesi Yasaktır !
• Ayrımcılık Yasaktır, Örnek[Türk-Kürt , Eski-Yeni] Vb...
• Yetkililerin Birbirlerini Banlaması Kicklemesi Yasaktır !
• Oylama Yapmadan Map değişmek yasaktır !
• Wall Hack Açmak Kesinlikle Yasaktır !
• Suphelendiğiniz birini ilk once space geçip 2 3 el izledıkten sonra ts ye çağırın !
• TW sorumluları hariç tw bakmak vermek yasaktır !
• Discord da info vermek Yasaktır !

● Yukarıdaki kurallara uymayanlar ;

1. Uyarıda 7 gün uzaklaştırılır,

2. Uyarıda Yetkileri elinden alınır,

3. Uyarıda Kalıcı olarak banlanır !



`,true)
      .setFooter(`Zeynep 💖 `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'oyun-kurallar',
  description: 'Vampir Köylü Yardım.',
  usage: 'oyun-kurallar'
};