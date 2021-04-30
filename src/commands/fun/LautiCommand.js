const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class LautiCommand extends BaseCommand {
  constructor() {
    super('lauti', 'fun', []);
  }

  async run(client, message, args) {
    const lautiEmbed = new Discord.MessageEmbed()
      .setTitle('Lauti Pared')
      .attachFiles(['../assets/image0.jpeg'])
      .setImage('attachment://image0.jpeg')
      .setColor('RANDOM');

    message.channel.send(lautiEmbed);
  }
}