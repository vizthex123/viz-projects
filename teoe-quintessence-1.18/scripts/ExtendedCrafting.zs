# Adds recipes to blocks from Extended Crafting
# Also changes recipes for Extended Crafting's blocks

print("ExtendedCrafting.zs loading...");
/*
mods.extendedcrafting.CombinationCrafting.addRecipe("name", <output>, powerCost, [inputs], powerRate);

first input is the center item

use recipe maker for table & ender crafting recipes
*/

val copper_coin = <item:lightmanscurrency:coin_copper>;
val iron_coin = <item:lightmanscurrency:coin_iron>;
val gold_coin = <item:lightmanscurrency:coin_gold>;
val emerald_coin = <item:lightmanscurrency:coin_emerald>;
val diamond_coin = <item:lightmanscurrency:coin_diamond>;
val netherite_coin = <item:lightmanscurrency:coin_netherite>;

val iron = <item:minecraft:iron_ingot>;
val steel = <tag:items:forge:ingots/steel>;
val black_iron = <item:extendedcrafting:black_iron_ingot>;
val slate = <item:extendedcrafting:black_iron_slate>;

val empty = <item:minecraft:air>;

# Make Black Iron Slate shapeless
craftingTable.remove(slate);
craftingTable.addShapeless("black_iron_slate", slate, [black_iron, black_iron]);

# Make Luminessence accessible earlier
craftingTable.addShapeless("luminessence", <item:extendedcrafting:luminessence>, [<item:aquamirae:esca>, <item:aquamirae:esca>, <item:minecraft:redstone>, <item:minecraft:gunpowder>]);



# Fuel Canister with Zinc
mods.extendedcrafting.TableCrafting.addShaped("fuel_canister_zinc", 1, <item:fuel_canister:fuel_canister>, 
    [[<item:minecraft:air>, black_iron, <tag:items:forge:ingots/zinc>],
    [<tag:items:forge:ingots/zinc>, <item:minecraft:air>, <tag:items:forge:ingots/zinc>],
    [<tag:items:forge:ingots/zinc>, <tag:items:forge:ingots/zinc>, <tag:items:forge:ingots/zinc>]]);



# New Enchanting Table recipes
craftingTable.remove(<item:minecraft:enchanting_table>);
craftingTable.addShaped("matrix_enchanter", <item:quark:matrix_enchanter>,
    [[empty, <item:minecraft:book>, empty],
    [<item:minecraft:diamond>, <item:minecraft:obsidian>, <item:minecraft:diamond>],
    [<item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>]]);

mods.extendedcrafting.TableCrafting.addShaped("enchanting_table", 1, <item:minecraft:enchanting_table>,
	[[empty, <item:twilightforest:carminite>, empty], 
	[<tag:items:quintessence:magic_dust>, <item:quark:matrix_enchanter>, <tag:items:quintessence:magic_dust>], 
	[<item:minecraft:crying_obsidian>, <item:deepresonance:dense_obsidian>, <item:minecraft:crying_obsidian>]]);



# Reduce the cost of tables
craftingTable.remove(<item:extendedcrafting:basic_table>);
craftingTable.remove(<item:extendedcrafting:advanced_table>);
craftingTable.remove(<item:extendedcrafting:elite_table>);
craftingTable.remove(<item:extendedcrafting:ultimate_table>);

craftingTable.remove(<item:extendedcrafting:basic_auto_table>);
craftingTable.remove(<item:extendedcrafting:advanced_auto_table>);
craftingTable.remove(<item:extendedcrafting:elite_auto_table>);
craftingTable.remove(<item:extendedcrafting:ultimate_auto_table>);

// Regular
craftingTable.addShaped("basic_table", <item:extendedcrafting:basic_table>,
    [[iron_coin, <item:extendedcrafting:basic_component>, iron_coin],
    [empty, <tag:items:forge:workbenches>, empty],
    [empty, <item:create:brass_block>|<item:thermal:bronze_block>, empty]]);

craftingTable.addShaped("advanced_table", <item:extendedcrafting:advanced_table>,
    [[gold_coin, <item:extendedcrafting:advanced_component>, gold_coin],
    [slate, <tag:items:forge:workbenches>, slate],
    [slate, <tag:items:forge:storage_blocks/steel>, slate]]);

