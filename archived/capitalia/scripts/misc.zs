# Changes recipes for miscellanous items
print("misc.zs loading...");
/*
recipes.remove(<>);
recipes.addShaped(<output>, [[<null>, <null>, <null>],
                                      [<null>, <null>, <null>],
                                      [<null>, <null>, <null>]]);
recipes.addShapeless(<output>, [<input1>, <INPUT2>, <INPUT3>, <ETC. {UP TO 9 MAX}>]);
furnace.addRecipe(<output>, <input>, XP[F]);
<item>.maxStackSize=NEW;
*/

// Clear OB tank NBT
recipes.addShapeless(<openblocks:tank>, [<openblocks:tank>]);

// Change the Imp Leather > Leather recipe to make 6 instead of 1
recipes.removeByRecipeName("natura:common/leather");
recipes.addShaped(<minecraft:leather>*6, [[<natura:materials:6>, <natura:materials:6>, null],
                                      [<natura:materials:6>, <natura:materials:6>, null],
                                      [null, null, null]]);
									  
// Lead Anvil recipe
recipes.addShaped(<minecraft:anvil>, [[<ore:blockLead>, <ore:blockLead>, <ore:blockLead>],
                                      [null, <ore:ingotLead>, null],
                                      [<ore:ingotLead>, <ore:ingotLead>, <ore:ingotLead>]]);

// More recipes for Shroom Powder
recipes.addShapeless(<biomesoplenty:shroompowder>, [<biomesoplenty:mushroom:1>]);
recipes.addShapeless(<biomesoplenty:shroompowder>*2, [<biomesoplenty:mushroom:2>, <biomesoplenty:mushroom:2>]);
recipes.addShapeless(<biomesoplenty:shroompowder>*4, [<biomesoplenty:mushroom:3>, <biomesoplenty:mushroom:3>]);
recipes.addShapeless(<biomesoplenty:shroompowder>*6, [<biomesoplenty:mushroom:4>, <biomesoplenty:mushroom:4>]);
recipes.addShapeless(<biomesoplenty:shroompowder>*5, [<biomesoplenty:mushroom:5>]);

// Add a use for shroom powder
recipes.addShapeless(<minecraft:mushroom_stew>, [<minecraft:bowl>, <biomesoplenty:shroompowder>, <minecraft:brown_mushroom>|<minecraft:red_mushroom>]);

// Convert Yellorium Dust into Yellowcake
recipes.addShapeless(<techguns:itemshared:97>, [<bigreactors:dustyellorium>]);

// Change the Filler Upgrade's recipe
recipes.remove(<simplequarry:upgrade_filler>);
recipes.addShaped(<simplequarry:upgrade_filler>, [[<minecraft:dirt:1>|<biomesoplenty:dirt:8>|<biomesoplenty:dirt:9>|<biomesoplenty:dirt:10>, <minecraft:iron_shovel>, <minecraft:dirt:1>|<biomesoplenty:dirt:8>|<biomesoplenty:dirt:9>|<biomesoplenty:dirt:10>],
                                   				[<minecraft:dirt:1>|<biomesoplenty:dirt:8>|<biomesoplenty:dirt:9>|<biomesoplenty:dirt:10>, <simplequarry:upgrade_base>, <minecraft:dirt:1>|<biomesoplenty:dirt:8>|<biomesoplenty:dirt:9>|<biomesoplenty:dirt:10>],
                                      			 	[<minecraft:dirt:1>|<biomesoplenty:dirt:8>|<biomesoplenty:dirt:9>|<biomesoplenty:dirt:10>, <minecraft:dirt:1>|<biomesoplenty:dirt:8>|<biomesoplenty:dirt:9>|<biomesoplenty:dirt:10>, <minecraft:dirt:1>|<biomesoplenty:dirt:8>|<biomesoplenty:dirt:9>|<biomesoplenty:dirt:10>]]);

// Change Flint & Steel to use Steel
recipes.remove(<minecraft:flint_and_steel>);
recipes.addShapeless(<minecraft:flint_and_steel>, [<ore:ingotSteel>, <advancedrocketry:misc:1>, <minecraft:flint>]);

// Math Calculator
recipes.remove(<jecalculation:item_calculator:1>);
recipes.addShaped(<jecalculation:item_calculator:1>, [[<minecraft:stone:*>, <ore:dyeBlack>, <minecraft:stone:*>],
                                    				     [<minecraft:stone:*>, <minecraft:redstone>, <minecraft:stone:*>],
                                   				     [<minecraft:stone:*>, <ore:ingotBronze>, <minecraft:stone:*>]]);

