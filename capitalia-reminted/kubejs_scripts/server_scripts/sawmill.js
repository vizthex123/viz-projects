// Adds sawing recipes for modded planks
ServerEvents.recipes(e => {
/*
    // Ecologics
    e.recipes.thermal.sawmill(["6x ecologics:azalea_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:azalea_logs", 0.15).energy(1000).id("kubejs:sawmill/azalea_logs")
    e.recipes.thermal.sawmill(["6x ecologics:coconut_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:coconut_logs", 0.15).energy(1000).id("kubejs:sawmill/coconut_logs")
    e.recipes.thermal.sawmill(["6x ecologics:flowering_azalea_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:flowering_azalea_logs", 0.15).energy(1000).id("kubejs:sawmill/flowering_azalea_logs")
    e.recipes.thermal.sawmill(["6x ecologics:walnut_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:walnut_logs", 0.15).energy(1000).id("kubejs:sawmill/walnut_logs")



    // Forestry
    e.recipes.thermal.sawmill(["6x forestry:baobab_planks", Item.of("thermal:sawdust").withChance(0.25)], "#forestry:baobab_logs", 0.15).energy(1000).id("kubejs:sawmill/baobab_logs")



    // Upgrade Aquatic
    e.recipes.thermal.sawmill(["6x upgrade_aquatic:driftwood_planks", Item.of("thermal:sawdust").withChance(0.25)], "#upgrade_aquatic:driftwood_logs", 0.15).energy(1000).id("kubejs:sawmill/driftwood_logs")
    e.recipes.thermal.sawmill(["6x upgrade_aquatic:river_planks", Item.of("thermal:sawdust").withChance(0.25)], "#upgrade_aquatic:river_logs", 0.15).energy(1000).id("kubejs:sawmill/river_logs")
*/


    // Quark's Hollow Logs
    // Regular logs are already covered by TE
    e.recipes.thermal.sawmill(["3x acacia_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_acacia_log", 0.07).energy(500).id("kubejs:sawmill/hollow_acacia_log")
    e.recipes.thermal.sawmill(["3x birch_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_birch_log", 0.07).energy(500).id("kubejs:sawmill/hollow_birch_log")
    e.recipes.thermal.sawmill(["3x cherry_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_cherry_log", 0.07).energy(500).id("kubejs:sawmill/hollow_cherry_log")
    e.recipes.thermal.sawmill(["3x dark_oak_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_dark_oak_log", 0.07).energy(500).id("kubejs:sawmill/hollow_dark_oak_log")
    e.recipes.thermal.sawmill(["3x jungle_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_jungle_log", 0.07).energy(500).id("kubejs:sawmill/hollow_jungle_log")
    e.recipes.thermal.sawmill(["3x mangrove_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_mangrove_log", 0.07).energy(500).id("kubejs:sawmill/hollow_mangrove_log")
    e.recipes.thermal.sawmill(["3x oak_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_oak_log", 0.07).energy(500).id("kubejs:sawmill/hollow_oak_log")
    e.recipes.thermal.sawmill(["3x spruce_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_spruce_log", 0.07).energy(500).id("kubejs:sawmill/hollow_spruce_log")
    e.recipes.thermal.sawmill(["3x crimson_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_crimson_stem", 0.07).energy(500).id("kubejs:sawmill/hollow_crimson_stem")
    e.recipes.thermal.sawmill(["3x warped_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_warped_stem", 0.07).energy(500).id("kubejs:sawmill/hollow_warped_stem")
   
    e.recipes.thermal.sawmill(["3x quark:ancient_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_ancient_log", 0.07).energy(500).id("kubejs:sawmill/hollow_ancient_log")
    e.recipes.thermal.sawmill(["3x quark:azalea_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_azalea_log", 0.07).energy(500).id("kubejs:sawmill/hollow_azalea_log")
    e.recipes.thermal.sawmill(["3x quark:blossom_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_blossom_log", 0.07).energy(500).id("kubejs:sawmill/hollow_trumpet_log")

})