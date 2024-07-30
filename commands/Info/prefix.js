const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "",
    aliases: ["whatprefix", "whatisprefix", "whatistheprefix", "showmetheprefix"],
    category: "Info",
    usage: "cs!prefix",
    exmaple: "cs!prefix",
    description: `Information About The Bot`,
    run: async (client, message, args) => {

   const embed = new MessageEmbed()
  //.setThumbnail(client.user.displayAvatarURL())
	.setColor('#f7931a')
  .setDescription('My Prefix Is `cs!`')
  //.setFooter(client.user.username, client.user.displayAvatarURL());

  message.channel.send(embed);
}}