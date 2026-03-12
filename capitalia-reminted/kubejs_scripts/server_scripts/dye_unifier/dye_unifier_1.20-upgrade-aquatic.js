// Adds recipes to TE's Centrifugal Separator that use items from Upgrade Aquatic
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // Grey
    e.recipes.thermal.centrifuge(["gray_dye", Item.of("2x light_gray_dye").withChance(0.5), "2x bone_meal", "2x prismarine_shard"], "#upgrade_aquatic:elder_prismarine_corals", 3).energy(1800).id("dyeunifier:centrifuge_elder_prismarine_corals")

    // Light Blue
    e.recipes.thermal.centrifuge(["3x light_blue_dye", Item.of("3x cyan_dye").withChance(0.5), "4x bone_meal", "4x prismarine_shard"], "#upgrade_aquatic:prismarine_corals", 3).energy(1800).id("dyeunifier:centrifuge_prismarine_corals")

})