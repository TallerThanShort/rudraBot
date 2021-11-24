const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'ar?';

const fs = require('fs');
const { ClientRequest } = require('http');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', async () => {
    const sta1 = "#welcome"
    const sta2 = "Made by TallerThanShort"
    const sta3 = "chat is ded :O"
    const sta4 = "my prefix is ar?"
    const sta5 = `on ${client.guilds.cache.size} servers`
    const sta6 = "oh no"
    var stats = [sta1, sta2, sta3, sta4, sta5, sta6]
    var randomStatus = stats[Math.floor(Math.random()*stats.length)];
        await client.user.setActivity(randomStatus, { type: "WATCHING", url: "https://www.twitch.tv/ckstudios2003" });
        console.log(`Rudras Bot is on ${client.guilds.cache.size} servers!`);
        console.log('status set to ' + randomStatus);
    });

    client.on('guildMemberAdd', guildMember =>{
        const mess1 = `welcome to the squad <@${guildMember.user.id}>`
        const mess2 = `welcome fellow programmer <@${guildMember.user.id}>` 
        const mess3 = `welcome <@${guildMember.user.id}>`
        const mess4 = `glad you are here <@${guildMember.user.id}>`
        const mess5 = `<@${guildMember.user.id}> just arrived!`
        const mess6 = `Swaggy <@${guildMember.user.id}> joined!`
        const mess7 = `An Epic <@${guildMember.user.id}> joined!`
        const mess8 = `An Epic Explorer joined! Welcome <@${guildMember.user.id}>!!`
        const mess9 = `Добро пожаловать в клан <@${guildMember.user.id}>`
        var messa = [mess1, mess2, mess3, mess4, mess5, mess6, mess7, mess8, mess9]
        var randMess = messa[Math.floor(Math.random()*messa.length)];

        guildMember.guild.channels.cache.find(i => i.name === 'welcome').send(randMess);
    });

    client.on('message', message =>{
        if (!message.guild) return;
        if(!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    
        if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        } else if(command === 'info'){
            client.commands.get('info').execute(message, args, Discord, client);
        }
    });

    client.login(process.env.token);
