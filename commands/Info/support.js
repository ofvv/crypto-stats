const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "support",
    aliases: ["supportserver"],
    category: "Info",
    usage: "cs!support",
    exmaple: "cs!support",
    description: `Support Server`,
    run: async (client, message, args) => {

   const embed = new MessageEmbed()
  //.setThumbnail(client.user.displayAvatarURL())
	.setColor('#f7931a')
  .setTitle('CLICK HERE TO JOIN')
  .setURL('https://discord.gg/AewZrR25hZ')
  .setFooter(client.user.username, client.user.displayAvatarURL());

  message.channel.send(embed);
}}