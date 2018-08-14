const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setTitle("**--->BotInfo<---**")
        .setDescription("Bot informatie")
        .addBlankField()
        .setColor("#ff6600")
        .setThumbnail(botIcon)
        .addField("Bot naam", bot.user.username)
        .addField("Bot is gemaakt op", bot.user.createdAt)
        .addBlankField();

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "botinfo"
}