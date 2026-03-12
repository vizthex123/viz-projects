// Adds recipes to the Centrifugal Seperator from Thermal Expansion
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    ///// Dye extraction recipes
	// Gives double the dye output of crafting/smelting
	// Gives double the XP of smelting recipes (the base XP gain for crafting recipes is 1)
    // Uses 1,600 RF per craft (1,800 for my custom animal product recipes, 2,000 for my custom mineral recipes)
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
    e.recipes.thermal.centrifuge(["3x white_dye"], "#dyetagger:dye_materials/white", 1).energy(1600).id("dyeunifier:extract_white_dye")
    e.recipes.thermal.centrifuge(["6x white_dye"], "#dyetagger:dye_materials/white_double", 2).energy(1600).id("dyeunifier:extract_double_white_dye")
    e.recipes.thermal.centrifuge(["2x white_dye"], "#dyetagger:dye_materials/white_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_white_dye")

    e.recipes.thermal.centrifuge(["2x white_dye", "2x pink_dye", Item.of("bone_meal").withChance(0.2)], "#dyetagger:shells", 1).energy(1800).id("dyeunifier:centrifuge_shells")

    // Orange
    e.recipes.thermal.centrifuge(["3x orange_dye"], "#dyetagger:dye_materials/orange", 1).energy(1600).id("dyeunifier:extract_orange_dye")
    e.recipes.thermal.centrifuge(["6x orange_dye"], "#dyetagger:dye_materials/orange_double", 2).energy(1600).id("dyeunifier:extract_double_orange_dye")
    e.recipes.thermal.centrifuge(["2x orange_dye"], "#dyetagger:dye_materials/orange_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_orange_dye")

    e.recipes.thermal.centrifuge(["6x orange_dye"], "pumpkin", 3).energy(1600).id("dyeunifier:centrifuge_pumpkin")
    e.recipes.thermal.centrifuge(["3x orange_dye"], "carved_pumpkin", 2).energy(1600).id("dyeunifier:centrifuge_carved_pumpkin")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("charcoal").withChance(0.1)], "#dyetagger:jack_o_lanterns", 3).energy(1600).id("dyeunifier:centrifuge_jack_o_lanterns")

    // Magenta
    e.recipes.thermal.centrifuge(["3x magenta_dye"], "#dyetagger:dye_materials/magenta", 1).energy(1600).id("dyeunifier:extract_magenta_dye")
    e.recipes.thermal.centrifuge(["6x magenta_dye"], "#dyetagger:dye_materials/magenta_double", 2).energy(1600).id("dyeunifier:extract_double_magenta_dye")
    e.recipes.thermal.centrifuge(["2x magenta_dye"], "#dyetagger:dye_materials/magenta_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_magenta_dye")

    // Light Blue
    e.recipes.thermal.centrifuge(["3x light_blue_dye"], "#dyetagger:dye_materials/light_blue", 1).energy(1600).id("dyeunifier:extract_light_blue_dye")
    e.recipes.thermal.centrifuge(["2x light_blue_dye"], "#dyetagger:dye_materials/light_blue_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_light_blue_dye")
    e.recipes.thermal.centrifuge(["2x light_blue_dye", "blue_dye"], "prismarine_shard", 2).energy(2000).id("dyeunifier:centrifuge_prismarine_shard")
    e.recipes.thermal.centrifuge(["light_blue_dye", Item.of("blue_dye").withChance(0.5)], "prismarine_crystals", 2).energy(2000).id("dyeunifier:centrifuge_prismarine_crystals")

    // Yellow
    e.recipes.thermal.centrifuge(["3x yellow_dye"], "#dyetagger:dye_materials/yellow", 1).energy(1600).id("dyeunifier:extract_yellow_dye")
    e.recipes.thermal.centrifuge(["6x yellow_dye"], "#dyetagger:dye_materials/yellow_double", 2).energy(1600).id("dyeunifier:extract_double_yellow_dye")
    e.recipes.thermal.centrifuge(["2x yellow_dye"], "#dyetagger:dye_materials/yellow_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_yellow_dye")

    // Lime
    e.recipes.thermal.centrifuge(["3x lime_dye"], "#dyetagger:dye_materials/lime", 1).energy(1600).id("dyeunifier:extract_lime_dye")
    e.recipes.thermal.centrifuge(["2x lime_dye"], "#dyetagger:dye_materials/lime_smeltables", 0.2).energy(1600).id("dyeunifier:extract_smeltable_lime_dye")

    // Pink
    e.recipes.thermal.centrifuge(["3x pink_dye"], "#dyetagger:dye_materials/pink", 1).energy(1600).id("dyeunifier:extract_pink_dye")
    e.recipes.thermal.centrifuge(["6x pink_dye"], "#dyetagger:dye_materials/pink_double", 2).energy(1600).id("dyeunifier:extract_double_pink_dye")

    e.recipes.thermal.centrifuge(["2x pink_dye"], "#dyetagger:dye_materials/pink_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_pink_dye")

    // Gray
    e.recipes.thermal.centrifuge(["3x gray_dye"], "#dyetagger:dye_materials/gray", 1).energy(1600).id("dyeunifier:extract_grey_dye")
    e.recipes.thermal.centrifuge(["2x gray_dye"], "#dyetagger:dye_materials/gray_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_grey_dye")

    // Light Gray
    e.recipes.thermal.centrifuge(["3x light_gray_dye"], "#dyetagger:dye_materials/light_gray", 1).energy(1600).id("dyeunifier:extract_light_grey_dye")

    // Cyan
    e.recipes.thermal.centrifuge(["3x cyan_dye"], "#dyetagger:dye_materials/cyan", 1).energy(1600).id("dyeunifier:extract_cyan_dye")
    e.recipes.thermal.centrifuge(["6x cyan_dye"], "#dyetagger:dye_materials/cyan_double", 2).energy(1600).id("dyeunifier:extract_double_cyan_dye")
    e.recipes.thermal.centrifuge(["2x cyan_dye"], "#dyetagger:dye_materials/cyan_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_cyan_dye")

    e.recipes.thermal.centrifuge(["2x cyan_dye", "2x light_blue_dye"], "#forge:gems/apatite", 3).energy(2000).id("dyeunifier:centrifuge_apatite")

    // Purple
    e.recipes.thermal.centrifuge(["3x purple_dye"], "#dyetagger:dye_materials/purple", 1).energy(1600).id("dyeunifier:extract_purple_dye")
    e.recipes.thermal.centrifuge(["6x purple_dye"], "#dyetagger:dye_materials/purple_double", 2).energy(1600).id("dyeunifier:extract_double_purple_dye")
    e.recipes.thermal.centrifuge(["2x purple_dye"], "#dyetagger:dye_materials/purple_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_purple_dye")

    // Blue
    e.recipes.thermal.centrifuge(["3x blue_dye"], "#dyetagger:dye_materials/blue", 1).energy(1600).id("dyeunifier:extract_blue_dye")
    e.recipes.thermal.centrifuge(["6x blue_dye"], "#dyetagger:dye_materials/blue_double", 1).energy(1600).id("dyeunifier:extract_double_blue_dye")
    e.recipes.thermal.centrifuge(["2x blue_dye"], "#dyetagger:dye_materials/blue_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_blue_dye")

    // Brown
    e.recipes.thermal.centrifuge(["3x brown_dye"], "#dyetagger:dye_materials/brown", 1).energy(1600).id("dyeunifier:extract_brown_dye")
    e.recipes.thermal.centrifuge(["6x brown_dye"], "#dyetagger:dye_materials/brown_double", 2).energy(1600).id("dyeunifier:extract_double_brown_dye")
    e.recipes.thermal.centrifuge(["2x brown_dye"], "#dyetagger:dye_materials/brown_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_brown_dye")

    // Green
    e.recipes.thermal.centrifuge(["3x green_dye"], "#dyetagger:dye_materials/green", 1).energy(1600).id("dyeunifier:extract_green_dye")
    e.recipes.thermal.centrifuge(["6x green_dye"], "#dyetagger:dye_materials/green_double", 2).energy(1600).id("dyeunifier:extract_double_green_dye")
    e.recipes.thermal.centrifuge(["2x green_dye"], "#dyetagger:dye_materials/green_smeltables", 2).energy(1600).id("dyeunifier:extract_smeltable_green_dye")
    e.recipes.thermal.centrifuge(["2x green_dye", Item.of("2x lime_dye").withChance(0.5)], "scute", 3).energy(1800).id("dyeunifier:centrifuge_scute")

    e.recipes.thermal.centrifuge(["2x green_dye", Item.of("2x lime_dye").withChance(0.5)], "#dyetagger:ectoplasm", 4).energy(1800).id("dyeunifier:centrifuge_ectoplasm")

    // Red
    e.recipes.thermal.centrifuge(["3x red_dye"], "#dyetagger:dye_materials/red", 1).energy(1600).id("dyeunifier:extract_red_dye")
    e.recipes.thermal.centrifuge(["6x red_dye"], "#dyetagger:dye_materials/red_double", 2).energy(1600).id("dyeunifier:extract_double_red_dye")
    e.recipes.thermal.centrifuge(["2x red_dye"], "#dyetagger:dye_materials/red_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_red_dye")
    e.recipes.thermal.centrifuge(["2x red_dye", Item.of("green_dye").withChance(0.25)], "melon_slice", 1).energy(1600).id("dyeunifier:centrifuge_melon_slice")

    // Black
    e.recipes.thermal.centrifuge(["3x black_dye"], "#dyetagger:dye_materials/black", 1).energy(1600).id("dyeunifier:extract_black_dye")
    e.recipes.thermal.centrifuge(["6x black_dye"], "#dyetagger:dye_materials/black_double", 2).energy(1600).id("dyeunifier:extract_double_black_dye")
    e.recipes.thermal.centrifuge(["2x black_dye"], "#dyetagger:dye_materials/black_smeltables", 1).energy(1600).id("dyeunifier:extract_smeltable_black_dye")

    e.recipes.thermal.centrifuge(["4x black_dye", Fluid.of("thermal:crude_oil", 25)], "#minecraft:coals", 3).energy(2000).id("dyeunifier:centrifuge_coal")

})