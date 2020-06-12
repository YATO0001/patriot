const discord = require('discord.js')

module.exports.run = async (client,message,args) => {
  let msg = new discord.MessageEmbed()
  msg.setTitle('Модерация:')
  msg.setFooter(`Команду вызвал: ${message.member.user.tag}. @Patriot™. Все права завоёваны.`, message.member.user.avatarURL())
  msg.setColor(0xFF0000)
  //Проверка на права пользователя
  if(!message.member.hasPermission("KICK_MEMBERS")) {
    msg.setDescription(':x: У вас не достаточно прав для этой команды.')
    return message.channel.send(msg)
  }
  //Проверка на права Клиента
  if(!message.guild.members.cache.get(client.user.id).hasPermission('KICK_MEMBERS')) {
    msg.setDescription(':x: У бота отсуствует право выгонять участников.')
    return message.channel.send(msg)
  }
  const member = message.mentions.members.first()
  //Проверка указан ли пользователь в сообщении
  if(!member){
    msg.setDescription(':x: Вы не указали участника. См. ?help')
    return message.channel.send(msg)
  }
  //Проверка может ли бот кикнуть данного участника
  if(!member.kickable){
    msg.setDescription(':x: Я не могу его выгнать так как моя роль ниже его.')
    return message.channel.send(msg)
  }
  member.kick({reason:args.slice(2).join(' ')})
  msg.setDescription(`:white_check_mark: Участник ${member.displayName} был кикнут по причине: ${args.slice(1).join(' ')}`)
  msg.addField('Участник:',`${member.displayName} ${member.id}`)
  msg.addField('Причина:',args.slice(1).join(' '),false)
  message.channel.send(msg)
}
module.exports.help = {
  "name":"kick"
}
