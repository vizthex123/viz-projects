# Adds items to the Iron Age
#priority 7

import mods.itemstages.ItemStages;

print("3-iron_age.zs loading...");

/*
ItemStages.restrict(<item>, "iron_age");

ItemStages.createModRestriction("mod", "iron_age");

ItemStages.createModRestriction("mod", s => (<exemption> | <exemption2>), "iron_age");
*/

ItemStages.restrict(<item:kubejs:science_industrial>, "iron_age");

ItemStages.createModRestriction("scannable", "iron_age");
ItemStages.createModRestriction("spirit", s => (<item:spirit:broken_spawner>).matches(s), "iron_age");


# Blocks
ItemStages.restrict(<item:minecraft:blast_furnace>, "iron_age");
ItemStages.restrict(<item:adminshop:fluid_seller>, "iron_age");
ItemStages.restrict(<item:adminshop:shop>, "iron_age");
ItemStages.restrict(<item:myrtrees:tree_tap>, "iron_age");


# Upgrades
ItemStages.restrict(<item:functionalstorage:iron_downgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:diamond_upgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:collector_upgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:puller_upgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:pusher_upgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:redstone_upgrade>, "iron_age");


# Aquamirae
ItemStages.restrict(<item:aquamirae:three_bolt_suit>, "iron_age");
ItemStages.restrict(<item:aquamirae:three_bolt_leggings>, "iron_age");
ItemStages.restrict(<item:aquamirae:three_bolt_boots>, "iron_age");


# Bluepower
	 // Items
ItemStages.restrict(<item:bluepower:tungcarb_sword>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_pickaxe>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_shovel>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_hoe>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_axe>, "iron_age");

# Ender Magnet
ItemStages.restrict(<item:endermagnet:ender_magnet_tier1>, "iron_age");
ItemStages.restrict(<item:endermagnet:ender_magnet_tier2>, "iron_age");

# Extended Crafting
ItemStages.restrict(<item:extendedcrafting:black_iron_nugget>, "iron_age");
ItemStages.restrict(<item:extendedcrafting:black_iron_ingot>, "iron_age");
ItemStages.restrict(<item:extendedcrafting:black_iron_slate>, "iron_age");
ItemStages.restrict(<item:extendedcrafting:frame>, "iron_age");


# Iron
ItemStages.restrict(<item:minecraft:hopper>, "iron_age");
ItemStages.restrict(<item:minecraft:bucket>, "iron_age");

	// Armour
ItemStages.restrict(<item:minecraft:iron_helmet>, "iron_age");
ItemStages.restrict(<item:minecraft:iron_chestplate>, "iron_age");
ItemStages.restrict(<item:minecraft:iron_leggings>, "iron_age");
ItemStages.restrict(<item:minecraft:iron_boots>, "iron_age");

	// Tools
ItemStages.restrict(<item:minecraft:iron_sword>.anyDamage(), "iron_age");
ItemStages.restrict(<item:minecraft:iron_pickaxe>.anyDamage(), "iron_age");
ItemStages.restrict(<item:minecraft:iron_shovel>, "iron_age");
ItemStages.restrict(<item:minecraft:iron_hoe>, "iron_age");
ItemStages.restrict(<item:minecraft:iron_axe>, "iron_age");

ItemStages.restrict(<item:bluepower:iron_sickle>, "iron_age");
ItemStages.restrict(<item:bluepower:iron_saw>, "iron_age");

# ItemStages.restrict(<item:easypaxellite:iron_paxel>, "iron_age");

# Gold
	// Armour
ItemStages.restrict(<item:minecraft:golden_helmet>, "iron_age");
ItemStages.restrict(<item:minecraft:golden_chestplate>, "iron_age");
ItemStages.restrict(<item:minecraft:golden_leggings>, "iron_age");
ItemStages.restrict(<item:minecraft:golden_boots>, "iron_age");

	// Tools
ItemStages.restrict(<item:minecraft:golden_sword>, "iron_age");
ItemStages.restrict(<item:minecraft:golden_pickaxe>, "iron_age");
ItemStages.restrict(<item:minecraft:golden_shovel>, "iron_age");
ItemStages.restrict(<item:minecraft:golden_hoe>, "iron_age");
ItemStages.restrict(<item:minecraft:golden_axe>, "iron_age");

