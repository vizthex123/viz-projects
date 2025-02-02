# Add recipes to the Arboreal Extractor
print("thermal_extractor.zs loading...");
/*
<recipetype:thermal:tree_extractor>.addMapping(name as string, trunk as Block, leaves as Block, fluid as IFluidStack);

default tree fluids: sap, latex, resin, and tinker's slime
default output is 25

resin is the "default" output, and is used to make Rosin and Tree Oil (which can be burned into RF)
latex makes rubber
sap makes syrup

10 mB of XP = 1 XP point
*/

val water = <fluid:minecraft:water>;
val lava = <fluid:minecraft:lava>;

val latex = <fluid:thermal:latex>;
val resin = <fluid:thermal:resin>;
val sap = <fluid:thermal:sap>;

val honey = <fluid:create:honey>;
val ender = <fluid:thermal:ender>;
val fiery = <fluid:twilightforest:fiery_essence>;
val xp = <fluid:cofh_core:experience>;


/*
# Minecraft

Can't add these since I'd disrupt some recipes by adding the leaves tag to Nether Wart Blocks

<recipetype:thermal:tree_extractor>.addMapping("crimson_stem", <block:minecraft:crimson_stem>, <block:minecraft:nether_wart_block>, <fluid:tconstruct:blood>);
<recipetype:thermal:tree_extractor>.addMapping("warped_stem", <block:minecraft:warped_stem>, <block:minecraft:warped_wart_block>, <fluid:tconstruct:venom>);
*/


# Autumnity
<recipetype:thermal:tree_extractor>.addMapping("maple_extraction", <block:autumnity:maple_log>, <block:autumnity:maple_leaves>, sap*25);
<recipetype:thermal:tree_extractor>.addMapping("sappy_maple_extraction", <block:autumnity:sappy_maple_log>, <block:autumnity:maple_leaves>, sap*100);



# Enlightend
# None of them have leaves, oof



# Malum
<recipetype:thermal:tree_extractor>.addMapping("soulwood_extraction", <block:malum:soulwood_log>, <block:malum:soulwood_leaves>, xp*60);
<recipetype:thermal:tree_extractor>.addMapping("runewood_extraction", <block:malum:runewood_log>, <block:malum:runewood_leaves>, xp*20);



# Oh The Biomes You'll Go
/*
$log -stripped -wood -@minecraft

<recipetype:thermal:tree_extractor>.addMapping("_extraction", <block:byg:_log>, <block:byg:_leaves>, fluid);
*/
<recipetype:thermal:tree_extractor>.addMapping("aspen_extraction", <block:byg:aspen_log>, <block:byg:aspen_leaves>, sap*10);
<recipetype:thermal:tree_extractor>.addMapping("baobab_extraction", <block:byg:baobab_log>, <block:byg:baobab_leaves>, sap*15);
<recipetype:thermal:tree_extractor>.addMapping("blue_enchanted_extraction", <block:byg:blue_enchanted_log>, <block:byg:blue_enchanted_leaves>, xp*25);
<recipetype:thermal:tree_extractor>.addMapping("green_enchanted_extraction", <block:byg:green_enchanted_log>, <block:byg:green_enchanted_leaves>, xp*50);
/*
<recipetype:thermal:tree_extractor>.addMapping("bulbis_extraction", <block:byg:bulbis_stem>, <block:byg:bulbis_shell>, ender*10);
<recipetype:thermal:tree_extractor>.addMapping("purple_bulbis_extraction", <block:byg:bulbis_stem>, <block:byg:purple_bulbis_shell>, ender*15);
*/
<recipetype:thermal:tree_extractor>.addMapping("pink_cherry_extraction", <block:byg:cherry_log>, <block:byg:pink_cherry_leaves>, sap*20);
<recipetype:thermal:tree_extractor>.addMapping("white_cherry_extraction", <block:byg:cherry_log>, <block:byg:white_cherry_leaves>, sap*25);
<recipetype:thermal:tree_extractor>.addMapping("cika_extraction", <block:byg:cika_log>, <block:byg:cika_leaves>, resin*10);
<recipetype:thermal:tree_extractor>.addMapping("cypress_extraction", <block:byg:cypress_log>, <block:byg:cypress_leaves>, sap*10);
<recipetype:thermal:tree_extractor>.addMapping("ebony_extraction", <block:byg:ebony_log>, <block:byg:ebony_leaves>, sap*15);
<recipetype:thermal:tree_extractor>.addMapping("ether_extraction", <block:byg:ether_log>, <block:byg:ether_leaves>, xp*10);
<recipetype:thermal:tree_extractor>.addMapping("fir_extraction", <block:byg:fir_log>, <block:byg:fir_leaves>, latex*20);
<recipetype:thermal:tree_extractor>.addMapping("holly_extraction", <block:byg:holly_log>, <block:byg:holly_leaves>, latex*10);
/*
<recipetype:thermal:tree_extractor>.addMapping("imparius_extraction", <block:byg:imparius_stem>, <block:byg:imparius_hyphae>, ender*20);
<recipetype:thermal:tree_extractor>.addMapping("fungal_imparius_extraction", <block:byg:fungal_imparius_stem>, <block:byg:fungal_imparius_block>, ender*25);
<recipetype:thermal:tree_extractor>.addMapping("filament_imparius_extraction", <block:byg:fungal_imparius_stem>, <block:byg:fungal_imparius_filament_block>, ender*35);
*/
<recipetype:thermal:tree_extractor>.addMapping("jacaranda_extraction", <block:byg:jacaranda_log>, <block:byg:jacaranda_leaves>, honey*5);
<recipetype:thermal:tree_extractor>.addMapping("lament_extraction", <block:byg:lament_log>, <block:byg:lament_leaves>, lava*10);
<recipetype:thermal:tree_extractor>.addMapping("mahogany_extraction", <block:byg:mahogany_log>, <block:byg:mahogany_leaves>, latex*25);
<recipetype:thermal:tree_extractor>.addMapping("byg_mangrove_extraction", <block:byg:mangrove_log>, <block:byg:mangrove_leaves>, sap*10);
<recipetype:thermal:tree_extractor>.addMapping("byg_maple_extraction", <block:byg:maple_log>, <block:byg:maple_leaves>, sap*25);
<recipetype:thermal:tree_extractor>.addMapping("nightshade_extraction", <block:byg:nightshade_log>, <block:byg:nightshade_leaves>, latex*5);
<recipetype:thermal:tree_extractor>.addMapping("palm_extraction", <block:byg:palm_log>, <block:byg:palm_leaves>, water*50);
<recipetype:thermal:tree_extractor>.addMapping("palo_verde_extraction", <block:byg:palo_verde_log>, <block:byg:palo_verde_leaves>, water*100);
<recipetype:thermal:tree_extractor>.addMapping("pine_extraction", <block:byg:pine_log>, <block:byg:pine_leaves>, latex*5);
<recipetype:thermal:tree_extractor>.addMapping("rainbow_eucalyptus_extraction", <block:byg:rainbow_eucalyptus_log>, <block:byg:rainbow_eucalyptus_leaves>, sap*15);
<recipetype:thermal:tree_extractor>.addMapping("skyris_extraction", <block:byg:skyris_log>, <block:byg:skyris_leaves>, xp*5);
<recipetype:thermal:tree_extractor>.addMapping("willow_extraction", <block:byg:willow_log>, <block:byg:willow_leaves>, sap*5);
<recipetype:thermal:tree_extractor>.addMapping("witch_hazel_extraction", <block:byg:witch_hazel_log>, <block:byg:witch_hazel_leaves>, resin*15);
<recipetype:thermal:tree_extractor>.addMapping("zelkova_extraction", <block:byg:zelkova_log>, <block:byg:zelkova_leaves>, resin*25);
<recipetype:thermal:tree_extractor>.addMapping("withering_oak_extraction", <block:byg:withering_oak_log>, <block:byg:withering_oak_leaves>, resin*10);



