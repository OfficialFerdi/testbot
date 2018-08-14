const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!banUser) return message.channel.send(":warning: Gebruiker niet gevonden. :warning:");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return mess.channel.send(":warning: Je hebt geen toegang voor dit. :warning:");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":warning: Deze gebruiker kan je niet bannen. :warning:");

    var ban = new discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff0000")
        .addBlankField()
        .addField("Verbannende Gebruiker", banUser)
        .addField("Verbanned door", message.author)
        .addField("Reden", reason)
        .addBlankField();

    var banChannel = message.guild.channels.find(`name`, "straffen");
    if (!banChannel) return message.guild.send(":warning: Kan de kanaal: straffen niet vinden.");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    return;

}

module.exports.help = {
    name: "ban"
}