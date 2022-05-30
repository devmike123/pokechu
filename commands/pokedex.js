/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'dex',
  aliases: ['d','pokedex'],
  code:`
$author[1;Professor Oak;https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png]   $title[1;#$toLocaleUppercase[$getObjectProperty[id]] — $toLocaleUppercase[$getObjectProperty[name]]]
   $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$getObjectProperty[id].png] 
   $color[1;1d9e85] 
   $addField[1;Names;
:flag_jp: $toLocaleUppercase[$getObjectProperty[name]]
:flag_gb: $toLocaleUppercase[$getObjectProperty[name]]
:flag_us: $toLocaleUppercase[$getObjectProperty[name]]
:flag_in: $toLocaleUppercase[$getObjectProperty[name]];yes]
$addField[1;Base Stats;
**HP**: $toLocaleUppercase[$getObjectProperty[stats[0].base_stat]]
**Attack**: $toLocaleUppercase[$getObjectProperty[stats[1].base_stat]]
**Defense**: $toLocaleUppercase[$getObjectProperty[stats[2].base_stat]]
**Sp. Atk**: $toLocaleUppercase[$getObjectProperty[stats[3].base_stat]]
**Sp. Def**: $toLocaleUppercase[$getObjectProperty[stats[4].base_stat]]
**Speed**: $toLocaleUppercase[$getObjectProperty[stats[5].base_stat]];yes]
$addField[1;Abilities;$toLocaleUppercase[$getObjectProperty[abilities[0].ability.name]];yes]
$addField[1;Catchable;Yes;yes]
$addField[1;Types;$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message];types[0].type.name;Could not find a pokemon matching \`$message\`.]];yes]


$createObject[$jsonRequest[$nonEscape[https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message]/]]]
$suppressErrors
  `
}]
