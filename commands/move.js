/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'moveinfo',
  $if:"v4",
  aliases: ['mi'],
  code:`$if[$jsonRequest[https://pokeapi.co/api/v2/move/$message;power]==]
  $color[1;1d9e85]
  $title[1;$toLocaleUpperCase[$message]]
  $description[1;$jsonRequest[https://pokeapi.co/api/v2/move/$message;effect_entries[0].effect;This move doesn't exist.]]
  $addField[1;Class;$toLocaleUpperCase[$jsonRequest[https://pokeapi.co/api/v2/move/$message;damage_class.name]];yes]
  $addField[1;Type;$toLocaleUpperCase[$jsonRequest[https://pokeapi.co/api/v2/move/$message;type.name]];yes]
  $addField[Priority;0;yes]
  $addField[1;PP;$jsonRequest[https://pokeapi.co/api/v2/move/$message;pp];yes]
  $addField[1;Accuracy;$jsonRequest[https://pokeapi.co/api/v2/move/$message;accuracy];yes]
  $addField[1;Power;0;yes]
  $addField[1;Target;One other Pokémon on the field, selected by the trainer.;no]

  $elseif[$jsonRequest[https://pokeapi.co/api/v2/move/$message;power]!=]
  $color[2;1d9e85]
  $title[2;$toLocaleUpperCase[$message]]
  $description[2;Inflicts regular damage with no additional effect.]
  $addField[2;Class;$toLocaleUpperCase[$jsonRequest[https://pokeapi.co/api/v2/move/$message;damage_class.name]];yes]
  $addField[2;Type;$toLocaleUpperCase[$jsonRequest[https://pokeapi.co/api/v2/move/$message;type.name]];yes]
  $addField[Priority;0;yes]
  $addField[2;PP;$jsonRequest[https://pokeapi.co/api/v2/move/$message;pp];yes]
  $addField[2;Accuracy;$jsonRequest[https://pokeapi.co/api/v2/move/$message;accuracy];yes]
  $addField[2;Power;$jsonRequest[https://pokeapi.co/api/v2/move/$message;power];yes]
  $addField[2;Target;One other Pokémon on the field, selected by the trainer.;no]
  $endelseif
  $endif
  `
}]