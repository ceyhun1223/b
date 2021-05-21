const codework3 = require("discord.js");
const codework = require("moment");
const codework2 = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const CodeWork = new codework3.MessageEmbed()
    .setColor("#ffc163")
    .setFooter(`ZeynepBOT © | Tüm hakları saklıdır.`)
    .addField(
      " **Bellek kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
 
    .addField(
      " **Çalışma süresi**",
      codework
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
    .addField(
      "**Kullanıcılar**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      " **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      " **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("**Discord.JS sürüm**", "v" + codework3.version, true)
    .addField(" **Node.JS sürüm**", `${process.version}`, true)
    .addField("**Ping**", client.ws.ping + " ms", true)
    

    
  return message.channel.send(CodeWork);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istatistik"],
  permLevel: 0
};
exports.help = {
  name: 'istatistik',
  
  description: 'CodeWork V12 istatistik',
  usage: 'istatistik'
};

//TEST EDİLDİ