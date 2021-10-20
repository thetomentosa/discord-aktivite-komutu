const Discord = require("discord.js");
const client = new(require("discord.js").Client)
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
  if(!message.member.voice.channel) return message.reply(new Discord.MessageEmbed().setDescription(`Lütfen Geçerli Bir Sesli Kanala Giriniz`).setColor("#ffae00"));
if(!args[0]) return message.reply(new Discord.MessageEmbed().setDescription(`Lütfen Bir Seçenek Giriniz. \n>Seçenekler için \`p!aktiviteyardım\` veya \`p!ay\` yazabilirsiniz.`).setColor("#ffae00"));
if(args[0] == 'yt') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle(`Oda Linkiniz Hazırlandı.`)
                    embed.setDescription(`**YouTube Together** Linkiniz Hazırlandı\n\n Bulunduğunuz **${message.member.voice.channel.name}** Adlı Odanın Linki -> [${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n\n> Linke Tıklayarak Etkileşimi Aktif Hale Getirebilirsin.\n\n **İyi Eğlenceler...**`)
                    embed.setColor('#ffae00')
                    embed.setFooter('Pawyon Bot | Eğlence Botu', client.user.avatarURL())
                    message.channel.send(embed)
                })
} else if(args[0] == 'bio') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                  method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                       target_application_id: "773336526917861400",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle(`Oda Linkiniz Hazırlandı.`)
                    embed.setDescription(`**Betrayal.io** Linkiniz Hazırlandı\n\n Bulunduğunuz **${message.member.voice.channel.name}** Adlı Odanın Linki -> [${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n\n> Linke Tıklayarak Etkileşimi Aktif Hale Getirebilirsin.\n\n **İyi Eğlenceler...**`)
                    embed.setColor('#ffae00')
                    embed.setFooter('Pawyon Bot | Eğlence Botu', client.user.avatarURL())
                    message.channel.send(embed)
                })
} else if(args[0] == 'pn') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                  method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755827207812677713",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                   embed.setTitle(`Oda Linkiniz Hazırlandı.`)
                    embed.setDescription(`**Poker Night** Linkiniz Hazırlandı\n\n Bulunduğunuz **${message.member.voice.channel.name}** Adlı Odanın Linki -> [${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n\n> Linke Tıklayarak Etkileşimi Aktif Hale Getirebilirsin.\n\n **İyi Eğlenceler...**`)
                    embed.setColor('#ffae00')
                    embed.setFooter('Pawyon Bot | Eğlence Botu', client.user.avatarURL())
                    message.channel.send(embed)
                })
} else if(args[0] == 'fio') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
             method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle(`Oda Linkiniz Hazırlandı.`)
                    embed.setDescription(`**Fishington.io** Linkiniz Hazırlandı\n\n Bulunduğunuz **${message.member.voice.channel.name}** Adlı Odanın Linki -> [${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n\n> Linke Tıklayarak Etkileşimi Aktif Hale Getirebilirsin.\n\n **İyi Eğlenceler...**`)
                    embed.setColor('#ffae00')
                    embed.setFooter('Pawyon Bot | Eğlence Botu', client.user.avatarURL())
                    message.channel.send(embed)
                })
} else {
  const embed = new MessageEmbed()
   embed.setTitle(`Geçersiz Değer Girildi.`)
  embed.setDescription(`Üzgünüm Geçersiz Bir Seçenek Girdiniz,\n **Seçenekler** :\nYouTube Together için: **yt** \n Betrayal.io için: **bio**\nPoker Night için: **pn**\nFishington.io için: **fio** \n Daha fazla bilgi için \`p!aktiviteyardım\` veya \`p!ay\` yazabilirsiniz.`)
  embed.setColor('#ffae00')
  embed.setFooter('Pawyon Bot | Eğlence Botu', client.user.avatarURL())
  message.channel.send(embed)
}

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aktif"],
  permLevel: 0
};

exports.help = {
  name: 'aktivite',
  description: 'Ses kanalında youtube oyun v.s açmanıza yarar',
  usage: 'aktivite'
};
