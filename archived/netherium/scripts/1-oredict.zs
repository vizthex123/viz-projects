# Adds ""tags"" (rip my oredict :c) to items
import crafttweaker.api.tag.MCTag;

print("1_oredict.zs loading...");

/*
<tag>.add(<item>);
*/

# Pure Glass
# Use for Fluid Pipes
<tag:items:forge:pure_glass>.add(<item:minecraft:glass>);
<tag:items:forge:pure_glass>.add(<item:byg:therium_glass>);
<tag:items:forge:pure_glass>.add(<item:tconstruct:clear_glass>);
<tag:items:forge:pure_glass>.add(<item:electrodynamics:glassclear>);


# Fuel Dust
# Use for Uranium Fuel Drops
<tag:items:forge:fuel_dust>.add(<item:minecraft:redstone>);
<tag:items:forge:fuel_dust>.add(<item:fluxnetworks:flux_dust>);

<tag:items:forge:fuel_dust>.add(<item:netherrocks:fyrite_dust>);

<tag:items:forge:fuel_dust>.add(<item:electrodynamics:dustniter>);
<tag:items:forge:fuel_dust>.add(<item:electrodynamics:dustsulfur>);
<tag:items:forge:fuel_dust>.add(<item:electrodynamics:dustvanadium>);
<tag:items:forge:fuel_dust>.add(<item:electrodynamics:impuredustvanadium>);
<tag:items:forge:fuel_dust>.add(<item:electrodynamics:dustsuperconductive>);


# Cooked Meat
<tag:items:forge:cooked_meat>.add(<item:minecraft:cooked_cod>);
<tag:items:forge:cooked_meat>.add(<item:minecraft:cooked_beef>);
<tag:items:forge:cooked_meat>.add(<item:minecraft:cooked_rabbit>);
<tag:items:forge:cooked_meat>.add(<item:minecraft:cooked_salmon>);
<tag:items:forge:cooked_meat>.add(<item:minecraft:cooked_mutton>);
<tag:items:forge:cooked_meat>.add(<item:minecraft:cooked_porkchop>);


# Roots
# Used to make Water
<tag:items:roots>.add(<item:comfortable_nether:dried_crimson_roots>);
<tag:items:roots>.add(<item:comfortable_nether:dried_warped_roots>);
<tag:items:roots>.add(<item:minecraft:crimson_roots>);
<tag:items:roots>.add(<item:minecraft:warped_roots>);
<tag:items:roots>.add(<item:byg:tall_crimson_roots>);
<tag:items:roots>.add(<item:byg:tall_embur_roots>);
<tag:items:roots>.add(<item:byg:embur_roots>);


# Vines
# Used to make Sticks
<tag:items:vine>.add(<item:minecraft:weeping_vines>);
<tag:items:vine>.add(<item:minecraft:twisting_vines>);


# Furnaces
<tag:items:furnace>.add(<item:minecraft:furnace>);
<tag:items:furnace>.add(<item:minecraft:blast_furnace>);
<tag:items:furnace>.add(<item:netherrocks:nether_furnace>);
<tag:items:furnace>.add(<item:netherrocks:nether_blast_furnace>);


# Mushrooms
<tag:items:forge:mushrooms>.remove(<item:minecraft:brown_mushroom_block>);
<tag:items:forge:mushrooms>.remove(<item:minecraft:red_mushroom_block>);
<tag:items:forge:mushrooms>.add(<item:minecraft:crimson_fungus>);
<tag:items:forge:mushrooms>.add(<item:minecraft:warped_fungus>);

<tag:items:forge:mushrooms>.add(<item:extcaves:mushroom_lumishroom>);
<tag:items:forge:mushrooms>.add(<item:extcaves:mushroom_sweetshroom>);
<tag:items:forge:mushrooms>.add(<item:extcaves:mushroom_goldishroom>);
<tag:items:forge:mushrooms>.add(<item:extcaves:mushroom_shinyshroom>);
<tag:items:forge:mushrooms>.add(<item:extcaves:mushroom_fluoshroom>);

