# Fixes various recipes
print("fixes.zs loading...");

// Fix IC2 rubber smelting into Jungle Logs
// Also adds a plank conversion recipe
furnace.remove(<minecraft:log:3>);
mods.thermalexpansion.Furnace.removeRecipe(<IC2:blockRubWood>);
mods.thermalexpansion.Furnace.addRecipe(1600, <IC2:blockRubWood>, <minecraft:coal:1>);

furnace.addRecipe(<minecraft:coal:1>, <ore:logWood>, 0.15);

recipes.addShapeless(<minecraft:planks:5>*2, [<IC2:blockRubWood>]);


// Fix the Cardboard Sheet have a million recipes for no reason
recipes.remove(<EMT:EMTItems:11>);
recipes.addShaped(<EMT:EMTItems:11>, [[<minecraft:paper>, <minecraft:paper>, <minecraft:paper>],
																		[<ore:logWood>, <ore:logWood>, <ore:logWood>],
																		[<minecraft:paper>, <minecraft:paper>, <minecraft:paper>]]);

print("fixes.zs loaded");