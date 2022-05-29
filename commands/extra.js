/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'eggs',
  aliases: ['egg'],
  code:`$color[1;#1d9e85]
  $title[1;$username[$authorID]'s Eggs]
  $description[1;You currently have $getGlobalUserVar[egg] eggs!]
  $thumbnail[1;https://media.discordapp.net/attachments/869986202403602452/881844600631885874/52-528163_pokemon-egg-png-transparent-png-removebg-preview.png?width=371&height=415]
  $footer[1;Tip: You can use $getServerVar[prefix]hatch to hatch your egg!]`
} , {
  name: 'math',
	code: `$if[$message!=]
  $color[1;1d9e85]
  $description[1;<@$authorID> $math[$message]]
  
  $elseif[$message==]
  Please write a problem to be solved!
  $endelseif
  $endif`
} , {
  name: 'ping',
	code: `Pong! API Response Time : \`$pingms\`
`
}]