<tag:items:forge:mushrooms>.add(<item:byg:shulkren_fungus>);
<tag:items:forge:mushrooms>.add(<item:byg:fungal_imparius>);
<tag:items:forge:mushrooms>.add(<item:byg:soul_shroom>);
<tag:items:forge:mushrooms>.add(<item:byg:death_cap>);


# Uranium
# Used to unify the Uranium recipes in Create's Crusher
<tag:items:forge:ores/uranium>.add(<item:powah:uraninite_ore_poor>);
<tag:items:forge:ores/uranium>.add(<item:powah:uraninite_ore>);
<tag:items:forge:ores/uranium>.add(<item:powah:uraninite_ore_dense>);


# Tanks
# Used for the Spout
<tag:items:forge:tank>.add(<item:create:fluid_tank>);
<tag:items:forge:tank>.add(<item:tconstruct:seared_fuel_tank>);
<tag:items:forge:tank>.add(<item:tconstruct:seared_ingot_tank>);
<tag:items:forge:tank>.add(<item:tconstruct:seared_fuel_gauge>);
<tag:items:forge:tank>.add(<item:tconstruct:scorched_fuel_tank>);
<tag:items:forge:tank>.add(<item:tconstruct:scorched_ingot_tank>);
<tag:items:forge:tank>.add(<item:tconstruct:scorched_fuel_gauge>);
<tag:items:forge:tank>.add(<item:industrialforegoing:common_black_hole_tank>);


# Water-providing items
# Combined with Phantom Membranes to make 500 mB of Water
// Must give 100+ mB of Water
<tag:items:water_provider>.add(<item:comfortable_nether:insatiable_blubber>);
<tag:items:water_provider>.add(<item:comfortable_nether:weeping_abscess>);
<tag:items:water_provider>.add(<item:comfortable_nether:fume_puffer_2>);
<tag:items:water_provider>.add(<item:comfortable_nether:stuffed_filter>);
<tag:items:water_provider>.add(<item:comfortable_nether:baleen_filter>);
<tag:items:water_provider>.add(<item:comfortable_nether:tangleweed>);
<tag:items:water_provider>.add(<item:comfortable_nether:docile_soul>);
<tag:items:water_provider>.add(<item:minecraft:warped_wart_block>);
<tag:items:water_provider>.add(<item:minecraft:nether_wart_block>);
<tag:items:water_provider>.add(<item:biomesoplenty:watergrass>);
<tag:items:water_provider>.add(<item:minecraft:rotten_flesh>);


# Adds proper tags to Electrodynamics' ores
<tag:items:forge:ores/copper>.add(<item:electrodynamics:orecopper>);
<tag:items:forge:ores/silver>.add(<item:electrodynamics:oresilver>);
<tag:items:forge:ores/lead>.add(<item:electrodynamics:orelead>);
<tag:items:forge:ores/tin>.add(<item:electrodynamics:oretin>);


# Storage Racks
// Mainly for the quest
<tag:items:storage_rack>.add(<item:storageracks:oak_wood_rack>);
<tag:items:storage_rack>.add(<item:storageracks:birch_wood_rack>);
<tag:items:storage_rack>.add(<item:storageracks:jungle_wood_rack>);
<tag:items:storage_rack>.add(<item:storageracks:acacia_wood_rack>);
<tag:items:storage_rack>.add(<item:storageracks:dark_oak_wood_rack>);

<tag:items:storage_rack>.add(<item:storageracks:cactus_wood_rack>);

<tag:items:storage_rack>.add(<item:storageracks:warped_wood_rack>);
<tag:items:storage_rack>.add(<item:storageracks:crimson_wood_rack>);






# Misc
<tag:items:forge:stone>.add(<item:extcaves:lavastone>);
<tag:items:forge:stone>.add(<item:extcaves:sedimentstone>);
<tag:items:minecraft:stone_tool_materials>.add(<item:minecraft:basalt>);
<tag:items:forge:slimeballs>.add(<item:byg:embur_gel_ball>);

print("1_oredict.zs loaded");