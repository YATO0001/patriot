const discord = require('discord.js')

module.exports.run = async (client,message,args) => {
  let msg = new discord.MessageEmbed()
  msg.setTitle('Модерация:')
  msg.setFooter(`Команду вызвал: ${message.member.user.tag}. @Patriot™. Все права завоёваны.`, message.member.user.avatarURL())
  msg.setColor(0xFF0000)
  if(!message.member.hasPermission('MANAGE_CHANNELS')){
    msg.setDescription(':x: У вас не достаточно прав')
    return message.channel.send(msg)
  }
  message.channel.bulkDelete(Number(args[0])+1)
  msg.setDescription(`:white_check_mark: Было очищено ${args[0]} сообщений`)
  const mess = message.channel.send(msg)
  setTimeout(()=>{
    mess.delete()
  },10000)
}
module.exports.help = {
  "name":"clear"
}
