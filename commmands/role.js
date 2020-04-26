module.exports = (client, message, args) => {
  const channel = client.channels.cache.find(r => r.name === "logs");
  const role = message.guild.roles.cache.find(r => r.name === args[0]);
  if (!role) return message.channel.send("Ce rôle n'existe pas !");

  if (message.member.roles.cache.find(r => r.name === args[0])) {
    message.member.roles.remove(role);
    channel.send(`J'ai supprimé le role ${role} à ${message.author}.`);
    message.delete({ timeout: 3000 });
  }  else {
    message.member.roles.add(role);
    channel.send(`J'ai ajouté le rôle ${role} à ${message.author}. `);
    message.delete({ timeout: 3000 });
    }
};