/* pinguinoBot.js - Discord chat bot 

	Prepared with guidance from An Idiot's Guide

		https://anidiotsguide.gitbooks.io/discord-js-bot-guide/getting-started/the-long-version.html

*/

// This version is simplified to make sure everything is running smoothly thus far


//const fs = require("fs")					// Related to changing config file
const Discord = require("discord.js");
const client = new Discord.Client(); 		// represents <Client> class; some call it bot
const config = require("./config.json"); 	// pairs config file to bot
//import Math;

client.login(config.token);					// Logs the bot in using token from the config file

client.on("ready", () => {
	console.log("I am ready!");
});


// Begin handling for how bot handles messages
client.on("message", (message) => {
	
	// If msg from bot or not beginning with prefix, skip
	if (!message.content.startsWith(config.prefix) || message.author.bot) return; 

	// Trims command into array of arguments
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g); 	

	// Returns command in all lowercase letters
	const command = args.shift().toLowerCase();

	if(command === 'ping') {
		message.channel.send('Pong!');
	} else 

	if(command === 'beep') {
		message.channel.send('Boop, maggot!');
	} else 

	if(command === 'foo') {
		message.channel.send('Bar!');
	} else 

	if(command === 'koncha') {
		message.channel.send("Weeb friendly server! <:KonCha:386268769338654720>");
		// Type \:EmojiName: in chat to get the proper ID for custom emojis
	} else

	if(command === 'dice') {
		//message.channel.send('Dice command commencing!');

		let numDice = args[0];
		let sideDice = args[1];
		let result = 0;
		let total = 0;

		//message.channel.send('Rolling ' + numDice + ' ' + sideDice + '-sided dice!');

		for (i = 0; i < numDice; i++) {
			//message.channel.send('i: ' + i + 'numDice.length: ' + numDice.length);
			result = (Math.floor(Math.random() * sideDice) + 1);
			total += result;

			//message.channel.send('Result #' + (i+1) + ': ' + result + ' | Total: ' + total);
		}

		message.channel.send('By rolling ' + numDice + ' ' + sideDice + '-sided dice, the total result is ' + total);
	} else

	if(command === 'dicemg') {
		//message.channel.send('Dice command commencing!');

		let numDice = args[0];
		let snakes = 0;
		let swords = 0;
		let axes = 0;
		let total = 0;

		//message.channel.send('Rolling ' + numDice + ' ' + sideDice + '-sided dice!');

		for (i = 0; i < numDice; i++) {
			//message.channel.send('i: ' + i + 'numDice.length: ' + numDice.length);
			result = (Math.floor(Math.random() * 6) + 1);
			if(result < 4) {
				snakes += 1;
			} else if(result < 6) {
				swords += 1;
			} else {
				axes += 1;
			}

			//message.channel.send('Result #' + (i+1) + ': ' + result + ' | Total: ' + total);
		}

		message.channel.send('By rolling ' + numDice + ' Mouse Guard dice, the total result is: [Snakes - ' 
			+ snakes + ' | Swords - ' + swords + ' | Axes - ' + axes + ']');
	}



});


