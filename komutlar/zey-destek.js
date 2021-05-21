const Discord = require('discord.js')

const ms = require("ms")
const db = require('wio.db')
exports.run = async (client, message, args) => {    
  let cooldown = 2000, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        
        const embed = new Discord.MessageEmbed()
    .setDescription('acil destek 2 dakkikada bir kullanılabilir')
            .setColor('#ffc163')
        message.channel.send({embed})
        
    } else {
        const embed = new Discord.MessageEmbed()
  .setTitle('Başarılı  :white_check_mark: ')
.setDescription('**acil destek kullandınız en yakın zamanda **Helper - Support** sizin sunucunuza gelecek ve sorununu düzeltecektir**')
        .setColor('#ffc163')
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
      .addField(`Birisi Acil Destek Kullandı!!`, invite.url, true)
            .setColor('#ffc163')
      .setThumbnail(message.guild.iconURL)
       client.channels.cache.get('810900028226273280').send(embed)
    db.set(`gunluk_${message.guild.id}`, Date.now());
        })}
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['acil-destek, acil destek, acildestek'],
    permLevel: 0
}

exports.help = {
    name: 'acildestek',
    description: 'Sunucunuzu Tanıtır.',
    usage: 'acil destek'
}
