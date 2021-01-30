const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'creer un embed',
    execute(message) {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Mon titre")
        .setDescription('[Recherche google](https://google.fr)')
        .setColor("RANDOM")
        .addField())
    }
}