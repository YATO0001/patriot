const discord = require('discord.js')

module.exports.run = async (client,message,args) => {
  let msg = new discord.MessageEmbed()
  msg.setTitle('Help:')
  msg.setFooter(`Команду вызвал: ${message.member.user.tag}. @Patriot™. Все права завоёваны.`, message.member.user.avatarURL())
  msg.setColor(0x01FF00)
  msg.addField('?help','Покажет этот список',false)
  msg.addField('?durka','Даст мем с дуркой (всего их около 16)',false)
  if(message.member.hasPermission('BAN_MEMBERS')){
      msg.addField('?ban <участник> <время в днях> <причина>','Забанит участника',false)
  }
  if(message.member.hasPermission('KICK_MEMBERS')){
    msg.addField('?kick <участник> <причина>','Кикнет участника',false)
  }
  if(message.member.hasPermission('MANAGE_CHANNELS') || message.member.hasPermission('ADMINISTRATOR')){
    msg.addField('?mute <участник> <время в часах> <причина>','Замутит участника',false)
  }
  message.channel.send(msg)
}
module.exports.help = {
  "name":"help"
}
