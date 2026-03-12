// Adds recipes to TE's Centrifugal Separator that use items from Forestry: Community Edition
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // Orange
    e.recipes.thermal.centrifuge(["4x orange_dye"], "forestry:amber", 4).energy(2000).id("dyeunifier:centrifuge_amber_gem")

})