/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'dex',
  aliases: ['d','pokedex'],
  code:`
$apiMessage[$channelID;;{newEmbed : {author:Professor Oak:https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png}   {title:#$toLocaleUppercase[$getObjectProperty[id]] — $toLocaleUppercase[$getObjectProperty[name]]}
$nonEscape[$if[$getObjectProperty[id]<899;{description:$advancedTextSplit[$jsonRequest[https://pokeapi.co/api/v2/pokemon-species/$toLowerCase[$message];flavor_text_entries[0].flavor_text];\n;1] $advancedTextSplit[$jsonRequest[https://pokeapi.co/api/v2/pokemon-species/$toLowerCase[$message];flavor_text_entries[0].flavor_text];\n;2] $advancedTextSplit[$jsonRequest[https://pokeapi.co/api/v2/pokemon-species/$toLowerCase[$message];flavor_text_entries[0].flavor_text];\n;3] $advancedTextSplit[$jsonRequest[https://pokeapi.co/api/v2/pokemon-species/$toLowerCase[$message];flavor_text_entries[0].flavor_text];\n;4] $advancedTextSplit[$jsonRequest[https://pokeapi.co/api/v2/pokemon-species/$toLowerCase[$message];flavor_text_entries[0].flavor_text];\n;5] $advancedTextSplit[$jsonRequest[https://pokeapi.co/api/v2/pokemon-species/$toLowerCase[$message];flavor_text_entries[0].flavor_text];\n;6]}]]
   {image:https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$getObjectProperty[id].png} 
   {color:1d9e85} 
   {field:Appearence:  Height: $divide[$getObjectProperty[height];10] m 
 Weight: $divide[$getObjectProperty[weight];10] kg:yes}
  
 {field:Names: 
 🇯🇵 $toLocaleUppercase[$getObjectProperty[name]] 
 🇬🇧 $toLocaleUppercase[$getObjectProperty[name]] 
 🇺🇸 $toLocaleUppercase[$getObjectProperty[name]] 
 🇮🇳 $toLocaleUppercase[$getObjectProperty[name]]:yes}
 {field:Base Stats:
 **HP**: $toLocaleUppercase[$getObjectProperty[stats[0].base_stat]] 
 **Attack**: $toLocaleUppercase[$getObjectProperty[stats[1].base_stat]] 
 **Defense**: $toLocaleUppercase[$getObjectProperty[stats[2].base_stat]] 
 **Sp. Atk**: $toLocaleUppercase[$getObjectProperty[stats[3].base_stat]] 
 **Sp. Def**: $toLocaleUppercase[$getObjectProperty[stats[4].base_stat]] 
 **Speed**: $toLocaleUppercase[$getObjectProperty[stats[5].base_stat]]:yes}
 {field:Abilities:$toLocaleUppercase[$getObjectProperty[abilities[0].ability.name]]:yes} 
  {field:Catchable:Yes:yes}

{field:Types:$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message];types[0].type.name;Could not find a pokemon matching \`$message\`.]]:yes}}]


$createObject[$jsonRequest[$nonEscape[https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message]/]]]
$suppressErrors
  `
}]