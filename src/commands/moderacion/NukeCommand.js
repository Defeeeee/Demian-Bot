const { Role } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderacion', []);
  }

  async run(client, message, args) {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No podes usar este comando");
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Ni rol no tiene el permiso de administrar los canales");
    if (!message.author.roles.has(adminRole)) return message.channel.send('No podes usar esto');

    let reason = args.join("");
    const nukeChannel = message.channel;
    const adminRole = message.guild.roles.get('827322556649439243')
    
    if (!reason) reason = "No hay razon"
    if (!nukeChannel.deletable) return message.channel.send("Este canal no se puede borrar");

    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete().catch(err => console.log(err));
  }
}