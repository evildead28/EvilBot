if (cmd === "sinfo") {
  const embed = new MessageEmbed()
  .setDescription(msg.guild.name)
  .setThumbnail(msg.guild.iconURL())
  .addField("Membres", msg.guild.memberCount)
  .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())           
  .setTimestamp();        
msg.channel.send(embed);
}