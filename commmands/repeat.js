module.exports = (client, message, args) => {
  message.channel.send(args.join(" "));
  message.delete({ timeout: 3000 }).then(console.log("Le Bot a supprimé un Message!"));
};