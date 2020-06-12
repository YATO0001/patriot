const discord = require('discord.js')

module.exports.run = async (client,message,args) => {
  let msg = new discord.MessageEmbed()
  msg.setTitle('Модерация:')
  msg.setFooter(`Команду вызвал: ${message.member.user.tag}. @Patriot™. Все права завоёваны.`, message.member.user.avatarURL())
  msg.setColor(0xFF0000)
  //Проверка на права пользователя
  if(!message.member.hasPermission("BAN_MEMBERS")) {
    msg.setDescription(':x: У вас не достаточно прав для этой команды.')
    return message.channel.send(msg)
  }
  //Проверка на права Клиента
  if(!message.guild.members.cache.get(client.user.id).hasPermission('BAN_MEMBERS')) {
    msg.setDescription(':x: У бота отсуствует право банить участников.')
    return message.channel.send(msg)
  }
  //Проверка указан ли пользователь в сообщении
  if(!message.mentions.members.first()){
    msg.setDescription(':x: Вы не указали участника. См. ?help')
    return message.channel.send(msg)
  }
  const member = message.mentions.members.first()
  //Проверка может ли бот забанить данного участника
  if(!member.bannable){
    msg.setDescription(':x: Я не могу его забанить так как моя роль ниже его.')
    return message.channel.send(msg)
  }
  member.ban({days:Number(args[1]), reason:args.slice(2).join(' ')})
  msg.setDescription(`:white_check_mark: Участник ${member.displayName} был забанен по причине: ${args.slice(2).join(' ')} на ${args[1]} дней`)
  msg.addField('Участник:',`${member.displayName} ${member.id}`)
  msg.addField('Время:',`${args[1]} дней`,false)
  msg.addField('Причина:',args.slice(2).join(' '),false)
  message.channel.send(msg)
}
module.exports.help = {
  "name":"ban"
}
