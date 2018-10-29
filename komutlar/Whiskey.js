const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://cdn.discordapp.com/attachments/497841988977295371/505700722336202755/1NPx.gif','https://cdn.discordapp.com/attachments/497841988977295371/505700762890928138/a0041a5bdfc7008de07eb91daf89adef.gif','https://cdn.discordapp.com/attachments/497841988977295371/505700812887031818/sdad.gif','https://cdn.discordapp.com/attachments/497841988977295371/505700944848355349/HospitableWindyEft-size_restricted.gif','https://cdn.discordapp.com/attachments/497841988977295371/505700944848355349/HospitableWindyEft-size_restricted.gif','https://cdn.discordapp.com/attachments/497841988977295371/505700970966155264/dsad.gif','https://cdn.discordapp.com/attachments/497841988977295371/505701090667397140/tenor.gif',
   'https://cdn.discordapp.com/attachments/497841988977295371/505701177200082945/giphy.gif' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['wiskiiç', 'wiski','whiskeyic','whiskey'],
 permLevel: 0 ,
};

exports.help = {
 name: 'Whiskey İç',
 description: 'Whiskey İçer',
 usage: 'whiskey'
};
