const { Command } = require('@notenoughupdates/discord-akairo');


class ipLocaslisationCommand extends Command {                         // Parameters of the command
    constructor() {
        super('iplocaslisation', {
           aliases: ['ipLoc', 'LocIP'],
           category: 'adminServOnly',
           args: [{ id: 'ip', type: 'string'}],
           description: {
            content: `Send the informations about an IP adress thanks to the API Geo-IP, The creator (AnenaX) of this command is in no way responsible for your actions. This command is for educational purposes, please use it on consenting persons ©`,
            usage: 'ipLoc ip',
            exemples: [`ipLoc 127.0.0.1`],
          },
        });
    }

    async exec(message, args) {             //beginning of the commands
      var geoip  = require('geoip-lite');   //library geo-ip 
      var iptoloc = args.ip;                //ip gave in the command
      var foo = geoip.lookup(iptoloc);      //check


      if (!args.ip) return message.channel.send({ embeds: [      //embed exemple
        this.client.functions.embed()
          .setColor('#7FC9FF')
          .setTitle("Exemple Of The Embed")
          .setURL('https://twitter.com/AnenaX_psd/')
          .setAuthor(message.author.username, message.author.avatarURL())
          .setDescription("```The creator (AnenaX) of this command is in no way responsible for your actions. This command is for educational purposes, please use it on consenting persons ©```")
          .setThumbnail("https://i.imgur.com/qYATAq6.gif")
          .addFields(
            { name: ':map: Range:', value: 'range: [ <low bound of IP block>, <high bound of IP block> ]'},
            { name: `:flag_white: Country:`, value: 'XX'},
            { name: ':round_pushpin: Region:', value: 'RR'},
            { name: ':alarm_clock: Timezone:', value: 'Country/Zone'},
            { name: ':cityscape: City:', value: "City Name"},
            { name: ':earth_africa: Ll:', value: '[<latitude>, <longitude>]'},
            { name: ':train2: Metro:', value: '<metro code>'},
            { name: ':o: Area:', value: '<accuracy_radius>'},
          )
          .setImage('https://i.imgur.com/4M7IWwP.gif')
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL())
      ]});

      var flag = foo.country.toLowerCase();                     //var flag of the embed 
                                                
      return message.channel.send({ embeds: [                   //embed 
        this.client.functions.embed()
          .setColor('#7FC9FF')
          .setTitle(iptoloc)
          .setURL('https://twitter.com/AnenaX_psd/')
          .setAuthor(message.author.username, message.author.avatarURL())
          .setDescription("```The creator (AnenaX) of this command is in no way responsible for your actions. This command is for educational purposes, please use it on consenting persons ©```")
          .setThumbnail("https://i.imgur.com/qYATAq6.gif")
          .addFields(
            { name: ':map: Range:', value: `${foo.range[0]} ; ${foo.range[1]}`},
            { name: `:flag_${flag}: Country:`, value: `${foo.country}`},
            { name: ':round_pushpin: Region:', value: `${foo.region}`},
            { name: ':alarm_clock: Timezone:', value: `${foo.timezone}`},
            { name: ':cityscape: City:', value: `${foo.city}`},
            { name: ':earth_africa: Ll:', value: `${foo.ll}`},
            { name: ':train2: Metro:', value: `${foo.metro}`},
            { name: ':o: Area:', value: `${foo.area}`},
          )
          .setTimestamp()
          .setImage('https://i.imgur.com/4M7IWwP.gif')
          .setFooter(message.author.username, message.author.avatarURL())
      ]});
    }
}

module.exports = ipLocaslisationCommand;
