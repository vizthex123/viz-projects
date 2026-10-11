// Adds recipes to TE's Centrifugal Separator that use items from The Twilight Forest
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // White
    e.recipes.thermal.centrifuge(["3x white_dye", Item.of("light_gray_dye").withChance(0.5)], "twilightforest:arctic_fur", 2).energy(1800).id("dyeunifier:centrifuge_arctic_fur")

    // Red
    e.recipes.thermal.centrifuge(["2x red_dye", "string"], "twilightforest:red_thread", 3).energy(1800).id("dyeunifier:centrifuge_red_thread")
    e.recipes.thermal.centrifuge(["3x red_dye", Item.of("ghast_tear").withChance(0.25)], "twilightforest:carminite", 2).energy(1800).id("dyeunifier:centrifuge_carminite")
    e.recipes.thermal.centrifuge(["4x red_dye", Item.of("glass_bottle").withChance(0.15)], "twilightforest:fiery_tears", 2).energy(1800).id("dyeunifier:centrifuge_fiery_tears")
    e.recipes.thermal.centrifuge(["6x red_dye", Item.of("glass_bottle").withChance(0.2)], "twilightforest:fiery_blood", 3).energy(1800).id("dyeunifier:centrifuge_fiery_blood")

})