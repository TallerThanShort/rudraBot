module.exports = {
    name: 'info',
    description: 'sends info',
    execute(message, args, Discord){
        const generalEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Command Help/Bot Info')
        .setDescription('Here is a list of all the commands')
        .addFields(
        {name: 'commands', value: 'info, ping'},
        {name: 'prefix', value: 'ar?'},
        {name: 'guild count', value: `${client.guilds.cache.size}`}
        )
        .setFooter('Bot by TallerThanShort')

        message.channel.send(generalEmbed);
    }
}
