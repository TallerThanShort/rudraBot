module.exports = {
    name: 'info',
    description: 'sends info',
    execute(message, args, Discord, client){
        const generalEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Command Help/Bot Info')
        .setDescription('Here is a list of all the commands')
        .addFields(
        {name: 'commands', value: 'info, ping'},
        {name: 'prefix', value: 'ar?'},
        {name: 'guild count', value: `${client.guilds.cache.size}`},
        {name: 'more bots', value: 'The creator of this bot recommends SYSbot or 8Ball Bot'}
        )
        .setFooter('Bot by TallerThanShort')

        message.channel.send(generalEmbed);
    }
}
