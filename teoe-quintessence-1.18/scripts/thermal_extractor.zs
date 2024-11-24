# Add recipes to the Arboreal Extractor
print("thermal_extractor.zs loading...");
/*
<recipetype:thermal:tree_extractor>.addMapping(name as string, trunk as Block, leaves as Block, fluid as IFluidStack);

default tree fluids: sap, latex, resin, and tinker's slime
default output is 25

resin is the "default" output
latex makes rubber
sap makes syrup
*/

val xp = <fluid:cofh_core:experience>;

val fiery = <fluid:twilightforest:fiery_essence>;

val latex = <fluid:thermal:latex>;
val resin = <fluid:thermal:resin>;
val sap = <fluid:thermal:sap>;

val water = <fluid:minecraft:water>;
/*
# Oh The Biomes You'll Go
<recipetype:thermal:tree_extractor>.addMapping("_extraction", <block:byg:_log>, <block:byg:_leaves>, fluid);
*/
<recipetype:thermal:tree_extractor>.addMapping("aspen_extraction", <block:byg:aspen_log>, <block:byg:aspen_leaves>, sap*10);
<recipetype:thermal:tree_extractor>.addMapping("baobab_extraction", <block:byg:baobab_log>, <block:byg:baobab_leaves>, sap*15);
<recipetype:thermal:tree_extractor>.addMapping("blue_enchanted_extraction", <block:byg:blue_enchanted_log>, <block:byg:blue_enchanted_leaves>, xp*25);
<recipetype:thermal:tree_extractor>.addMapping("green_enchanted_extraction", <block:byg:green_enchanted_log>, <block:byg:green_enchanted_leaves>, xp*50);



# Autumnity
<recipetype:thermal:tree_extractor>.addMapping("maple_extraction", <block:autumnity:maple_log>, <block:autumnity:maple_leaves>, sap*25);
<recipetype:thermal:tree_extractor>.addMapping("sappy_maple_extraction", <block:autumnity:sappy_maple_log>, <block:autumnity:maple_leaves>, sap*100);


# Enlightend
# None of them have leaves, oof


# Malum
<recipetype:thermal:tree_extractor>.addMapping("soulwood_extraction", <block:malum:soulwood_log>, <block:malum:soulwood_leaves>, xp*60);
<recipetype:thermal:tree_extractor>.addMapping("runewood_extraction", <block:malum:runewood_log>, <block:malum:runewood_leaves>, xp*20);



# Quark
<recipetype:thermal:tree_extractor>.addMapping("azalea_extraction", <block:quark:azalea_log>, <block:minecraft:azalea_leaves>, latex*25);
<recipetype:thermal:tree_extractor>.addMapping("flowering_azalea_extraction", <block:quark:azalea_log>, <block:minecraft:flowering_azalea_leaves>, latex*50);

// Cryotheum got removed and there's no other frost-themed liquid :'c
// Guess I'll just do water for now
<recipetype:thermal:tree_extractor>.addMapping("frosty_blossom_extraction", <block:quark:blossom_log>, <block:quark:blue_blossom_leaves>, water*250);
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
# Silver Birch
# Gives double the Birch output cuz why not?
<recipetype:thermal:tree_extractor>.addMapping("silver_birch_extraction", <block:silverbirch:silver_birch_log>, <block:silverbirch:silver_birch_leaves>, resin*50);
*/

# Upgrade Aquatic
<recipetype:thermal:tree_extractor>.addMapping("driftwood_extraction", <block:upgrade_aquatic:driftwood_log>, <block:upgrade_aquatic:river_leaves>, water*100);

<recipetype:thermal:tree_extractor>.addMapping("river_wood_extraction", <block:upgrade_aquatic:driftwood_log>, <block:upgrade_aquatic:river_leaves>, sap*50);

/*
Can't add these since I'd disrupt some recipes by adding the leaves tag to Nether Wart Blocks

<recipetype:thermal:tree_extractor>.addMapping("crimson_stem", <block:minecraft:crimson_stem>, <block:minecraft:nether_wart_block>, <fluid:tconstruct:blood>);
<recipetype:thermal:tree_extractor>.addMapping("warped_stem", <block:minecraft:warped_stem>, <block:minecraft:warped_wart_block>, <fluid:tconstruct:venom>);
*/
print("thermal_extractor.zs loaded");