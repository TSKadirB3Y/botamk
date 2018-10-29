const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://cdn.discordapp.com/attachments/497841988977295371/505704211833552897/gfsag.gif','https://cdn.discordapp.com/attachments/497841988977295371/505704221459611658/source.gif','https://cdn.discordapp.com/attachments/497841988977295371/505704258008514560/dwads.gif','https://cdn.discordapp.com/attachments/497841988977295371/505704259363405824/1512054133_1508982937_DADA.gif','https://cdn.discordapp.com/attachments/497841988977295371/505704299381129226/sdasf.gif','https://cdn.discordapp.com/attachments/497841988977295371/505704332935692288/xye4kyjsidfdnvgy742j.gif','https://cdn.discordapp.com/attachments/497841988977295371/505705337119309844/giphy.gif',
   'https://cdn.discordapp.com/attachments/497841988977295371/505705609031843850/absolute-vodka-animated-gif.gif' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['vodkaiç', 'votka','vodka'],
 permLevel: 0 ,
};

exports.help = {
 name: 'Vodka İç',
 description: 'Vodka İçer',
 usage: 'vodka'
};
