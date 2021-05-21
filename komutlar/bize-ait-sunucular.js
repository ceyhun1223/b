
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`
       
      「ZeynepBOT Bize Ait Olanlar」●▬▬▬▬▬▬▬▬▬▬๑
       
("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=804013015618945135&scope=bot&permissions=8)")

("**ZeynepBOT Support :** [TIKLA](https://discord.gg/W8j8WGtKPr)")

("**ZeynepBOT Vote Link :** [TIKLA](https://top.gg/bot/804013015618945135/vote)")


İninal = 4785002843800441
       ●▬▬▬▬▬▬▬▬▬▬๑「ZeynepBOT Bize Ait Olanlar」


`,true)
      .setFooter(`Zeynep 💖 Bize Ait Olanlar `)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'bize-ait-olanlar',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};