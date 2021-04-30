const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ComandosCommand extends BaseCommand {
  constructor() {
    super('comandos', 'tools', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("No podes usar ese comando");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send("No tengo permisos para usar ese comando")
    
    //      .addField('')//
    const commmandEmbed = new Discord.MessageEmbed()
      .setTitle(`Comandos`)
      .addField(`Diversion`, '\u200b')
      .addField('Say: Basicamente sirve para que el bot diga cualquier cosa `!say [lo que quieras]`', '\u200b')
      .addField('Lauti: lauti', '\u200b')
      .addField('Moderacion', '\u200b')
      .addField('Ban: Para banear miembros `!ban @usuario {razon}`', '\u200b')
      .addField('Kick: Para expulsar a miembros `!kick @usuario {razon}`', '\u200b')
      .addField('Nickname: Para cambiar el nick de un miembro `!nickname @usuario {razon}`', '\u200b')
      .addField('Nuke: borra todos los mensajes del canal donde se escriba, borra el canal y crea uno con los mismos permisos, `!nuke {razon}` este comando esta puesto para que solo los roles que tengan el permiso "ADMINISTRADOR" lo puedan usar', '\u200b')
      .addField('Purge: Borra los mensajes indicados en el comando dentro de el mismo canal en el rango de 2 a 100 mensajes, `!purge numero`', '\u200b')
      .addField('Recruit: para sumar nuevos mods, `!recruit @user`', '\u200b')
      .addField('Tempmod: Para sumar mods temporales, `!tempmod @user tiempo`', '\u200b')
      .addField('Tempmute: Para mutear temporalmente, `!tempmute @user tiempo`', '\u200b')
      .addField('Unban: Para desbanear miembros, `!unban ID`', '\u200b')
      .addField('modout o Unrecruit: Para sacar mods, `!unrecruit @user`', '\u200b')
      .setFooter('Demian Bot desarrollado por Federico Diaz Nemeth');

    message.channel.send(commmandEmbed)
  }
}