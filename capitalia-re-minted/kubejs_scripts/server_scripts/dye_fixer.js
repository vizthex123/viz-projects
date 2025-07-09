// Fixes dye recipes not using tags because mojang apparently forgot this amazing system existed (although the recipe spam is mostly from mods... but still, i find it quite irksome)
//// Tags
ServerEvents.tags("item", e => {

    //// Forge tags
    e.add("forge:dyes/white", ["#forge:dusts/salt"])
    e.add("forge:dyes/green", ["quark:moss_paste"])
    e.add("forge:dyes/yellow", ["#forge:dusts/sulfur"])

    //// Dyes are in the minecraft order
    // White
    e.add("reminted:dye_materials/white", ["bone_meal", "lily_of_the_valley", "biomeswevegone:white_puffball_cap", "#biomeswevegone:dye/makes_white", "buzzier_bees:white_clover", "upgrade_aquatic:white_searocket", "upgrade_aquatic:pillow_coral", "upgrade_aquatic:pillow_coral_fan"])
    e.add("reminted:dye_materials/white_double", ["biomemakeover:buttonbush", "biomeswevegone:tall_white_allium"])


    // Orange
    e.add("reminted:dye_materials/orange", ["carrot", "glow_berries", "orange_tulip", "torchflower", "biomemakeover:orange_glowshroom", "#biomeswevegone:dye/makes_orange", "buzzier_bees:buttercup", "upgrade_aquatic:finger_coral", "upgrade_aquatic:finger_coral_fan"])
    e.add("reminted:dye_materials/orange_double", ["biomemakeover:marigold"])


    // Magenta
    e.add("reminted:dye_materials/magenta", ["allium", "bubble_coral", "bubble_coral_fan", "autumnity:autumn_crocus", "biomemakeover:magenta_bud", "#biomeswevegone:dye/makes_magenta", "upgrade_aquatic:mulberry"])
    e.add("reminted:dye_materials/magenta_double", ["lilac"])


    // Light Blue
    e.add("reminted:dye_materials/light_blue", ["blue_orchid", "biomemakeover:light_blue_bud", "biomeswevegone:winter_scilla", "#upgrade_aquatic:petal_corals", "yungscavebiomes:frost_lily"])


    // Yellow
    e.add("reminted:dye_materials/yellow", ["dandelion", "horn_coral", "horn_coral_fan", "#biomeswevegone:dye/makes_yellow", "buzzier_bees:buttercup"])
    e.add("reminted:dye_materials/yellow_double", ["sunflower"])


    // Lime
    // The Sea Pickle has its own Separator recipe
    e.add("reminted:dye_materials/lime", ["biomeswevegone:green_apple", "biomeswevegone:green_mushroom", "biomeswevegone:green_tulip", "upgrade_aquatic:star_coral", "upgrade_aquatic:star_coral_fan"])


    // Pink
    e.add("reminted:dye_materials/pink", ["pink_petals", "pink_tulip", "brain_coral", "brain_coral_fan", "biomemakeover:pink_bud", "biomemakeover:moth_scales", "#biomeswevegone:dye/makes_pink", "buzzier_bees:pink_clover", "ecologics:azalea_flower", "upgrade_aquatic:pink_searocket", "yungscavebiomes:prickly_peach"])
    e.add("reminted:dye_materials/pink_double", ["peony", "biomemakeover:water_lily", "upgrade_aquatic:flowering_rush"])


    // Gray
    e.add("reminted:dye_materials/gray", ["biomemakeover:gray_bud", "upgrade_aquatic:chrome_coral", "upgrade_aquatic:chrome_coral_fan"])


    // Light Gray
    e.add("reminted:dye_materials/light_gray", ["azure_bluet", "oxeye_daisy", "white_tulip"])


    // Cyan
    e.add("reminted:dye_materials/cyan", ["biomemakeover:cyan_bud", "upgrade_aquatic:pickerelweed", "upgrade_aquatic:acan_coral", "upgrade_aquatic:acan_coral_fan"])
    e.add("reminted:dye_materials/cyan_double", ["pitcher_plant"])


    // Purple (best colour)
    e.add("reminted:dye_materials/purple", ["biomemakeover:purple_bud", "biomemakeover:purple_glowshroom", "biomemakeover:stunt_powder", "#upgrade_aquatic:silk_corals"])
    e.add("reminted:dye_materials/purple_double", ["biomemakeover:foxglove"])


    // Blue
    e.add("reminted:dye_materials/blue", ["cornflower", "tube_coral", "tube_coral_fan", "biomemakeover:blue_bud"])


    // Brown
    e.add("reminted:dye_materials/brown", ["cocoa_beans", "brown_mushroom", "biomeswevegone:cattail_sprout", "biomemakeover:bulbus_root", "biomemakeover:brown_bud", "biomemakeover:rootling_seeds", "biomemakeover:mycelium_roots", "upgrade_aquatic:rock_coral", "upgrade_aquatic:rock_coral_fan"])


    // Green
    e.add("reminted:dye_materials/green", ["lily_pad", "#reminted:mosslike", "biomeswevegone:tiny_lily_pads", "biomeswevegone:flowering_tiny_lily_pads", "biomemakeover:green_glowshroom", "biomemakeover:small_lily_pad", "biomemakeover:wart", "upgrade_aquatic:moss_coral", "upgrade_aquatic:moss_coral_fan"])
    e.add("reminted:dye_materials/green_double", ["buzzier_bees:four_leaf_clover"])
    e.add("reminted:dye_materials/green_smeltable", ["small_dripleaf", "big_dripleaf", "biomeswevegone:aloe_vera", "#reminted:cacti"])


    // Red
    e.add("reminted:dye_materials/red", ["apple", "beetroot", "poppy", "melon_slice", "red_tulip", "red_mushroom", "sweet_berries", "spider_eye", "fire_coral", "fire_coral_fan"])
    e.add("reminted:dye_materials/red_double", ["rose_bush", "biomemakeover:moth_blossom"])


    // Black
    e.add("reminted:dye_materials/black", ["ink_sac", "wither_rose", "#upgrade_aquatic:branch_corals"])
    e.add("reminted:dye_materials/black_double", ["biomemakeover:black_thistle"])

})



