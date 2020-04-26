if(cmd ==="role") {
  const channel = client.channels.cache.find(r => r.name === "logs");
  const role = msg.guild.roles.cache.find(r => r.name === args[0]);
  if (!role) return msg.channel.send("Ce rôle n'existe pas !");

    if (msg.member.roles.cache.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`J'ai supprimé le rôle ${role} à ${msg.author}.`);
      msg.delete({ timeout: 2000 });
    } else {
      msg.member.roles.add(role);
      channel.send(`J'ai ajouté le rôle ${role} à ${msg.author}.`);
      msg.delete({ timeout: 2000 });
    }
  }