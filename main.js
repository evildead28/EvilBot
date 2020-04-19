const { Client } = require("discord.js");
const client = new Client({ disableMentions : "everyone" });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!"); 
  if (msg.content === "everyone") msg.channel.send("@everyone, salut à tous !", { disableMentions : "none" }); 
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), salut à tous !"); 
});

client.login('NzAwMzE4MTE2NDk1NzUzMjU4.XphMag.zXborc68mlD_p4tps2ZrNL2Dx1M');