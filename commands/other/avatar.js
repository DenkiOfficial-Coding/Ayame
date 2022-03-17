const fs = require('fs');
const Discord = require("discord.js-v12-fix-ratelimit");
const config = require("../../config.json");
const discord = require('discord.js');

module.exports = {
    config: {
        name: "avatar",
        description: "Avatar",
        aliases: ["av", "avatar"], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // role tên yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        let member = msg.mentions.users.first() || msg.author

        let avatar = member.displayAvatarURL({size: 1024, dynamic: true})


        const embed = new Discord.MessageEmbed()
        .setColor('#39138b')
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)

        msg.channel.send(embed);
    }
}
