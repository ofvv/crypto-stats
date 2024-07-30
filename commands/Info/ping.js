const discord = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
    category: "Info",
    usage: "cs!ping",
    description: "Get the bot's ping!",
    run: async (client, message, args) => {

     let start = Date.now();

  message.channel.send({embed: {description: "Pinging...", color: "#f7931a"}}).then(m => {

    let end = Date.now();

    let embed = new discord.MessageEmbed()
    .setAuthor("Pong!", message.author.avatarURL())
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField("Crypto Stats' Latency", end - start + "ms", true)
    .setThumbnail(client.user.displayAvatarURL())
     .setFooter(client.user.username, client.user.displayAvatarURL())
    .setColor("#f7931a");
    m.edit(embed).catch(e => message.channel.send(e))

  })

    }
};