craftingTable.addShaped("elite_table", <item:extendedcrafting:elite_table>,
    [[emerald_coin, <item:extendedcrafting:elite_component>, emerald_coin],
    [slate, <tag:items:forge:workbenches>, slate],
    [slate, <item:botania:manasteel_block>, slate]]);

craftingTable.addShaped("ultimate_table", <item:extendedcrafting:ultimate_table>,
    [[diamond_coin, <item:extendedcrafting:ultimate_component>, diamond_coin],
    [slate, <tag:items:forge:workbenches>, slate],
    [slate, <item:tconstruct:queens_slime_block>, slate]]);



// Auto Tables
val redstone_component = <item:extendedcrafting:redstone_component>; 

craftingTable.addShaped("basic_auto_table", <item:extendedcrafting:basic_auto_table>,
    [[black_iron, <item:create:brass_ingot>, black_iron],
    [redstone_component, <item:extendedcrafting:basic_table>, redstone_component],
    [black_iron, steel, black_iron]]);

craftingTable.addShaped("advanced_auto_table", <item:extendedcrafting:advanced_auto_table>,
    [[black_iron, <item:create:brass_ingot>, black_iron],
    [redstone_component, <item:extendedcrafting:advanced_table>, redstone_component],
    [black_iron, steel, black_iron]]);

craftingTable.addShaped("elite_auto_table", <item:extendedcrafting:elite_auto_table>,
    [[black_iron, <item:create:brass_ingot>, black_iron],
    [redstone_component, <item:extendedcrafting:elite_table>, redstone_component],
    [black_iron, steel, black_iron]]);

craftingTable.addShaped("ultimate_auto_table", <item:extendedcrafting:ultimate_auto_table>,
    [[black_iron, <item:create:brass_ingot>, black_iron],
    [redstone_component, <item:extendedcrafting:ultimate_table>, redstone_component],
    [black_iron, steel, black_iron]]);



# Crafting Core
craftingTable.remove(<item:extendedcrafting:crafting_core>);
craftingTable.addShaped("crafting_core", <item:extendedcrafting:crafting_core>,
    [[black_iron, diamond_coin|<item:rftoolsbase:infused_diamond>, black_iron],
    [slate, <item:extendedcrafting:frame>, slate],
    [black_iron, slate, black_iron]]);


# Pedestals
craftingTable.remove(<item:extendedcrafting:pedestal>);
craftingTable.addShaped("cheap_pedestal", <item:extendedcrafting:pedestal>*2,
    [[empty, black_iron, empty],
    [empty, black_iron, empty],
    [black_iron, black_iron, black_iron]]);

craftingTable.addShaped("pedestal", <item:extendedcrafting:pedestal>*6,
    [[empty, black_iron, empty],
    [empty, black_iron, empty],
    [black_iron, <item:extendedcrafting:black_iron_block>, black_iron]]);



# Repair Long Fall Boots
mods.extendedcrafting.CombinationCrafting.addRecipe("repair_long_fall_boots", <item:longfallboots:longfallboots>, 2500, [<item:longfallboots:longfallboots>.anyDamage(), <item:minecraft:diamond>|<item:thermal:diamond_dust>|<item:createaddition:diamond_grit>|<item:minecraft:obsidian>|<item:create:powdered_obsidian>], 35);

mods.extendedcrafting.CombinationCrafting.addRecipe("iron_repair_long_fall_boots", <item:longfallboots:longfallboots>, 3500, [<item:longfallboots:longfallboots>.anyDamage(), iron, iron, iron], 25);



# Fill the Cryotheum Cooling Unit from Simply Jetpacks 2
# Damn TE had to remove the fluid >:{
# Glowstone one is done by KubeJS in a Fluid Encapsulator
val powder = <item:thermal:blizz_powder>;
mods.extendedcrafting.CombinationCrafting.addRecipe("filled_cryotheum_unit", <item:simplyjetpacks:unit_cryotheum>, 8000, [<item:simplyjetpacks:unit_cryotheum_empty>, powder, powder, powder, powder, powder, powder, powder, powder], 20);


# Artificial Dragon Egg
mods.extendedcrafting.EnderCrafting.addShaped("artifical_dragon_egg", <item:kubejs:artificial_dragon_egg>,
	[[<tag:items:quintessence:dragon_scale>, <tag:items:quintessence:magic_dust>, <tag:items:quintessence:dragon_scale>],
	[<tag:items:quintessence:magic_dust>, <tag:items:quintessence:egg>, <tag:items:quintessence:magic_dust>],
	[<tag:items:quintessence:dragon_scale>, <tag:items:quintessence:magic_dust>, <tag:items:quintessence:dragon_scale>]], 150);

