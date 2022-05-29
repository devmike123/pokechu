/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
      name: "$alwaysExecute",
  $if:"v4",
      code: `
$title[1; A wild pokémon has appeared!] 
$description[1; Guess the pokemon and type \`$getServerVar[prefix]catch <pokemon>\` to catch the pokemon!] 
$color[1;#1d9e85] $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$random[1;898;no].png]
$addButton[1;Hint;2;hint;no]
$setServerVar[money;$random[1;898;no]] $useChannel[$findServerChannel[$getServerVar[redirect];yes]] 
$serverCooldown[$random[60;120]s]
`
}, {
  name: "catch",
  $if:"v4",
aliases: ['c'], 
code: `$if[$getServerVar[money]==0]
There's no Pokemon in this channel.

$elseif[$toLowerCase[$message]==$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]]
$setServerVar[money;0]
$setGlobalUserVar[latest;$getServerVar[money]|$random[1;58;no]|0|250|$randomText[Hardy;Lonely;Brave;Adamant;Naughty;Bold;Docile	;Relaxed;Impish;Serious;Jolly;Naive;Modest;Mild;Quiet;Bashful;Rash;Calm;Gentle;Sassy;Careful;Quirky]|$random[20;68;yes]]
$apiMessage[$channelID;Congratulations!;{ "embeds" : "{newEmbed:{description:Congratulations <@$authorID>! You have caught a Level $random[1;58;no] $toLocaleUpperCase[$message]. Added to Pokédex. You got $random[56;1420] credits.}{color:#1d9e85}{thumbnail:https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$getServerVar[money].png}}"};"components":"{actionRow:{button:View:2:latest:false}}"]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[56;1420]]]
$setGlobalUserVar[list;$getGlobalUserVar[list]
**$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]]** | ID: **$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];id]** | Number: $getGlobalUserVar[new] | IV: $roundTenth[$random[20;68;yes];2]%]
$setGlobalUserVar[new;$sum[$getGlobalUserVar[new];1]]
$setGlobalUserVar[pk;$getGlobalUserVar[pk],$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]|$random[1;58;no]|0|250|$randomText[Hardy;Lonely;Brave;Adamant;Naughty;Bold;Docile	;Relaxed;Impish;Serious;Jolly;Naive;Modest;Mild;Quiet;Bashful;Rash;Calm;Gentle;Sassy;Careful;Quirky]|$random[20;68;yes]
$endelseif

$elseif[$getGlobalUserVar[1]==0]
You don't have a starter Pokemon. Please use \`p!start\` to start your journey.
$endelseif

$elseif[$message!=$jsonRequest[https://pokeapi.co/api/v2/pokemon/$getServerVar[money];name]]
This is the wrong Pokemon.
$endelseif
$endif` 
}, {
  name:'bal',
  $if:"v4",
  code: `$thumbnail[1;https://cdn.discordapp.com/attachments/718879381774401607/731304921743491202/ok.png]
  $color[1;1d9e85]
  $title[1;$username's Balance]
  $description[1;You currently have $getGlobalUserVar[money] credits.]`
}]