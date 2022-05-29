/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:"daily",
  code:`
  $color[1;1d9e85]
  $title[1;Voting Rewards! (Vote every 12 hours for more chances to get redeems)]
  $description[1;Vote multiple times for better rewards!]
  $addField[1;State;[Vote Here!](https://top.gg/bot/731192650794926191/vote)]
  $addField[__Rewards__;**Common**
• 200 credits
• 250 credits
**Uncommon**
• 500 credits
• 600 credits
**Rare**
• 1000 credits
**Rare**
• 1 redeem
**Legendary**
• 2000 credits]
$addField[1;Claim Rewards;Use \`$getServerVar[prefix]claim\` to claim rewards!]
  `} , {
    name:"vote",
    code:`$color[1;1d9e85]
    $title[1;Voting!]
    $description[1;[Vote Here!](https://top.gg/bot/731192650794926191/vote)]`
  } , {
    name:"claim",
  $if:"v4",
    code:`$if[$httpRequest[https://normal-api.ml/topgg/hasvoted?bot=731192650794926191&user=$authorID&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczMTE5MjY1MDc5NDkyNjE5MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI5MTMzNjQ0fQ.SiFT8WSX8Zs12fTweMrHPh-FqzTTkLIbiBOGkXMbhac;GET;;voted]==true]
    Thanks <@$authorID> for voting! You got $random[200;1000] credits and $random[0;1] eggs from voting!
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[200;1000]]]
    $setGlobalUserVar[egg;$sum[$getGlobalUserVar[egg];$random[0;1]]]
    $cooldown[12h;You need to wait %time% to vote us again and claim another reward!]
    
    $elseif[$httpRequest[https://normal-api.ml/topgg/hasvoted?bot=731192650794926191&user=$authorID&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczMTE5MjY1MDc5NDkyNjE5MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI5MTMzNjQ0fQ.SiFT8WSX8Zs12fTweMrHPh-FqzTTkLIbiBOGkXMbhac;GET;;voted]==false]
    You need to vote for the bot to claim this! You can vote from here! https://top.gg/bot/731192650794926191/vote
    $endelseif
    $endif`
  }]