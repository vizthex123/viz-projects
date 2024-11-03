# Changes recipes for AE2's blocks & items. Mostly to integrate them with Refined Storage.
print("AE2.zs loading...");
/*
recipes.remove(<>);
recipes.addShaped(<output>, [[<null>, <null>, <null>],
                                      [<null>, <null>, <null>],
                                      [<null>, <null>, <null>]]);
recipes.addShapeless(<output>, [<input1>, <INPUT2>, <INPUT3>, <ETC. {UP TO 9 MAX}>]);
furnace.addRecipe(<output>, <input>, XP[F]);

Combination Crafting: (Crafting Core + Pedestals)
mods.extendedcrafting.CombinationCrafting.addRecipe(<output>, rfCost, RFRATE, <catalyst>, [<input1>, <input2>, <up to 48 max>]);

mods.extendedcrafting.CombinationCrafting.remove(<output>);

Ender Crafting:
mods.extendedcrafting.EnderCrafting.addShaped(<output>, [[<input>, <input>, <input>], [<input>, <input>, <input>], [<input>, <input>, <input>]], SECONDS);

mods.extendedcrafting.EnderCrafting.addShapeless(<output>, [<input1>, <input2>, <up to 9 max>], SECONDS); 

mods.extendedcrafting.EnderCrafting.remove(<output>);
*/

#####################################
#						Components							#
#####################################

// Convert RS Processors to AE2
recipes.remove(<appliedenergistics2:material:22>);
recipes.remove(<appliedenergistics2:material:23>);
recipes.remove(<appliedenergistics2:material:24>);

recipes.addShapeless(<appliedenergistics2:material:22>, [<ore:circuitBasic>, <refinedstorage:processor:4>]);
recipes.addShapeless(<appliedenergistics2:material:23>, [<ore:circuitAdvanced>, <refinedstorage:processor:3>]);
recipes.addShapeless(<appliedenergistics2:material:24>, [<ore:circuitAdvanced>, <ore:circuitBasic>, <refinedstorage:processor:5>]);
recipes.addShapeless(<appliedenergistics2:material:24>*2, [<ore:circuitElite>, <refinedstorage:processor:5>, <refinedstorage:processor:5>]);

# Craft Fluix using Crystal Compound + Redstone in a Quantum Compressor
// Crystal Compound
recipes.addShapeless(<contenttweaker:crystalcompound>, [<appliedenergistics2:material:1>, <appliedenergistics2:material:1>, <minecraft:quartz>, <refinedstorage:processor_binding>]);

// Fluix
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:material:7>*16, 8000, 24, <minecraft:redstone_block>, [<contenttweaker:crystalcompound>, <contenttweaker:crystalcompound>, <contenttweaker:crystalcompound>, <contenttweaker:crystalcompound>]);

// Cores
recipes.remove(<appliedenergistics2:material:43>);
recipes.remove(<appliedenergistics2:material:44>);

mods.extendedcrafting.TableCrafting.addShapeless(0, <appliedenergistics2:material:43>*2, [<appliedenergistics2:material>|<appliedenergistics2:material:10>, <ore:dustFluix>, <refinedstorage:processor:4>]);
mods.extendedcrafting.TableCrafting.addShapeless(0, <appliedenergistics2:material:43>*4, [<appliedenergistics2:material>|<appliedenergistics2:material:10>, <ore:dustFluix>, <appliedenergistics2:material:22>]);

mods.extendedcrafting.TableCrafting.addShapeless(0, <appliedenergistics2:material:44>*2, [<minecraft:quartz>|<appliedenergistics2:material:11>, <ore:dustFluix>, <refinedstorage:processor:4>]);
mods.extendedcrafting.TableCrafting.addShapeless(0, <appliedenergistics2:material:44>*4, [<minecraft:quartz>|<appliedenergistics2:material:11>, <ore:dustFluix>, <appliedenergistics2:material:22>]);

// Quartz Glass
recipes.remove(<appliedenergistics2:quartz_glass>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:quartz_glass>*8, [[<foundry:refractoryglass>, <foundry:refractoryglass>, <foundry:refractoryglass>],
[<ore:dustQuartz>, <ore:dustQuartz>, <ore:dustQuartz>],
[<foundry:refractoryglass>, <foundry:refractoryglass>, <foundry:refractoryglass>]], 5); 

mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:quartz_glass>*16, [[<extrautils2:decorativeglass:5>, <extrautils2:decorativeglass:5>, <extrautils2:decorativeglass:5>],
[<ore:dustQuartz>, <ore:dustQuartz>, <ore:dustQuartz>],
[<extrautils2:decorativeglass:5>, <extrautils2:decorativeglass:5>, <extrautils2:decorativeglass:5>]], 10); 

mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:quartz_glass>*32, [[<ore:blockGlassHardened>, <ore:blockGlassHardened>, <ore:blockGlassHardened>],
[<ore:dustQuartz>, <ore:dustQuartz>, <ore:dustQuartz>],
[<ore:blockGlassHardened>, <ore:blockGlassHardened>, <ore:blockGlassHardened>]], 20); 

// Fluix Pearl
// Same recipe, but uses Ender Crafting instead
recipes.remove(<appliedenergistics2:material:9>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:material:9>, [[<appliedenergistics2:material:8>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:8>],
[<appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <minecraft:ender_pearl>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>],
[<appliedenergistics2:material:8>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:8>]], 20); 

#####################################
#							Devices								#
#####################################
/*
Combination Crafting: (Crafting Core + Pedestals)
mods.extendedcrafting.CombinationCrafting.addRecipe(<output>, rfCost, RFRATE, <catalyst>, [<input1>, <input2>, <up to 48 max>]);

mods.extendedcrafting.CombinationCrafting.remove(<output>);


Ender Crafting:
mods.extendedcrafting.EnderCrafting.addShaped(<output>, [[<input>, <input>, <input>], [<input>, <input>, <input>], [<input>, <input>, <input>]], SECONDS);

mods.extendedcrafting.EnderCrafting.addShapeless(<output>, [<input1>, <input2>, <up to 9 max>], SECONDS);
*/

# ME Terminals
recipes.remove(<appliedenergistics2:part:340>);
recipes.remove(<appliedenergistics2:part:360>);
recipes.remove(<appliedenergistics2:part:380>);
recipes.remove(<appliedenergistics2:part:480>);
recipes.remove(<appliedenergistics2:part:520>);

	// Regular
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:380>, [<refinedstorage:grid>, <advancedrocketry:ic:3>, <appliedenergistics2:material:22>, <appliedenergistics2:material:43>, <ore:itemIlluminatedPanel>, <appliedenergistics2:material:44>], 30);

	// Crafting
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:360>, [<ore:workbench>, <appliedenergistics2:part:380>, <appliedenergistics2:material:23>], 20);

	// Pattern
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:340>, [<appliedenergistics2:part:380>, <appliedenergistics2:material:22>], 20);

	// Fluid
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:520>, [<appliedenergistics2:part:380>, <minecraft:bucket>, <appliedenergistics2:material:22>], 20);

	// Interface
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:480>, [<appliedenergistics2:interface>|<appliedenergistics2:part:440>,  <appliedenergistics2:part:380>], 30);

// ME Chest
recipes.remove(<appliedenergistics2:chest>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:chest>, 40000, 400, <refinedstorage:machine_casing>, [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:core>, <refinedstorage:core:1>, <refinedstorage:processor:3>, <refinedstorage:processor:4>, <refinedstorage:processor:5>]);

// ME Drive
recipes.remove(<appliedenergistics2:drive>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:drive>, 80000, 800, <appliedenergistics2:chest>, [<appliedenergistics2:material:23>, <appliedenergistics2:material:22>, <appliedenergistics2:material:24>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>]);

// ME Interface
recipes.removeShaped(<appliedenergistics2:interface>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:interface>, 50000, 250, <minecraft:iron_block>, [<ore:blockGlass>, <ore:blockGlass>, <appliedenergistics2:material:23>, <appliedenergistics2:material:22>, <appliedenergistics2:material:43>, <appliedenergistics2:material:44>]);

	// Fluid Interface
recipes.removeShaped(<appliedenergistics2:fluid_interface>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:fluid_interface>, 40000, 400, <appliedenergistics2:interface>, [<minecraft:bucket>, <ore:dyeBlue>, <ore:dyeBlue>, <ore:dyeBlue>, <ore:dyeBlue>]);

mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:fluid_interface>, 40000, 200, <appliedenergistics2:interface>, [<claybucket:claybucket>, <claybucket:claybucket>, <claybucket:claybucket>, <ore:dyeBlue>, <ore:dyeBlue>, <ore:dyeBlue>, <ore:dyeBlue>]);

	// Dual Interface
