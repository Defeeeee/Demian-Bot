const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const ms = require('ms');

module.exports = class TempmuteCommand extends BaseCommand {
  constructor() {
    super('tempmute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('No podes usar ese comando');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('No tengo permisos para usar ese comando');

    const muteRole = message.guild.roles.cache.get('743233575322910892');
    const memberRole = message.guild.roles.cache.get('768374919155154965');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let time = args[1];
    let reason = args.slice(2).join(" ");

    const tempmuteEmbed = new discord.MessageEmbed()
      .setTitle(`Fuiste muteado temporalmente en ${message.guild.name}`)
      .addField(`Duracion ${time}`, `Razon: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`Defe Bot desarrollado por Federico Diaz Nemeth`);
      
    const tempmutefinishedEmbed = new discord.MessageEmbed()
      .setTitle(`Fuiste desmuteado en  ${message.guild.name}`)
      .setColor('RANDOM')
      .setFooter(`Defe Bot desarrollado por Federico Diaz Nemeth`);

    if (!args[0]) return message.channel.send('Tenes que poner un miembro y una duracion');
    if (!mentionedMember) return message.channel.send('No encuentro el miembro');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('ðŸ›‘You cannot tempmute a member with the same or highest role as you.ðŸ›‘');
    if (!time) return message.channel.send('Tenes que poner una duracion');
    if (reason) reason = 'No hay razon';

    await mentionedMember.roles.add(muteRole).catch(err => console.log(err));
      await mentionedMember.roles.remove(memberRole).catch(err => console.log(err));
      await mentionedMember.send(tempmuteEmbed).catch(err => console.log(err)); message.channel.send(`${mentionedMember} Fue muteado`)
    
    setTimeout(async function () {
      await mentionedMember.roles.remove(muteRole).catch(err => console.log(err));
      await mentionedMember.roles.add(memberRole).catch(err => console.log(err)); message.channel.send(`${mentionedMember} Fue desmuteado`)
      await mentionedMember.send(tempmutefinishedEmbed).catch(err => console.log(err));
    }, ms(time));
  }
}