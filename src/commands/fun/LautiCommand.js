const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class LautiCommand extends BaseCommand {
  constructor() {
    super('lauti', 'fun', []);
  }

  async run(client, message, args) {
    const lautiEmbed = new Discord.MessageEmbed()
      .setTitle('Lauti Pared')
      .setImage('https://imgur.com/a/2hOsnDF')
      .setColor('RANDOM');

    message.channel.send(lautiEmbed);
  }
}