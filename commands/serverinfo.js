const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setTitle("**--->ServerInfo<---**")
        .setColor("#00b300")
        .setThumbnail(icon)
        .addBlankField()
        .addField("bot naam", bot.user.username)
        .addField("Je bent gejoind op", message.member.joinedAt)
        .addField("Members in totaal", message.guild.memberCount)
        .addBlankField();

    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "serverinfo"
}