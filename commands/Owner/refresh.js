const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "", //refresh
  description: "Refresh Command",
  usage: "cs!refresh",
  category: "Owner",
  run: async (client, message, args) => {

  if(message.channel.id != "800653361783111680") return message.channel.send(`This Command Can Only Be Used By Developers`)

  console.log(`${message.author.tag} Refreshed ${client.user.tag}`)
  client.user.setActivity(`cs!help`)
  client.user.setStatus("idle");

  const embed = new MessageEmbed()
	.setColor('#f7931a')
  .setDescription('I Have Been Refreshed!')

  message.channel.send(embed);


  }
  }