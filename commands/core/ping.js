const ms = require('ms');
const { Translate } = require('../../translate');

module.exports = {
    name: 'ping',
    description: await Translate("Get the ping of the bot!"),

    async execute({ client, inter }) {
        await inter.editReply("Ping?");
        inter.editReply(await Translate(`Pong! API Latency is <${Math.round(client.ws.ping)}ms 🛰️>, last heartbeat calculated <${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}> ago`));
    }
};