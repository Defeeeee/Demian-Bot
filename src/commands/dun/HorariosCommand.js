const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HorariosCommand extends BaseCommand {
  constructor() {
    super('horarios', 'dun', []);
  }

  run(client, message, args) {
    const horarioEmbed = new Discord.MessageEmbed()
      .setTitle("Horarios")
      .setDescription("Ed. Judia 8:05 a 9:05, Matematica 9:20 a 10:40, Ingles 10:55 a 12:15")
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setColor("#0B97B9")
      .setTimestamp();

      message.channel.send(horarioEmbed);
  }
}