const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "vote",
    aliases: ["voteforcrpyto"],
    category: "Info",
    usage: "cs!vote",
    exmaple: "cs!vote",
    description: `Vote For Crypto Stats`,
    run: async (client, message, args) => {

   const embed = new MessageEmbed()
	.setColor('#f7931a')
  .setTitle('CLICK HERE TO VOTE FOR ME')
  .setURL('https://top.gg/bot/800649093470617601/vote')
  .setFooter(client.user.username, client.user.displayAvatarURL());

  message.channel.send(embed);
}}