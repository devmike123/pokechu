/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'am',
  $if:"v4",
  code:`
  $if[$getGlobalUserVar[1;$mentioned[1]]!=0]
  $deletecommand
  $setGlobalUserVar[list;$getGlobalUserVar[list;$mentioned[1]]
**$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$noMentionMessage;name]]** | ID: **$jsonRequest[https://pokeapi.co/api/v2/pokemon/$noMentionMessage;id]** | Number: $getGlobalUserVar[new;$mentioned[1]] | IV: $roundTenth[$random[20;68;yes];2]%;$mentioned[1]]
  
  **$username[$mentioned[1]]** has been given a **$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$noMentionMessage;name]]** along with 2000 credits.
  $setGlobalUserVar[pk;$getGlobalUserVar[pk;$mentioned[1]],$noMentionMessage|$random[1;58;no]|0|250|$randomText[Hardy;Lonely;Brave;Adamant;Naughty;Bold;Docile	;Relaxed;Impish;Serious;Jolly;Naive;Modest;Mild;Quiet;Bashful;Rash;Calm;Gentle;Sassy;Careful;Quirky]|$random[20;68;yes];$mentioned[1]]
 $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1]];2000];$mentioned[1]]
 $setGlobalUserVar[latest;$noMentionMessage|$random[1;58;no]|0|250|$randomText[Hardy;Lonely;Brave;Adamant;Naughty;Bold;Docile	;Relaxed;Impish;Serious;Jolly;Naive;Modest;Mild;Quiet;Bashful;Rash;Calm;Gentle;Sassy;Careful;Quirky]|$random[20;68;yes];$mentioned[1]]
  $setGlobalUserVar[new;$sum[$getGlobalUserVar[new;$mentioned[1]];1];$mentioned[1]]
  $onlyForIDs[729365869762969691;706826210591899648;Only Staff can use this!!!]

  $else 
  This user doesn't have a starter Pokemon.
  $endif

`
}]