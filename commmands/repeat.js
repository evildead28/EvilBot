module.exports = (client, message, args) => {
  message.channel.send(args.join(" ")),
  message.delete({ timeout: 2000 }).then(console.log("Un message a été supprimé"));
};