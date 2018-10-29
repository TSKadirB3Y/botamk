const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://cdn.discordapp.com/attachments/499275327541870592/505488004018864128/giphy-downsized-1493335992.gif','https://cdn.discordapp.com/attachments/499275327541870592/505488391127695360/giphys.gif','https://cdn.discordapp.com/attachments/499275327541870592/505488442814365731/giphy.gif','https://cdn.discordapp.com/attachments/499275327541870592/505488483272622091/s.gif','https://cdn.discordapp.com/attachments/499275327541870592/505489601469743114/beaumont-wine-pouring.gif','https://cdn.discordapp.com/attachments/499275327541870592/505489632012795914/image_86040517173625437130.gif','https://cdn.discordapp.com/attachments/499275327541870592/505490032535142410/sdasd.gif',
   'https://cdn.discordapp.com/attachments/499275327541870592/505490088743141389/a.gif' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['şarapiç', 'sarap','sarapic'],
 permLevel: 0 ,
};

exports.help = {
 name: 'Şarap İç',
 description: 'ÇILGINLIK YAP BİÇIS',
 usage: 'şarap'
};
