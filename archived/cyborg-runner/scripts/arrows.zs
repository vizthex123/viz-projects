# Changes the recipes for the arrows
print("arrows.zs loading...");
/*
recipes.remove(<simplyarrows:>);
recipes.addShapedMirrored(<output>, [[null, <null>, null],
                                     		                 [null, <null>, null],
                                  		                 [null, <null>, null]]);
recipes.addShapeless(<simplyarrows:>, [<input1>, <INPUT2>, <INPUT3>, <ETC. {UP TO 9 MAX}>]);
<simplyarrows:>.addTooltip(format.red("Tooltip"));
*/

// Change the recipe for Bone, Flint, and Iron Arrows
recipes.remove(<simplyarrows:arrow_bone>);
recipes.remove(<simplyarrows:arrow_flint>);
recipes.remove(<simplyarrows:arrow_iron>);
recipes.remove(<simplyarrows:arrow_torch>);
recipes.remove(<simplyarrows:arrow_tnt>);
recipes.addShapedMirrored("bone_arrow", <simplyarrows:arrow_bone>*2, [[null, <minecraft:bone>, null],
																										[null, <ore:stickWood>, null],
																										[null, <minecraft:feather>, null]]);

recipes.addShapedMirrored("flint_arrow", <simplyarrows:arrow_flint>*8, [[null, <minecraft:flint>, null],
																										[null, <ore:stickWood>, null],
																										[null, <minecraft:feather>, null]]);

recipes.addShapedMirrored("iron_arrow", <simplyarrows:arrow_iron>*4, [[null, <minecraft:iron_ingot>, null],
																										[null, <ore:stickWood>, null],
																										[null, <minecraft:feather>, null]]);

recipes.addShapeless("torch_arrow", <simplyarrows:arrow_torch>, [<minecraft:arrow>|<simplyarrows:arrow_flint>, <bonetorch:bonetorch>|<minecraft:torch>]);
<simplyarrows:arrow_torch>.addTooltip(format.yellow("Places a torch wherever it lands"));

recipes.addShapeless("tnt_arrow", <simplyarrows:arrow_tnt>, [<minecraft:tnt>, <minecraft:arrow>|<simplyarrows:arrow_bone>|<simplyarrows:arrow_flint>|<simplyarrows:arrow_iron>]);
<simplyarrows:arrow_tnt>.addTooltip(format.red("Explodes on impact. Same radius as a TNT block."));

print("arrows.zs loaded");