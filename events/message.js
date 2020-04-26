client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  console.log(args);
  console.log(cmd);
  if (cmd === "repeat") {
    msg.channel.send(args.join(" ")),
    msg.delete({ timeout: 2000 }).then(console.log("Un message a été supprimé"));
  }
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
  if (cmd === "sinfo") {
    const embed = new MessageEmbed()
    .setDescription(msg.guild.name)
    .setThumbnail(msg.guild.iconURL())
    .addField("Membres", msg.guild.memberCount)
    .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())           
    .setTimestamp();        
  msg.channel.send(embed);
  }
});
