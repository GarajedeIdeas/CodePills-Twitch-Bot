const tmi = require('tmi.js');
const say = require('say');

const opts = {
    identity: {
        username: 'garaje_de_ideas',
        password: 'oauth:8fv0xmx4q9q9db6um1ls4eh9fu7x6f'
    },
    channels: ['garaje_de_ideas']
}

const client = new tmi.client(opts);

client.on('message', onMessage);
client.on('connected', onConnected);

client.connect();

function onConnected(addr, port) {
    console.log(`Bot conectado en ${addr} y ${port}`);
}

function onMessage(channel, tags, message, self) {
    if (!message.startsWith('!')) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'mensaje') {
        client.say(channel, `@${tags.username}, tu mensaje es: ${args.join(' ')}`);
        say.speak(args.join(' '));
    }
}