mods.extendedcrafting.EnderCrafting.addShaped("artifical_dragon_egg_botania", <item:kubejs:artificial_dragon_egg>,
	[[<item:enigmaticlegacy:astral_dust>, <item:botania:dragonstone>, <item:enigmaticlegacy:astral_dust>],
	[<item:botania:dragonstone>, <tag:items:quintessence:egg>, <item:botania:dragonstone>],
	[<item:enigmaticlegacy:astral_dust>, <item:botania:dragonstone>, <item:enigmaticlegacy:astral_dust>]], 300);


# Doubles Enhanced Ender output
mods.extendedcrafting.EnderCrafting.remove(<item:extendedcrafting:enhanced_ender_ingot>);
mods.extendedcrafting.EnderCrafting.addShaped("enhanced_ender", <item:extendedcrafting:enhanced_ender_ingot>*8,
	[[empty, <item:extendedcrafting:ender_ingot>, empty], 
	[<item:extendedcrafting:ender_ingot>, <item:extendedcrafting:ender_star>, <item:extendedcrafting:ender_ingot>], 
	[empty, <item:extendedcrafting:ender_ingot>, empty]]);

# Enchanted Golden Apple recipe
craftingTable.remove(<item:minecraft:enchanted_golden_apple>);
mods.extendedcrafting.TableCrafting.addShaped("enchanted_golden_apple", 3, <item:minecraft:enchanted_golden_apple>*16,
	[[gold_coin, <tag:items:quintessence:shard>, <item:tconstruct:rose_gold_ingot>, <item:additionaladditions:gold_ring>, <item:tconstruct:rose_gold_ingot>, <tag:items:quintessence:shard>, gold_coin],
	[<tag:items:quintessence:shard>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <tag:items:quintessence:shard>],
	[<item:tconstruct:rose_gold_ingot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_apple>, <item:createaddition:honey_cake>, <item:minecraft:golden_apple>, <item:minecraft:golden_carrot>, <item:tconstruct:rose_gold_ingot>],
	[<item:additionaladditions:gold_ring>, <item:minecraft:golden_carrot>, <item:createaddition:honey_cake>, <item:reliquary:midas_touchstone>, <item:createaddition:honey_cake>, <item:minecraft:golden_carrot>, <item:additionaladditions:gold_ring>],
	[<item:tconstruct:rose_gold_ingot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_apple>, <item:createaddition:honey_cake>, <item:minecraft:golden_apple>, <item:minecraft:golden_carrot>, <item:tconstruct:rose_gold_ingot>],
	[<tag:items:quintessence:shard>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <item:minecraft:golden_carrot>, <tag:items:quintessence:shard>],
	[gold_coin, <tag:items:quintessence:shard>, <item:tconstruct:rose_gold_ingot>, <item:additionaladditions:gold_ring>, <item:tconstruct:rose_gold_ingot>, <tag:items:quintessence:shard>, gold_coin]]);


# Ultimate Ingot recipes
mods.extendedcrafting.TableCrafting.addShaped("ultimate_ingot", 2, <item:extendedcrafting:the_ultimate_ingot>*4,
	[[<item:naturesaura:sky_ingot>, <item:create:brass_ingot>, <item:malum:soul_stained_steel_ingot>|<item:malum:hallowed_gold_ingot>, <item:create:brass_ingot>, <item:naturesaura:sky_ingot>],
	[<item:botania:gaia_ingot>, <item:tconstruct:manyullyn_ingot>, <item:thermal:enderium_ingot>, <item:tconstruct:manyullyn_ingot>, <item:botania:gaia_ingot>], 
	[<item:enigmaticlegacy:etherium_ingot>, <item:thermal:enderium_ingot>, <item:twilightforest:carminite>, <item:thermal:enderium_ingot>, <item:enigmaticlegacy:etherium_ingot>],
	[<item:botania:gaia_ingot>, <item:tconstruct:manyullyn_ingot>, <item:thermal:enderium_ingot>, <item:tconstruct:manyullyn_ingot>, <item:botania:gaia_ingot>],
	[<item:naturesaura:sky_ingot>, <item:create:brass_ingot>, <item:extendedcrafting:ender_ingot>, <item:create:brass_ingot>, <item:naturesaura:sky_ingot>]]);

