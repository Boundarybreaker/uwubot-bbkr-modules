/**
 * COPYPASTA - Sends only the best and most rational copypastas
 */

let botConfig = require("../config.json");
serverConfig = require("../server_config.js");

let help = "**Copypastas**\n";
help += "Sends only the best and most rational copypastas.\n";
help += "*!pasta*, *!listpastas*.\n";

//** Command handlers

let commandHandlers = {};

commandHandlers.pasta = function (message, args) {

if (!message.guild) {
    
    message.channel.sendMessage("This command must be run in a server.");
    
    return false;
    
  }
  
  getPastas(message.guild.id, function (pastas) {
  
  	if (Object.keys(pastas).indexOf(args) !== -1) {
  	
  		let pasta = pastas[args];
  
  		message.channel.sendMessage(pasta);
    } else {
    
    	message.channel.sendMessage("Couldn't find that pasta!");
    	
    };
});

};
  
commandHandlers.listpastas = function (message, args) {

if (!message.guild) {
	
	message.channel.sendMessage("This command must be run in a server.")
	
	return false;
	
    }
    
    getPastas(message.guild.id, function (pastas) {
    
    message.channel.sendMessage("```" + Object.keys(pastas) + "```");
    
    });

};
  
let getPastas = function (guildId, callback) {

	serverConfig.getServerConfig(guildId, function (config) {
		
		if (config.moduleConfig && config.moduleConfig.copypasta && config.moduleConfig.copypasta.pastas) {
		
		callback(config.moduleConfig.copypasta.pastas);
		
	    } else {
	    	
	    	callback([]);
	    }
    
    });

};


// commandHandlers.fiveminutes = function (message, args) {
// 
//       message.channel.send("Oh fucking hell, can you not summarize this in under 5 minutes? I don't have the patience to sit through over half an hour of this and, to be honest, here is the video you should be responding to on the issue anyway as I have already acknowledged I did not dig deeply enough into the subject - it's worse than I thought: https://www.youtube.com/watch?v=rc24YtUslCU");
//       
//   
// };
// 
// commandHandlers.womenbleed = function (message, args) {
//   
//       message.channel.send("Feminists have never – and will never – accomplish anything of worth, because they reject the masculine principle; the women of the greatest accomplishments are those who’ve submitted to it. Women bleed on the birthing bed, while men bleed on the battlefield; that is the nature of the species *Man*. His world of gender-fluidity sells itself as freedom, but it is anything but.");
//       
// };
// 
// commandHandlers.brevity = function (message, args) {
//    
//       message.channel.send("'Brevity is the soul of IDIOTS. Talk FOR EVER about things you don't like. NEVER stop talking about them. THAT'LL prove you right! I'm rational. I'M RATIONAL! Sexual harassment isn't a big deal. It's not a big deal! IT'S NOT A BIG DEAL! AAAAAAAAAA-' –Willy Shak's Pear");
// 
// };
// 
// commandHandlers.anything = function (message, args) {
// 
//       message.channel.send("Literally anything can become a forced copypasta. Watch this.");
// 
// };
// 
// commandHandlers.navyseals = function (message, args) {
//   
//       message.channel.send("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USAand your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo");
//   
// };
// 
// commandHandlers.beemovie = function (message, args) {
//       
//       message.channel.send("According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? - Barry? - Adam? - Can you believe this is happening? - I can't. I'll pick you up.");
// 
// };

//** Module Exports

module.exports = {
  "help": help,
  "commandHandlers": commandHandlers
};