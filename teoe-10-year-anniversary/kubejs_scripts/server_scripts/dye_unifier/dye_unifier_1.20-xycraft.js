// Adds recipes to TE's Centrifugal Separator that use items from XyCraft World
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // Xychorium dyes
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x blue_dye"], "xycraft_world:xychorium_gem_blue", 3).energy(2000).id("dyeunifier:xychorium_blue")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x green_dye"], "xycraft_world:xychorium_gem_green", 3).energy(2000).id("dyeunifier:xychorium_green")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x red_dye"], "xycraft_world:xychorium_gem_red", 3).energy(2000).id("dyeunifier:xychorium_red")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x black_dye"], "xycraft_world:xychorium_gem_dark", 3).energy(2000).id("dyeunifier:xychorium_black")
    e.recipes.thermal.centrifuge(["4x white_dye"], "xycraft_world:xychorium_gem_light", 3).energy(2000).id("dyeunifier:xychorium_white")

})