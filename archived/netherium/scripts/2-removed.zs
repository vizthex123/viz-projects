# Removes recipes for whatever reason
print("removed.zs loading...");

/*
<recipetype:minecraft:crafting>.removeRecipe(<item>);
<recipetype:minecraft:smelting>.removeRecipe(<item>);

furnace.removeByName("recipe");
craftingTable.removeByName("recipeName");
*/


# Backpack upgrades
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:feeding_upgrade>);
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:restock_upgrade>);
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:advanced_restock_upgrade>);
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:void_upgrade>);
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:advanced_void_upgrade>);
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:inception_upgrade>);
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:tool_swapper_upgrade>);
<recipetype:minecraft:crafting>.removeRecipe(<item:sophisticatedbackpacks:advanced_tool_swapper_upgrade>);


# Unused crushed ores
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_nickel_ore>);
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_osmium_ore>);
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_uranium_ore>);
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_aluminum_ore>);


# Uranite smelting, forces you to use a blast furnace
<recipetype:minecraft:smelting>.removeRecipe(<item:powah:uraninite>);


# Unused crushed ores
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_nickel_ore>);
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_osmium_ore>);
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_uranium_ore>);
<recipetype:create:crushing>.removeRecipe(<item:create:crushed_aluminum_ore>);


# Automatic Food Pouches
<recipetype:create:crushing>.removeRecipe(<item:foodpouches:small_automatic_food_pouch>);
<recipetype:create:crushing>.removeRecipe(<item:foodpouches:medium_automatic_food_pouch>);
<recipetype:create:crushing>.removeRecipe(<item:foodpouches:large_automatic_food_pouch>);
<recipetype:create:crushing>.removeRecipe(<item:foodpouches:massive_automatic_food_pouch>);

<recipetype:minecraft:crafting>.removeRecipe(<item:foodpouches:small_automatic_food_pouch>);
<recipetype:minecraft:crafting>.removeRecipe(<item:foodpouches:medium_automatic_food_pouch>);
<recipetype:minecraft:crafting>.removeRecipe(<item:foodpouches:large_automatic_food_pouch>);
<recipetype:minecraft:crafting>.removeRecipe(<item:foodpouches:massive_automatic_food_pouch>);


# Misc
craftingTable.removeByName("powah:crafting/uraninite_raw_dense_to_poor");

<recipetype:minecraft:crafting>.removeRecipe(<item:foodpouches:creative_food_pouch>);
<recipetype:minecraft:crafting>.removeRecipe(<item:anointeditems:lightness_oil>);
<recipetype:minecraft:crafting>.removeRecipe(<item:minecraft:magma_cream>);
<recipetype:minecraft:crafting>.removeRecipe(<item:bno:copper_block>);
<recipetype:minecraft:crafting>.removeRecipe(<item:tconstruct:copper_ingot>);
<recipetype:minecraft:crafting>.removeRecipe(<item:minecraft:sticky_piston>);


print("removed.zs loaded");