recipes.removeByRecipeName("ae2fc:dual_interface");
mods.extendedcrafting.EnderCrafting.addShapeless(<ae2fc:dual_interface>, [ <appliedenergistics2:fluid_interface>, <ore:blockSlime>, <appliedenergistics2:interface>, <advancedrocketry:ic:4>, <advancedrocketry:ic:5>], 120);

// Cell Workbench
recipes.remove(<appliedenergistics2:cell_workbench>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:cell_workbench>, 10000, 1000, <marblecraftingtable:marble_crafting_table>, [<ore:blockWool>, <ore:blockWool>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <refinedstorage:processor:3>]);

// ME IO Port
recipes.remove(<appliedenergistics2:io_port>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:io_port>, 25000, 250, <appliedenergistics2:chest>, [<ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:22>|<appliedenergistics2:material:23>]);

// Matter Condensor
recipes.remove(<appliedenergistics2:condenser>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:condenser>, 100000, 100, <appliedenergistics2:chest>, [<ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <appliedenergistics2:fluix_block>]);

// Energy Cell
recipes.remove(<appliedenergistics2:energy_cell>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:energy_cell>, 2048, 256, <appliedenergistics2:quartz_glass>, [<appliedenergistics2:material:1>, <appliedenergistics2:material:1>, <appliedenergistics2:material:1>, <appliedenergistics2:material:1>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>]);

// Dense Energy Cell
recipes.remove(<appliedenergistics2:dense_energy_cell>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:dense_energy_cell>, 8192, 256, <appliedenergistics2:fluix_block>, [<appliedenergistics2:energy_cell>, <appliedenergistics2:energy_cell>, <appliedenergistics2:energy_cell>, <appliedenergistics2:energy_cell>, <appliedenergistics2:energy_cell>, <appliedenergistics2:energy_cell>, <appliedenergistics2:energy_cell>, <appliedenergistics2:energy_cell>]);

// Crystal Growth Accelerator
recipes.remove(<appliedenergistics2:quartz_growth_accelerator>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:quartz_growth_accelerator>, 16384, 256, <appliedenergistics2:fluix_block>, [<appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:gold_ingot>, <jaopca:item_platechargedcertusquartz>]);

// Crystal Growth Chamber
recipes.remove(<ae2stuff:grower>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<ae2stuff:grower>, 32768, 512, <appliedenergistics2:fluix_block>, [<appliedenergistics2:quartz_growth_accelerator>, <appliedenergistics2:quartz_growth_accelerator>, <appliedenergistics2:quartz_growth_accelerator>, <appliedenergistics2:quartz_growth_accelerator>, <ore:chest>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <projectred-core:resource_item:104>, <jaopca:item_gearchargedcertusquartz>]);

// Crafting Unit
recipes.remove(<appliedenergistics2:crafting_unit>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:crafting_unit>, 16000, 64, <appliedenergistics2:fluix_block>, [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:23>]);


# Crafting CPUs
recipes.remove(<appliedenergistics2:crafting_storage_1k>);
recipes.remove(<appliedenergistics2:crafting_storage_4k>);
recipes.remove(<appliedenergistics2:crafting_storage_16k>);
recipes.remove(<appliedenergistics2:crafting_storage_64k>);

// 1k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:crafting_storage_1k>, 10240, 128, <appliedenergistics2:crafting_unit>, [<appliedenergistics2:material:35>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:24>]);

// 4k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:crafting_storage_4k>, 40960, 256, <appliedenergistics2:crafting_unit>, [<appliedenergistics2:material:36>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:24>]);

// 16k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:crafting_storage_16k>, 163840, 512, <appliedenergistics2:crafting_unit>, [<appliedenergistics2:material:37>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:24>]);

// 64k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:crafting_storage_64k>, 655360, 1024, <appliedenergistics2:crafting_unit>, [<appliedenergistics2:material:38>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:24>]);

// Co-Processor
recipes.remove(<appliedenergistics2:crafting_accelerator>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:crafting_accelerator>, 64000, 96, <appliedenergistics2:crafting_unit>, [<refinedstorage:processor:5>, <refinedstorage:processor:3>]);

# Storage Components
# Uses the same recipe, but moves it to Basic crafting

recipes.remove(<appliedenergistics2:material:35>);
recipes.remove(<appliedenergistics2:material:36>);
recipes.remove(<appliedenergistics2:material:37>);
recipes.remove(<appliedenergistics2:material:38>);

