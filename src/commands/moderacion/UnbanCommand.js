const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderacion', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tenes permiso master")
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo los permisos necesarios");
    let reason = args.slice(1).join(" ");
    let userID = args[0];
    if (!reason) reason = 'No hay razon'
    if (!args[0]) return message.channel.send('Tenes que especificar a quien queres desbanear `e!unban ID razon`');
    if (!isNaN(args[0])) return message.channel.send('Ese ID no es un numero. `e!unban ID razon`');
    message.guild.fetchbans().then(async bans => {
      if (bans.size == 0) return message.channel.send('No hay ningun ban en este server');
      let bUser = bans.find(b => b.user.id == userID);
      if (!bUser) return message.channel.send('Ese ID no esta baneado');
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send('Algo no funciono intentando desbanear esa ID');
      }).then(() => {
        message.channel.send(`${arg[0]} ha sido desbanead@`);
      })
    });
  }
}