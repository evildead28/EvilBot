const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableMentions : "everyone" });

client.PREFIX = PREFIX;

client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);


