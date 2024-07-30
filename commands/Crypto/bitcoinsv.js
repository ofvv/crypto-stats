const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "bitcoinsv",
    aliases: ["bsv"],
    category: "Crypto",
    usage: "cs!bitcoinsv",
    description: `Bitcoin SV Price`,
    run: async (client, message, args) => {

      const data = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BSV&tsyms=USD,EUR,BGN").then((res) =>
        res.json()
      );

            const embed = new MessageEmbed()
            .setAuthor(`Bitcoin SV Price`)
            .setColor(`#f7931a`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/800688178221940736/803609458328076328/all_0004_Layer-9.png`)
            .addField(`USD`, `${data.USD}$`)
            .addField(`EUR`, `${data.EUR}€`)
            .addField(`BGN`, `${data.BGN}BGN`)
            .setFooter(client.user.username, client.user.displayAvatarURL());

            message.channel.send(embed)

        }
    }