// 1k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:35>,
	[[<minecraft:redstone>, <appliedenergistics2:material>, <minecraft:redstone>], 
	[<appliedenergistics2:material>, <refinedstorage:processor:4>, <appliedenergistics2:material>], 
	[<minecraft:redstone>, <appliedenergistics2:material>, <minecraft:redstone>]]);

// 4k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:36>,
	[[<minecraft:redstone>, <refinedstorage:processor:3>, <minecraft:redstone>], 
	[<appliedenergistics2:material:35>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:35>], 
	[<minecraft:redstone>, <appliedenergistics2:material:35>, <minecraft:redstone>]]);

// 16k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:37>,
	[[<minecraft:glowstone_dust>, <refinedstorage:processor:3>, <minecraft:glowstone_dust>], 
	[<appliedenergistics2:material:36>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:36>], 
	[<minecraft:glowstone_dust>, <appliedenergistics2:material:36>, <minecraft:glowstone_dust>]]);

// 64k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:38>,
	[[<minecraft:glowstone_dust>, <refinedstorage:processor:3>, <minecraft:glowstone_dust>], 
	[<appliedenergistics2:material:37>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:37>], 
	[<minecraft:glowstone_dust>, <appliedenergistics2:material:37>, <minecraft:glowstone_dust>]]);

# Fluid Storage Components
# Uses the same recipe, but moves it to Basic crafting

recipes.remove(<appliedenergistics2:material:54>);
recipes.remove(<appliedenergistics2:material:55>);
recipes.remove(<appliedenergistics2:material:56>);
recipes.remove(<appliedenergistics2:material:57>);

// 1k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:54>,
	[[<minecraft:dye:4>, <refinedstorage:processor:3>, <minecraft:dye:4>], 
	[<appliedenergistics2:material>, <appliedenergistics2:material:22>, <appliedenergistics2:material>], 
	[<minecraft:dye:4>, <appliedenergistics2:material>, <minecraft:dye:4>]]);

// 4k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:55>,
	[[<minecraft:dye:4>, <refinedstorage:processor:3>, <minecraft:dye:4>], 
	[<appliedenergistics2:material:54>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:54>], 
	[<minecraft:dye:4>, <appliedenergistics2:material:54>, <minecraft:dye:4>]]);

// 16k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:56>,
	[[<minecraft:dye:4>, <refinedstorage:processor:3>, <minecraft:dye:4>], 
	[<appliedenergistics2:material:55>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:55>], 
	[<minecraft:dye:4>, <appliedenergistics2:material:55>, <minecraft:dye:4>]]);

// 64k
mods.extendedcrafting.TableCrafting.addShaped(1, <appliedenergistics2:material:57>,
	[[<minecraft:dye:4>, <refinedstorage:processor:3>, <minecraft:dye:4>], 
	[<appliedenergistics2:material:56>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:56>], 
	[<minecraft:dye:4>, <appliedenergistics2:material:56>, <minecraft:dye:4>]]);

# Storage Cells
recipes.remove(<appliedenergistics2:storage_cell_1k>);
recipes.remove(<appliedenergistics2:storage_cell_4k>);
recipes.remove(<appliedenergistics2:storage_cell_16k>);
recipes.remove(<appliedenergistics2:storage_cell_64k>);

// 1k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:storage_cell_1k>, 1024, 32, <appliedenergistics2:material:39>, [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:35>, <projectred-core:resource_item:105>, <minecraft:redstone>, <minecraft:redstone>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

	// Alt recipe that uses the 1k block from RS
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:storage_cell_1k>, 1024, 64, <refinedstorage:storage>, [<appliedenergistics2:material:39>, <appliedenergistics2:material:35>, <projectred-core:resource_item:104>, <refinedstorage:processor:3>, <refinedstorage:processor:4>]);

// 4k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:storage_cell_4k>, 4096, 64, <appliedenergistics2:material:39>, [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:36>, <projectred-core:resource_item:105>, <minecraft:redstone>, <minecraft:redstone>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

	// Alt recipes that use the 4k disk/block from RS
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:storage_cell_4k>, 4096, 128, <refinedstorage:storage:1>, [<appliedenergistics2:material:39>, <appliedenergistics2:material:36>, <projectred-core:resource_item:104>, <refinedstorage:processor:3>, <refinedstorage:processor:4>]);

mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:storage_cell_4k>, 4096, 160, <refinedstorage:storage_disk:1>, [<appliedenergistics2:material:39>, <appliedenergistics2:material:36>, <projectred-core:resource_item:104>, <refinedstorage:processor:3>, <refinedstorage:processor:4>]);

// 16k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:storage_cell_16k>, 16384, 128, <appliedenergistics2:material:39>, [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:37>, <projectred-core:resource_item:105>, <minecraft:glowstone_dust>, <minecraft:glowstone_dust>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

// 64k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:storage_cell_64k>, 65536, 256, <appliedenergistics2:material:39>, [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <appliedenergistics2:material:38>, <projectred-core:resource_item:105>, <minecraft:glowstone_dust>, <minecraft:glowstone_dust>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

# Fluid Storage Cells
recipes.remove(<appliedenergistics2:fluid_storage_cell_1k>);
recipes.remove(<appliedenergistics2:fluid_storage_cell_4k>);
recipes.remove(<appliedenergistics2:fluid_storage_cell_16k>);
recipes.remove(<appliedenergistics2:fluid_storage_cell_64k>);

// 1k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:fluid_storage_cell_1k>, 1024, 32, <appliedenergistics2:material:39>, [<appliedenergistics2:material:54>, <projectred-core:resource_item:105>, <minecraft:redstone>, <minecraft:redstone>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

//4k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:fluid_storage_cell_4k>, 4096, 64, <appliedenergistics2:material:39>, [<appliedenergistics2:material:55>, <projectred-core:resource_item:105>, <minecraft:redstone>, <minecraft:redstone>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

//16k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:fluid_storage_cell_16k>, 16384, 128, <appliedenergistics2:material:39>, [<appliedenergistics2:material:56>, <projectred-core:resource_item:105>, <minecraft:glowstone_dust>, <minecraft:glowstone_dust>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

//64k
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:fluid_storage_cell_64k>, 65536, 256, <appliedenergistics2:material:39>, [<appliedenergistics2:material:57>, <projectred-core:resource_item:105>, <minecraft:glowstone_dust>, <minecraft:glowstone_dust>, <appliedenergistics2:material:22>, <appliedenergistics2:material:23>]);

# Spatial Components
# Uses the same recipe, but moves it to the Ender Crafter

recipes.remove(<appliedenergistics2:material:32>);
recipes.remove(<appliedenergistics2:material:33>);
recipes.remove(<appliedenergistics2:material:34>);

// 2^3
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:material:32>,
	[[<minecraft:glowstone_dust>, <appliedenergistics2:material:9>, <minecraft:glowstone_dust>], 
	[<appliedenergistics2:material:9>, <appliedenergistics2:material:24>, <appliedenergistics2:material:9>], 
	[<minecraft:glowstone_dust>, <appliedenergistics2:material:9>, <minecraft:glowstone_dust>]], 8);

// 16^3
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:material:33>,
	[[<minecraft:glowstone_dust>, <appliedenergistics2:material:32>, <minecraft:glowstone_dust>], 
	[<appliedenergistics2:material:32>, <appliedenergistics2:material:24>, <appliedenergistics2:material:32>], 
	[<minecraft:glowstone_dust>, <appliedenergistics2:material:32>, <minecraft:glowstone_dust>]], 16);

// 128^3
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:material:34>,
	[[<minecraft:glowstone_dust>, <appliedenergistics2:material:33>, <minecraft:glowstone_dust>], 
	[<appliedenergistics2:material:33>, <appliedenergistics2:material:24>, <appliedenergistics2:material:33>], 
	[<minecraft:glowstone_dust>, <appliedenergistics2:material:33>, <minecraft:glowstone_dust>]], 32);

# Spatial Cells
# RF cost is the cubed amount * 1,000
# RF rate is the cubed amount

recipes.remove(<appliedenergistics2:spatial_storage_cell_2_cubed>);
recipes.remove(<appliedenergistics2:spatial_storage_cell_16_cubed>);
recipes.remove(<appliedenergistics2:spatial_storage_cell_128_cubed>);

// 2^3
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:spatial_storage_cell_2_cubed>, 8000, 8, <appliedenergistics2:material:32>, [<appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <projectred-core:resource_item:342>, <projectred-core:resource_item:104>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>]);

// 16^3
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:spatial_storage_cell_16_cubed>, 4096000, 4096, <appliedenergistics2:material:33>, [<appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <projectred-core:resource_item:342>, <projectred-core:resource_item:104>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>]);