// Junkbox & Stone Storage recipes
recipes.remove(<multistorage:stone_storage>);
recipes.remove(<multistorage:stone_storage:5>);
recipes.addShaped(<multistorage:stone_storage:5>, [[<minecraft:stone_slab>, <minecraft:stone_slab>, <minecraft:stone_slab>],
                                   			 	     [<minecraft:stone_slab>, <extrautils2:compressedcobblestone>, <minecraft:stone_slab>],
                                     			 	     [<minecraft:stone_slab>, <minecraft:stone_slab>, <minecraft:stone_slab>]]);

recipes.addShaped(<multistorage:stone_storage>, [[<ore:stone>, <extrautils2:compressedcobblestone>, <ore:stone>],
                                   			 	[<minecraft:stone_slab>, null, <minecraft:stone_slab>],
                                     			 	[<ore:stone>, <extrautils2:compressedcobblestone>, <ore:stone>]]);

recipes.addShaped(<multistorage:stone_storage:1>, [[<minecraft:stone:*>, <minecraft:stone:*>, <minecraft:stone:*>],
                                   			 	   [<minecraft:stone:*>, null, <minecraft:stone:*>],
                                     			 	   [<minecraft:stone:*>, <minecraft:stone:*>, <minecraft:stone:*>]]);

// Smelt Yellowcake into Yellorium Dust
furnace.addRecipe(<bigreactors:ingotyellorium>, <techguns:itemshared:97>, 2.5);

// Builder's Bags
recipes.remove(<buildersbag:builders_bag_tier_five>);
recipes.remove(<buildersbag:builders_bag_tier_four>);
recipes.addShaped(<buildersbag:builders_bag_tier_four>, [[null, <ore:craftingTableWood>, null],
                                   				               [<minecraft:leather>, <buildersbag:builders_bag_tier_three>, <minecraft:leather>],
                                  				               [<ore:ingotSteel>, <ore:chestWood>, <ore:ingotSteel>]]);

recipes.addShaped(<buildersbag:builders_bag_tier_five>, [[null, <mekanism:ingot>|<techguns:itemshared:84>, null],
                                   				             [<minecraft:leather>, <buildersbag:builders_bag_tier_four>, <minecraft:leather>],
                                  				             [<faufil:hopperpipe>, <ore:blockDiamond>, <faufil:hopperpipe>]]);
// Redstone Engine
recipes.remove(<buildcraftcore:engine>);
recipes.addShaped(<buildcraftcore:engine>, [[<ore:plankWood>, <ore:plankWood>, <ore:plankWood>],
                                  			       [null, <ore:blockGlass>, null],
                                   			       [<ore:gearWood>, <minecraft:stone:*>, <ore:gearWood>]]);

// Golden Revolver recipe
recipes.remove(<techguns:goldenrevolver>);
recipes.addShaped(<techguns:goldenrevolver>.withTag({ammo: 0 as short, ammovariant: "default", camo: 0 as byte}), [[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:gold_ingot>],
                                   			                 [<minecraft:gold_ingot>, <foundry:revolver:*>|<techguns:revolver:*>, <minecraft:gold_ingot>],
                                     			             [<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:gold_ingot>]]);
															 
// Miner's Ring recipes
recipes.addShapeless(<baubles:ring>, [<mekanismtools:bronzepickaxe>, <projectred-core:resource_item:105>|<minecraft:redstone>, <projectred-core:resource_item:105>|<minecraft:redstone>]);
recipes.addShapeless(<baubles:ring>, [<minecraft:iron_pickaxe>, <minecraft:redstone>|<projectred-core:resource_item:105>]);

// Shop recipe
recipes.remove(<adminshop:shop>);
recipes.addShaped(<adminshop:shop>, [[<ore:plankWood>, <ore:blockGlass>, <ore:plankWood>],
                                     			 [<ore:plankWood>, <ore:ingotBronze>, <ore:plankWood>],
                                     			 [<ore:plankWood>, <ore:plankWood>, <ore:plankWood>]]);
												 
// Auto-seller recipe
recipes.remove(<adminshop:seller>);
recipes.addShaped(<adminshop:seller>, [[<minecraft:iron_ingot>, <minecraft:hopper>, <minecraft:iron_ingot>],
                                     		 	[<minecraft:bucket>|<claybucket:claybucket>, <ore:blockGlass>, <projectred-core:resource_item:105>|<minecraft:redstone>],
                                     			[<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]]);

