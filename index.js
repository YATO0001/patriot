'use strict';
//Библии
const Discord =	require('discord.js');
const fs =		require('fs');
const requireAll = require('require-all');
//Клиент
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const prefix = "?";

client.login(process.env.token)

//Обработчик событий
const files_events = requireAll({
  dirname: `${__dirname}/events`,
  filter: /^(?!-)(.+)\.js$/
});
for (const name in files_events) {
  const event = files_events[name];
  client.on(name, event.bind(null, client));
}

//Обработчик команд
client.commands = new Discord.Collection()
let files_cmds = fs.readdir("./cmds",(err,files)=>{
	if(err) throw err;
	let jsfile = files.filter(f => f.split('.').pop() === "js")
	jsfile.forEach((f, i) =>{
		let props = require(`./cmds/${f}`)
		client.commands.set(props.help.name,props)
	})
});

//Команды бота
client.on('message', function(message){
	let messageArray = message.content.split(' ')
	let command = messageArray[0]
	let args = messageArray.slice(1)
	let command_file = client.commands.get(command.slice(prefix.length))
	if(command_file) command_file.run(client,message,args)
})
