/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'redirect',
  $if:"v4",
  code:`
  $if[$message!=disable]
  You have successfully redirected all Pokemon spwans to $message channel.
 $setServerVar[redirect;$mentionedChannels[1]]
 $onlyIf[$hasPerms[$guildID;$authorID;admin]==true;You must have admin permission.]
  

  $elseif[$message==disable]
  You have successfully disabled the redirect feature.
  $setServerVar[redirect;0]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]==true;You must have admin permission.]
  $endelseif
  $endif
  `
}]