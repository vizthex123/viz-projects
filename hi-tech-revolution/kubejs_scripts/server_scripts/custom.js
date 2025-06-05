// Adds recipes to my KubeJS items
// First time using KubeJS to do this lol
ServerEvents.recipes(e => {

    // Aluminum recipes are in thermal.js and smelting_fixes.js

    // Stone Sticks
    e.remove({id: "cb_microblock:stone_rod"})
    e.shaped(
      "2x cb_microblock:stone_rod",
        [
          "S",
          "S"
        ],
        {
          S: "#forge:cobblestone"
        }
    ).id("kubejs:cobblestone_stick")

    e.shaped(
      "4x cb_microblock:stone_rod",
        [
          "S",
          "S"
        ],
        {
          S: "#forge:stone"
        }
    ).id("kubejs:stone_stick")

    // Quicklime
    e.blasting("kubejs:quicklime", "#revolution:limestone", 0.1).id("kubejs:quicklime")

    // Quicklime -> Paper
    e.shaped(
      "3x paper",
        [
          " G ",
          "QQQ"
        ],
        {
          G: "kubejs:glue",
          Q: "kubejs:quicklime"
        }
    ).id("kubejs:paper_from_quicklime")

    // Quicklime -> Steel
    e.recipes.thermal.smelter([Item.of("thermal:steel_ingot").withChance(0.15)], ["#revolution:limestone", ["iron_ingot", "thermal:iron_dust"], "8x kubejs:quicklime"]).energy(6400).id("kubejs:quicklime_steel")




/*
    //// Recycling system
    // Pulp -> Parchment
    e.shaped(
      "2x kubejs:parchment",
        [
          "PPP"
        ],
        {
          P: "kubejs:pulp"
        }
    ).id("kubejs:parchment")

    // Barb -> Feather
    e.shapeless("feather", ["kubejs:barb", "kubejs:barb"]).id("kubejs:feather_from_barbs")

    // Fibers -> String
    e.shapeless("string", ["kubejs:fibers", "kubejs:fibers"]).id("kubejs:string_from_fibers")

    // Shredded Hide -> Leather
    e.shapeless("leather", ["kubejs:shredded_hide", "kubejs:shredded_hide"]).id("kubejs:leather_from_shredded_hide")
*/


    /// Disc Residue
    e.smelting("kubejs:disc_residue", "#minecraft:music_discs", 3).id("kubejs:disc_residue")
    e.blasting("kubejs:disc_residue", "#minecraft:music_discs", 3).id("kubejs:blast_disc_residue")

    // Disc Residue -> Bitumen & Coal
    e.recipes.thermal.centrifuge(["8x thermal:bitumen", "8x coal", Fluid.of("thermal:crude_oil", 50)], "kubejs:disc_residue", 4).energy(1200).id("kubejs:disc_residue_to_bitumen")


    /// Compressed sawdust
    e.shaped(
      "kubejs:sawdust_clump",
        [
          "SSS",
          "S S",
          "SSS"
        ],
        {
          S: "#forge:sawdust"
        }
    ).id("kubejs:sawdust_clump")
    e.recipes.thermal.press(["kubejs:sawdust_clump"], ["4x thermal:sawdust", "thermal:press_packing_2x2_die"], 0).energy(400).id("kubejs:compress_sawdust_clump")
    e.recipes.thermal.press(["4x thermal:sawdust"], ["kubejs:sawdust_clump", "thermal:press_unpacking_die"], 0).energy(400).id("kubejs:uncompress_sawdust_clump")
    e.recipes.thermal.press(["4x thermal:sawdust"], ["kubejs:compressed_sawdust", "thermal:press_unpacking_die"], 0).energy(800).id("kubejs:uncompress_compressed_sawdust")

    // Compressed Sawdust -> Charcoal
    e.smelting("charcoal", "kubejs:compressed_sawdust", 0.1).id("kubejs:sawdust_charcoal")
    e.recipes.thermal.pyrolyzer(["charcoal", Fluid.of("thermal:creosote", 50)], "kubejs:compressed_sawdust", 0.2).id("kubejs:pyrolyze_compressed_sawdust")


    // Glue
    e.shaped(
      "kubejs:glue",
        [
          "PPP",
          "PSP", // That was a good handheld
          "PPP"
        ],
        {
          P: "paper",
          S: "#forge:slimeballs"
        }
    ).id("kubejs:glue_paper")
    e.shapeless("kubejs:glue", ["#forge:slimeballs", "thermal:cured_rubber", "thermal:cured_rubber"]).id("kubejs:glue")


    // MDF Board
    e.shapeless("2x kubejs:mdf", ["kubejs:compressed_sawdust", "kubejs:compressed_sawdust", "kubejs:compressed_sawdust", "kubejs:compressed_sawdust", "kubejs:glue"]).id("kubejs:mdf_board")

})