const config = require('./config.json')

const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./index.js', {
  token: "OTQ5MTU0NTE1MDgzNDc3MDIz.YiGPBg.HT4EVgu0Hvex6UEjHem2b8wtWNk",
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));