// 128^3
// This one doesn't follow the above formula for RF amounts since it makes absurb numbers
// Instead, it's just double the cost for the 16^3 cell
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:spatial_storage_cell_128_cubed>, 8192000, 8192, <appliedenergistics2:material:34>, [<appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <projectred-core:resource_item:342>, <projectred-core:resource_item:104>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>]);





// Molecular Assembler
recipes.remove(<appliedenergistics2:molecular_assembler>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:molecular_assembler>, 50000, 250, <minecraft:crafting_table>, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <appliedenergistics2:material:43>, <appliedenergistics2:material:44>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>]);

mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:molecular_assembler>, 50000, 500, <sct:stone_crafting_table>, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <appliedenergistics2:material:43>, <appliedenergistics2:material:44>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>]);

mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:molecular_assembler>, 50000, 1000, <marblecraftingtable:marble_crafting_table>, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>, <appliedenergistics2:material:43>, <appliedenergistics2:material:44>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>]);

// Light Detecting Fixture
recipes.remove(<appliedenergistics2:light_detector>);
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:light_detector>, [<minecraft:quartz>, <minecraft:iron_ingot>], 3); 

// Charged Quartz Fixture
recipes.remove(<appliedenergistics2:quartz_fixture>);
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:quartz_fixture>, [<appliedenergistics2:material:1>, <minecraft:iron_ingot>], 3); 

// Wireless Terminal
recipes.remove(<appliedenergistics2:wireless_terminal>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:wireless_terminal>, [[null, <appliedenergistics2:material:41>, null], [null, <appliedenergistics2:part:380>, null], [null, <appliedenergistics2:dense_energy_cell>, null]], 450); 

// Wireless Reciever
recipes.remove(<appliedenergistics2:material:41>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:material:41>, [[null, <appliedenergistics2:material:9>, null], [<refinedstorage:quartz_enriched_iron>, <appliedenergistics2:part:140>, <refinedstorage:quartz_enriched_iron>], [null, <refinedstorage:quartz_enriched_iron>, null]], 30); 

// ME Wireless Access Point
recipes.remove(<appliedenergistics2:wireless_access_point>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:wireless_access_point>, [[null, <appliedenergistics2:material:41>, null], [null, <appliedenergistics2:material:22>, null], [null, <appliedenergistics2:part:16>, null]], 45); 

// Wireless Booster (Cards)
recipes.remove(<appliedenergistics2:material:42>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:material:42>*2, [[null, null, null], [<appliedenergistics2:material:46>, <appliedenergistics2:material>|<appliedenergistics2:material:10>, <appliedenergistics2:material:8>], [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>]], 15); 

// Biometric Card
recipes.remove(<appliedenergistics2:biometric_card>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:biometric_card>, [[null, null, null], [<appliedenergistics2:material:22>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>], [<minecraft:gold_ingot>, <projectred-core:resource_item:105>, <minecraft:gold_ingot>]], 60); 

// Memory Card (For P2P tunnels)
recipes.remove(<appliedenergistics2:memory_card>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:memory_card>, [[null, null, null], [<appliedenergistics2:material:23>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>], [<minecraft:gold_ingot>, <projectred-core:resource_item:105>, <minecraft:gold_ingot>]], 60); 

// Network Tool
recipes.remove(<appliedenergistics2:material:39>);
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:network_tool>, [<ore:itemIlluminatedPanel>, <teslacorelib:wrench>|<magneticraft:wrench>|<base:wrench>|<buildcraftcore:wrench>|<thermalfoundation:wrench>, <refinedstorage:processor:5>, <refinedstorage:processor:3>], 60); 

// View Cell
recipes.remove(<appliedenergistics2:view_cell>);
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:view_cell>, [<appliedenergistics2:material:39>, <appliedenergistics2:material>|<appliedenergistics2:material:10>, <minecraft:paper>], 25); 

// ME Storage Housing
recipes.remove(<appliedenergistics2:material:39>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:material:39>, [[<appliedenergistics2:quartz_glass>, <projectred-core:resource_item:105>, <appliedenergistics2:quartz_glass>], [<minecraft:redstone>, null, <minecraft:redstone>], [<refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>]], 10); 

# Illuminated Panels
recipes.remove(<appliedenergistics2:part:160>);
recipes.remove(<appliedenergistics2:part:180>);
recipes.remove(<appliedenergistics2:part:200>);

mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:part:180>*3, [[null, <minecraft:glowstone>, <appliedenergistics2:quartz_glass>],
[<minecraft:iron_ingot>, <minecraft:redstone>|<projectred-core:resource_item:105>, <appliedenergistics2:quartz_glass>],
[null, <minecraft:glowstone>, <appliedenergistics2:quartz_glass>]], 10); 

	// Dark
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:200>, [<projectred-core:resource_item:515>, <appliedenergistics2:part:180>], 5); 

	// Bright
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:160>, [<projectred-core:resource_item:500>, <appliedenergistics2:part:180>], 5); 

# Planes
// Formation
recipes.remove(<appliedenergistics2:part:320>);
recipes.remove(<appliedenergistics2:part:321>);

mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:part:320>, [[null, null, null],
[<appliedenergistics2:material:7>, <appliedenergistics2:material:7>, <appliedenergistics2:material:7>],
[<minecraft:iron_ingot>, <appliedenergistics2:material:43>, <minecraft:iron_ingot>]], 45); 

mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:321>, [<appliedenergistics2:part:320>, <minecraft:bucket>], 5);

// Anniliation
recipes.remove(<appliedenergistics2:part:300>);
recipes.remove(<appliedenergistics2:part:302>);

mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:part:300>, [[null, null, null],
[<appliedenergistics2:material:7>, <appliedenergistics2:material:7>, <appliedenergistics2:material:7>],
[<minecraft:iron_ingot>, <appliedenergistics2:material:44>, <minecraft:iron_ingot>]], 45); 

mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:302>, [<appliedenergistics2:part:300>, <minecraft:bucket>], 5);

// Identity
recipes.remove(<appliedenergistics2:part:301>);
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:301>, [<appliedenergistics2:part:300>, <appliedenergistics2:material:9>], 5);

// Security Terminal
recipes.remove(<appliedenergistics2:security_station>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:security_station>, 10000, 50, <refinedstorage:security_manager>, [<refinedstorage:security_card>, <advancedrocketry:ic:3>, <ore:circuitAdvanced>, <appliedenergistics2:material:22>]);

// Energy Acceptor
recipes.remove(<appliedenergistics2:energy_acceptor>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:energy_acceptor>, 5000, 5, <refinedstorage:core>, [<appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <refinedstorage:processor:3>, <refinedstorage:processor:5>]);

// ME Controller
recipes.remove(<appliedenergistics2:controller>);
mods.extendedcrafting.CombinationCrafting.addRecipe(<appliedenergistics2:controller>, 262144, 255, <refinedstorage:controller>, [<appliedenergistics2:energy_acceptor>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <ore:gearChargedCertusQuartz>, <ore:plateChargedCertusQuartz>, <appliedenergistics2:material:24>, <appliedenergistics2:material:23>, <appliedenergistics2:material:22>, <extrautils2:decorativesolid:3>, <extrautils2:decorativesolid:3>, <extrautils2:decorativesolid:3>, <extrautils2:decorativesolid:3>]);

# Quantum Ring & Chamber
recipes.remove(<appliedenergistics2:quantum_link>);
recipes.remove(<appliedenergistics2:quantum_ring>);

// Ring
mods.extendedcrafting.TableCrafting.addShaped(2, <appliedenergistics2:quantum_ring>*16, 
	[[<jaopca:item_platechargedcertusquartz>, <thermalfoundation:material:326>, <projectred-core:resource_item:342>, <thermalfoundation:material:326>, <jaopca:item_platechargedcertusquartz>], 
	[<thermalfoundation:material:326>, <projectred-exploration:stone:11>, <thermalfoundation:material:263>, <projectred-exploration:stone:11>, <thermalfoundation:material:326>], 
	[<projectred-core:resource_item:342>, <jaopca:item_gearchargedcertusquartz>, <mekanism:machineblock3>, <jaopca:item_gearchargedcertusquartz>, <projectred-core:resource_item:342>], 
	[<thermalfoundation:material:326>, <projectred-exploration:stone:11>, <thermalfoundation:material:263>, <projectred-exploration:stone:11>, <thermalfoundation:material:326>], 
	[<jaopca:item_platechargedcertusquartz>, <thermalfoundation:material:326>, <projectred-core:resource_item:342>, <thermalfoundation:material:326>, <jaopca:item_platechargedcertusquartz>]]);

