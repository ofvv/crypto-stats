const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "tether",
    aliases: ["usdt"],
    category: "Crypto",
    usage: "cs!ripple",
    description: `Ripple Price`,
    run: async (client, message, args) => {

      const data = await fetch("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD,EUR,BGN").then((res) =>
        res.json()
      );

            const embed = new MessageEmbed()
            .setAuthor(`Tether Price`)
            .setColor(`#f7931a`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/800688178221940736/803609468989866034/all_0007_Layer-18.png`)
            .addField(`USD`, `${data.USD}$`)
            .addField(`EUR`, `${data.EUR}€`)
            .addField(`BGN`, `${data.BGN}BGN`)
            .setFooter(client.user.username, client.user.displayAvatarURL());

            message.channel.send(embed)

        }
    }
