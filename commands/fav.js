/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'fav-add',
  $if:"v4",
  code:`$if[$message>$getGlobalUserVar[new]]
    You have only $getGlobalUserVar[new] Pokemon. Gotta catch em' all.
  
  $elseif[$checkCondition[$getGlobalUserVar[1]!=0]$message<=$getGlobalUserVar[new]]
  $setGlobalUserVar[fav;$getGlobalUserVar[fav]
**$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];name]]** | ID: **$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];id]** | Number: $message | IV: $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;6];2]%]

  You added your Level $advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;2] $toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];name]] to the favourites.
  $endelseif

  $elseif[$checkCondition[$getGlobalUserVar[1]==0]
  You have not started your journey. Please use \`p!start\` to start your journey.
  $endelseif
  $endif
  `
} , {
  name:'fav-remove',
  code:`$if[$message>$getGlobalUserVar[new]]
    You have only $getGlobalUserVar[new] Pokemon. Gotta catch em' all.
  
  $elseif[$checkCondition[$getGlobalUserVar[1]!=0]$message<=$getGlobalUserVar[new]]


  $setGlobalUserVar[fav;$replaceText[$getGlobalUserVar[fav];**$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];name]]** | ID: **$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];id]** | Number: $message | IV: $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;6];2]%;]]

  You removed your Level $advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;2] $toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];name]] to the favourites.

$onlyIf[$checkContains[$getGlobalUserVar[fav];**$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];name]]** | ID: **$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];id]** | Number: $message | IV: $roundTenth[$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;6];2]%]==true;This Pokemon has not yet been added to favourites.]
  $endelseif

  $elseif[$checkCondition[$getGlobalUserVar[1]==0]
  You have not started your journey. Please use \`p!start\` to start your journey.
  $endelseif
  $endif
  `
}]