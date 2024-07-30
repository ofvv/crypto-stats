const { Client, Collection } = require("discord.js");
const {prefix, token } = require("./config.json");
const discord = require("discord.js");
const moment = require("moment");
const ms = require("ms")
const { MessageEmbed } = require("discord.js");
//const DBL = require("dblapi.js");

const client = new discord.Client/*({
  disableMentions: 'everyone',
  partials: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING', 'GUILD_MESSAGE_TYPING'],
  //ws: { intents: discord.Intents.ALL }
}) */


client.commands = new Collection();
client.aliases = new Collection();



["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
/*
const dbl = new DBL('eMzQ3MDYxNzYwMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExNjcwNTYyfQ.r4Z1_kBMfnoRWAyJxC4G6mMC3t8-wJ5xyfi6-K23YJA', client); */


client.on("ready", () => {
  console.log(`${client.user.tag} is now Online!`)
  client.user.setActivity(`cs!help`)
  client.user.setStatus("idle");
 /*client.on('ready', () => {
  setInterval(() => {
      dbl.postStats(client.guilds.size, client.shards.Id, client.shards.total);
    }, 86400000);
}); */
})
/*
dbl.on('posted', () => {
  console.log(`${client.user.tag}'s Top.gg Server Count Has Been Updated!`);
  client.channels.cache.get('').send(`Top.gg Server Count Has Been Posted! Current Server Count: ${client.guilds.cache.size}`)
}) */
/*
dbl.on('error', e => {
 //console.log(`${e}`);
}) */
/*
setInterval(() => {
client.user.setActivity(`cs!help`)
client.user.setStatus("idle"); }, 3600000);

 client.on("message", async message => {


    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
}); */

client.on("message", async message => {

  if (message.content === 'cs!refresh') {

  const owner1 = client.users.cache.get("328768008669495296")
  const owner2 = client.users.cache.get("636614566427492405")

  let owners = ["328768008669495296", "636614566427492405"];
    
    if(!owners.includes(message.author.id)) return message.channel.send(`This Command Can Only Be Used By Developers! (${owner1.tag} & ${owner2.tag})`)

  console.log(`${message.author.tag} Refreshed ${client.user.tag}`)
  client.user.setActivity(`cs!help`)
  client.user.setStatus("idle");

  const embed = new MessageEmbed()
	.setColor('#f7931a')
  .setDescription('I Have Been Refreshed!')

  message.channel.send(embed);

    }
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});

client.on("guildCreate", guild => {

  client.user.setActivity(`cs!help`)

  let embed = new MessageEmbed()
    .setColor("#f7931a")
    .setAuthor(`I Was Invited To: ${guild.name}`, client.user.avatarURL)
    .addField("Members", guild.memberCount, true)
	  .addField("Channels", guild.channels.cache.size, true)
	  .addField("Roles", guild.roles.cache.size, true)
    .addField("ID", guild.id, true)
	  .addField("Boosts", guild.premiumSubscriptionCount || '0', true)
    .setTimestamp()
    .setFooter(`${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`, client.user.avatarURL);

    client.channels.cache.get('800653120165380106').send(embed)
});

client.on("guildDelete", guild => {

  client.user.setActivity(`cs!help`)

  let embed = new MessageEmbed()
    .setColor("#f7931a")
    .setAuthor(`I Was Kicked From: ${guild.name}`, client.user.avatarURL)
    .addField("Members", guild.memberCount, true)
	  .addField("Roles", guild.roles.cache.size, true)
    .addField("ID", guild.id, true)
	  .addField("Boosts", guild.premiumSubscriptionCount || '0', true)
    .setTimestamp()
    .setFooter(`${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`, client.user.avatarURL);
  client.channels.cache.get('').send(embed)
});
/*
const express = require('express');
const app = express();
app.get("/", (req, res) => {
  res.status(200).send(`Crypto Stats Is Online!`);
});
app.listen(process.env.PORT || 3000);


const fetch = require('node-fetch')
setInterval(async () => {
await fetch('https://cryptostats.zirowastaken.repl.co').then()
}, 1000)*/
client.login(process.env.TOKEN);
