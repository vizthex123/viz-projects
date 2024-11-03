# Anything related to health or healing

print("Loading health.zs...");
print("Remember the Life & Soul Essence recipes are in health.zs");

// Tooltip for XP Level usage on Heart Containers
<scalinghealth:heartcontainer>.addTooltip(format.darkRed("Consumes 3 XP levels"));

// Melt coins into XP
// 1 Aurum = 20 XP
// Uses 4k RF, 8k for platinum
// Gives a nugget half the time - might change later
mods.thermalexpansion.Centrifuge.addRecipe([<thermalfoundation:material:192> % 50], <ordinarycoins:coinbronze>, <liquid:experience>*20, 4000);
mods.thermalexpansion.Centrifuge.addRecipe([<thermalfoundation:material:194> % 50], <ordinarycoins:coinsilver>, <liquid:experience>*100, 4000);
mods.thermalexpansion.Centrifuge.addRecipe([<minecraft:gold_nugget> % 50], <ordinarycoins:coingold>, <liquid:experience>*200, 4000);
mods.thermalexpansion.Centrifuge.addRecipe([<thermalfoundation:material:198> % 50], <ordinarycoins:coingold>, <liquid:experience>*1000, 8000);

// Life/Soul Essence recipes (Elementaristics)
mods.thermalexpansion.Refinery.addRecipe(<liquid:blood>*1000, <elementaristics:essence:10>%50, <liquid:lifeessence>*4000, 12000);
mods.thermalexpansion.InductionSmelter.addRecipe(<elementaristics:essence:16>, <minecraft:soul_sand>*16, <elementaristics:essence:10>*4, 55000);

mods.thermalexpansion.Transposer.addFillRecipe(<elementaristics:essence:10>, <scalinghealth:heartdust>*64, <liquid:lifeessence>*10000, 12000);

// Blue Heart crafting recipes
mods.thermalexpansion.InductionSmelter.addRecipe(<bhc:blue_heart>, <bhc:relic_apple>*4, <elementaristics:essence:16>, 16000);
mods.thermalexpansion.InductionSmelter.addRecipe(<bhc:blue_heart>, <extrautils2:magicapple>*16, <elementaristics:essence:15>, 24000);
mods.thermalexpansion.InductionSmelter.addRecipe(<bhc:blue_heart>, <minecraft:golden_apple>*8, <elementaristics:essence:9>, 36000);
mods.thermalexpansion.InductionSmelter.addRecipe(<bhc:blue_heart>*2, <minecraft:golden_apple:1>, <elementaristics:essence:10>, 50000, <bhc:blue_heart>, 50);

mods.bloodmagic.BloodAltar.addRecipe(<bhc:blue_heart>, <bhc:green_heart>, 2, 25000, 105, 150);
mods.bloodmagic.BloodAltar.addRecipe(<bhc:blue_heart>, <bhc:yellow_heart>, 4, 12500, 75, 100);

// Alternate recipes for the Blue Heart Canister
recipes.addShapeless(<bhc:blue_heart_canister>, [<bhc:green_heart_canister>, <ore:gemValuable>, <bhc:blue_heart>, <elementaristics:essence:16>, <elementaristics:essence:10>, <elementaristics:essence:10>]);

recipes.addShapeless(<bhc:blue_heart_canister>, [<bhc:yellow_heart_canister>, <ore:gemValuable>, <bhc:blue_heart>, <elementaristics:essence:9>, <elementaristics:essence:9>, <elementaristics:essence:9>]);

// Heart Dust crafting recipes
// Heart Dust can be used to make healing items from Scaling Health, and Life Essence from Elementaristics
recipes.addShapeless(<scalinghealth:heartdust>*32, [<levelhearts:heart_container>]);
recipes.addShapeless(<scalinghealth:heartdust>*8, [<levelhearts:heart_piece>]);
recipes.addShapeless(<scalinghealth:heartdust>*4, [<bhc:red_heart>]);
recipes.addShapeless(<scalinghealth:heartdust>*32, [<bhc:yellow_heart>]);
recipes.addShapeless(<scalinghealth:heartdust>*48, [<bhc:blue_heart>]);
recipes.addShapeless(<scalinghealth:heartdust>*64, [<bhc:green_heart>]);

// Heart Amulet recipe change
recipes.remove(<bhc:heart_amulet>);
recipes.addShaped(<bhc:heart_amulet>, [[<ore:string>, <ore:itemHeart>, <ore:string>],
																      [<ore:itemHeart>, <ore:blockGlass>, <ore:itemHeart>],
																	  [null, <ore:itemHeart>, null]]);
// Tooltips on how to get them
<bhc:red_heart>.addTooltip(format.aqua("Drops from all enemies with a 5% chance"));
<bhc:red_heart>.addTooltip(format.aqua("Can be eaten to restore 20 HP (10 Hearts)"));
<bhc:yellow_heart>.addTooltip(format.aqua("Drops from all Boss Mobs (100%)"));
<bhc:yellow_heart>.addTooltip(format.aqua("Can be eaten to restore 40 HP (20 Hearts)"));
<bhc:green_heart>.addTooltip(format.aqua("Drops from the Ender Dragon (100%)"));
<bhc:green_heart>.addTooltip(format.aqua("Can be eaten to restore 60 HP (30 Hearts)"));
<bhc:blue_heart>.addTooltip(format.aqua("Drops from Evokers (100%)"));
<bhc:blue_heart>.addTooltip(format.aqua("Rarely drops from Tier 3 & 4 Champions"));
<bhc:blue_heart>.addTooltip(format.aqua("Can be eaten to restore 80 HP (40 Hearts)"));
<bhc:blue_heart>.addShiftTooltip(format.red("I'm sure I can make this with raw life essence and the right machines"));
<bhc:wither_bone>.addTooltip(format.aqua("Drops from Wither Skeletons (100% Chance)"));

<bhc:heart_amulet>.addTooltip(format.aqua("Stores Heart Canisters (5 of each max)"));
<bhc:heart_amulet>.addTooltip(format.aqua("Shift+Right-Click to open GUI"));
<bhc:heart_amulet>.addTooltip(format.gold("Can be reforged using Gold Ingots"));

print("health.zs loaded");