module.exports = (client, message) => {
  const args = message.content.slice(client.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.indexOf(client.PREFIX) !== 0) return;
  if (message.author.bot) return;

  if (client.commands.has(command)) client.commands.get(command)(client, message, args); 
};