mods.extendedcrafting.TableCrafting.addShaped("evil_ultimate_ingot", 2, <item:extendedcrafting:the_ultimate_ingot>*16,
	[[<item:naturesaura:sky_ingot>, steel, <item:malum:soul_stained_steel_ingot>|<item:malum:hallowed_gold_ingot>, steel, <item:naturesaura:sky_ingot>],
	[<item:botania:gaia_ingot>, <item:byg:pendorite_ingot>, <item:thermal:enderium_ingot>, <item:byg:pendorite_ingot>, <item:botania:gaia_ingot>], 
	[<item:enigmaticlegacy:etherium_ingot>, <item:thermal:enderium_ingot>, <item:enigmaticlegacy:evil_ingot>, <item:thermal:enderium_ingot>, <item:enigmaticlegacy:etherium_ingot>],
	[<item:botania:gaia_ingot>, <item:byg:pendorite_ingot>, <item:thermal:enderium_ingot>, <item:byg:pendorite_ingot>, <item:botania:gaia_ingot>],
	[<item:naturesaura:sky_ingot>, steel, <item:extendedcrafting:enhanced_ender_ingot>, steel, <item:naturesaura:sky_ingot>]]);



# Quintessence
mods.extendedcrafting.TableCrafting.addShaped("quintessence", 4, <item:kubejs:quintessence>,
	[[<tag:items:quintessence:tape_measure>, empty, empty, empty, empty, empty, empty, empty, <item:quark:flamerang>.anyDamage()],
	[empty, <item:packingtape:tape>.anyDamage(), empty, <item:minecraft:dragon_egg>|<item:kubejs:artificial_dragon_egg>, empty, <item:refinedpipes:advanced_item_pipe>|<item:refinedpipes:advanced_extractor_attachment>, empty, <item:tconstruct:plate_chestplate>.anyDamage()],
	[empty, empty, <item:lightmanscurrency:speed_upgrade_5>, <tag:items:elevatorid:elevators>, <item:bloodmagic:sacrificerune2>, <item:rangedpumps:pump>, <item:botania:dice>, empty, empty],
	[empty, <item:aquamirae:ship_graveyard_echo>, <item:byg:therium_lamp>|<item:additionaladditions:amethyst_lamp>|<item:essentials:analog_lamp>, <item:extendedcrafting:crystaltine_ingot>, <item:extendedcrafting:the_ultimate_ingot>, <item:extendedcrafting:crystaltine_ingot>, <item:tesseract:tesseract>, netherite_coin, empty],
	[<item:create:blaze_cake>, <item:naturesaura:end_city_finder>, <item:createaddition:chocolate_cake>|<item:createaddition:honey_cake>, <item:extendedcrafting:the_ultimate_ingot>, <item:extendedcrafting:ultimate_singularity>, <item:extendedcrafting:the_ultimate_ingot>, <item:thermal:upgrade_augment_3>, <item:aquamirae:three_bolt_helmet>.anyDamage(), <item:chickenchunks:spot_loader>],
	[empty, <item:reliquary:infernal_chalice>, <item:minecraft:netherite_block>|<item:byg:pendorite_block>, <item:extendedcrafting:crystaltine_ingot>, <item:extendedcrafting:the_ultimate_ingot>, <item:extendedcrafting:crystaltine_ingot>, <item:nourished_nether:necronium_block>, <item:functionalstorage:linking_tool>|<item:functionalstorage:configuration_tool>, empty],
	[empty, empty, <item:ironchest:obsidian_chest>|<item:ironchest:trapped_obsidian_chest>, <item:industrialforegoing:mycelial_reactor>, <item:enderquarryplus:ender_quarry>, <item:deepresonance:generator_controller>, <item:ae2things:disk_drive_64k>, empty, empty],
	[empty, <item:minecraft:netherite_pickaxe>.anyDamage(), empty, <item:appliedcooking:kitchen_station>, empty, <item:ae2:quantum_ring>, empty, <item:longfallboots:longfallboots>.anyDamage(), empty],
	[<item:easypaxellite:netherite_paxel>.anyDamage(), empty, empty, empty, empty, empty, empty, empty, <item:twilightforest:charm_of_keeping_3>|<item:twilightforest:charm_of_life_2>]]);

print("ExtendedCrafting.zs loaded");