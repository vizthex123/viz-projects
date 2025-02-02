# Changes recipes for all the quarry mods
# Progression: Simple, Ender, Quantum
print("quarries.zs loading...");

val empty = <item:minecraft:air>;

val gold = <tag:items:forge:ingots/gold>;
val diamond = <tag:items:forge:gems/diamond>;
val quartz = <tag:items:forge:gems/quartz>;

val eye = <item:minecraft:ender_eye>;
val pearl = <item:minecraft:ender_pearl>;
val obsidian = <item:minecraft:obsidian>;
val crying_obsidian = <item:minecraft:crying_obsidian>;



### Simple Quarry
// New Quarry recipes (fueled & powered) 
craftingTable.remove(<item:squarry:fuel_quarry>);
craftingTable.remove(<item:squarry:powered_quarry>);

craftingTable.addShaped("fueled_quarry", <item:squarry:fuel_quarry>,
	[[<tag:items:forge:ingots/manasteel>, <item:easypaxellite:iron_paxel>.anyDamage(), <tag:items:forge:ingots/manasteel>], 
	[<tag:items:minecraft:coals>, <tag:items:quintessence:furnace>, <tag:items:minecraft:coals>], 
	[<tag:items:forge:ingots/manasteel>, <item:create:zinc_ingot>, <tag:items:forge:ingots/manasteel>]]);

mods.extendedcrafting.TableCrafting.addShaped("powered_quarry", 1, <item:squarry:powered_quarry>,
	[[<tag:items:forge:ingots/constantan>, <tag:items:forge:dusts/redstone>, <tag:items:forge:ingots/constantan>], 
	[<tag:items:forge:ingots/bronze>, <item:squarry:fuel_quarry>, <tag:items:forge:ingots/bronze>], 
	[<tag:items:forge:ingots/constantan>, <tag:items:ae2:all_quartz>, <tag:items:forge:ingots/constantan>]]);



// Tooltips
val red = "\u00A7c";
val aqua = "\u00A7b";
val green = "\u00A7a";

<item:squarry:fuel_quarry>.addTooltip(red + "Only mines the chunk it's placed in");
<item:squarry:fuel_quarry>.addTooltip(red +"Cannot be upgraded");

<item:squarry:powered_quarry>.addTooltip(red +"Only mines the chunk it's placed in");
<item:squarry:powered_quarry>.addTooltip(aqua +"Accepts both RF and solid fuel");
<item:squarry:powered_quarry>.addTooltip(green + "Holds up to 5 upgrades");



### Ender Quarry Plus
val ender_core =  <item:enderquarryplus:ender_core>;
val infused_obsidian =  <item:enderquarryplus:ender_infused_obsidian>;
val ender_upgrade_base = <item:enderquarryplus:ender_quarry_upgrade_base>;

// Remove the Pump since it's not functional
craftingTable.remove(<item:enderquarryplus:ender_thermic_pump>);

// Ender-Infused Obsidian
craftingTable.remove(infused_obsidian);
mods.extendedcrafting.EnderCrafting.addShaped("ender_infused_obsidian", infused_obsidian*4,
	[[empty, obsidian, empty],
	[obsidian, pearl, obsidian],
	[empty, obsidian, empty]], 10);

// Ender Core
craftingTable.remove(ender_core);
mods.extendedcrafting.EnderCrafting.addShaped("ender_core", ender_core,
	[[gold, infused_obsidian, gold],
	[infused_obsidian, eye, infused_obsidian],
	[gold, infused_obsidian, gold]], 15);

// Diamond Matrix
craftingTable.remove(<item:enderquarryplus:diamond_etched_computational_matrix>);
mods.extendedcrafting.EnderCrafting.addShaped("diamond_matrix", <item:enderquarryplus:diamond_etched_computational_matrix>,
	[[quartz, diamond, quartz],
	[diamond, ender_core, diamond],
	[quartz, diamond, quartz]], 20);


