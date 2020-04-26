client.on("guildMemberRemove", member => {
  const channel = client.channels.cache.find(r => r.name === "logs");
  channel.send(`${member} a quitté le serveur!!`);
})