const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Help Command",
  usage: "help <cmd>",
  category: "Info",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("f7931a")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        //.setDescription("**Crypto Stats**")
        .setColor("#f7931a")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`cs!" + value.join("`, `cs!") + "`";

        emx.addField(`${category}`, desc); //[Total Commands: ${value.length}]
      }

       //emx.addField(`**LINKS [Total Links: 5]**`, `**[Invite](https://discord.com/api/oauth2/authorize?client_id=752242570532225064&permissions=8&scope=bot)** <┊> **[Website](https://zirobot.tk)** <┊> **[Suppport](https://discord.gg/yXjx596)** <┊> **[Vote](https://top.gg/bot/752242570532225064/vote)** <┊> **[Top.gg](https://top.gg/bot/752242570532225064)**`);

      return message.channel.send(emx);
    }
  }
};
