// Adds sawing recipes for modded planks
ServerEvents.recipes(e => {

    // Alex's Caves
    e.recipes.thermal.sawmill(["6x alexscaves:pewen_planks", Item.of("thermal:sawdust").withChance(0.25)], "#alexscaves:pewen_logs", 0.15).energy(1000).id("kubejs:saw_pewen_logs")
    e.recipes.thermal.sawmill(["6x alexscaves:thornwood_planks", Item.of("thermal:sawdust").withChance(0.25)], "#alexscaves:thornwood_logs", 0.15).energy(1000).id("kubejs:saw_thornwood_logs")



    // Ecologics
    e.recipes.thermal.sawmill(["6x ecologics:azalea_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:azalea_logs", 0.15).energy(1000).id("kubejs:saw_azalea_logs")
    e.recipes.thermal.sawmill(["6x ecologics:coconut_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:coconut_logs", 0.15).energy(1000).id("kubejs:saw_coconut_logs")
    e.recipes.thermal.sawmill(["6x ecologics:flowering_azalea_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:flowering_azalea_logs", 0.15).energy(1000).id("kubejs:saw_flowering_azalea_logs")
    e.recipes.thermal.sawmill(["6x ecologics:walnut_planks", Item.of("thermal:sawdust").withChance(0.25)], "#ecologics:walnut_logs", 0.15).energy(1000).id("kubejs:saw_walnut_logs")



    // Forestry
    e.recipes.thermal.sawmill(["6x forestry:baobab_planks", Item.of("thermal:sawdust").withChance(0.25)], "#forestry:baobab_logs", 0.15).energy(1000).id("kubejs:saw_baobab_logs")



    // Upgrade Aquatic
    e.recipes.thermal.sawmill(["6x upgrade_aquatic:driftwood_planks", Item.of("thermal:sawdust").withChance(0.25)], "#upgrade_aquatic:driftwood_logs", 0.15).energy(1000).id("kubejs:saw_driftwood_logs")
    e.recipes.thermal.sawmill(["6x upgrade_aquatic:river_planks", Item.of("thermal:sawdust").withChance(0.25)], "#upgrade_aquatic:river_logs", 0.15).energy(1000).id("kubejs:saw_river_logs")



    // Quark's Hollow Logs
    // Regular logs are already covered by TE
    e.recipes.thermal.sawmill(["3x acacia_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_acacia_log", 0.07).energy(500).id("kubejs:saw_hollow_acacia_log")
    e.recipes.thermal.sawmill(["3x birch_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_birch_log", 0.07).energy(500).id("kubejs:saw_hollow_birch_log")
    e.recipes.thermal.sawmill(["3x cherry_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_cherry_log", 0.07).energy(500).id("kubejs:saw_hollow_cherry_log")
    e.recipes.thermal.sawmill(["3x dark_oak_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_dark_oak_log", 0.07).energy(500).id("kubejs:saw_hollow_dark_oak_log")
    e.recipes.thermal.sawmill(["3x jungle_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_jungle_log", 0.07).energy(500).id("kubejs:saw_hollow_jungle_log")
    e.recipes.thermal.sawmill(["3x mangrove_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_mangrove_log", 0.07).energy(500).id("kubejs:saw_hollow_mangrove_log")
    e.recipes.thermal.sawmill(["3x oak_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_oak_log", 0.07).energy(500).id("kubejs:saw_hollow_oak_log")
    e.recipes.thermal.sawmill(["3x spruce_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_spruce_log", 0.07).energy(500).id("kubejs:saw_hollow_spruce_log")
    e.recipes.thermal.sawmill(["3x crimson_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_crimson_stem", 0.07).energy(500).id("kubejs:saw_hollow_crimson_stem")
    e.recipes.thermal.sawmill(["3x warped_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_warped_stem", 0.07).energy(500).id("kubejs:saw_hollow_warped_stem")
   
    e.recipes.thermal.sawmill(["3x quark:ancient_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_ancient_log", 0.07).energy(500).id("kubejs:saw_hollow_ancient_log")
    e.recipes.thermal.sawmill(["3x quark:azalea_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_azalea_log", 0.07).energy(500).id("kubejs:saw_hollow_azalea_log")
    e.recipes.thermal.sawmill(["3x quark:trumpet_planks", Item.of("thermal:sawdust").withChance(0.5)], "quark:hollow_trumpet_log", 0.07).energy(500).id("kubejs:saw_hollow_trumpet_log")



    // Misc
    // For mods that have less than 2 types of wood (and a missing entry for vanilla)
    e.recipes.thermal.sawmill(["3x bamboo_planks", Item.of("thermal:sawdust").withChance(0.75)], "#minecraft:bamboo_blocks", 0.25).energy(1000).id("kubejs:saw_bamboo_blocks")

    e.recipes.thermal.sawmill(["6x outer_end:azure_planks", Item.of("thermal:sawdust").withChance(0.25)], "#outer_end:azure_stems", 0.15).energy(1000).id("kubejs:saw_azure_stems")

    e.recipes.thermal.sawmill(["6x phantasm:pream_planks", Item.of("thermal:sawdust").withChance(0.25)], "#phantasm:pream_logs", 0.15).energy(1000).id("kubejs:saw_pream_logs")

})