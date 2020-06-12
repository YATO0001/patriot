module.exports = (client)=>{
  console.log(`Logged on as ${client.user.tag}`);
	client.user.setActivity('?help | Администрирует', { type: 'LISTENING' })
}
