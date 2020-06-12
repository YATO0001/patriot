const discord = require('discord.js')

module.exports.run = async (client,message,args) => {
  let msg = new discord.MessageEmbed()
  msg.setTitle('Модерация:')
  msg.setFooter(`Команду вызвал: ${message.member.user.tag}. @Patriot™. Все права завоёваны.`, message.member.user.avatarURL())
  msg.setColor(0xFF0000)
  //Проверка на права пользователя
  if(!message.member.hasPermission("MANAGE_CHANNELS") || message.member.hasPermission('ADMINISTRATOR')) {
    msg.setDescription(':x: У вас не достаточно прав для этой команды.')
    return message.channel.send(msg)
  }
  //Проверка на права Клиента
  if(!message.guild.members.cache.get(client.user.id).hasPermission('MANAGE_ROLES')) {
    msg.setDescription(':x: У бота отсуствует право управлять ролями участников.')
    return message.channel.send(msg)
  }
  //Проверка указан ли пользователь в сообщении
  if(!message.mentions.members.first()){
    msg.setDescription(':x: Вы не указали участника. См. ?help')
    return message.channel.send(msg)
  }
  const member = message.mentions.members.first()
  //Проверка может ли бот забанить данного участника
  if(!member.manageable){
    msg.setDescription(':x: Я не могу его замутить так как моя роль ниже его.')
    return message.channel.send(msg)
  }
  const role = message.guild.roles.cache.get('mute') || message.guild.roles.cache.get('немой') || message.guild.roles.cache.get('мут')
  member.roles.add(role)
  msg.setDescription(`:white_check_mark: Участник ${member.displayName} был замьючен по причине: ${args.slice(2).join(' ')} на ${args[1]} дней`)
  msg.addField('Участник:',`${member.displayName} ${member.id}`)
  msg.addField('Время:',`${args[1]} часов`,false)
  msg.addField('Причина:',args.slice(2).join(' '),false)
  message.channel.send(msg)
  setTimeout(()=>{
    member.roles.remove(role)
    message.channel.send(`${member.nickname} теперь снова может писать`)
  }, Number(args[1]) * 60 * 1000)
}
module.exports.help = {
  "name":"mute"
}