ItemStages.restrict(<item:bluepower:gold_sickle>, "iron_age");

# ItemStages.restrict(<item:easypaxellite:golden_paxel>, "iron_age");

# Bluepower gear
ItemStages.restrict(<item:bluepower:ruby_sword>, "iron_age");
ItemStages.restrict(<item:bluepower:ruby_pickaxe>, "iron_age");
ItemStages.restrict(<item:bluepower:ruby_shovel>, "iron_age");
ItemStages.restrict(<item:bluepower:ruby_hoe>, "iron_age");
ItemStages.restrict(<item:bluepower:ruby_axe>, "iron_age");

ItemStages.restrict(<item:bluepower:sapphire_sword>, "iron_age");
ItemStages.restrict(<item:bluepower:sapphire_pickaxe>, "iron_age");
ItemStages.restrict(<item:bluepower:sapphire_shovel>, "iron_age");
ItemStages.restrict(<item:bluepower:sapphire_hoe>, "iron_age");
ItemStages.restrict(<item:bluepower:sapphire_axe>, "iron_age");

ItemStages.restrict(<item:bluepower:green_sapphire_sword>, "iron_age");
ItemStages.restrict(<item:bluepower:green_sapphire_pickaxe>, "iron_age");
ItemStages.restrict(<item:bluepower:green_sapphire_shovel>, "iron_age");
ItemStages.restrict(<item:bluepower:green_sapphire_hoe>, "iron_age");
ItemStages.restrict(<item:bluepower:green_sapphire_axe>, "iron_age");

ItemStages.restrict(<item:bluepower:amethyst_sword>, "iron_age");
ItemStages.restrict(<item:bluepower:amethyst_pickaxe>, "iron_age");
ItemStages.restrict(<item:bluepower:amethyst_shovel>, "iron_age");
ItemStages.restrict(<item:bluepower:amethyst_hoe>, "iron_age");
ItemStages.restrict(<item:bluepower:amethyst_axe>, "iron_age");

ItemStages.restrict(<item:bluepower:tungcarb_sword>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_pickaxe>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_shovel>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_hoe>, "iron_age");
ItemStages.restrict(<item:bluepower:tungcarb_axe>, "iron_age");



# Bluepower Items
ItemStages.restrict(<item:bluepower:battery>, "iron_age");
ItemStages.restrict(<item:bluepower:copper_coil>, "iron_age");
ItemStages.restrict(<item:bluepower:silicon_boule>, "iron_age");
ItemStages.restrict(<item:bluepower:red_doped_wafer>, "iron_age");

ItemStages.restrict(<item:bluepower:diamond_drawplate>, "iron_age");
ItemStages.restrict(<item:bluepower:copper_wire>, "iron_age");
ItemStages.restrict(<item:bluepower:iron_wire>, "iron_age");

ItemStages.restrict(<item:bluepower:wool_card>, "iron_age");


# Upgrades
ItemStages.restrict(<item:functionalstorage:iron_downgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:gold_upgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:collector_upgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:puller_upgrade>, "iron_age");
ItemStages.restrict(<item:functionalstorage:pusher_upgrade>, "iron_age");

ItemStages.restrict(<item:lightmanscurrency:item_capacity_upgrade_1>, "iron_age");
ItemStages.restrict(<item:lightmanscurrency:item_capacity_upgrade_2>, "iron_age");
ItemStages.restrict(<item:lightmanscurrency:speed_upgrade_1>, "iron_age");
ItemStages.restrict(<item:lightmanscurrency:speed_upgrade_2>, "iron_age");


# Framed Drawers
ItemStages.restrict(<item:functionalstorage:framed_1>, "iron_age");
ItemStages.restrict(<item:functionalstorage:framed_2>, "iron_age");
ItemStages.restrict(<item:functionalstorage:framed_4>, "iron_age");
ItemStages.restrict(<item:functionalstorage:compacting_framed_drawer>, "iron_age");

	// Fancy Drawers
ItemStages.restrict(<item:functionalstorage:compacting_drawer>, "iron_age");
ItemStages.restrict(<item:functionalstorage:storage_controller>, "iron_age");
ItemStages.restrict(<item:functionalstorage:armory_cabinet>, "iron_age");
ItemStages.restrict(<item:functionalstorage:ender_drawer>, "iron_age");

print("3-iron_age.zs loaded");