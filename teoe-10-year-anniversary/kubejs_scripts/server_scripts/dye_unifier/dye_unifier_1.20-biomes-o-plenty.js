// Adds recipes to TE's Centrifugal Separator that use items from Biomes o' Plenty
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // Red
    e.recipes.thermal.centrifuge(["2x red_dye", "2x stick"], "biomesoplenty:bramble", 1).energy(1600).id("dyeunifier:centrifuge_bramble")

})