// Convert Fuel Pellets back into Coal
recipes.addShapeless(<minecraft:coal>, [<progressiveautomation:coal_pellet>, <progressiveautomation:coal_pellet>, <progressiveautomation:coal_pellet>, <progressiveautomation:coal_pellet>, <progressiveautomation:coal_pellet>, <progressiveautomation:coal_pellet>, <progressiveautomation:coal_pellet>, <progressiveautomation:coal_pellet>]);

// Recipe for the Research Table
recipes.remove(<researchtable:table>);
recipes.addShaped(<researchtable:table>, [[null, <minecraft:writable_book>, null],
                                     			   [<minecraft:stone>|<minecraft:stone:2>|<minecraft:stone:4>|<minecraft:stone:6>, <ore:workbench>, <minecraft:stone>|<minecraft:stone:2>|<minecraft:stone:4>|<minecraft:stone:6>],
                                      		                       [<minecraft:stone>|<minecraft:stone:2>|<minecraft:stone:4>|<minecraft:stone:6>, null, <minecraft:stone>|<minecraft:stone:2>|<minecraft:stone:4>|<minecraft:stone:6>]]);

// Mechnical Crafter recipe change
recipes.remove(<extrautils2:crafter>);
recipes.addShapeless(<extrautils2:crafter>, [<extrautils2:analogcrafter>, <ore:chestWood>, <extrautils2:ingredients>]);

// Gravel --> Flint
recipes.addShapeless(<minecraft:flint>*2, [<minecraft:gravel>, <minecraft:gravel>, <minecraft:gravel>]);

// Decraft Cobwebs
recipes.addShapeless(<minecraft:string>*2, [<minecraft:web>]);

// Convert Wool to String
recipes.addShapeless(<minecraft:string>*2, [<ore:wool>, <minecraft:flint>, <minecraft:flint>]);

// Turn Sandstone into Glass
// Not as item-efficient, but faster
furnace.addRecipe(<minecraft:glass>*3, <minecraft:sandstone>, 0.3);
furnace.addRecipe(<minecraft:glass>*6, <minecraft:sandstone:2>, 0.6);

// Alt Exchanger Core (T1) recipe
recipes.addShaped(<exchangers:exchanger_core_tier1>, [[<ore:logWood>, null, <ore:logWood>],
                                     				            [<ore:dustRedstone>, <minecraft:ender_pearl>, <ore:dustRedstone>],
                                			 	            [<ore:logWood>, null, <ore:logWood>]]);

# Cheaper RF Engine
// Easier than changing every recipe lol, plus these things are kind of pointless on their own. All PA stuff is supposed to be early-game anyway.
recipes.remove(<progressiveautomation:rf_engine>);
recipes.addShaped(<progressiveautomation:rf_engine>, [[<ore:ingotCopper>, <minecraft:gold_ingot>, <ore:ingotCopper>],
                                      				          [<ore:ingotBronze>, <ore:dustRedstone>, <ore:ingotBronze>],
                                   				          [<ore:ingotCopper>, <ore:ingotBronze>, <ore:ingotCopper>]]);

# Change all the PA miners to use any damage value & oredict
recipes.remove(<progressiveautomation:miner_wooden>);
recipes.remove(<progressiveautomation:miner_stone>);
recipes.remove(<progressiveautomation:miner_iron>);
recipes.remove(<progressiveautomation:miner_diamond>);

recipes.addShaped(<progressiveautomation:miner_wooden>, [[<ore:plankWood>, <ore:chest>, <ore:plankWood>],
						  [<ore:plankWood>, <minecraft:furnace>, <ore:plankWood>],
						  [<ore:plankWood>, <minecraft:wooden_pickaxe:*>, <ore:plankWood>]]);

recipes.addShaped(<progressiveautomation:miner_stone>, [[<ore:stone>, <ore:stone>, <ore:stone>],
					                 [<ore:stone>, <progressiveautomation:miner_wooden>, <ore:stone>],
					                 [<ore:stone>, <minecraft:stone_pickaxe:*>, <ore:stone>]]);

recipes.addShaped(<progressiveautomation:miner_iron>, [[<ore:ingotIron>, <ore:ingotIron>, <ore:ingotIron>],
					              [<ore:ingotIron>, <progressiveautomation:miner_stone>, <ore:ingotIron>],
 					              [<ore:ingotIron>, <minecraft:iron_pickaxe:*>, <ore:ingotIron>]]);

