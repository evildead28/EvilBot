if (cmd === "repeat") {
  msg.channel.send(args.join(" ")),
  msg.delete({ timeout: 2000 }).then(console.log("Un message a été supprimé"));
}