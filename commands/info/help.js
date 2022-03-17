const fs = require('fs');
const Discord = require("discord.js-v12-fix-ratelimit");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "help",
        description: "Danh sách lệnh",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // role tên yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        msg.channel.send("**Loading**").then(async (m) => {
            let ping = m.createdTimestamp - msg.createdTimestamp;
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**Danh sách Lệnh** \n <a:muiten03:949480004801142855> *Lệnh Fun* \n <a:CMC_Blobrainbow:949480268975206400> **hutao, duysimp** \n <a:muiten03:949480004801142855> *Lệnh Cờ Bạc* \n <a:CMC_Blobrainbow:949480268975206400> **baucua, taixiu, random** \n <a:muiten03:949480004801142855> *Lệnh Info* \n <a:CMC_Blobrainbow:949480268975206400> **help, ping** \n <a:muiten03:949480004801142855> *Lệnh Khác* \n <a:CMC_Blobrainbow:949480268975206400> **math, pick, luatcb** \n *** BOT SẼ ĐƯỢC UPDATE THÊM TRONG TƯƠNG LAI NHA ***`)
            await m.edit({content: "", embed: embed});
        })
    }
}
