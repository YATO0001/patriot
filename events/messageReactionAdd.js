const discord = require('discord.js')

module.exports = async(client, reaction, user) =>{
  if(user.bot) return;
  if(reaction.message.id != '720770231244554240') return;
  const guild = reaction.message.guild
  const member = guild.members.cache.get(user.id)
  if(reaction.emoji.id == '711263202721136700') { //Python
    const role = guild.roles.cache.get('720207661647527968')
    member.roles.add(role)
  }
  if(reaction.emoji.id == '711263732600406066'){ //JS
    const role = guild.roles.cache.get('720207460136124476')
    member.roles.add(role)
  }
  if(reaction.emoji.id == '720238179734650892') { //TS
    const role = guild.roles.cache.get('720207862239985685')
    member.roles.add(role)
  }
  if(reaction.emoji.id == '720242731485757460') { //Java
    const role = guild.roles.cache.get('720208056163762208')
    member.roles.add(role)
  }
  if(reaction.emoji.id == '720237469173284882') { //C++
    const role = guild.roles.cache.get('720207740798238821')
    member.roles.add(role)
  }
  if(reaction.emoji.id == '720237901522403350') { //C#
    const role = guild.roles.cache.get('720207929000722533')
    member.roles.add(role)
  }
  if(reaction.emoji.id == '720245785010241568') { //Hardware
    const role = guild.roles.cache.get('720208263274037289')
    member.roles.add(role)
  }
}
