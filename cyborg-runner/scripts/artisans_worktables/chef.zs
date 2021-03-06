# Adds recipes to the Chef's Worktable(s)

import mods.artisanworktables.builder.RecipeBuilder;
import mods.artisanintegrations.requirement.FTGU;
import mods.artisanintegrations.requirement.Reskillable;
import mods.artisanintegrations.requirement.GameStages;

print("chef.zs loading...");

/*
https://artisan-worktables.readthedocs.io/en/latest/recipes/gettingstarted/
https://artisan-worktables.readthedocs.io/en/latest/recipes/tools/
https://artisan-worktables.readthedocs.io/en/latest/recipes/basic/
*/

# Vanilla Foods
recipes.remove(<minecraft:cake>);
recipes.remove(<minecraft:beetroot_soup>);
recipes.remove(<minecraft:mushroom_stew>);
recipes.remove(<minecraft:pumpkin_pie>);
recipes.remove(<minecraft:rabbit_stew>);

// Poison Potato > Baked Potato
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:poisonous_potato>])
  .setFluid(<liquid:lava> * 10)
  .addTool(<ore:artisansPan>, 3)
  .addOutput(<minecraft:baked_potato>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("poisonous_to_potato")
  .create();

// Cake
RecipeBuilder.get("chef")
  .setShaped([
    [<minecraft:sugar>, <minecraft:egg>, <minecraft:sugar>],
    [<ore:listAllgrain>, <ore:listAllgrain>, <ore:listAllgrain>]])
  .setFluid(<liquid:milk> * 3000)
  .addTool(<ore:artisansKnife>, 7)
  .addOutput(<minecraft:cake>)
  .addRequirement(GameStages.allOf(["advanced_cooking"]))
  .addRequirement(FTGU.allOf(["cyborg:crafting/chef", "cyborg:survival/advanced_cooking"]))
  .setName("cake")
  .create();

// Beetroot Soup
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:beetroot>, <minecraft:beetroot>, <minecraft:beetroot>, <minecraft:bowl>])
  .addTool(<ore:artisansKnife>, 6)
  .addOutput(<minecraft:beetroot_soup>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("beetroot_soup")
  .create();

// Mushroom Stew
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:bowl>, <minecraft:brown_mushroom>, <minecraft:red_mushroom>])
  .addTool(<ore:artisansKnife>, 1)
  .setFluid(<liquid:milk> * 25)
  .addOutput(<minecraft:mushroom_stew>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("mushroom_stew")
  .create();

// Rabbit Stew
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:cooked_rabbit>, <minecraft:baked_potato>, <minecraft:bowl>, <minecraft:carrot>, <minecraft:brown_mushroom>|<minecraft:red_mushroom>])
  .addTool(<ore:artisansKnife>, 3)
  .setFluid(<liquid:lava> * 100)
  .addOutput(<minecraft:rabbit_stew>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("rabbit_stew")
  .create();

// Pumpkin Pie
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:pumpkin>, <minecraft:egg>, <minecraft:sugar>])
  .addTool(<ore:artisansKnife>, 3)
  .addOutput(<minecraft:pumpkin_pie>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("pumpkin_pie")
  .create();


### Change recipes for BYG's food items
# Glowshroom Soups
recipes.remove(<byg:glowshroomsoupblue>);
recipes.remove(<byg:glowshroomsouppurple>);
recipes.remove(<byg:green_glowshroom_stew>);

// Blue
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:bowl>, <byg:blueglowshroomitem>, <byg:blueglowshroomitem>])
  .addOutput(<byg:glowshroomsoupblue>)
  .addRequirement(GameStages.allOf(["advanced_cooking"]))
  .addRequirement(FTGU.allOf(["cyborg:crafting/chef", "cyborg:survival/advanced_cooking"]))
  .setName("blue_glowshroom_soup")
  .create();

// Green
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:bowl>, <byg:greenglowshroomitem>, <byg:greenglowshroomitem>])
  .addOutput(<byg:green_glowshroom_stew>)
  .addRequirement(GameStages.allOf(["advanced_cooking"]))
  .addRequirement(FTGU.allOf(["cyborg:crafting/chef", "cyborg:survival/advanced_cooking"]))
  .setName("green_glowshroom_soup")
  .create();

