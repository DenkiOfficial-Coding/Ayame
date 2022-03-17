require('dotenv').config();
const config = require("./config.json");
const fs = require('fs');
const fix = require('./handlingglichdotcom');
fix();
const keepAlive = require("./server");
const Discord = require("discord.js-v12-fix-ratelimit");
const axios = require(`axios`)

setInterval(async function(){
    await Discord.Util.delayFor(0);
}, 1);
require('discord-reply-v12-fix-ratelimit');
const client = new Discord.Client({
    fetchAllMembers: true,
    intents: Discord.Intents.ALL,
    messageCacheMaxSize: 500,
    disableMentions: "everyone",
    ws:{intents: Discord.Intents.ALL},
    shardId: process.argv[1],
    shardCount: process.argv[2]
});
client.setMaxListeners(0);

client.on('ready', () => {
    console.log(`${client.user.tag} đã online. servers!`)
    client.user.setActivity(`,help | #SaveUkraine | Server:${client.guilds.cache.size}/User:${client.users.cache.size}`, ({type: "WATCHING"}))
})

client.commands = new Map();
client.aliases = new Map();
client.setbc = [];
client.settx = [];
client.setrd = new Map();

var category = ["fun", "gamble", "info", "other", "nsfw"];

category.forEach(async function (subdir){
    let commandFiles = fs.readdirSync(`./commands/${subdir}`).filter(file => file.endsWith(".js"));
    for(const file of commandFiles)
    {
        const command = require(`./commands/${subdir}/${file}`);
        client.commands.set(command.config.name, command);
        command.config.aliases.forEach(alias => {
            client.aliases.set(alias, command);
        });
    }
})

client.once("ready", async () => {
    console.log(`Logged in as ${client.user.tag} !`);
    await client.channels.cache.forEach(async (channel) => {
        if(channel.type != "category" && channel.type != "voice"){
            try{
                await channel.messages.fetch({ limit: 20 });
            } catch(err) {console.log(`<#${channel.id}>`)}
            try{
                await channel.messages.fetchPinned();
            } catch(err) {console.log(`<#${channel.id}>`)}
        }
    });
    await client.guilds.cache.forEach(async (guild) => {
        try{
            await guild.fetchBans();
        } catch(err) {console.log(`${guild.id}`)}
    });
    /*
    await client.guilds.cache.forEach(async (guild) => {
        try
        {
            await guild.members.fetch({withPresences: true});
        } catch(err) {console.log(err)}
    });
    */
    console.log(`Fetch things completed !`);
});

client.on("message", async (msg) => {
    if((msg.channel.type == "dm") || (msg.author.bot == true))
        return;
    if(!msg.content.toLowerCase().startsWith((config.Bot_Info.prefix).toLocaleLowerCase()))
        return;
    
    let args = msg.content.slice(config.Bot_Info.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(!(client.commands.has(command) || client.aliases.has(command))){
        return;
    }
    let cmd;
    if(client.commands.has(command)){
        cmd = await client.commands.get(command);
    }
    else{
        cmd = await client.aliases.get(command);
    }
    if(cmd.config.exclude_guilds.includes(msg.guild.id)){
        return;
    }
    if(msg.author.id != config.Bot_Info.authorid || msg.guild.id == "915087437305376817"){
        if(!(cmd.config.only_channels.includes("all") || cmd.config.only_channels.includes(msg.channel.id))){
            let mystr = ``;
            for(let i = 0; i < cmd.config.only_channels.length - 1; i++){
                mystr = `${mystr}**<#${cmd.config.only_channels[i]}>**, `;
            }
            mystr = `${mystr}**<#${cmd.config.only_channels[cmd.config.only_channels.length - 1]}>**`;
            return await msg.lineReply(`🚫 Bạn chỉ có thể sử dụng lệnh \`${command}\` ở các channel : ${mystr}`);
        }
    }

    await cmd.execute(msg);
});//

keepAlive();

let login = setInterval(async function(){
    try{
        let x = await client.login(process.env.TOKEN);
        if(x){
            clearInterval(login);
        }
    } catch(err){console.log(err)};
}, 1000);

const simsimichannel = `951414160942592000`
client.on(`message`, async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.channel.id != simsimichannel) return
  let res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn`); //https://api.simsimi.net/v2/?text=hi&lc=vn
  message.channel.startTyping();
  message.lineReply(res.data.success);
})

client.on(`message`, async message => {
    if (message.content.startsWith(`invite`)) {
      message.channel.send(`**Link đây: https://discord.com/api/oauth2/authorize?client_id=949154515083477023&permissions=8&scope=bot**`)
    }
});

client.on(`message`, async message => {
    if (message.content.startsWith(`count`)) {
      message.channel.send(`**Server: ${client.guilds.cache.size}, User: ${client.users.cache.size}**`)
    }
});

client.on(`message`, async message => {
    if (message.content.startsWith(`hutao`)) {
      message.channel.send(`**Cho tui đút đét đc hong nào**`, {files: ["https://cdn.discordapp.com/attachments/948906974945378337/952505658782134282/hutao-hu-tao-gnehsin.gif"]})
    }
});

client.on(`message`, async message => {
    if (message.content.startsWith(`duy`)) {
      message.channel.send(`**Đang sell ny giá 100k owo nè mấy chế**`, {files: ["https://cdn.discordapp.com/avatars/876322411056885840/029e4e4d543789f4f750f48939a1188c.png"]})
    }
});

client.on(`message`, async message => {
    if (message.content.startsWith(`update`)) {
      message.channel.send(`**Các Lệnh Mới: fetish, hentai (NSFW)**`, {files: ["https://cdn.discordapp.com/attachments/948906974945378337/950734321709363260/unknown.png"]})
    }
});

client.on(`message`, async message => {
    if (message.content.startsWith(`ayame`)) {
      message.channel.send(`**☆*: .｡. o(≧▽≦)o .｡.:*☆**`, {files: ["https://cdn.discordapp.com/attachments/948906974945378337/952507985941397504/nakiri-ayame-ayame.gif"]})
    }
});

client.on(`message`, async message => {
    if (message.content.startsWith(`mori`)) {
      message.channel.send(`**(●'◡'●)**`, {files: ["https://cdn.discordapp.com/attachments/948906974945378337/952509574710177853/mori-calliope-hololive.gif"]})
    }
});