# Quark
<recipetype:thermal:tree_extractor>.addMapping("azalea_extraction", <block:quark:azalea_log>, <block:minecraft:azalea_leaves>, latex*25);
<recipetype:thermal:tree_extractor>.addMapping("flowering_azalea_extraction", <block:quark:azalea_log>, <block:minecraft:flowering_azalea_leaves>, latex*50);

// Cryotheum got removed and there's no other frost-themed liquid :'c
// Guess I'll just do water for now
<recipetype:thermal:tree_extractor>.addMapping("frosty_blossom_extraction", <block:quark:blossom_log>, <block:quark:blue_blossom_leaves>, water*500);
<recipetype:thermal:tree_extractor>.addMapping("serene_blossom_extraction", <block:quark:blossom_log>, <block:quark:lavender_blossom_leaves>, latex*25);
<recipetype:thermal:tree_extractor>.addMapping("sunny_blossom_extraction", <block:quark:blossom_log>, <block:quark:yellow_blossom_leaves>, resin*25);
<recipetype:thermal:tree_extractor>.addMapping("sweet_blossom_extraction", <block:quark:blossom_log>, <block:quark:pink_blossom_leaves>, sap*25);

<recipetype:thermal:tree_extractor>.addMapping("fiery_blossom_extraction", <block:quark:blossom_log>, <block:quark:red_blossom_leaves>, fiery*10);
<recipetype:thermal:tree_extractor>.addMapping("warm_blossom_extraction", <block:quark:blossom_log>, <block:quark:orange_blossom_leaves>, fiery*5);



# Twilight Forest
<recipetype:thermal:tree_extractor>.addMapping("canopy_extraction", <block:twilightforest:canopy_log>, <block:twilightforest:canopy_leaves>, resin*30);
<recipetype:thermal:tree_extractor>.addMapping("darkwood_extraction", <block:twilightforest:dark_log>, <block:twilightforest:dark_leaves>, latex*30);
<recipetype:thermal:tree_extractor>.addMapping("mangrove_extraction", <block:twilightforest:mangrove_log>, <block:twilightforest:mangrove_leaves>, sap*15);
<recipetype:thermal:tree_extractor>.addMapping("rainbow_oak_extraction", <block:twilightforest:twilight_oak_log>, <block:twilightforest:rainbow_oak_leaves>, resin*75);
<recipetype:thermal:tree_extractor>.addMapping("twilight_oak_extraction", <block:twilightforest:twilight_oak_log>, <block:twilightforest:twilight_oak_leaves>, resin*50);


/*
not working cuz the dev programmed it wrong lol

# Silver Birch
# Gives double the Birch output cuz why not?
<recipetype:thermal:tree_extractor>.addMapping("silver_birch_extraction", <block:silverbirch:silver_birch_log>, <block:silverbirch:silver_birch_leaves>, resin*50);
*/


# Upgrade Aquatic
<recipetype:thermal:tree_extractor>.addMapping("driftwood_extraction", <block:upgrade_aquatic:driftwood_log>, <block:upgrade_aquatic:river_leaves>, water*250);

<recipetype:thermal:tree_extractor>.addMapping("river_wood_extraction", <block:upgrade_aquatic:river_log>, <block:upgrade_aquatic:river_leaves>, sap*50);

print("thermal_extractor.zs loaded");