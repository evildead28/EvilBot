const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableMentions : "everyone" });

client.PREFIX = PREFIX;

client.commands = new Collection();

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", message => require("./events/message.js")(client, message));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
client.on("guildMemberRemove", member => require("./events/guildMemberRemove.js")(client, member));

client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
