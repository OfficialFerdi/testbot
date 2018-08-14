const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        // !kick @OfficieelFerdi redenen hier.

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

        if (!kickUser) return message.channel.send(":warning: Gebruiker niet gevonden. :warning:");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return mess.channel.send(":warning: Je hebt geen toegang voor dit. :warning:");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":warning: Deze gebruiker kan je niet kicken. :warning:");

        var kick = new discord.RichEmbed()
            .setDescription("Kick")
            .setColor("#ff0000")
            .addBlankField()
            .addField("Verwijderde Gebruiker", kickUser)
            .addField("Verwijderd door", message.author)
            .addField("Reden", reason)
            .addBlankField();

        var kickChannel = message.guild.channels.find(`name`, "straffen");
        if (!kickChannel) return message.guild.send(":warning: Kan de kanaal: straffen niet vinden.");

        message.guild.member(kickUser).kick(reason);

        kickChannel.send(kick);

        return;

    }

module.exports.help = {
    name: "kick"
}