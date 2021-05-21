
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`
       
       ●▬▬▬▬▬▬▬▬▬▬๑「ZeynepBOT Komutları」๑▬▬▬▬▬▬▬▬▬▬●
       
       
:heart_eyes_cat:  ___ZeynepBOT Projeleri___ :heart_eyes_cat:  

>>>      😻 ?mama-destek

___Zeynep Bot Sistemler Komutları___

>>>      ?arama-sistemleri :smirk:
>>>      ?abone-sistemi :smirk:
>>>      ?kayıt-sistemi :smirk:
>>>      ?ayarlamalı-sistemler :smirk:
    
___Zeynep Bot Komutları___                                        
            
>>>      ?bize-ait-olanlar
>>>      ?tavsiye = bize tavsiyelerinizi iletebilirsiniz :speaking_head:
>>>      ?acildestek = destek çagırarak destek ekibimiz sizinle ilgilenir :speaking_head:
>>>      ?yardım = yardım menüsünü gösterir :call_me:
>>>      ?istatistik = botun istatistiklerini görürsünüz        :bar_chart:
>>>      ?davet = davet edersiniz botu :slight_smile:

___Zeynep Bot Oyun Sunucuları Bölümü___

>>>      ?oyun-kurallar = oyun sunucunuz için kurallar :bookmark_tabs:        
>>>      ?clan-alım = oyun sunucuları için clan alım şart   :bookmark_tabs:
>>>      ?terfi = sunucunuzdaki kişiyi terfi etirirsiniz :police_officer:
>>>      ?pro-yetki-sistemi = CS 1.6 CS:GO Pro Yetki Sistemi :man_detective:


___Zeynep Bot Eğlence Komutları___

>>>      ?fal = bot falınıza bakar :coffee:        
>>>      ?ilginçbilgi = size ilginç bilgiler verir  :face_with_monocle:    
>>>      ?sor = sorular sorun size cevapları verir :thinking:
>>>      ?fbi = evinize fbi basar

___Zeynep Bot Moderasyon Komutları___

>>>      ?sil = sil 0-100 arası mesaj siler <:sa:806885831938670642>
>>>      ?say = sunucunuzda kaç kişi var gösterir **Discord İçin Geçerli** <:sa:806885831938670642>
>>>      ?mute = bir kişiyi mutelersiniz <:sa:806885831938670642>
>>>      ?unmute = birisinin mutesini açarsınız <:sa:806885831938670642>  
>>>      ?muterol = ?muterol create <müteroladı> <:sa:806885831938670642>  
>>>      ?ban etiket sebeb | ?ban <kullanıcı ıd> sebeb = 2 şekilde ban yöntemi <:sa:806885831938670642>   
   ?unban <kullanıcı ıd> = ban kaldır <:sa:806885831938670642>       



`,true)
      .setFooter(`Zeynep 💖 Yardım Menüsü `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};