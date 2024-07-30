const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "ethereum",
    aliases: ["eth"],
    category: "Crypto",
    usage: "cs!ethereum",
    description: `Ethereum Price`,
    run: async (client, message, args) => {

      const data = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR,BGN").then((res) =>
        res.json()
      );

            const embed = new MessageEmbed()
            .setAuthor(`Ethereum Price`)
            .setColor(`#f7931a`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/800688178221940736/803609526849896468/all_0017_Layer-11.png`)
            .addField(`USD`, `${data.USD}$`)
            .addField(`EUR`, `${data.EUR}€`)
            .addField(`BGN`, `${data.BGN}BGN`)
            .setFooter(client.user.username, client.user.displayAvatarURL());

            message.channel.send(embed)

        }
    }
