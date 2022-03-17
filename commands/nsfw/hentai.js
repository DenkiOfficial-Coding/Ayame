const fs = require('fs');
const Discord = require("discord.js-v12-fix-ratelimit");
const config = require("../../config.json");
const { fetchJson } = require('./nsfw/fetcher')


module.exports = {
    config: {
        name: "hentai",
        description: "hentai",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // role tên yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        if (!msg.channel.nsfw) {
            return msg.channel.send('**Lệnh này chỉ sài được ở kênh NSFW thui nha**')
        }
        const randSub = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
        const tag = randSub[Math.floor(Math.random() * randSub.length)]

        const m = await msg.channel.send(`**Search image from ${tag}...**`)
        fetchJson(`https://meme-api.herokuapp.com/gimme/${tag}`).then(async (res) => {
            const { title, url, author } = res
            const embed = new Discord.MessageEmbed()
                .setTitle(title)
                .setImage(url)
                .setColor('BLUE')
                .setTimestamp()
                .setFooter('Some Fetish')

            await m.edit({content: "", embed: embed});
        })
    }
}
