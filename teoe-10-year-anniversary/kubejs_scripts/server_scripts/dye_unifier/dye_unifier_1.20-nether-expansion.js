// Adds recipes to TE's Centrifugal Separator that use items from Jaden's Nether Expansion
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // Cyan
    e.recipes.thermal.centrifuge(["2x blue_dye", "2x light_blue_dye"], "netherexp:warphopper_fur", 2).energy(1800).id("dyeunifier:centrifuge_warphopper_fur")

})