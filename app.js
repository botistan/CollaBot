const Discord = require('discord.js');
const client = new Discord.Client();
/** 
 * Token disponible sur Discord
 * Se connecter ici avec son compte https://discordapp.com/developers
 * Créer une application. Une fois créé aller dans le menu "Bot"
 * Dans la page "Bots", le bot a un token, cliquer sur "Révéler le token" et le copier coller dans cette variable
 */
const botToken = 'NTk3ODMxNzg3MDUzNDQ5MjE5.XSX7bw.mfxUguhY47DBlYp1qgSsljIeSs4'

// Quand le client est pret
client.on('ready', () => {
    // montre l'utilisateur
    console.log(`Logged in as ${client.user.username}!`);
});

// Quand un nouveau message est publié.
client.on('message', (msg) => {
    console.group(msg, 'current message');
    // Répond Pong! a un message qui dit "ping"
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.on('channelCreate', (channel) => {
    console.group(channel.id, 'channel id');
});

// Connecter le client
client.login(botToken);