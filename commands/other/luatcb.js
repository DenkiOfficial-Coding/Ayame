const fs = require('fs');
const Discord = require("discord.js-v12-fix-ratelimit");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "luatcb",
        description: "Cờ Bạc",
        aliases: ["luat", "luatcb", "luatcobac"], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // role tên yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        msg.channel.send("***<a:cmc_yay:949563533077671986> LUẬT CASINO CMC COMMUNITY <a:cmc_yay:949563533077671986>*** \n <a:cmc_lacbaucua1:949204728833794098>        *BẦU CUA*        <a:cmc_lacbaucua1:949204728833794098> \n <a:cmc_muiten03:949480004801142855> **Give tiền theo số Min và Max mà Host quy định, rồi chọn con bạn muốn đặt ( max 2 con ).** \n <a:cmc_muiten03:949480004801142855> **Cách chơi: chọn 1 hoặc 2 trong 6 con: bầu, cua, nai, cá, gà, tôm.Khi Host lắc ra x1 nhận x2 tiền, x2 nhận x3, x3 nhận x4 tiền.** \n <a:cmc_muiten03:949480004801142855> **Sau khi Host hoặc thư kí lên list, bạn có 10s để check, nếu sai vui lòng báo Host hoặc thư kí để sửa, nếu sai mà không báo sau khi lắc xong mới báo Host sẽ không chịu trách nhiệm.** ")
        msg.channel.send("<a:cmc_taixiu:949207657661751336>        *TÀI XỈU*        <a:cmc_taixiu:949207657661751336>\n <a:cmc_muiten03:949480004801142855> **Cửa Tài 11-17, Cửa Xỉu 4-10. Chẵn | Lẻ. Đặt tối đa 2 cửa !!!** \n <a:cmc_bonk:949563152398426132> **Give trước khi host ping = scam !!!** \n <a:cmc_bonk:949563152398426132> **Give khi host đang trả tiền = scam !!!** \n <a:cmc_bonk:949563152398426132> **Give khi chốt list sau gạch host = scam !!!** \n <a:cmc_bonk:949563152398426132> **Trong lúc Host give tiền vui lòng ko tương tác. Chat = scam !!!** \n <a:cmc_bonk:949563152398426132> **Nếu phá sẽ bị timeout 1 ngày !!! ")
        msg.channel.send("<a:cmc_chamthan:949563206924394516>        *RANDOM*        <a:cmc_chamthan:949563206924394516> \n <a:cmc_muiten03:949480004801142855> **Host lên ga và random theo thứ tự trên ga, vui lòng coi kĩ số Host ra trên ga rồi hẵng pick. Thắng thì lụm, thua thì give tiền cho người thắng. ( Người có số to nhất là người thắng. )** \n <a:cmc_muiten03:949480004801142855> **Người chơi sẽ cash tiền lên cho host trước khi chơi.** \n <a:cmc_muiten03:949480004801142855> **Vui lòng không xả số !!!** \n <a:cmc_muiten03:949480004801142855> **Note mà không ping Mod sòng = không giải quyết.** \n")
        msg.channel.send("**QUY ĐỊNH** \n <a:cmc_yay:949563533077671986> Sòng 1 rd 99-499: lên ga từ 3w và tối đa là 5w \n <a:cmc_yay:949563533077671986> Sòng 2 rd 999 trở lên: lên ga từ 2w và tối đa 4w \n <a:cmc_yay:949563533077671986> Sòng 3: đấm bill hoặc solo, cần trung gian vui lòng liên hệ Mod, không trung gian scam tự chiu, bên Mod chỉ ban. Phí trung gian là 5% tổng tiền bill.")
    }
}