// Change dye recipes to use the above tags
// Only wet & dry items require smelting (like in vanilla)
// TE gives 3x dye
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
    e.remove({id: "biomemakeover:dye/purple_dye_from_foxglove"})

    // White
    e.shapeless("white_dye", ["#reminted:dye_materials/white"]).id("kubejs:white_dye")
    e.shapeless("2x white_dye", ["#reminted:dye_materials/white_double"]).id("kubejs:white_dye_double")

    // Orange
    e.shapeless("orange_dye", ["#reminted:dye_materials/orange"]).id("kubejs:orange_dye")
    e.shapeless("2x orange_dye", ["#reminted:dye_materials/orange_double"]).id("kubejs:orange_dye_double")
    e.shapeless("2x orange_dye", ["#forge:dyes/yellow", "#forge:dyes/red"]).id("kubejs:orange_dye_combine")

    // Magenta
    e.shapeless("magenta_dye", ["#reminted:dye_materials/magenta"]).id("kubejs:magenta_dye")
    e.shapeless("2x magenta_dye", ["#reminted:dye_materials/magenta_double"]).id("kubejs:magenta_dye_double")
    e.shapeless("2x magenta_dye", ["#forge:dyes/purple", "#forge:dyes/pink"]).id("kubejs:magenta_dye_combine")
    e.shapeless("3x magenta_dye", ["#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/pink"]).id("kubejs:magenta_dye_triple_combine")
    e.shapeless("4x magenta_dye", ["#forge:dyes/red", "#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/white"]).id("kubejs:magenta_dye_quadruple_combine")

    // Light Blue
    e.shapeless("light_blue_dye", ["#reminted:dye_materials/light_blue"]).id("kubejs:light_blue_dye")
    e.shapeless("2x light_blue_dye", ["#forge:dyes/white", "#forge:dyes/blue"]).id("kubejs:light_blue_dye_combine")

    // Yellow
    e.shapeless("yellow_dye", ["#reminted:dye_materials/yellow"]).id("kubejs:yellow_dye")
    e.shapeless("2x yellow_dye", ["#reminted:dye_materials/yellow_double"]).id("kubejs:yellow_dye_combine")

    // Lime
    e.shapeless("lime_dye", ["#reminted:dye_materials/lime"]).id("kubejs:lime_dye")

    // Pink
    e.shapeless("pink_dye", ["#reminted:dye_materials/pink"]).id("kubejs:pink_dye")
    e.shapeless("2x pink_dye", ["#reminted:dye_materials/pink_double"]).id("kubejs:pink_dye_double")
    e.shapeless("2x pink_dye", ["#forge:dyes/white", "#forge:dyes/red"]).id("kubejs:pink_dye_combine")

    // Gray
    e.shapeless("gray_dye", ["#reminted:dye_materials/gray"]).id("kubejs:gray_dye")
    e.shapeless("gray_dye", ["#forge:dyes/white", "#forge:dyes/black"]).id("kubejs:gray_dye_combine")

    // Light Gray
    e.shapeless("light_gray_dye", ["#reminted:dye_materials/light_gray"]).id("kubejs:light_gray_dye")
    e.shapeless("2x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/gray"]).id("kubejs:light_gray_dye_combine")
    e.shapeless("3x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/white", "#forge:dyes/black"]).id("kubejs:light_gray_dye_triple_combine")

    // Cyan
    e.shapeless("cyan_dye", ["#reminted:dye_materials/cyan"]).id("kubejs:cyan_dye")
    e.shapeless("2x cyan_dye", ["#reminted:dye_materials/cyan_double"]).id("kubejs:cyan_dye_double")
    e.shapeless("2x cyan_dye", ["#forge:dyes/green", "#forge:dyes/blue"]).id("kubejs:cyan_dye_combine")

    // Purple
    e.shapeless("purple_dye", ["#reminted:dye_materials/purple"]).id("kubejs:purple_dye")
    e.shapeless("2x purple_dye", ["#reminted:dye_materials/purple_double"]).id("kubejs:purple_dye_double")
    e.shapeless("2x purple_dye", ["#forge:dyes/red", "#forge:dyes/blue"]).id("kubejs:purple_dye_combine")

    // Blue
    e.shapeless("blue_dye", ["#reminted:dye_materials/blue"]).id("kubejs:blue_dye")
    e.shapeless("blue_dye", ["#forge:dyes/black", "#forge:dyes/light_blue"]).id("kubejs:blue_dye_combine")

    // Brown
    e.shapeless("brown_dye", ["#reminted:dye_materials/brown"]).id("kubejs:brown_dye")

    // Green
    e.shapeless("green_dye", ["#reminted:dye_materials/green"]).id("kubejs:green_dye")
    e.shapeless("2x green_dye", ["#reminted:dye_materials/green_double"]).id("kubejs:green_dye_double")
    e.smelting("green_dye", ["#reminted:dye_materials/green_smeltable"], 1).id("kubejs:smelted_green_dye")
    e.smelting("green_dye", "scute", 2).id("kubejs:scute_green")

    // Red
    e.shapeless("red_dye", ["#reminted:dye_materials/red"]).id("kubejs:red_dye")
    e.shapeless("2x red_dye", ["#reminted:dye_materials/red_double"]).id("kubejs:red_dye_double")

    // Black
    e.shapeless("black_dye", ["#reminted:dye_materials/black"]).id("kubejs:black_dye")
    e.shapeless("2x black_dye", ["#reminted:dye_materials/black_double"]).id("kubejs:black_dye_double")


    
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
    e.recipes.thermal.centrifuge(["3x white_dye"], "#reminted:dye_materials/white", 1).energy(1600).id("kubejs:extract_white_dye")
    e.recipes.thermal.centrifuge(["6x white_dye"], "#reminted:dye_materials/white_double", 2).energy(1600).id("kubejs:extract_double_white_dye")

    // Orange
    e.recipes.thermal.centrifuge(["3x orange_dye"], "#reminted:dye_materials/orange", 1).energy(1600).id("kubejs:extract_orange_dye")
    e.recipes.thermal.centrifuge(["6x orange_dye"], "pumpkin", 3).energy(1600).id("kubejs:extract_pumpkin")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("3x orange_dye").withChance(0.5)], "carved_pumpkin", 2).energy(1600).id("kubejs:extract_carved_pumpkin")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("2x minicoal:mini_charcoal").withChance(0.75)], ["jack_o_lantern", "autumnity:soul_jack_o_lantern"], 3).energy(1600).id("kubejs:extract_jack_o_lantern")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("redstone").withChance(0.75)], "autumnity:redstone_jack_o_lantern", 3).energy(1600).id("kubejs:extract_redstone_jack_o_lantern")

    // Magenta
    e.recipes.thermal.centrifuge(["3x magenta_dye"], "#reminted:dye_materials/magenta", 1).energy(1600).id("kubejs:extract_magenta_dye")
    e.recipes.thermal.centrifuge(["6x magenta_dye"], "#reminted:dye_materials/magenta_double", 2).energy(1600).id("kubejs:extract_double_magenta_dye")

    // Light Blue
    e.recipes.thermal.centrifuge(["3x light_blue_dye"], "#reminted:dye_materials/light_blue", 1).energy(1600).id("kubejs:extract_light_blue_dye")

    // Yellow
    e.recipes.thermal.centrifuge(["3x yellow_dye"], "#reminted:dye_materials/yellow", 1).energy(1600).id("kubejs:extract_yellow_dye")
    e.recipes.thermal.centrifuge(["6x yellow_dye"], "#reminted:dye_materials/yellow_double", 2).energy(1600).id("kubejs:extract_double_yellow_dye")

    // Lime
    e.recipes.thermal.centrifuge(["3x lime_dye"], "#reminted:dye_materials/lime", 1).energy(1600).id("kubejs:extract_lime_dye")
    e.recipes.thermal.centrifuge(["2x lime_dye"], "sea_pickle", 0.2).energy(1600).id("kubejs:extract_sea_pickle")

    // Pink
    e.recipes.thermal.centrifuge(["3x pink_dye"], "#reminted:dye_materials/pink", 1).energy(1600).id("kubejs:extract_pink_dye")
    e.recipes.thermal.centrifuge(["6x pink_dye"], "#reminted:dye_materials/pink_double", 2).energy(1600).id("kubejs:extract_double_pink_dye")

    // Gray
    e.recipes.thermal.centrifuge(["3x gray_dye"], "#reminted:dye_materials/gray", 1).energy(1600).id("kubejs:extract_gray_dye")

    // Light Gray
    e.recipes.thermal.centrifuge(["3x light_gray_dye"], "#reminted:dye_materials/light_gray", 1).energy(1600).id("kubejs:extract_light_gray_dye")

    // Cyan
    e.recipes.thermal.centrifuge(["3x cyan_dye"], "#reminted:dye_materials/cyan", 1).energy(1600).id("kubejs:extract_cyan_dye")
    e.recipes.thermal.centrifuge(["6x cyan_dye"], "#reminted:dye_materials/cyan_double", 2).energy(1600).id("kubejs:extract_double_cyan_dye")
    e.recipes.thermal.centrifuge(["6x cyan_dye"], "outer_end:spectragel", 4).energy(1600).id("kubejs:extract_spectral_dye") 
    e.recipes.thermal.centrifuge(["2x cyan_dye", "2x light_blue_dye"], "#forge:gems/apatite", 3).energy(2000).id("kubejs:extract_apatite_dye")

    // Purple
    e.recipes.thermal.centrifuge(["3x purple_dye"], "#reminted:dye_materials/purple", 1).energy(1600).id("kubejs:extract_purple_dye")
    e.recipes.thermal.centrifuge(["6x purple_dye"], "#reminted:dye_materials/purple_double", 2).energy(1600).id("kubejs:extract_double_purple_dye")

    // Blue
    e.recipes.thermal.centrifuge(["3x blue_dye"], "#reminted:dye_materials/blue", 1).energy(1600).id("kubejs:extract_blue_dye")
    e.recipes.thermal.centrifuge(["2x blue_dye"], "lapis_lazuli", 2).energy(2000).id("kubejs:extract_lapis_dye")

    // Brown
    e.recipes.thermal.centrifuge(["3x brown_dye"], "#reminted:dye_materials/brown", 1).energy(1600).id("kubejs:extract_brown_dye")

    // Green
    e.recipes.thermal.centrifuge(["3x green_dye"], "#reminted:dye_materials/green", 1).energy(1600).id("kubejs:extract_green_dye")
    e.recipes.thermal.centrifuge(["6x green_dye"], "#reminted:dye_materials/green_double", 2).energy(1600).id("kubejs:extract_double_green_dye")
    e.recipes.thermal.centrifuge(["2x green_dye", Item.of("2x lime_dye").withChance(0.5)], "scute", 3).energy(1800).id("kubejs:extract_scute_dye")
    e.recipes.thermal.centrifuge([Item.of("green_dye").withChance(0.5), Fluid.of("minecraft_water", 10)], "biomemakeover:small_lily_pad", 3).energy(1200).id("kubejs:extract_small_lily_pad_dye")

    // Red
    e.recipes.thermal.centrifuge(["3x red_dye"], "#reminted:dye_materials/red", 1).energy(1600).id("kubejs:extract_red_dye")
    e.recipes.thermal.centrifuge(["6x red_dye"], "#reminted:dye_materials/red_double", 2).energy(1600).id("kubejs:extract_double_red_dye")

    // Black
    e.recipes.thermal.centrifuge(["3x black_dye"], "#reminted:dye_materials/black", 1).energy(1600).id("kubejs:extract_black_dye")
    e.recipes.thermal.centrifuge(["6x black_dye"], "#reminted:dye_materials/black_double", 2).energy(1600).id("kubejs:extrat_double_dye_double")
    e.recipes.thermal.centrifuge(["2x black_dye", Fluid.of("thermal:crude_oil", 25)], "#minecraft:coals", 3).energy(2000).id("kubejs:extract_black_dye_from_coal")

})