// Purple
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:bowl>, <byg:purpleglowshroomitem>, <byg:purpleglowshroomitem>])
  .addOutput(<byg:glowshroomsouppurple>)
  .addRequirement(GameStages.allOf(["advanced_cooking"]))
  .addRequirement(FTGU.allOf(["cyborg:crafting/chef", "cyborg:survival/advanced_cooking"]))
  .setName("purple_glowshroom_soup")
  .create();

# Pies
recipes.remove(<byg:blueberrypie>);
recipes.remove(<byg:strawberrypie>);
recipes.remove(<byg:greenapplepie>);

// Blueberry
RecipeBuilder.get("chef")
  .setShapeless([<xlfoodmod:pie_shell>, <byg:blueberry>, <byg:blueberry>, <minecraft:egg>, <minecraft:sugar>])
  .addOutput(<byg:blueberrypie>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("blueberry_pie")
  .create();

// Strawberry
RecipeBuilder.get("chef")
  .setShapeless([<xlfoodmod:pie_shell>, <ore:cropStrawberry>, <ore:cropStrawberry>, <minecraft:egg>, <minecraft:sugar>])
  .addOutput(<byg:strawberrypie>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("strawberry_pie")
  .create();

// Green Apple
RecipeBuilder.get("chef")
  .setShapeless([<xlfoodmod:pie_shell>, <byg:greenapple>, <byg:greenapple>, <minecraft:egg>, <minecraft:sugar>])
  .addOutput(<byg:greenapplepie>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("green_apple_pie")
  .create();

# Pumpkin Mash
recipes.remove(<byg:pumpkinmash>);
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:pumpkin>, <minecraft:pumpkin>, <minecraft:bowl>])
  .setFluid(<liquid:water> * 50)
  .addOutput(<byg:pumpkinmash> * 3)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("pumpkin_mash")
  .create();

// Pumpkin Bread
recipes.remove(<byg:pumpkinbread>);
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:wheat>, <minecraft:wheat>, <minecraft:wheat>, <byg:pumpkinmash>])
  .addOutput(<byg:pumpkinbread> * 3)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("pumpkin_bread")
  .create();

# Other Soups
recipes.remove(<byg:carrotsoup>);
recipes.remove(<byg:tropicalfishsoup>);
recipes.remove(<byg:spidereyesoup>);

// Carrot
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:bowl>, <byg:cookedcarrot>, <byg:cookedcarrot>, <minecraft:sugar>])
  .setFluid(<liquid:water> * 100)
  .addTool(<ore:artisansKnife>, 2)
  .addOutput(<byg:carrotsoup>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("carrot_soup")
  .create();

// Tropical Fish
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:bowl>, <byg:cookedpufferfish>|<byg:cookedtropicalfish>, <byg:cookedpufferfish>|<byg:cookedtropicalfish>, <ore:listAllvegetable>])
  .setFluid(<liquid:water> * 500)
  .addTool(<ore:artisansKnife>, 5)
  .addOutput(<byg:tropicalfishsoup>)
  .addRequirement(GameStages.allOf(["advanced_cooking"]))
  .addRequirement(FTGU.allOf(["cyborg:crafting/chef", "cyborg:survival/advanced_cooking"]))
  .setName("tropical_fish_soup")
  .create();

// Spider Eye
RecipeBuilder.get("chef")
  .setShapeless([<minecraft:bowl>, <byg:cookedspidereye>, <byg:cookedspidereye>])
  .setFluid(<liquid:water> * 50)
  .addTool(<ore:artisansKnife>, 1)
  .addOutput(<byg:spidereyesoup>)
  .addRequirement(GameStages.allOf(["cooking"]))
  .addRequirement(FTGU.anyOf(["cyborg:crafting/chef", "cyborg:survival/basic_cooking"]))
  .setName("spider_eye_soup")
  .create();

print("chef.zs loaded");