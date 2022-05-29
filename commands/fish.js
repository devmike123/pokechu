/* 
:copyright: (c) 2020-present Aniket Bhattacharjee
:license: MIT, see LICENSE for more details.
*/
module.exports = [{
  name:"fish",
  code:`$title[1; A wild pokémon has appeared!] 
$description[1; Guess the pokemon and type \`$getServerVar[prefix]catch <pokemon>\` to catch the pokemon!] 
$color[1;#1d9e85] $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$randomText[7;8;9;54;55;60;62;73;79;80;87;91;98;99;116;117;118;119;121;129;130;139;131;169;160;170;184;195;211;222;223;260;271;278;283;318;320;339;340;342;350;364;369;370;382;457;458;490;502;536;537;593;658;692;729;746;818;834;882;883].png]
$addButton[1;Hint;2;hint;no]
$setServerVar[money;$randomText[1;898;no]] $useChannel[$findChannel[$getServerVar[redirect];yes]] 
$serverCooldown[$random[60;120]s]`
} , {
  name:"fly",
  code:`$title[1; A wild pokémon has appeared!] 
$description[1; Guess the pokemon and type \`$getServerVar[prefix]catch <pokemon>\` to catch the pokemon!] 
$color[1;#1d9e85] $image[1;https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/$randomText[6;12;16;17;83;85;142;144;145;146;149;163;164;169;176;178;188;189;198;207;225;226;249;250;267;277;279;284;291;333;334;373;384;396;416;430;441;458;472;519;527;561;566;580;581;587;628;630;661;662;663;666;701;715;733;732;774;797;822;823;845].png]
$addButton[1;Hint;2;hint;no]
$setServerVar[money;$randomText[6;12;16;17;83;85;142;144;145;146;149;163;164;169;176;178;188;189;198;207;225;226;249;250;267;277;279;284;291;333;334;373;384;396;416;430;441;458;472;519;527;561;566;580;581;587;628;630;661;662;663;666;701;715;733;732;774;797;822;823;845]] $useChannel[$findChannel[$getServerVar[redirect];yes]] 
$serverCooldown[$random[60;120]s]`}]