recipes.addShaped(<progressiveautomation:miner_iron>, [[null, <ore:ingotIron>, null],
					              [<ore:ingotIron>, <simplequarry:fuel_quarry>, <ore:ingotIron>],
 					              [null, <ore:ingotIron>, null]]);

recipes.addShaped(<progressiveautomation:miner_diamond>, [[null, <minecraft:diamond>|<mekanism:otherdust>, null],
						    [<minecraft:diamond>|<mekanism:otherdust>, <progressiveautomation:miner_iron>, <minecraft:diamond>|<mekanism:otherdust>],
						    [null, <minecraft:diamond>|<mekanism:otherdust>, null]]);

# Cheaper PA Upgrades
recipes.remove(<progressiveautomation:wood_upgrade>);
recipes.remove(<progressiveautomation:stone_upgrade>);
recipes.remove(<progressiveautomation:iron_upgrade>);
recipes.remove(<progressiveautomation:diamond_upgrade>);

recipes.addShaped(<progressiveautomation:wood_upgrade>, [[<ore:slabWood>, <ore:slabWood>, <ore:slabWood>],
                                      					  [<ore:slabWood>, <mekanism:otherdust:3>|<minecraft:redstone>, <ore:slabWood>],
                                      				 	  [<ore:slabWood>, <ore:slabWood>, <ore:slabWood>]]);
recipes.addShaped(<progressiveautomation:wood_upgrade>*2, [[<ore:slabWood>, <ore:slabWood>, <ore:slabWood>],
                                      					      [<ore:slabWood>, <projectred-core:resource_item:105>, <ore:slabWood>],
                                      				 	      [<ore:slabWood>, <ore:slabWood>, <ore:slabWood>]]);

recipes.addShapeless(<progressiveautomation:stone_upgrade>, [<progressiveautomation:wood_upgrade>, <ore:cobblestone>, <ore:cobblestone>]);
recipes.addShapeless(<progressiveautomation:stone_upgrade>, [<progressiveautomation:wood_upgrade>, <minecraft:stone:*>, <minecraft:stone:*>]);
recipes.addShapeless(<progressiveautomation:iron_upgrade>, [<progressiveautomation:stone_upgrade>, <ore:ingotIron>, <ore:ingotIron>]);
recipes.addShapeless(<progressiveautomation:diamond_upgrade>, [<progressiveautomation:iron_upgrade>, <ore:gemDiamond>]);

// Alt recipe that uses Emeralds, because those things are kinda pointless
recipes.addShapeless(<progressiveautomation:diamond_upgrade>*2, [<progressiveautomation:iron_upgrade>, <ore:gemEmerald>]);


# Upgrade Magnets to Fluxomagnets
// Stone/Iron > Basic
mods.extendedcrafting.TableCrafting.addShapeless(0, <thermalinnovation:magnet>, [<tieredmagnets:magnet_durability_stone:*>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <mekanism:reinforcedalloy>]);

mods.extendedcrafting.TableCrafting.addShapeless(0, <thermalinnovation:magnet>, [<tieredmagnets:magnet_durability_iron:*>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <mekanism:reinforcedalloy>]);

// Gold/Redstone > Hardened
mods.extendedcrafting.TableCrafting.addShapeless(0, <thermalinnovation:magnet:1>, [<tieredmagnets:magnet_durability_gold:*>|<tieredmagnets:magnet_durability_redstone:*>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <mekanism:enrichedalloy>]);

// Lapis/Obsidian > Reinforced
mods.extendedcrafting.TableCrafting.addShapeless(0, <thermalinnovation:magnet:2>, [<tieredmagnets:magnet_durability_lapis:*>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <mekanism:reinforcedalloy>, <mekanism:reinforcedalloy>]);

mods.extendedcrafting.TableCrafting.addShapeless(0, <thermalinnovation:magnet:2>, [<tieredmagnets:magnet_durability_obsidian:*>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <mekanism:reinforcedalloy>]);

// Diamond/Emerald > Signalum
mods.extendedcrafting.TableCrafting.addShapeless(0, <thermalinnovation:magnet:3>, [<tieredmagnets:magnet_durability_diamond:*>|<tieredmagnets:magnet_durability_emerald:*>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <mekanism:reinforcedalloy>]);

print("misc.zs loaded");