const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "litecoin",
    aliases: ["ltc"],
    category: "Crypto",
    usage: "cs!litecoin",
    description: `Litecoin Price`,
    run: async (client, message, args) => {

      const data = await fetch("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR,BGN").then((res) =>
        res.json()
      );

            const embed = new MessageEmbed()
            .setAuthor(`Litecoin Price`)
            .setColor(`#f7931a`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/800688178221940736/803609507358965840/all_0014_Layer-13.png`)
            .addField(`USD`, `${data.USD}$`)
            .addField(`EUR`, `${data.EUR}€`)
            .addField(`BGN`, `${data.BGN}BGN`)
            .setFooter(client.user.username, client.user.displayAvatarURL());

            message.channel.send(embed)

        }
    }
