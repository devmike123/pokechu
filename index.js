/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
const Aoijs = require('aoi.js');
const keepAlive = require('./server');
const bot = new Aoijs.Bot({
	token: process.env.TOKEN,
	prefix: ["$getServerVar[prefix]","<@$clientID>"],
  intents: ["GUILDS", "GUILD_MESSAGES"],
	sharding: false,
	autoUpdate: false

});

  
bot.guildJoinCommand({
channel: "$randomChannelID",
code: `
$color[1;#1d9e85]
$title[1;Thanks for adding me to your server! 👋]
$description[1;To get started, do \`p!start\` to pick your starter pokémon. As server members talk, wild pokémon will automatically spawn in the server, and you'll be able to catch them with \`p!catch <pokémon>\`! For a full command list, do \`p!help\`.
**Common Configuration Options**
• \`p!prefix <new prefix>\` to set a different prefix (default: \`p!\`)
• \`p!redirect <channel>\` to redirect pokémon spawns to one channel
• More can be found in \`p!help\`.]
`
 
})

bot.onGuildJoin()



bot.onMessage({
  respondToBots: false,
  guildOnly: false
});

bot.variables({
	money: "0",
	wary: "1",
	1: "0",
	lvl: "1",
	latest: "",
	lvl: "1",
	log: "0",
	new: "0",
	pk: "0",
	ok: "0",
	prefix: 'p!',
	redirect: "0",
	list: '',
  ccmd:"",
  cdes:"",
  egg: "0",
  shrink: false,
  fav: "",
  redeem: "0",
  nature: "Hardy;Lonely;Brave;Adamant;Naughty;Bold;Docile	;Relaxed;Impish;Serious;Jolly;Naive;Modest;Mild;Quiet;Bashful;Rash;Calm;Gentle;Sassy;Careful;Quirky"
});

bot.interactionCommand({name:"latest",prototype:"button",code:`$interactionReply[;{ "embeds" : "{newEmbed:{author:Professor Oak:https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png}
    {title:Level $advancedTextSplit[$getGlobalUserVar[latest];|;2] $toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[latest];|;1];name]]}
    {description:
      **Details**
**XP:** $advancedTextSplit[$getGlobalUserVar[latest];|;3]/$advancedTextSplit[$getGlobalUserVar[latest];|;4]
**Nature:** $advancedTextSplit[$getGlobalUserVar[latest];|;5]
**Stats**
**HP: 12 - IV:** 27/31
**Attack: 6 - IV:** 14/31
**Defense: 6 - IV:** 10/31
**Sp. Atk: 5 - IV:** 11/31
**Sp. Def: 6 - IV:** 13/31
**Speed: 6 - IV:** 16/31
**Total IV %:** $roundTenth[$advancedTextSplit[$getGlobalUserVar[latest];|;6];2]%} 
    {thumbnail:$authorAvatar}
    {image:https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[latest];|;1];id].png}
    {footer:You have recently caught this pokemon.}
    {color:#1d9e85}";;;;yes]`})

bot.onInteractionCreate()

bot.interactionCommand({name:"page1",prototype:"button",code:`
 $interactionReply[;{ "embeds" : "{newEmbed:{title:Pokéchu Help | Getting Started}{description:Welcome to Pokéchu! If you haven't already, try using p!start to find out how to get your first Pokémon, then come back here and check out the other commands!
**Commands**
\`p!start\`
Find out how to get your first Pokémon!
\`p!pick\`
Pick your starter Pokémon!
\`p!help\`
Displays the help menu!}{color:#1d9e85}";;;;yes]    ` })

bot.onInteractionCreate()

bot.interactionCommand({name:"page2",prototype:"button",code:`   $interactionReply[;{ "embeds" : "{newEmbed:{title:Pokéchu Help | Pokémon Commands}{description:If you need more information about a specific command, type \`p!help <command>\`
For example:\`p!help redirect\`.
For example:p!help redirect.
**Commands**
\`p!info\`
Display your selected Pokémon's information.
\`p!select <number>\`
Select a Pokémon from the list.
\`p!catch <pokemon>\`
Catch a wild Pokémon when it appears in chat.
\`p!pf\`
Displays your profile.
\`p!pk\`
Shows the list of all Pokémons caught.}{color:#1d9e85}";;;;yes]    ` })

bot.onInteractionCreate()

bot.interactionCommand({name:"page3",prototype:"button",code:`   $interactionReply[;{ "embeds" : "{newEmbed:{title:Pokéchu Help | Shop}{description:If you need more information about a specific command, type p!help <command>
For example- p!help redirect.
**Commands**
\`p!bal\`
Displays your credit balance.
\`p!redeem\`
Displays your redeems.
\`p!eggs\`
Shows the no. of eggs you have.}{color:#1d9e85}";;;;yes]    ` })

bot.onInteractionCreate()

bot.interactionCommand({name:"page4",prototype:"button",code:`   $interactionReply[;{ "embeds" : "{newEmbed:{title:Pokéchu | Settings}{description:If you need more information about a specific command, type p!help <command>
For example- p!help redirect.
**Commands**
\`p!redirect <channel>\`
Redirects all the spawns to the specified channel.
\`p!redirect disable\`
Disables the redirect so that spawns can be found in all channels of the server.
\`p!prefix\`
Admins can set their server prefix.
\`p!shrink <enable/disable>\`
Enables oe disables the shrinking of Pokemon images!}{color:#1d9e85}";;;;yes]    ` })

bot.onInteractionCreate()

bot.interactionCommand({name:"page5",prototype:"button",code:`   $interactionReply[;{ "embeds" : "{newEmbed:{title:Pokéchu | Miscellaneous}{description:If you need more information about a specific command, type \`p!help <command>\`
For example:\`p!help redirect\`.
For example:p!help redirect.
**Commands**
\`p!b\`
Shows all Pokemons you have caught backwards.
\`p!n\`
Shows all Pokemons you have caught one after another.
\`p!daily\`
Claim amazing rewards by voting for the bot!}{color:#1d9e85}";;;;yes]    ` })

bot.onInteractionCreate()

bot.interactionCommand({name:"hint",prototype:"button",code:`   $interactionReply[The pokémon is $toLocaleUpperCase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name[0]]]_$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name[2]]_$get[hint].;;;;;yes] 
$let[hint;$djsEval["$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]".slice(4,$sum[1;$get[care]]);yes]]
$let[care;$charCount[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]]]` })

bot.onInteractionCreate()

bot.interactionCommand({name:"ping",prototype:"slash",code:`   $interactionReply[Ping: $pingms.]` })

bot.onInteractionCreate()


bot.readyCommand({
	channel: '',
	code: `$log[Ready on $userTag[$clientID]]`
});

keepAlive();

const loader = new Aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 