// Ender Quarry
craftingTable.remove(<item:enderquarryplus:ender_quarry>);
mods.extendedcrafting.EnderCrafting.addShaped("ender_quarry", <item:enderquarryplus:ender_quarry>,
	[[<item:squarry:powered_quarry>, infused_obsidian, <item:rangedpumps:pump>],
	[ender_core, <item:enderquarryplus:diamond_etched_computational_matrix>, ender_core],
	[infused_obsidian, infused_obsidian, infused_obsidian]], 30);

// Ender Marker
craftingTable.remove(<item:enderquarryplus:ender_marker>);
mods.extendedcrafting.EnderCrafting.addShaped("ender_marker", <item:enderquarryplus:ender_marker>,
	[[pearl],
	[infused_obsidian],
	[infused_obsidian]], 5);


// Upgrade Base
craftingTable.remove(ender_upgrade_base);
mods.extendedcrafting.EnderCrafting.addShaped("ender_upgrade_base", ender_upgrade_base,
	[[empty, infused_obsidian, empty],
	[infused_obsidian, quartz, infused_obsidian],
	[empty, infused_obsidian, empty]], 5);

// World Hole
craftingTable.remove(<item:enderquarryplus:ender_quarry_world_hole_upgrade>);
mods.extendedcrafting.EnderCrafting.addShapeless("world_hole_upgrade", <item:enderquarryplus:ender_quarry_world_hole_upgrade>,
	[ender_upgrade_base, quartz], 5);

// Silk Touch
craftingTable.remove(<item:enderquarryplus:ender_quarry_silk_touch_upgrade>);
mods.extendedcrafting.EnderCrafting.addShapeless("silk_touch_upgrade", <item:enderquarryplus:ender_quarry_silk_touch_upgrade>,
	[ender_upgrade_base, <item:squarry:upgrade_silk>], 5);

// Speed 1
craftingTable.remove(<item:enderquarryplus:ender_quarry_speed_1_upgrade>);
mods.extendedcrafting.EnderCrafting.addShapeless("speed_1_upgrade", <item:enderquarryplus:ender_quarry_speed_1_upgrade>,
	[ender_upgrade_base, <item:squarry:upgrade_efficiency_1>], 5);

// Speed 2
craftingTable.remove(<item:enderquarryplus:ender_quarry_speed_2_upgrade>);
mods.extendedcrafting.EnderCrafting.addShapeless("speed_2_upgrade", <item:enderquarryplus:ender_quarry_speed_2_upgrade>,
	[<item:enderquarryplus:ender_quarry_speed_1_upgrade>, <item:squarry:upgrade_efficiency_2>], 7);

// Speed 3
craftingTable.remove(<item:enderquarryplus:ender_quarry_speed_3_upgrade>);
mods.extendedcrafting.EnderCrafting.addShapeless("speed_3_upgrade", <item:enderquarryplus:ender_quarry_speed_3_upgrade>,
	[<item:enderquarryplus:ender_quarry_speed_2_upgrade>, <item:squarry:upgrade_efficiency_3>], 10);



### Quantum Quarry

val ender = <item:extendedcrafting:ender_ingot>;
val enhanced_ender = <item:extendedcrafting:enhanced_ender_ingot>;

val upgrade_base = <item:quantumquarryplus:upgrade_base>;

val endercell = <item:quantumquarryplus:endercell>;
val ender_obsidian = <item:quantumquarryplus:ender_obsidian>;
val quarry_frame = <item:quantumquarryplus:quarry_framw>;


// Earth Orb
craftingTable.remove(<item:quantumquarryplus:earth_orb>);
<recipetype:botania:runic_altar>.addRecipe("earth_orb", <item:quantumquarryplus:earth_orb>, 5000, [eye, <item:naturesaura:infused_iron>, <item:naturesaura:infused_iron>, <item:kubejs:glue>, <item:kubejs:glue>]);

// Ender Obsidian
craftingTable.remove(ender_obsidian);
mods.extendedcrafting.EnderCrafting.addShaped("ender_obsidian", ender_obsidian*4,
	[[infused_obsidian, infused_obsidian, infused_obsidian],
	[infused_obsidian, eye, infused_obsidian],
	[infused_obsidian, infused_obsidian, infused_obsidian]], 15);

