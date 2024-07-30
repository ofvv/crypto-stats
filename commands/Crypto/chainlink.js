const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "chainlink",
    aliases: ["link"],
    category: "Crypto",
    usage: "cs!chainlink",
    description: `Chainlink Price`,
    run: async (client, message, args) => {

      const data = await fetch("https://min-api.cryptocompare.com/data/price?fsym=LINK&tsyms=USD,EUR,BGN").then((res) =>
        res.json()
      );

            const embed = new MessageEmbed()
            .setAuthor(`Chainlink Price`)
            .setColor(`#f7931a`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/800688178221940736/803609501785653278/all_0013_Layer-24.png`)
            .addField(`USD`, `${data.USD}$`)
            .addField(`EUR`, `${data.EUR}€`)
            .addField(`BGN`, `${data.BGN}BGN`)
            .setFooter(client.user.username, client.user.displayAvatarURL());

            message.channel.send(embed)

        }
    }