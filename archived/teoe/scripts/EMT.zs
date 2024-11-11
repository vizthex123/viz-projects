# Changes recipes for Electro-Magic Tools
print("EMT.zs loading...");

/*
https://docs.blamejared.com/MineTweaker/en/modtweaker/thaumcraft_4_support/thaumcraft_4_support

//Arcane Workbench
//ResearchString, OutputStack, AspectString, InputArray
mods.thaumcraft.Arcane.addShaped("ASPECTS", <minecraft:stonebrick:3> * 4, "ordo 1", [[<minecraft:stonebrick>, <minecraft:stonebrick>, null], 
                                                                                     [<minecraft:stonebrick>, <minecraft:stonebrick>, null],
                                                                                     [null, null, null]]);

//ResearchString, OutputStack, AspectString, InputArray
mods.thaumcraft.Arcane.addShapeless("VOIDMETAL", <minecraft:ghast_tear>, "aqua 6, terra 6, perditio 6, ordo 6, aer 6, ignis 6", [<minecraft:ender_pearl>, <Thaumcraft:ItemResource:17>]);

//OutputStack
mods.thaumcraft.Arcane.removeRecipe(<Thaumcraft:ItemArcaneDoor>);
*/
/*
T1: 9 panels to make 10. Uses 8 of each primal.
T2: 8 T1 panels + 1 advanced to make 128. Uses 32 of each primal aspect.
T3: 4 T2 panel infusion to make 512, which can be upgrade to a quantum panel with the same recipe (try to make it accept both if i can). Uses 32 of each primal aspect + 16 potentia/permutatio/praecantatio.

aspect-specific ones need to have the same powergen values and similar recipes
- also add recipes to convert them back into regular ones

//Infusion
//ResearchString, MainInputStack, InputArray, AspectString, OutputStack, InstabilityAmount
mods.thaumcraft.Infusion.addRecipe("NITOR", <Thaumcraft:ItemResource:1>, [<minecraft:fire_charge>, <Thaumcraft:ItemResource>, <minecraft:flint_and_steel>], "ignis 20, potentia 10, permutatio 12", <minecraft:fire> * 4, 5);

//OutputStack
mods.thaumcraft.Infusion.removeRecipe(<Thaumcraft:ItemAmuletVis:1>);
*/
/*
val single = <EMT:EMTSolars>;
val double = <EMT:EMTSolars:1>;
val triple = <EMT:EMTSolars:2>;

// Change the recipe for the Double Compressed Solar Panel
mods.thaumcraft.Arcane.removeRecipe(double);
mods.thaumcraft.Arcane.addShaped("Compressed Solars", double, "aer 32, terra 32, ignis 32, aqua 32, perditio 32, ordo 32",
                                                                                     [[single, single, single], 
                                                                                     [single, <AdvancedSolarPanel:BlockAdvSolarPanel>, single],
                                                                                     [single, single, single]]);

// Change the recipe for the Triple Compressed Solar Panel
mods.thaumcraft.Infusion.addRecipe("Compressed Solars", double, [double, double, double], "aer 32, terra 32, ignis 32, aqua 32, perditio 32, ordo 32, potentia 16, permutatio 16, praecantatio 16", triple, 5);
*/

// Change the recipe for the Double Compressed Solar Panel
mods.thaumcraft.Arcane.removeRecipe(<EMT:EMTSolars:1>);
mods.thaumcraft.Arcane.addShaped("Compressed Solars", <EMT:EMTSolars:1>, "aer 32, terra 32, ignis 32, aqua 32, perditio 32, ordo 32", [[<EMT:EMTSolars>, <EMT:EMTSolars>, <EMT:EMTSolars>], 
                                                                                     [<EMT:EMTSolars>, <AdvancedSolarPanel:BlockAdvSolarPanel>, <EMT:EMTSolars>],
                                                                                     [<EMT:EMTSolars>, <EMT:EMTSolars>, <EMT:EMTSolars>]]);

// Change the recipe for the Triple Compressed Solar Panel
mods.thaumcraft.Infusion.addRecipe("Compressed Solars", <EMT:EMTSolars:1>, [<EMT:EMTSolars:1>, <EMT:EMTSolars:1>, <EMT:EMTSolars:1>], "aer 32, terra 32, ignis 32, aqua 32, perditio 32, ordo 32, potentia 16, permutatio 16, praecantatio 16", <EMT:EMTSolars:2>, 5);

print("EMT.zs loaded");