/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
    name:'hatch',
  $if:"v4",
    code:`$if[$getGlobalUserVar[egg]>0]
    $color[1;#1d9e85]
    $title[1;Congratulations $username[$authorID]! Your Egg Has Hatched !!!]
    $description[1;A  Level $random[1;58;no] $toLocaleUpperCase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$random[1;898;no];name]] hatched from the egg. Type \`$getServerVar[prefix]info latest\` to view it !!]
    $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$jsonRequest[https://pokeapi.co/api/v2/pokemon/$random[1;898;no];id].png]
    $setGlobalUserVar[latest;$random[1;898;no]|$random[1;58;no]|0|250|$randomText[$getVar[nature]]|$random[20;68;yes]]
    $setGlobalUserVar[list;$getGlobalUserVar[list]
    **$toLocaleUppercase[$jsonRequest[https://pokeapi.co/api/v2/pokemon/$random[1;898;no];name]]** | ID: **$jsonRequest[https://pokeapi.co/api/v2/pokemon/$random[1;898;no];id]** | Number: $getGlobalUserVar[new] | IV: $roundTenth[$random[20;68;yes];2]%]
    $setGlobalUserVar[new;$sum[$getGlobalUserVar[new];1]]
    $setGlobalUserVar[pk;$getGlobalUserVar[pk],$jsonRequest[https://pokeapi.co/api/v2/pokemon/$random[1;898;no];name]|$random[1;58;no]|0|250|$randomText[$getVar[nature]]|$random[20;68;yes]]
    $setGlobalUserVar[egg;$sub[$getGlobalUserVar[egg];1]]

    $elseif[$getGlobalUserVar[egg]==0]
    You don't have enough eggs to hatch!
    $endelseif
    $endif
    ` 
  
}]