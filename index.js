const discord = require("discord.js");
const botconfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kan geen files vinden.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen!`);

        bot.commands.set(fileGet.help, fileGet);

    })

});

bot.on("ready", async () => {

    console.log(`${bot.user.username} is nu online!`);

    bot.user.setActivity("Testen Van Codes", { type: "PLAYING" });

});

bot.on("message", async message => {

    // Als bot bericht stuurt dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botconfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);

});


bot.login(botconfig.token);