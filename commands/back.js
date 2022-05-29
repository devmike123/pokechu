/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/

module.exports = [{
  name:'back',
  $if:"v4",
  aliases: ['b'],
  code:`$if[$getGlobalUserVar[ok]<=$getGlobalUserVar[new]]
  $author[1;Professor Oak;https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png]
    $setGlobalUserVar[ok;$sub[$getGlobalUserVar[ok];1]]
    $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$getObjectProperty[id].png]
    $title[1;Level $advancedTextSplit[$getGlobalUserVar[pk];,;$sub[$getGlobalUserVar[ok];1];|;2] $toLocaleUppercase[$getObjectProperty[name]]]
    $description[1;
      **Details**
**XP:** $advancedTextSplit[$getGlobalUserVar[pk];,;$sub[$getGlobalUserVar[ok];1];|;3]/$advancedTextSplit[$getGlobalUserVar[pk];,;$sub[$getGlobalUserVar[ok];1];|;4]
**Nature:** $advancedTextSplit[$getGlobalUserVar[pk];,;$sub[$getGlobalUserVar[ok];1];|;5]

**Stats**
**HP: 12 - IV:** 27/31
**Attack: 6 - IV:** 14/31
**Defense: 6 - IV:** 10/31
**Sp. Atk: 5 - IV:** 11/31
**Sp. Def: 6 - IV:** 13/31
**Speed: 6 - IV:** 16/31
**Total IV %:** $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;$sub[$getGlobalUserVar[ok];1];|;6];2]%]
    $thumbnail[1;$authorAvatar]
    $footer[1;Displaying Pokemon: $sub[$getGlobalUserVar[ok];1]/$getGlobalUserVar[new] - Use p!back and p!next to cycle through your pokémon!]
    $color[1;1d9e85]
    
    $elseif[$getGlobalUserVar[ok]>$getGlobalUserVar[new]]
    You have only $getGlobalUserVar[new] Pokemon. Gotta catch em' all.
    $endelseif

    $elseif[$getGlobalUserVar[ok]==0]
    $author[1;Professor Oak;https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png]
    $setGlobalUserVar[ok;1]
    $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;1;|;1];id].png]
    $title[1;$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;1;|;1];name]]]
    $description[2;
      **Details**
**XP:** $advancedTextSplit[$getGlobalUserVar[pk];,;1;|;3]/$advancedTextSplit[$getGlobalUserVar[pk];,;1;|;4]
**Nature:** $advancedTextSplit[$getGlobalUserVar[pk];,;1;|;5]

**Stats**
**HP: 12 - IV:** 27/31
**Attack: 6 - IV:** 14/31
**Defense: 6 - IV:** 10/31
**Sp. Atk: 5 - IV:** 11/31
**Sp. Def: 6 - IV:** 13/31
**Speed: 6 - IV:** 16/31
**Total IV %:** $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;1;|;6];2]%]
    $thumbnail[1;$authorAvatar]
    $textSplit[1;$getGlobalUserVar[pk];,]
    $footer[1;Displaying Pokemon: 1/$getGlobalUserVar[new] - Use p!back and p!next to cycle through your pokémon!]
    $color[1;1d9e85]
    $endelseif
    $endif
$createObject[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$sub[$getGlobalUserVar[ok];1];|;1]]]`
} , {
  name:'next',
  aliases: ['n'],
  code:`$if[$getGlobalUserVar[ok]<$getGlobalUserVar[new]]
  $author[1;Professor Oak;https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png]
    $setGlobalUserVar[ok;$sum[$getGlobalUserVar[ok];1]]
    $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$getObjectProperty[id].png]
    $title[1;Level $advancedTextSplit[$getGlobalUserVar[pk];,;$sum[$getGlobalUserVar[ok];1];|;2] $toLocaleUppercase[$getObjectProperty[name]]]
    $description[1;
      **Details**
**XP:** $advancedTextSplit[$getGlobalUserVar[pk];,;$sum[$getGlobalUserVar[ok];1];|;3]/$advancedTextSplit[$getGlobalUserVar[pk];,;$sum[$getGlobalUserVar[ok];1];|;4]
**Nature:** $advancedTextSplit[$getGlobalUserVar[pk];,;$sum[$getGlobalUserVar[ok];1];|;5]

**Stats**
**HP: 12 - IV:** 27/31
**Attack: 6 - IV:** 14/31
**Defense: 6 - IV:** 10/31
**Sp. Atk: 5 - IV:** 11/31
**Sp. Def: 6 - IV:** 13/31
**Speed: 6 - IV:** 16/31
**Total IV %:** $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;$sum[$getGlobalUserVar[ok];1];|;6];2]%]
    $thumbnail[1;$authorAvatar]
    $footer[1;Displaying Pokemon: $sum[$getGlobalUserVar[ok];1]/$getGlobalUserVar[new] - Use p!back and p!next to cycle through your pokémon!]
    $color[1;1d9e85]
    
    $elseif[$getGlobalUserVar[ok]>=$getGlobalUserVar[new]]
    You have only $getGlobalUserVar[new] Pokemon. Gotta catch em' all.
    $endelseif
    $endif
$createObject[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$sum[$getGlobalUserVar[ok];1];|;1]]]`
}]