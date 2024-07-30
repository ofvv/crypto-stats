const mapping = {
    " ": "  ",
    "0": "<:crypto_0:805911108618944514>",
    "1": "<:crypto_1:805911090810191912>",
    "2": "<:crypto_2:805911073130545152>",
    "3": "<:crypto_3:805911053400539177>",
    "4": "<:crypto_4:805911035763490856>",
    "5": "<:crypto_5:805911144199225384>",
    "6": "<:crypto_6:805911243583520840>",
    "7": "<:crypto_7:805911221760426034>",
    "8": "<:crypto_8:805911206991888435>",
    "9": "<:crypto_9:805911193713377360>",
    "!": "!",
    "?": "?",
    "#": "#",
    "*": "*"
  };
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const os = require("os");
const ms = require("ms");

module.exports = {
    name: "botinfo",
    aliases: ["Botinfo", "BotInfo", "info", "Bot", "bot"],
    category: "Info",
    usage: "cs!BotInfo",
    exmaple: "cs!botinfo",
    description: `Information About The Bot`,
    run: async (client, message, args) => {
      "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
            mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
          });
            const guilds = 
                `${client.guilds.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
/*          const channels = 
                `${client.channels.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
            let sayy = 0;
            client.guilds.cache.forEach(x =>{
               
               sayy+= x.memberCount
               
             })
          const users = 
               
                 `${sayy}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
          
             }) */

	function duration(ms) {
      const sec = Math.floor((ms / 1000) % 60).toString();
      const min = Math.floor((ms / (1000 * 60)) % 60).toString();
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
      return `\`${days.padStart(1, "0")}d\` \`${hrs.padStart(2, "0")}h\` \`${min.padStart(2, "0")}m\` \`${sec.padStart(2, "0")}s\``;
    }
  


  const ziro = client.users.cache.get("484701017015975936")
  const popo = client.users.cache.get("636614566427492405")

   const embed = new MessageEmbed()
	.setColor('#f7931a')
	//.setDescription('**BotInfo**')
	.setThumbnail(client.user.displayAvatarURL())
	.addField('Developers:', `${ziro.tag} & ${popo.tag}`)
	.addField('Library:', `Discord.js v${require("discord.js").version.toString()}`, true)
  .addField(`Servers:`, `${guilds}`, true)
	//.addField(`Uptime:`, `${duration(client.uptime)}`, true)
	.setFooter(client.user.username, client.user.displayAvatarURL());

  message.channel.send(embed);
      }}
