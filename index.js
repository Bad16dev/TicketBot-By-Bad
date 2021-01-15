const express = require("express");
const app = express();
///////////Bad - بدرو
app.listen(() => console.log("Bad Ro Start Now"));
app.listen(() => console.log("Dev Server : https://discord.gg/axmjaaX"));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///////////Bad - بدرو

const Discord = require("discord.js");///////////Bad - بدرو
///////////Bad - بدرو
const client = new Discord.Client();
const arraySort = require('array-sort');///////////Bad - بدرو

const table = require('table');///////////Bad - بدرو
const yt = require('ytdl-core');///////////Bad - بدرو
const ytdl = require("ytdl-core");///////////Bad - بدرو
const canvas = require("canvas");///////////Bad - بدرو
const Canvas = require("canvas");///////////Bad - بدرو
const fetchVideoInfo = require("youtube-info");///////////Bad - بدرو
const botversion = require('./package.json').version;///////////Bad - بدرو
const simpleytapi = require('simple-youtube-api')///////////Bad - بدرو
const moment = require("moment");///////////Bad - بدرو
const fs = require('fs');///////////Bad - بدرو
const util = require("util")///////////Bad - بدرو
const opus = require("node-opus");///////////Bad - بدرو
const ms = require("ms");///////////Bad - بدرو
const jimp = require("jimp");///////////Bad - بدرو
const { get } = require('snekfetch');///////////Bad - بدرو
const dateFormat = require('dateformat');///////////Bad - بدرو
const YouTube = require('simple-youtube-api');///////////Bad - بدرو
const youtube = new YouTube('');///////////Bad - بدرو
const getYoutubeID = require('get-youtube-id');///////////Bad - بدرو
const yt_api_key = "";
const pretty = require("pretty-ms");///////////Bad - بدرو
const queue = new Map();///////////Bad - بدرو
/////////////////////////Bad - بدرو

var prefix = "+"//برفكس لي تبيه///////////Bad - بدرو
var id = ""//ايديك///////////Bad - بدرو

////////////////////////////////Bad - بدرو
///////////Bad - بدرو
client.on('ready', () => {///////////Bad - بدرو
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Servers! [ " ${client.guilds.size} " ]         `);
  console.log(`Users! [ " ${client.users.size} " ]             `);
  console.log(`Channels! [ " ${client.channels.size} " ]       `);
  client.user.setStatus("online");///////////Bad - بدرو
    client.user.setActivity("");///////////Bad - بدرو
});///////////Bad - بدرو

///////////Bad - بدرو
client.on('message', message => {
    if(message.content.startsWith(prefix + "ticket")) {
		message.delete();
	let embed = new Discord.RichEmbed()
  .setAuthor(`Bad TicketBot`, message.guild.avatarURL)
	.setColor('#000000')

	.setFooter(`${message.author.tag}`, message.author.avatarURL)///////////Bad - بدرو
      .setDescription(`**
     © | BadTicket Bot | ©  
	 
To create a ticket react with : 📨
**`)
	///////////Bad - بدرو
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('📨')
///////////Bad - بدرو
    
	let filter1 = (reaction, user) => reaction.emoji.name === '📨' && user.id === message.author.id;

    ///////////Bad - بدرو
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
///////////Bad - بدرو

collector1.on('collect', r => {///////////Bad - بدرو

 message.guild///////////Bad - بدرو
      .createChannel(`New Ticket`, "text")
      .then(c => {
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,///////////Bad - بدرو
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,///////////Bad - بدرو
          READ_MESSAGES: true
        });
      
        const embed = new Discord.RichEmbed()///////////Bad - بدرو
          .setColor(0xcf40fa)
          .addField(
            `Welcome ${message.author.username}!`,
          `  Please write the reason for opening the ticket. `
          )
          .setTimestamp();
        c.send({///////////Bad - بدرو
          embed: embed
        });
      })
      .catch(console.error);///////////Bad - بدرو
  }
   )
                }///////////Bad - بدرو
        )///////////Bad - بدرو
      }///////////Bad - بدرو
});///////////Bad - بدرو

client.on('message', message => {
  if(message.content.startsWith(prefix + "delete")){///////////Bad - بدرو
    let embed = new Discord.RichEmbed()
    .setTitle(`Are you Sure ? (Say Yes.) `)        
 message.channel.send(embed)      .then((m) => {
      message.channel.awaitMessages(response => response.content === 'yes', {///////////Bad - بدرو
        max: 1,///////////Bad - بدرو
        time: 10000,///////////Bad - بدرو
        errors: ['time'],///////////Bad - بدرو
      })///////////Bad - بدرو
          .then((collected) => {
          message.channel.delete();///////////Bad - بدرو
        }) 
       .catch(() => {      
///////////Bad - بدرو
        })///////////Bad - بدرو
 })///////////Bad - بدرو
 ///////////Bad - بدرو
  }///////////Bad - بدرو
})///////////Bad - بدرو
///////////Bad - بدرو
    client.login(process.env.token);///////////Bad - بدرو
    ///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو///////////Bad - بدرو
