const Discord = require('discord.js')
const data = require('wio.db')
////////////////////////////////////

exports.run = async (client, message, args) => { 

  
let uyarilog = data.fetch(`uyarilog_${message.guild.id}`)
if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("** Bunu yapmak için `Üyeleri At` yetkisine ihtiyacın var**")
if(!args[0]) return message.channel.send(`**?uyar @etiket \`birisini\` etiketle.**`)


let kullanıcı = message.mentions.users.first()
if(!args[0]) return message.reply("Lütfen bir üye etiketle :point_up: ")
if(!kullanıcı) return message.reply(`Kullanıcı Sunucuda Bulunamadı (` + args[0] + `)`)
if(kullanıcı.bot) return message.reply(`Botları uyaramazsın, sadece kullanıcılar `) 
if(kullanıcı.id === message.author.id) return message.reply(`Kendini uyaramazsın,başka bir kullanıcı etiketle`)
 if(kullanıcı.permissions <= client.permissions) return message.reply("**Yetkili üyeleri uyaramam **");
data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

let reason = args.slice(1).join(' ')

if(!reason) {
await message.channel.send(new Discord.MessageEmbed()
                          .setColor("#ffc163")
                          .setAuthor(kullanıcı.tag + " Uyarıldı")
                          .setDescription("**Sebep:** Belirtilmedi"))
if(uyarilog) {
  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()
                          .setColor("YELLOW")
                          .setTitle("Hey Üst Yönetim | Bi Yetkili Birisini Uyardı ! ")
                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **sebepsizce** uyarıldı!`)
                          .setTimestamp())
}
return
}

if(reason) {
await message.channel.send(new Discord.MessageEmbed()
                          .setColor("#ffc163")
                          .setAuthor(kullanıcı.tag + " Uyarıldı")
                          .setDescription("**Sebep:** "+ reason))
if(uyarilog) {
  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()
                          .setColor("YELLOW")
                          .setTitle("Hey Üst Yönetim | Bi Yetkili Birisini Uyardı ! ")
                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **${reason}** sebebiyle uyarıldı!`)
                          .setTimestamp())
}
  return
} 

}







exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["warn"],
    permLevel: 0
};

exports.help = {
    name: 'uyar',
};