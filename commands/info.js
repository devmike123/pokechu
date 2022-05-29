/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'test',
  $if:"v4",
  aliases: ['i'],
    code:`$if[$toLowerCase[$message]==latest]
    $setGlobalUserVar[ok;$getGlobalUserVar[new]]
    $author[1;Professor Oak;https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png]
    $title[1;Level $advancedTextSplit[$getGlobalUserVar[latest];|;2] $toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[latest];|;1];name]]]
    $description[1;
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
**Total IV %:** $roundTenth[$advancedTextSplit[$getGlobalUserVar[latest];|;6];2]%] 
    $thumbnail[1;$authorAvatar]
    $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[latest];|;1];id].png]
    $footer[1;You have recently caught this pokemon.]
    $color[1;1d9e85]

$elseif[$message==]
$author[1;Professor Oak;https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png]
    $setGlobalUserVar[ok;$getGlobalUserVar[log]]
    $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$getGlobalUserVar[log];|;1];id].png]
    $title[1;Level $advancedTextSplit[$getGlobalUserVar[pk];,;$getGlobalUserVar[log];|;2] $toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$getGlobalUserVar[log];|;1];name]]]
    $description[1;
       **Details**
**XP:** $advancedTextSplit[$getGlobalUserVar[pk];,;$getGlobalUserVar[log];|;3]/$advancedTextSplit[$getGlobalUserVar[pk];,;$getGlobalUserVar[log];|;4]
**Nature:** $advancedTextSplit[$getGlobalUserVar[pk];,;$getGlobalUserVar[log];|;5]

**Stats**
**HP: 12 - IV:** 27/31
**Attack: 6 - IV:** 14/31
**Defense: 6 - IV:** 10/31
**Sp. Atk: 5 - IV:** 11/31
**Sp. Def: 6 - IV:** 13/31
**Speed: 6 - IV:** 16/31
**Total IV %:** $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;$getGlobalUserVar[log];|;6];2]%]
    $thumbnail[1;$authorAvatar]
    $footer[1;Displaying Pokemon: $getGlobalUserVar[log]/$getGlobalUserVar[new] - Use p!back and p!next to cycle through your pokémon!]
    $color[1;1d9e85]
$onlyIf[$getGlobalUserVar[log]!=0;You haven't selected your Pokemon.]
$endelseif
   $else
 $author[1;Professor Oak;https://images-ext-1.discordapp.net/external/1Ny7kEoFCR6LGr-Tw5aI11RFhT0uGxueoWUB2j8Atx8/https/pbs.twimg.com/profile_images/2927846251/bf8cef29642aceb034d4b01ab29a4ca7_normal.png]
    $setGlobalUserVar[ok;$message]
    $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];id].png]
    $title[1;Level $advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;2] $toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];name]]]
    $description[1;
      **Details**
**XP:** $advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;3]/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;4]
**Nature:** $advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;5]

**Stats**
**HP: 12 - IV:** 27/31
**Attack: 6 - IV:** 14/31
**Defense: 6 - IV:** 10/31
**Sp. Atk: 5 - IV:** 11/31
**Sp. Def: 6 - IV:** 13/31
**Speed: 6 - IV:** 16/31
**Total IV %:** $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;6];2]%]
    $thumbnail[1;$authorAvatar]
    $footer[1;Displaying Pokemon: $message/$getGlobalUserVar[new] - Use p!back and p!next to cycle through your pokémon!]
    $color[1;1d9e85]
$onlyIf[$message<$getGlobalUserVar[new];You have only $getGlobalUserVar[new] Pokemon. Gotta catch em' all.]
    $suppressErrors
$endif

    `
  }]