# Changes recipes for various tech mods

print("tech-mods.zs loading...");

// Fixes the Weather Crystal's recipe conflict
recipes.remove(<EnderIO:itemMaterial:10>);
recipes.addShapeless(<EnderIO:itemMaterial:10>, [<ore:gemDiamond>, <ore:gemEmerald>]);

// Make Rubber Balls use the OreDict
recipes.remove(<EMT:EMTItems:10>);
recipes.addShaped(<EMT:EMTItems:10>, [[<ore:itemRubber>, <ore:itemRubber>], 
																	    [<ore:itemRubber>, <ore:itemRubber>]]);

// Make Mirrors give 3 items instead of 2 per craft, and makes them require Silver or Aluminum
recipes.removeShaped(<SolarFlux:mirror>);
recipes.addShaped(<SolarFlux:mirror>*3, [[<ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>],
																	    [null, <ore:ingotSilver>, null]]);

recipes.addShaped(<SolarFlux:mirror>*3, [[<ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>],
																	    [<ore:ingotAluminum>, <ore:ingotAluminum>, <ore:ingotAluminum>]]);

// Change the Tater Motor's recipe, and lets it use poisonous potatoes
recipes.remove(<SuperMultiDrills:DrillBattery>);
recipes.addShaped(<SuperMultiDrills:DrillBattery>, [[<ore:ingotIron>, <ore:dustRedstone>, <ore:ingotIron>],
																					     [<ore:ingotCopper>, <minecraft:potato>, <ore:ingotCopper>],
																					     [<ore:ingotIron>, <ore:dustRedstone>, <ore:ingotIron>]]);

recipes.addShaped(<SuperMultiDrills:DrillBattery>, [[<ore:ingotSilver>, <ore:dustRedstone>, <ore:ingotSilver>],
																					     [<ore:ingotGold>, <minecraft:poisonous_potato>, <ore:ingotGold>],
																					     [<ore:ingotSilver>, <ore:dustRedstone>, <ore:ingotSilver>]]);
/*
// Fix the recipe for Flux-Infused Boots so it matches other boots
recipes.removeShaped(<RedstoneArsenal:armor.bootsFlux>);
recipes.addShaped(<RedstoneArsenal:armor.bootsFlux>, [[null, null, null],
																								  [<RedstoneArsenal:material:128>, null, <RedstoneArsenal:material:128>],
																								  [<RedstoneArsenal:material:128>, null, <RedstoneArsenal:material:128>]]);
*/
print("tech-mods.zs loaded");