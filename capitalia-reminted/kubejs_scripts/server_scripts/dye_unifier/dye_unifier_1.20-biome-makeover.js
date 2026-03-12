// Adds recipes to TE's Centrifugal Separator that use items from Biome Makeover
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // Removals
    e.remove({id: "biomemakeover:dye/magenta_dye_from_magenta_bud"})
    e.remove({id: "biomemakeover:dye/pink_dye_from_pink_bud"})
    e.remove({id: "biomemakeover:dye/blue_dye_from_blue_bud"})
    e.remove({id: "biomemakeover:dye/brown_dye_from_brown_bud"})
    e.remove({id: "biomemakeover:dye/cyan_dye_from_cyan_bud"})
    e.remove({id: "biomemakeover:dye/gray_dye_from_gray_bud"})
    e.remove({id: "biomemakeover:dye/light_blue_dye_from_light_blue_bud"})
    e.remove({id: "biomemakeover:dye/purple_dye_from_purple_bud"})

    // Green
    e.recipes.thermal.centrifuge(["green_dye", Item.of("lime_dye").withChance(0.5)], "biomemakeover:wart", 1).energy(1800).id("dyeunifier:centrifuge_wart")

    // Purple
    e.recipes.thermal.centrifuge(["purple_dye", Item.of("pink_dye").withChance(0.5)], "biomemakeover:moth_scales", 1).energy(1800).id("dyeunifier:centrifuge_moth_scales")

})