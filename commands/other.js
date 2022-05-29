/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
 name: '<@731192650794926191>',
	code: `My prefix in this server is \`$getServerVar[prefix]\`.`,
	nonPrefixed: true 
} , {
  name: 'prefix',
	aliases: ['setprefix', 'changeprefix'],
  $if:"v4",
	code: `$if[$message==]
  My prefix is \`$getServerVar[prefix]\` in this server.

  $else
  My prefix has now been changed to \`$message\`.
  $setServerVar[prefix;$message]
  $onlyIf[$hasPerms[$authorID;admin]==true;You must have admin permission.]
  $endif
  `
} , {
  name: 'redeem',
	code: `$title[1;Your Redeems: $getGlobalUserVar[redeem]]
  $description[1;You can use redeems to receive any pokémon of your choice. You can receive redeems by purchasing them with shards or through voting rewards.]
  $addField[1;p!redeemspawn <pokémon>;Use a redeem to spawn a pokémon of your choice in the current channel (careful, if something else spawns, it'll be overrided).]
  $color[1;#1d9e85]
  `
} , {
  name: 'redeemspawn',
  $if:"v4",
  aliases: 'rs',
	code: `$if[$getGlobalUserVar[redeem]<1]
  You don't have enough redeems!


  $elseif[$getGlobalUserVar[redeem]>0]
  $setGlobalUserVar[redeem;$sub[$getGlobalUserVar[redeem];1]]
  $title[1;A wild pokémon has appeared!]
$description[1;Guess the pokemon and type \`$getServerVar[prefix]catch <pokemon>\` to catch the pokemon! ] 
$image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message];id].png]
$color[1;1d9e85]
$setServerVar[money;$jsonRequest[https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message];id]]
$onlyIf[$toLowerCase[$message]==$jsonRequest[https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message];name];Please give the correct name of Pokemon!]
$endelseif
$endif
  `
} , {
  name: 'pokemon',
	aliases: ['pk'],
	code: `$color[1;1d9e85]
  $title[1;Your Pokémon]
  $footer[1;Showing 1 - 1 of $getGlobalUserVar[new] Pokémon matching this search.]
  $description[1;$getGlobalUserVar[list]]`
}, {
  name: 'fav',
	code: `$color[1;1d9e85]
  $title[1;Your Favourites!]
  $footer[1;Showing 1 - 1 of $getGlobalUserVar[new] Pokémon matching this search.]
  $description[1;$getGlobalUserVar[fav]]`
} , {
  name: 'shop',
	code: `$color[1;1d9e85]
  $title[1;Pokechu Shop — $getGlobalUserVar[money] Credits]
  $addField[1;Page 2 : Redeems;Get some premium redeems to redirect & catch your desired Pokemon!]
  $addField[1;Page 1 : Eggs;Buy some eggs to hatch Pokemon!]
  $onlyForIDs[729365869762969691;706826210591899648;The shop is under development!!!]
  `
} ,{
  name: 'hint',
  $if:"v4",
	aliases: ['h'],
	code: `$if[$getServerVar[money]==0]
There's no Pokemon in this channel.
$elseif[$getGlobalUserVar[1]==0]
You don't have a starter Pokemon. Please use \`p!start\` to start your journey.
$endelseif
$else
The pokémon is $toLocaleUpperCase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name[0]]]_$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name[2]]_$get[hint].
$let[hint;$djsEval["$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]".slice(4,$sum[1;$get[care]]);yes]]
$let[care;$charCount[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]]]
$endif
`
} , {
  name: 'invite',
	code: `$title[1;Want to add me to your server? Use the link below!]
  $addField[1;Join Server;https://discord.gg/PmMS9zgTQ9]
$addField[1;Invite Bot;[Invite the bot to your server!](https://discord.com/oauth2/authorize?client_id=731192650794926191&permissions=36507610176&scope=bot%20applications.commands)]
$thumbnail[1;https://cdn.discordapp.com/avatars/731192650794926191/03397487da3e9467f789813701ff471b.png?size=256]
$addButton[1;Invite Me;link;https://discord.com/api/oauth2/authorize?client_id=731192650794926191&permissions=311385508929&scope=bot%20applications.commands;no]

$color[1;#1d9e85]`
} , {
  name: 'botinfo',
	aliases: ['stats'],
	code: `$color[1;#1d9e85]
$title[1;Pokéchu Info]
$addField[1;Players;$allMembersCount]
$addField[1;Servers;$serverCount]
$addField[1;Ping;$random[30;250]ms]
$addField[1;Uptime;$uptime]
$thumbnail[1;https://images-ext-2.discordapp.net/external/oStIcdp6NdqYSrFrZY3hIs_RmRfcfxg7GBUAaW8zhvY/%3Fsize%3D256/https/cdn.discordapp.com/avatars/731192650794926191/fab369c7ce5da4740ddcd6b98bec9c39.png]`
} , {
 name: 'detailed',
	code: `$color[1;#1d9e85]
$description[1;The Detailed Command can't be disabled because it is required for trainers to get as much information as possible about their Pokémons, according to the Pokémon Tos! We apologize for inconvenience.]
$title[1;You can't disable this command!]
$thumbnail[1;https://images-ext-2.discordapp.net/external/oStIcdp6NdqYSrFrZY3hIs_RmRfcfxg7GBUAaW8zhvY/%3Fsize%3D256/https/cdn.discordapp.com/avatars/731192650794926191/fab369c7ce5da4740ddcd6b98bec9c39.png]` 
} ,{
  name: 'profile',
	aliases: ['pf'],
	code: `$color[1;#1d9e85]
$title[1;$username's Profile]
$thumbnail[1;$authorAvatar]
$description[1;
Balance: $getGlobalUserVar[money]
Pokémon Caught: $getGlobalUserVar[new]
Shines Caught: 0
Pokémon Released: 0
Total Pokémon: $getGlobalUserVar[new]
]`
}]


