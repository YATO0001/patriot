const discord = require('discord.js')

module.exports.run = async (client,message,args) => {
  const durka = ['https://cdn.discordapp.com/attachments/720220266353000509/720220458221305886/1.png','https://cdn.discordapp.com/attachments/720220266353000509/720220459479597096/5fbb3b9ba21ff306159ee0bb8bef92f0.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220462038122516/6.png','https://cdn.discordapp.com/attachments/720220266353000509/720220463023783976/9a42a37bed7a85a0ecabc3a7cfec10c6.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220464609230858/845a24d67c3cab8bc549af365b54e3af.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220466337415210/1586441601123514723.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220467109298236/b130d144d2a0994c4c28e3bf2e09b3c9.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220468824637470/e7e503ab01a947956d1245072bf027f7.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220470406021130/images_2.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220471886348358/images.jpg','https://cdn.discordapp.com/attachments/720220266353000509/720220519726579734/-1.jpg']
  let msg = new discord.MessageEmbed()
  msg.setTitle('Дурка:')
  msg.setFooter(`Команду вызвал: ${message.member.user.tag}. @Patriot™. Все права завоёваны.`, message.member.user.avatarURL())
  msg.setColor(0x01FF00)
  msg.setImage(durka[Math.round(Math.random(0, 16))])
  message.channel.send(msg)
}
module.exports.help = {
  "name":"durka"
}
