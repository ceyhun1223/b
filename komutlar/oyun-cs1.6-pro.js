const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`

Ƭɧe Ƙıпɢ ➔ bcdefghijkmnopqst

Ƈєσ ➔ bcdefghijkmnopqst

───────────────────────────────────────────

Sυηυcυ Sαнiвi ➔ bcdefghijkmnopoqst

Sυηυcυ Øятαgι ➔ bcdefghjiumonprst

Ƈαρтαη ➔ bcdefijumnoprst

Yöɴєтιм єĸιвι ➔ bcdefijumnoprst

Λѕιѕтαɴ ➔ bcefhijumnprsct

Ɠörevlι ➔ befhijumnprsct

───────────────────────────────────────────

YouƬυвєя αdмiɴ ➔ befijumnprtc

Emektar αdмiɴ ➔ befijumnprtc

Master αdмiɴ ➔ befijumnprtc

Elit αdмiɴ ➔ befijumnprtc

vip αdмiɴ ➔ befijumnprtc

ɴorмαl αdмiɴ ➔ befijumnprtc

────────────────────────────────────────────

вєѕт α∂мιη ➔ bptimntjco

αdмιɴ ( 5 ) ➔ bptimncjc

αdмιɴ ( 4 ) ➔ bptimntj

αdмιɴ ( 3 ) ➔ bptimnj

αdмιɴ ( 2 ) ➔ bptinj

────────────────────────────────────────────

`,true)
      .setFooter(`**CS 1.6** - **CS:GO** PRO Yetki Sistemi`)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'pro-yetki-sistemi',
  description: 'Vampir Köylü Yardım.',
  usage: 'clan-alım'
};