# Changes recipes for IndustrialCraft 2 & its add-ons

print("IC2.zs loading...");

### Advanced Solar Panels



### IC2
// Ingot recipe for Iridium Reinforced Plates
recipes.addShaped(<IC2:itemPartIridium>, [[<ore:ingotIridium>, <IC2:itemPartAlloy>, <ore:ingotIridium>],
																				   [<IC2:itemPartAlloy>, <ore:gemDiamond>, <IC2:itemPartAlloy>],
																				   [<ore:ingotIridium>, <IC2:itemPartAlloy>, <ore:ingotIridium>]]);

// Charcoal recipe for Raw Carbon Fibre
recipes.addShaped(<IC2:itemPartCarbonFibre>, [[<ore:dustCharcoal>, <ore:dustCharcoal>],
																				   [<ore:dustCharcoal>, <ore:dustCharcoal>],
																				   [<ore:dustCharcoal>, <ore:dustCharcoal>]]);

// Upgrade a CESU into an MFE
mods.biggercraftingtables.Big.addShaped(<IC2:blockElectric:1>, 
[[<ore:plateIron>, null, null, null, <ore:plateIron>],
  [null, <IC2:itemCable:3>, <IC2:itemBatCrystal>, <IC2:itemCable:3>, null],
  [null, <IC2:itemBatCrystal>, <IC2:blockElectric:7>, <IC2:itemBatCrystal>, null],
  [null, <IC2:itemCable:3>, <IC2:itemBatCrystal>, <IC2:itemCable:3>, null],
  [<ore:plateIron>, null, null, null, <ore:plateIron>]]);



# Upgrade a BatPack into an Advanced BatPack
val advanced_alloy = <IC2:itemPartAlloy>;
val advanced_battery = <IC2:itemAdvBat:26>;
val iridum_plate = <IC2:itemPartIridium>;

// Uncharged
recipes.addShaped(<IC2:itemArmorAdvBatpack:27>, [[advanced_battery, <ore:circuitBasic>, advanced_battery],
																						   [advanced_battery, <IC2:itemArmorBatpack:27>, advanced_battery],
																						   [advanced_battery, null, advanced_battery]]);

// 60k EU
recipes.addShaped(<IC2:itemArmorAdvBatpack:1>.withTag({charge: 60000.0}), [[advanced_battery, <ore:circuitBasic>, advanced_battery],
																				     [advanced_battery, <IC2:itemArmorBatpack:1>.withTag({charge: 60000.0}), advanced_battery],
																					 [advanced_battery, null, advanced_battery]]);



# Upgrade an Advanced Nano Chestplate into QuantumSuit Bodyarmour

// Fully Charged (Lapotron Crystal)
recipes.addShaped(<IC2:itemArmorQuantumChestplate>.withTag({charge: 3030000}), [[advanced_alloy, <GraviSuite:advNanoChestPlate:*>, advanced_alloy],
																				     [iridum_plate, <IC2:itemBatLamaCrystal:1>.withTag({charge: 1.0E7}), iridum_plate],
																					 [iridum_plate, <IC2:itemArmorJetpackElectric:*>, iridum_plate]]);

// Partially Charged (Jetpack and NanoSuit)
recipes.addShaped(<IC2:itemArmorQuantumChestplate>.withTag({charge: 3030000}), [[advanced_alloy, <GraviSuite:advNanoChestPlate:1>.withTag({charge: 3000000.0}), advanced_alloy],
																				     [iridum_plate, <IC2:itemBatLamaCrystal:26>.withTag({charge: 0}), iridum_plate],
																					 [iridum_plate, <IC2:itemArmorJetpackElectric:1>.withTag({charge: 30000}), iridum_plate]]);

// Partially Charged (NanoSuit)
recipes.addShaped(<IC2:itemArmorQuantumChestplate>.withTag({charge: 3000000}), [[advanced_alloy, <GraviSuite:advNanoChestPlate:1>.withTag({charge: 3000000.0}), advanced_alloy],
																				     [iridum_plate, <IC2:itemBatLamaCrystal:26>.withTag({charge: 0}), iridum_plate],
																					 [iridum_plate, <IC2:itemArmorJetpackElectric:26>.withTag({charge: 0}), iridum_plate]]);

// Uncharged
recipes.addShaped(<IC2:itemArmorQuantumChestplate:26>, [[advanced_alloy, <GraviSuite:advNanoChestPlate:26>.withTag({charge: 0}), advanced_alloy],
																				     [iridum_plate, <IC2:itemBatLamaCrystal:26>.withTag({}), iridum_plate],
																					 [iridum_plate, <IC2:itemArmorJetpackElectric:26>.withTag({}), iridum_plate]]);
																					 
// Convert Thorium Dust into IC2 Uranium (not working for some reason)
// Smelts into Yellorium
mods.ic2.ThermalCentrifuge.addRecipe([<IC2:itemUran235small>], <Magneticraft:item.dust:8>, 4000);
furnace.addRecipe(<BigReactors:BRIngot:4>, <Magneticraft:item.dust:8>, 2.0);

/*
# Retro cable recipes
# I miss the old version of IC2...
// Tin Cable
recipes.addShaped(<IC2:itemCable:13>*6, [[<ore:itemRubber>, <ore:itemRubber>, <ore:itemRubber>],
																			[<ore:ingotTin>, <ore:ingotTin>, <ore:ingotTin>],
																			[<ore:itemRubber>, <ore:itemRubber>, <ore:itemRubber>]]);

// Copper Cable
recipes.addShaped(<IC2:itemCable>*6, [[<ore:itemRubber>, <ore:itemRubber>, <ore:itemRubber>],
																	  [<ore:ingotCopper>, <ore:ingotCopper>, <ore:ingotCopper>],
																	  [<ore:itemRubber>, <ore:itemRubber>, <ore:itemRubber>]]);

// Gold Cable
recipes.addShaped(<IC2:itemCable:3>*3, [[<ore:itemRubber>, <ore:itemRubber>, <ore:itemRubber>],
																		  [<ore:ingotGold>, <ore:ingotGold>, <ore:ingotGold>],
																		  [<ore:itemRubber>, <ore:itemRubber>, <ore:itemRubber>]]);
*/
// Replace the Glass Fibre Cable recipe
// Gives 2 per craft and adds OreDict support
recipes.remove(<IC2:itemCable:9>);
recipes.addShaped(<IC2:itemCable:9>*2, [[<ore:glass>, <ore:glass>, <ore:glass>],
																	   [<IC2:itemDust2:2>, <ore:dustSilver>, <IC2:itemDust2:2>],
																	   [<ore:glass>, <ore:glass>, <ore:glass>]]);
/*
# Diamond Drill recipe fix
# This is because the turning table is cancerous to use
### Remove the multi-line comment if you want to use this recipe

# Uncharged
recipes.remove(<IC2:itemToolDDrill>);
recipes.addShaped(<IC2:itemToolDDrill:26>, [[null, null, null],
                                                                            [null, <minecraft:diamond>, null],
                                                                            [<minecraft:diamond>, <IC2:itemToolDrill:26>, <minecraft:diamond>]]);

# Charged
recipes.addShaped(<IC2:itemToolDDrill:1>, [[null, null, null],
                                                                          [null, <minecraft:diamond>, null],
                                                                          [<minecraft:diamond>, <IC2:itemToolDrill:1>, <minecraft:diamond>]]);
*/

print("IC2.zs loaded");