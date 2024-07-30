const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    aliases: ["invitecrypto"],
    category: "Info",
    usage: "cs!invite",
    exmaple: "cs!invite",
    description: `Invite Crypto Stats`,
    run: async (client, message, args) => {

   const embed = new MessageEmbed()
  //.setThumbnail(client.user.displayAvatarURL())
	.setColor('#f7931a')
  //.setAuthor('INVITE') // za ko emmojtaitaj ia
  .setTitle('CLICK HERE TO INVITE ME')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=800649093470617601&permissions=379968&scope=bot')
  .setFooter(client.user.username, client.user.displayAvatarURL());

  message.channel.send(embed);
}}