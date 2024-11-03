# Adds recipes for my custom items
print("recipes.zs loading...");
/*
furnace.addRecipe("recipeName", <output>, <input>, xp, cooktime-10s default);

craftingTable.addShapeless("recipeName", <output>, [<inputs>]);

craftingTable.addShaped("recipeName", <output>, 
    [[<input>, <input>, <input>],
    [<input>, <input>, <input>],
    [<input>, <input>, <input>]]);

craftingTable.removeByName("recipeName");

<recipetype:create:compacting>.addRecipe("recipeName", "heat", <item:output>, [<item:inputs>], [<fluid:inputs>], time);

do item:minecraft:air for empty spaces
*/

# Slime crystals
blastFurnace.addRecipe("pink_slime_crystal", <item:contenttweaker:pink_slime_crystal>, <item:industrialforegoing:pink_slime>, 2.5, 300);
blastFurnace.addRecipe("blood_crystal", <item:contenttweaker:blood_crystal>, <item:tconstruct:blood_slime_ball>, 5.0, 500);

# Lapis Sheets
<recipetype:create:pressing>.addRecipe("lapis_sheet", [<item:contenttweaker:lapis_sheet>*2], <item:minecraft:lapis_block>);

# Netherrack Fuel Pod
craftingTable.addShapeless("netherrack_fuel_pod", <item:contenttweaker:netherrack_fuel_pod>, [<tag:items:forge:netherrack>, <tag:items:forge:netherrack>, <tag:items:forge:netherrack>, <tag:items:forge:netherrack>]);


### Uranium fuel items
val uranium = <item:powah:uraninite>;
val impure = <item:electrodynamics:impuredustvanadium>;
val pure = <item:electrodynamics:dustvanadium>;


// Pellet
<recipetype:create:compacting>.addRecipe("uranium_pellet", "none", <item:contenttweaker:uranium_pellet>, [uranium*2], [], 20);


// Drop
<recipetype:create:compacting>.addRecipe("uranium_drop", "none", <item:contenttweaker:uranium_drop>, [<tag:items:forge:fuel_dust>, uranium*8], [], 40);

<recipetype:create:compacting>.addRecipe("uranium_drop_combine", "none", <item:contenttweaker:uranium_drop>, [<tag:items:forge:fuel_dust>, <item:contenttweaker:uranium_pellet>*2], [], 40);


// Canister
<recipetype:create:compacting>.addRecipe("uranium_canister", "none", <item:contenttweaker:uranium_canister>, [<item:tconstruct:copper_can>, <item:contenttweaker:uranium_drop>*2], [], 50);


// Rod
<recipetype:create:compacting>.addRecipe("uranium_rod", "none", <item:contenttweaker:uranium_rod>, [<item:contenttweaker:uranium_canister>*4, <item:powah:capacitor_basic_large>*2], [], 60);


// Fuel Core
<recipetype:create:mechanical_crafting>.addRecipe("uranium_core_impure", <item:contenttweaker:uranium_fuel_core>,
[[impure, <item:minecraft:air>, impure],
[<item:contenttweaker:uranium_rod>, <item:minecraft:air>, <item:contenttweaker:uranium_rod>],
[impure, <item:minecraft:air>, impure]]);

<recipetype:create:mechanical_crafting>.addRecipe("uranium_core_pure", <item:contenttweaker:uranium_fuel_core>,
[[<item:contenttweaker:uranium_rod>, pure, <item:contenttweaker:uranium_rod>]]);



# Wrapped Fuel Core recipes
// Craft
<recipetype:create:compacting>.addRecipe("wrapped_core_kelp", "none", <item:contenttweaker:wrapped_fuel_core>, [<item:contenttweaker:uranium_fuel_core>*4, <item:minecraft:dried_kelp>*8], [], 200);

<recipetype:create:compacting>.addRecipe("wrapped_core_string", "none", <item:contenttweaker:wrapped_fuel_core>, [<item:contenttweaker:uranium_fuel_core>*4, <tag:items:forge:string>*4], [], 400);

// Decraft
<recipetype:create:mechanical_crafting>.addRecipe("decraft_wrapped_core", <item:contenttweaker:uranium_fuel_core>*4,
[[<item:contenttweaker:wrapped_fuel_core>]]);


print("recipes.zs loaded");