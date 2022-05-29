/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'select',
  $if:"v4",
  aliases: ['s'],
  code:`$if[$message>$getGlobalUserVar[new]]
    You have only $getGlobalUserVar[new] Pokemon. Gotta catch em' all.
  
  $elseif[$checkCondition[$getGlobalUserVar[1]!=0]$message<=$getGlobalUserVar[new]]
  $setGlobalUserVar[log;$message]
  You selected your Level $advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;2] $toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$advancedTextSplit[$getGlobalUserVar[pk];,;$message;|;1];name]]. N°$message
  $endelseif

  $elseif[$checkCondition[$getGlobalUserVar[1]==0]
  You have not started your journey. Please use \`p!start\` to start your journey.
  $endelseif
  $endif
  `
}]