mods.extendedcrafting.EnderCrafting.addShaped("ender_obsidian_crying", ender_obsidian*12,
	[[infused_obsidian, crying_obsidian, infused_obsidian],
	[eye, crying_obsidian, eye],
	[infused_obsidian, crying_obsidian, infused_obsidian]], 20);

// Quarry Frame
// Same as the default recipe, but requires Basic Crafting and makes 2 per craft
craftingTable.remove(quarry_frame);
mods.extendedcrafting.EnderCrafting.addShaped("quarry_frame", quarry_frame*2,
	[[<item:minecraft:end_rod>, ender_obsidian, <item:minecraft:end_rod>],
	[ender_obsidian, <item:minecraft:ender_chest>, ender_obsidian],
	[<item:minecraft:end_rod>, ender_obsidian, <item:minecraft:end_rod>]], 30);

// Endercell
craftingTable.remove(endercell);
mods.extendedcrafting.EnderCrafting.addShaped("endercell", endercell,
	[[<tag:items:quintessence:magic_dust>, <item:naturesaura:sky_ingot>, <tag:items:quintessence:magic_dust>],
	[<item:malum:hallowed_gold_ingot>, quarry_frame, <item:malum:hallowed_gold_ingot>],
	[<tag:items:quintessence:magic_dust>, <item:extendedcrafting:redstone_ingot_block>, <tag:items:quintessence:magic_dust>]], 45);

// Quantum Quarry
craftingTable.remove(<item:quantumquarryplus:quantum_quarry_plus>);
mods.extendedcrafting.TableCrafting.addShaped("quantum_quarry", 2, <item:quantumquarryplus:quantum_quarry_plus>,
	[[<item:botania:elementium_ingot>, enhanced_ender, <item:malum:soul_stained_steel_pickaxe>.anyDamage(), enhanced_ender, <item:botania:elementium_ingot>],
	[<item:thermal:enderium_ingot>, quarry_frame, quarry_frame, quarry_frame, <item:thermal:enderium_ingot>],
	[<item:rftoolsbase:infused_enderpearl>, endercell, <item:enderquarryplus:ender_quarry>, endercell, <item:rftoolsbase:infused_enderpearl>],
	[<item:thermal:enderium_ingot>, quarry_frame, quarry_frame, quarry_frame, <item:thermal:enderium_ingot>],
	[<item:botania:elementium_ingot>, enhanced_ender, <item:ae2:quantum_link>, enhanced_ender, <item:botania:elementium_ingot>]]);



# Upgrades
craftingTable.remove(upgrade_base);
craftingTable.remove(<item:quantumquarryplus:filter_upgrade>);
craftingTable.remove(<item:quantumquarryplus:pump_upgrade>);

// Base
mods.extendedcrafting.EnderCrafting.addShaped("upgrade_base", upgrade_base,
	[[empty, ender, empty],
	[ender, ender_upgrade_base, ender],
	[empty, ender, empty]], 15);

mods.extendedcrafting.EnderCrafting.addShaped("enhanced_upgrade_base", upgrade_base*2,
	[[empty, empty, empty],
	[enhanced_ender, ender_obsidian, enhanced_ender],
	[empty, empty, empty]], 10);

// Filter
mods.extendedcrafting.CombinationCrafting.addRecipe("quantum_filter_upgrade", <item:quantumquarryplus:filter_upgrade>, 5000, [upgrade_base, <item:essentials:hopper_filter>, <item:thermal:item_filter_augment>, <item:create:filter>|<item:create:attribute_filter>, <item:rftoolsbase:filter_module>], 50);

// Pump
mods.extendedcrafting.CombinationCrafting.addRecipe("quantum_pump_upgrade", <item:quantumquarryplus:pump_upgrade>, 5000, [upgrade_base, <item:thermal:device_water_gen>, <item:rangedpumps:pump>, <item:create:mechanical_pump>, <item:botania:pump>], 50);

print("quarries.zs loaded");