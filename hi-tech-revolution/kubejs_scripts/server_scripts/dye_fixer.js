// Imported version of my Dye Recipe Unifier script
// Changes dye recipes to use the tags added by the datapack
// Only wet & dry items require smelting (like in vanilla)
// Recipes are in the minecraft order cuz i'm lazy lol

// The history of this script is kinda neat, as well: I made it for this pack, copied it to Capitalia: Reminted, wanted to make it a mod and then remembered I can't and never will know java lol, then decided to make it a datapack + KubeJS combo (since datapacks can't remove recipes)
ServerEvents.recipes(e => {

    // Removals
    e.remove({type: "crafting_shapeless", output: "white_dye"})
    e.remove({type: "crafting_shapeless", output: "orange_dye"})
    e.remove({type: "crafting_shapeless", output: "magenta_dye"})
    e.remove({type: "crafting_shapeless", output: "light_blue_dye"})
    e.remove({type: "crafting_shapeless", output: "yellow_dye"})
    e.remove({type: "crafting_shapeless", output: "lime_dye"})
    e.remove({type: "crafting_shapeless", output: "pink_dye"})
    e.remove({type: "crafting_shapeless", output: "gray_dye"})
    e.remove({type: "crafting_shapeless", output: "light_gray_dye"})
    e.remove({type: "crafting_shapeless", output: "cyan_dye"})
    e.remove({type: "crafting_shapeless", output: "purple_dye"})
    e.remove({type: "crafting_shapeless", output: "blue_dye"})
    e.remove({type: "crafting_shapeless", output: "brown_dye"})
    e.remove({type: "crafting_shapeless", output: "green_dye"})
    e.remove({type: "smelting", output: "green_dye"})
    e.remove({type: "crafting_shapeless", output: "red_dye"})
    e.remove({type: "crafting_shapeless", output: "black_dye"})

    e.remove({id: "biomemakeover:dye/magenta_dye_from_magenta_bud"})
    e.remove({id: "biomemakeover:dye/pink_dye_from_pink_bud"})
    e.remove({id: "biomemakeover:dye/blue_dye_from_blue_bud"})
    e.remove({id: "biomemakeover:dye/brown_dye_from_brown_bud"})
    e.remove({id: "biomemakeover:dye/cyan_dye_from_cyan_bud"})
    e.remove({id: "biomemakeover:dye/gray_dye_from_gray_bud"})
    e.remove({id: "biomemakeover:dye/light_blue_dye_from_light_blue_bud"})
    e.remove({id: "biomemakeover:dye/purple_dye_from_purple_bud"})

    // White
    e.shapeless("white_dye", ["#dyetagger:dye_materials/white"]).id("dyeunifier:white_dye")
    e.shapeless("2x white_dye", ["#dyetagger:dye_materials/white_double"]).id("dyeunifier:white_dye_double")

    // Orange
    e.shapeless("orange_dye", ["#dyetagger:dye_materials/orange"]).id("dyeunifier:orange_dye")
    e.shapeless("2x orange_dye", ["#dyetagger:dye_materials/orange_double"]).id("dyeunifier:orange_dye_double")
    e.shapeless("2x orange_dye", ["#forge:dyes/yellow", "#forge:dyes/red"]).id("dyeunifier:orange_dye_combine")

    // Magenta
    e.shapeless("magenta_dye", ["#dyetagger:dye_materials/magenta"]).id("dyeunifier:magenta_dye")
    e.shapeless("2x magenta_dye", ["#dyetagger:dye_materials/magenta_double"]).id("dyeunifier:magenta_dye_double")
    e.shapeless("2x magenta_dye", ["#forge:dyes/purple", "#forge:dyes/pink"]).id("dyeunifier:magenta_dye_combine")
    e.shapeless("3x magenta_dye", ["#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/pink"]).id("dyeunifier:magenta_dye_triple_combine")
    e.shapeless("4x magenta_dye", ["#forge:dyes/red", "#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/white"]).id("dyeunifier:magenta_dye_quadruple_combine")

    // Light Blue
    e.shapeless("light_blue_dye", ["#dyetagger:dye_materials/light_blue"]).id("dyeunifier:light_blue_dye")
    e.shapeless("2x light_blue_dye", ["#dyetagger:dye_materials/light_blue_double"]).id("dyeunifier:light_blue_dye_double")
    e.shapeless("2x light_blue_dye", ["#forge:dyes/white", "#forge:dyes/blue"]).id("dyeunifier:light_blue_dye_combine")

    // Yellow
    e.shapeless("yellow_dye", ["#dyetagger:dye_materials/yellow"]).id("dyeunifier:yellow_dye")
    e.shapeless("2x yellow_dye", ["#dyetagger:dye_materials/yellow_double"]).id("dyeunifier:yellow_dye_double")
    e.shapeless("3x yellow_dye", ["#dyetagger:dye_materials/yellow_triple"]).id("dyeunifier:yellow_dye_triple")
    e.smelting("yellow_dye", "#dyetagger:dye_materials/yellow_smeltables", 1).id("dyeunifier:yellow_dye_smelting")

    // Lime
    e.shapeless("lime_dye", ["#dyetagger:dye_materials/lime"]).id("dyeunifier:lime_dye")
    e.shapeless("2x lime_dye", ["#dyetagger:dye_materials/lime_double"]).id("dyeunifier:lime_dye_double")
    e.smelting("lime_dye", "#dyetagger:dye_materials/lime_smeltables", 1).id("dyeunifier:lime_dye_smelting")

    // Pink
    e.shapeless("pink_dye", ["#dyetagger:dye_materials/pink"]).id("dyeunifier:pink_dye")
    e.shapeless("2x pink_dye", ["#dyetagger:dye_materials/pink_double"]).id("dyeunifier:pink_dye_double")
    e.shapeless("2x pink_dye", ["#forge:dyes/white", "#forge:dyes/red"]).id("dyeunifier:pink_dye_combine")

    // Gray
    e.shapeless("gray_dye", ["#dyetagger:dye_materials/gray"]).id("dyeunifier:grey_dye")
    e.shapeless("gray_dye", ["#forge:dyes/white", "#forge:dyes/black"]).id("dyeunifier:grey_dye_combine")

    // Light Gray
    e.shapeless("light_gray_dye", ["#dyetagger:dye_materials/light_gray"]).id("dyeunifier:light_gray_dye")
    e.shapeless("2x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/gray"]).id("dyeunifier:light_gray_dye_combine")
    e.shapeless("3x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/white", "#forge:dyes/black"]).id("dyeunifier:light_grey_dye_triple_combine")

    // Cyan
    e.shapeless("cyan_dye", ["#dyetagger:dye_materials/cyan"]).id("dyeunifier:cyan_dye")
    e.shapeless("2x cyan_dye", ["#dyetagger:dye_materials/cyan_double"]).id("dyeunifier:cyan_dye_double")
    e.shapeless("2x cyan_dye", ["#forge:dyes/green", "#forge:dyes/blue"]).id("dyeunifier:cyan_dye_combine")

    // Purple
    e.shapeless("purple_dye", ["#dyetagger:dye_materials/purple"]).id("dyeunifier:purple_dye")
    e.shapeless("2x purple_dye", ["#dyetagger:dye_materials/purple_double"]).id("dyeunifier:purple_dye_double")
    e.shapeless("2x purple_dye", ["#forge:dyes/red", "#forge:dyes/blue"]).id("dyeunifier:purple_dye_combine")
    e.smelting("purple_dye", "#dyetagger:dye_materials/purple_smeltables", 1).id("dyeunifier:purple_dye_smelting")

    // Blue
    e.shapeless("blue_dye", ["#dyetagger:dye_materials/blue"]).id("dyeunifier:blue_dye")
    e.shapeless("2x blue_dye", ["#dyetagger:dye_materials/blue_double"]).id("dyeunifier:blue_dye_double")
    e.shapeless("blue_dye", ["#forge:dyes/black", "#forge:dyes/light_blue"]).id("dyeunifier:blue_dye_combine")

    // Brown
    e.shapeless("brown_dye", ["#dyetagger:dye_materials/brown"]).id("dyeunifier:brown_dye")
    e.shapeless("2x brown_dye", ["#dyetagger:dye_materials/brown_double"]).id("dyeunifier:brown_dye_double")
    e.smelting("brown_dye", "#dyetagger:dye_materials/brown_smeltables", 1).id("dyeunifier:brown_dye_smelting")

    // Green
    e.shapeless("green_dye", ["#dyetagger:dye_materials/green"]).id("dyeunifier:green_dye")
    e.shapeless("2x green_dye", ["#dyetagger:dye_materials/green_double"]).id("dyeunifier:green_dye_double")
    e.smelting("green_dye", "#dyetagger:dye_materials/green_smeltables", 1).id("dyeunifier:green_dye_smelting")
    e.smelting("green_dye", "scute", 2).id("dyeunifier:scute_green")

    // Red
    e.shapeless("red_dye", ["#dyetagger:dye_materials/red"]).id("dyeunifier:red_dye")
    e.shapeless("2x red_dye", ["#dyetagger:dye_materials/red_double"]).id("dyeunifier:red_dye_double")

    // Black
    e.shapeless("black_dye", ["#dyetagger:dye_materials/black"]).id("dyeunifier:black_dye")
    e.shapeless("2x black_dye", ["#dyetagger:dye_materials/black_double"]).id("dyeunifier:black_dye_double")


    
    ///// Dye extraction recipes
    // Uses 1,600 RF and gives 1 XP (2 XP for double output)
    e.remove({id: "thermal:machines/centrifuge/centrifuge_lily_of_the_valley"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_orange_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_allium"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_blue_orchid"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_dandelion"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_sunflower"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_lilac"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_peony"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_pink_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_azure_bluet"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_oxeye_daisy"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_white_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_cornflower"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_poppy"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_red_tulip"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_rose_bush"})
    e.remove({id: "thermal:machines/centrifuge/centrifuge_wither_rose"})

    // White
    e.recipes.thermal.centrifuge(["3x white_dye"], "#dyetagger:dye_materials/white", 1).energy(1600).id("kubejs:extract_white_dye")
    e.recipes.thermal.centrifuge(["6x white_dye"], "#dyetagger:dye_materials/white_double", 2).energy(1600).id("kubejs:extract_double_white_dye")
    e.recipes.thermal.centrifuge(["2x white_dye", "2x pink_dye"], "#dyetagger:shells", 1).energy(1600).id("kubejs:centrifuge_shells")

    // Orange
    e.recipes.thermal.centrifuge(["3x orange_dye"], "#dyetagger:dye_materials/orange", 1).energy(1600).id("kubejs:extract_orange_dye")
    e.recipes.thermal.centrifuge(["6x orange_dye"], "#dyetagger:dye_materials/orange_double", 2).energy(1600).id("kubejs:extract_double_orange_dye")

    e.recipes.thermal.centrifuge(["6x orange_dye"], "pumpkin", 3).energy(2000).id("kubejs:extract_pumpkin_orange_dye")
    e.recipes.thermal.centrifuge(["3x orange_dye"], "carved_pumpkin", 2).energy(2000).id("kubejs:extract_carved_pumpkin_orange_dye")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("2x minicoal:mini_charcoal").withChance(0.75)], "#dyetagger:jack_o_lanterns", 3).energy(1600).id("kubejs:centrifuge_jack_o_lanterns")

    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("redstone").withChance(0.75)], "autumnity:redstone_jack_o_lantern", 3).energy(1600).id("kubejs:centrifuge_redstone_jack_o_lantern")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("redstone").withChance(0.75)], "autumnity:large_redstone_jack_o_lantern_slice", 3).energy(1600).id("kubejs:centrifuge__large_redstone_jack_o_lantern")

    // Magenta
    e.recipes.thermal.centrifuge(["3x magenta_dye"], "#dyetagger:dye_materials/magenta", 1).energy(1600).id("kubejs:extract_magenta_dye")
    e.recipes.thermal.centrifuge(["6x magenta_dye"], "#dyetagger:dye_materials/magenta_double", 2).energy(1600).id("kubejs:extract_double_magenta_dye")

    // Light Blue
    e.recipes.thermal.centrifuge(["3x light_blue_dye"], "#dyetagger:dye_materials/light_blue", 1).energy(1600).id("kubejs:extract_light_blue_dye")
    e.recipes.thermal.centrifuge(["6x light_blue_dye"], "#dyetagger:dye_materials/light_blue_double", 2).energy(1600).id("kubejs:extract_double_light_blue_dye")

    // Yellow
    e.recipes.thermal.centrifuge(["3x yellow_dye"], "#dyetagger:dye_materials/yellow", 1).energy(1600).id("kubejs:extract_yellow_dye")
    e.recipes.thermal.centrifuge(["6x yellow_dye"], "#dyetagger:dye_materials/yellow_double", 2).energy(1600).id("kubejs:extract_double_yellow_dye")

    // Lime
    e.recipes.thermal.centrifuge(["3x lime_dye"], "#dyetagger:dye_materials/lime", 1).energy(1600).id("kubejs:extract_lime_dye")
    e.recipes.thermal.centrifuge(["6x lime_dye"], "#dyetagger:dye_materials/lime_double", 2).energy(1600).id("kubejs:extract_double_lime_dye")
    e.recipes.thermal.centrifuge(["2x lime_dye"], "sea_pickle", 0.2).energy(1600).id("kubejs:extract_sea_pickle_lime_dye")

    // Pink
    e.recipes.thermal.centrifuge(["3x pink_dye"], "#dyetagger:dye_materials/pink", 1).energy(1600).id("kubejs:extract_pink_dye")
    e.recipes.thermal.centrifuge(["6x pink_dye"], "#dyetagger:dye_materials/pink_double", 2).energy(1600).id("kubejs:extract_double_pink_dye")

    // Gray
    e.recipes.thermal.centrifuge(["3x gray_dye"], "#dyetagger:dye_materials/gray", 1).energy(1600).id("kubejs:extract_grey_dye")

    // Light Gray
    e.recipes.thermal.centrifuge(["3x light_gray_dye"], "#dyetagger:dye_materials/light_gray", 1).energy(1600).id("kubejs:extract_light_grey_dye")

    // Cyan
    e.recipes.thermal.centrifuge(["3x cyan_dye"], "#dyetagger:dye_materials/cyan_extractables", 1).energy(1600).id("kubejs:extract_cyan_dye")
    e.recipes.thermal.centrifuge(["6x cyan_dye"], "#dyetagger:dye_materials/cyan_double", 2).energy(1600).id("kubejs:extract_double_cyan_dye")

    e.recipes.thermal.centrifuge(["2x cyan_dye", "2x light_blue_dye"], "#forge:gems/apatite", 3).energy(2000).id("kubejs:centrifuge_apatite")

    // Purple
    e.recipes.thermal.centrifuge(["3x purple_dye"], "#dyetagger:dye_materials/purple", 1).energy(1600).id("kubejs:extract_purple_dye")
    e.recipes.thermal.centrifuge(["6x purple_dye"], "#dyetagger:dye_materials/purple_double", 2).energy(1600).id("kubejs:extract_double_purple_dye")

    // Blue
    e.recipes.thermal.centrifuge(["3x blue_dye"], "#dyetagger:dye_materials/blue", 1).energy(1600).id("kubejs:extract_blue_dye")

    // Brown
    e.recipes.thermal.centrifuge(["3x brown_dye"], "#dyetagger:dye_materials/brown", 1).energy(1600).id("kubejs:extract_brown_dye")
    e.recipes.thermal.centrifuge(["6x brown_dye"], "#dyetagger:dye_materials/brown_double", 2).energy(1600).id("kubejs:extract_double_brown_dye")

    // Green
    e.recipes.thermal.centrifuge(["3x green_dye"], "#dyetagger:dye_materials/green", 1).energy(1600).id("kubejs:extract_green_dye")
    e.recipes.thermal.centrifuge(["6x green_dye"], "#dyetagger:dye_materials/green_double", 2).energy(1600).id("kubejs:extract_double_green_dye")
    e.recipes.thermal.centrifuge(["3x green_dye"], "#dyetagger:dye_materials/green_smeltables", 1).energy(1600).id("kubejs:extract_smeltable_green_dye")
    e.recipes.thermal.centrifuge(["2x green_dye", Item.of("2x lime_dye").withChance(0.5)], "scute", 3).energy(1800).id("kubejs:centrifuge_scute")

    // Red
    e.recipes.thermal.centrifuge(["3x red_dye"], "#dyetagger:dye_materials/red", 1).energy(1600).id("kubejs:extract_red_dye")
    e.recipes.thermal.centrifuge(["6x red_dye"], "#dyetagger:dye_materials/red_double", 2).energy(1600).id("kubejs:extract_double_red_dye")

    // Black
    e.recipes.thermal.centrifuge(["3x black_dye"], "#dyetagger:dye_materials/black", 1).energy(1600).id("kubejs:extract_black_dye")
    e.recipes.thermal.centrifuge(["6x black_dye"], "#dyetagger:dye_materials/black_double", 2).energy(1600).id("kubejs:extract_double_black_dye")
    e.recipes.thermal.centrifuge(["4x black_dye", Fluid.of("thermal:crude_oil", 25)], "#minecraft:coals", 3).energy(2000).id("kubejs:centrifuge_coal")





    ///// Dye Unifier imports

    //// Biome Makeover
    // Green
    e.recipes.thermal.centrifuge(["green_dye", Item.of("lime_dye").withChance(0.5)], "biomemakeover:wart", 1).energy(1800).id("dyeunifier:centrifuge_wart")

    // Purple
    e.recipes.thermal.centrifuge(["purple_dye", Item.of("pink_dye").withChance(0.5)], "biomemakeover:moth_scales", 1).energy(1800).id("dyeunifier:centrifuge_moth_scales")



    //// Biomes o' Plenty
    // Red
    e.recipes.thermal.centrifuge(["2x red_dye"], "biomesoplenty:bramble", 1).energy(1600).id("dyeunifier:centrifuge_bramble")



    //// End's Phantasm
    // Magenta
    e.recipes.thermal.centrifuge(["3x magenta_dye", "pink_dye"], "phantasm:void_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_void_crystal_shard")

    // Purple
    e.recipes.thermal.centrifuge(["3x purple_dye", "pink_dye"], "phantasm:crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_crystal_shard")



    //// Jaden's Nether Expansion
    // Cyan
    e.recipes.thermal.centrifuge(["2x blue_dye", "2x light_blue_dye"], "netherexp:warphopper_fur", 2).energy(1800).id("dyeunifier:centrifuge_warphopper_fur")



    //// The Outer End
    // White
    e.recipes.thermal.centrifuge(["2x white_dye", "2x light_gray_dye"], "outer_end:halite_crystal", 3).energy(2000).id("dyeunifier:centrifuge_halite_crystal")
    e.recipes.thermal.centrifuge(["2x white_dye", "light_gray_dye"], "outer_end:sinker_tooth", 2).energy(1800).id("dyeunifier:centrifuge_sinker_tooth")

    // Cyan
    e.recipes.thermal.centrifuge(["2x cyan_dye", "light_blue_dye"], "outer_end:spectragel", 2).energy(1800).id("dyeunifier:centrifuge_spectragel")

    // Blue
    e.recipes.thermal.centrifuge(["2x blue_dye", "2x light_blue_dye"], "outer_end:cobalt_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_cobalt_crystal_shard")

    // Lime
    e.recipes.thermal.centrifuge(["2x lime_dye", "2x white_dye"], "outer_end:mint_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_mint_crystal_shard")

    // Red
    e.recipes.thermal.centrifuge(["2x red_dye", "2x pink_dye"], "outer_end:rose_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_rose_crystal_shard")



    //// XyCraft: World
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x blue_dye"], "xycraft_world:xychorium_gem_blue", 3).energy(2000).id("dyeunifier:xychorium_blue")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x green_dye"], "xycraft_world:xychorium_gem_green", 3).energy(2000).id("dyeunifier:xychorium_green")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x red_dye"], "xycraft_world:xychorium_gem_red", 3).energy(2000).id("dyeunifier:xychorium_red")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x black_dye"], "xycraft_world:xychorium_gem_dark", 3).energy(2000).id("dyeunifier:xychorium_black")
    e.recipes.thermal.centrifuge(["4x white_dye"], "xycraft_world:xychorium_gem_light", 3).energy(2000).id("dyeunifier:xychorium_white")

})