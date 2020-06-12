const discord = require('discord.js')

module.exports.run = async (client,message,args) => {
  let msg = new discord.MessageEmbed()
  msg.setTitle('Модерация:')
  msg.setFooter(`Команду вызвал: ${message.member.user.tag}. @Patriot™. Все права завоёваны.`, message.member.user.avatarURL())
  msg.setColor(0xFF0000)
  let channel = message.guild.cache.get('705866598938050591')
}
module.exports.help = {
  "name":"report"
}