// Chamber
mods.extendedcrafting.TableCrafting.addShaped(0, <appliedenergistics2:quantum_link>*2, 
	[[<appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>], 
	[<appliedenergistics2:quartz_glass>, <mekanism:atomicalloy>, <appliedenergistics2:quartz_glass>], 
	[<appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:quartz_glass>]]);

// P2P Tunnel
recipes.remove(<appliedenergistics2:part:460>);
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:part:460>*2, [[null, <appliedenergistics2:material:22>, null],
						                                            [<minecraft:gold_ingot>, <appliedenergistics2:material:24>, <minecraft:gold_ingot>],
																	[<appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>]], 45);

// Advanced Card
recipes.remove(<appliedenergistics2:material:28>);
recipes.addShapedMirrored(<appliedenergistics2:material:28>*2, [[<minecraft:diamond>, <minecraft:iron_ingot>, null],
                                     					          [<projectred-core:resource_item:105>, <appliedenergistics2:material:23>, <minecraft:iron_ingot>],
																  [<minecraft:diamond>, <minecraft:iron_ingot>, null]]);
#######################
#		Cables		#
#######################
/*
Ender Crafting:
mods.extendedcrafting.EnderCrafting.addShaped(<output>, [[<input>, <input>, <input>], [<input>, <input>, <input>], [<input>, <input>, <input>]], SECONDS); 

mods.extendedcrafting.EnderCrafting.addShapeless(<output>, [<input1>, <input2>, <up to 9 max>], SECONDS); 

mods.extendedcrafting.EnderCrafting.remove(<output>);
*/

recipes.remove(<appliedenergistics2:part:516>);
recipes.remove(<appliedenergistics2:part:140>);
recipes.remove(<appliedenergistics2:part:36>);

# Quartz Fibers
mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:part:140>*6, [[<ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>],
[<appliedenergistics2:material:3>|<appliedenergistics2:material:2>, <appliedenergistics2:material:3>|<appliedenergistics2:material:2>, <appliedenergistics2:material:3>|<appliedenergistics2:material:2>],
[<ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>]], 15); 

# Covered
// Regular
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:36>, [<ore:blockWool>, <appliedenergistics2:part:16>], 5); 

// Dense
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:516>, [<appliedenergistics2:part:36>, <appliedenergistics2:part:36>, <appliedenergistics2:part:36>, <appliedenergistics2:part:36>], 5); 


# Glass Cables
recipes.remove(<appliedenergistics2:part:16>);
recipes.remove(<appliedenergistics2:part:56>);
recipes.remove(<appliedenergistics2:part:76>);

// Fluix
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:16>*4, [<appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:material:7>|<appliedenergistics2:material:12>, <appliedenergistics2:part:140>], 5); 

mods.extendedcrafting.EnderCrafting.addShaped(<appliedenergistics2:part:16>*16, [[<appliedenergistics2:material:12>, <appliedenergistics2:material:12>, <appliedenergistics2:material:12>],
[<appliedenergistics2:part:140>, <appliedenergistics2:part:140>, <appliedenergistics2:part:140>],
[<appliedenergistics2:material:12>, <appliedenergistics2:material:12>, <appliedenergistics2:material:12>]], 30); 

# Smart Cables
// Fluix
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:56>, [<appliedenergistics2:part:36>, <minecraft:glowstone_dust>, <minecraft:redstone>], 5); 

# Dense Cables
// Fluix
mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:76>, [<appliedenergistics2:part:36>, <appliedenergistics2:part:36>, <appliedenergistics2:part:36>, <appliedenergistics2:part:36>, <minecraft:glowstone_dust>, <minecraft:redstone>], 20);

mods.extendedcrafting.EnderCrafting.addShapeless(<appliedenergistics2:part:76>, [<appliedenergistics2:part:516>, <minecraft:glowstone_dust>, <minecraft:redstone>], 10);

// Matter Cannon
// Cheaper than the default one
recipes.remove(<appliedenergistics2:matter_cannon>);
mods.extendedcrafting.TableCrafting.addShapedMirrored(1, <appliedenergistics2:matter_cannon>, 
	[[<appliedenergistics2:material:43>, <refinedstorage:quartz_enriched_iron>, <refinedstorage:quartz_enriched_iron>], 
	[null, <appliedenergistics2:material:35>, <appliedenergistics2:energy_cell>], 
	[null, null, <refinedstorage:quartz_enriched_iron>]]);

/* Disabled Content:

Quartz Grindstone & Crank
Entropy Manipulator
Charged Staff
Portable Cell
*/

print("AE2.zs loaded");