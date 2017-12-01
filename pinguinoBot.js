/* pinguinoBot.js - Discord chat bot 

	Prepared with guidance from An Idiot's Guide

		https://anidiotsguide.gitbooks.io/discord-js-bot-guide/getting-started/the-long-version.html

*/

// This version is simplified to make sure everything is running smoothly thus far


//const fs = require("fs")					// Related to changing config file
const Discord = require("discord.js");
const client = new Discord.Client(); 		// represents <Client> class; some call it bot
const config = require("./config.json"); 	// pairs config file to bot

client.login(config.token);					// Logs the bot in using token from the config file

client.on("ready", () => {
	console.log("I am ready!");
});


// Begin handling for how bot handles messages
client.on("message", (message) => {
	
	// If msg from bot or not beginning with prefix, skip
	if (!message.content.startsWith(config.prefix) || message.author.bot) return; 

	// Trims command into array of arguments
	// Returns command in all lowercase letters
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g); 	
	const command = args.shift().toLowerCase();


	if(command === 'ping') {
		message.channel.send('Pong!');
	} else 

	if(command === 'koncha') {
		message.channel.send("Weeb friendly server! <:KonCha:386268769338654720>");
		// Type \:EmojiName: in chat to get the proper ID for custom emojis
	}



});


