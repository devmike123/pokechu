/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:'pick',
  $if:"v4",
    code:`$if[$getGlobalUserVar[1]==0]
    $apiMessage[$channelID;Congratulations!;{ "embeds" : "{newEmbed:{description:Congrats $username ! Your starter Pokemon is $toLocaleUppercase[$message]!}{color:#1d9e85}{thumbnail:https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$message;id].png}}"};"components":"{actionRow:{button:View:2:latest:false}}"]
    $setGlobalUserVar[1;$jsonRequest[https://pokeapi.co/api/v2/pokemon/$message;id]|1|0|250|$randomText[$getVar[nature]]|$random[20;68;yes]]
    $setGlobalUserVar[new;1]
    $setGlobalUserVar[list;**$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$message;name]]** | ID: **$jsonRequest[https://pokeapi.co/api/v2/pokemon/$message;id]** | Number: $sum[$getGlobalUserVar[new];1] | IV: $roundTenth[$random[20;68;yes];2]%]
    $setGlobalUserVar[pk;$jsonRequest[https://pokeapi.co/api/v2/pokemon/$message;name]|1|0|250|$randomText[$getVar[nature]]|$random[20;68;yes]]
    $setGlobalUserVar[latest;$jsonRequest[https://pokeapi.co/api/v2/pokemon/$message;id]|1|0|250|$randomText[$getVar[nature]]|$random[20;68;yes]]
    $onlyIf[$checkContains[$toLowercase[$message];grookey;scorbunny;sobble;rowlet;litten;popplio;chespin;fennekin;froakie;snivy;tepig;oshawott;turtwig;chimchar;piplup;treecko;torchic;mudkip;chikorita;cyndaquil;totodile;bulbasaur;charmander;squirtle]==true;Please select the pokemon from the list. You can get the list using \`p!start\`.]
    $else
    You have already chosen a starter pokémon! View your pokémon with \`p!info 1\`.
    $endif`
  }]