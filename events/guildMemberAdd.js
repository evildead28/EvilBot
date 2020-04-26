module.exports = (client, member) => {
  member.send("Salut à toi ! Bienvenue sur Mon Discord !!! ");
  const channel = client.channels.cache.find(r => r.name === "général");
  channel.send(`${member} a rejoint le serveur !!!`);
};