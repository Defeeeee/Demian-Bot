const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class LautiCommand extends BaseCommand {
  constructor() {
    super('lauti', 'fun', []);
  }

  async run(client, message, args) {
    const lautiEmbed = new Discord.MessageEmbed()
      .setTitle('Lauti Pared')
      .setImage('https://cdn.discordapp.com/attachments/621421106561155102/829138403785834527/image0.png')
      .setColor('RANDOM');

    message.channel.send(lautiEmbed);
  }
}