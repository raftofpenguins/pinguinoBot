/* pinguinoBot.js - Discord chat bot 

	Prepared with guidance from An Idiot's Guide

		https://anidiotsguide.gitbooks.io/discord-js-bot-guide/getting-started/the-long-version.html

*/

// This version is simplified to make sure everything is running smoothly thus far


//const fs = require("fs")					// Related to changing config file
const Discord = require("discord.js");
const client = new Discord.Client(); 		// represents <Client> class; some call it bot
const config = require("./config.json"); 	// pairs config file to bot

client.login(config.token);

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});


