// Adds recipes for items from my recycling system
// Hope I can make it a mod soon...
onEvent("recipes", e => {

    //// Item recycling
    e.smelting("honeycomb", "#minecraft:candles", 0.5).id("kubejs:melt_candle")



    //// Product crafting
    // Pulp -> Paper
    e.shaped(
      "2x paper",
        [
          "PPP"
        ],
        {
          P: "kubejs:pulp"
        }
    ).id("kubejs:paper_from_pulp")

    // Barb -> Feather
    e.shapeless("feather", ["kubejs:barb", "kubejs:barb"]).id("kubejs:feather_from_barbs")

    // Fibers -> String
    e.shapeless("string", ["kubejs:fibers", "kubejs:fibers"]).id("kubejs:string_from_fibers")

    // Fibers -> Wool
    e.shaped(
      "white_wool",
        [
          "FFF",
          "FGF",
          "FFF"
        ],
        {
          F: "kubejs:fibers",
          G: "kubejs:glue"
        }
    ).id("kubejs:wool_from_fibers")

    // Shredded Hide -> Leather
    e.shapeless("leather", ["kubejs:shredded_hide", "kubejs:shredded_hide"]).id("kubejs:leather_from_shredded_hide")

    // Powdered Stone -> Cobblestone
    e.shaped(
      "2x cobblestone",
        [
          "PP",
          "PP"
        ],
        {
          P: "#forge:dusts/cobblestone"
        }
    ).id("kubejs:cobblestone_from_powder")





    //// Sawdust
    // Clump
    e.shaped(
      "kubejs:sawdust_clump",
        [
          "SS",
          "SS"
        ],
        {
          S: "thermal:sawdust"
        }
    ).id("kubejs:sawdust_clump")


    /// Compressed
    e.recipes.create.pressing("kubejs:compressed_sawdust", "kubejs:sawdust_clump").id("kubejs:press_sawdust_clump")
    e.recipes.thermal.press(["kubejs:compressed_sawdust"], ["4x thermal:sawdust", "thermal:press_packing_2x2_die"], 0).energy(400).id("kubejs:compress_sawdust")
    e.recipes.thermal.press("kubejs:compressed_sawdust", "kubejs:sawdust_clump").id("kubejs:multi_press_sawdust_clump").energy(400).id("kubejs:compress_sawdust_clump")

    // Compressed Sawdust -> Charcoal
    e.smelting("charcoal", "kubejs:compressed_sawdust", 0.1).id("kubejs:sawdust_charcoal")
    e.recipes.thermal.pyrolyzer(["charcoal", Fluid.of("thermal:creosote", 50)], "kubejs:compressed_sawdust", 0.2).id("kubejs:pyrolyze_compressed_sawdust")

    // Craft Paper from Compressed Sawdust
    e.shaped(
      "3x paper",
        [
          "CCC"
        ],
        {
          C: "kubejs:compressed_sawdust"
        }
    ).id("kubejs:sawdust_clump")


    // MDF Board
    e.shapeless("4x kubejs:mdf", ["kubejs:compressed_sawdust", "kubejs:compressed_sawdust", "kubejs:compressed_sawdust", "kubejs:compressed_sawdust", "kubejs:glue"]).id("kubejs:mdf_board")

    e.shaped(
      "kubejs:mdf",
        [
          "SSS",
          "SGS",
          "SSS"
        ],
        {
          G: "kubejs:glue",
          S: "thermal:sawdust"
        }
    ).id("kubejs:mdf")



    /// Glue
    e.shapeless("kubejs:glue", ["#forge:slimeballs", "#forge:slimeballs", "#forge:paper"]).id("kubejs:glue")
    e.shapeless("kubejs:glue", ["#forge:bone", "#forge:bone", "#forge:bone", "#forge:paper"]).id("kubejs:glue_bone")
    e.shapeless("kubejs:glue", ["tconstruct:necrotic_bone", "#forge:paper"]).id("kubejs:glue_necrotic_bone")
    e.shapeless("2x kubejs:glue", ["reliquary:rib_bone", "#forge:paper"]).id("kubejs:glue_rib_bone")
    e.shapeless("kubejs:glue", ["aquamirae:sharp_bones", "aquamirae:sharp_bones", "aquamirae:sharp_bones", "aquamirae:sharp_bones", "aquamirae:sharp_bones", "aquamirae:sharp_bones", "#forge:paper"]).id("kubejs:glue_sharp_bones")
    e.shapeless("kubejs:glue", ["honeycomb", "honeycomb", "honeycomb", "honeycomb", "#forge:paper"]).id("kubejs:glue_honeycomb")

    // Super Glue
    e.remove({id: "create:super_glue"})
    e.shapeless("create:super_glue", ["kubejs:glue", "kubejs:glue", "#forge:plates/iron"]).id("kubejs:glue_honeycomb")

    // Sticky Pistons with Glue
    e.shaped(
      "sticky_piston",
        [
          "G",
          "P"
        ],
        {
          G: "kubejs:glue",
          P: "piston"
        }
    ).id("kubejs:sticky_piston_glue")

    e.shaped(
      "create:sticky_mechanical_piston",
        [
          "G",
          "P"
        ],
        {
          G: "kubejs:glue",
          P: "create:mechanical_piston"
        }
    ).id("kubejs:sticky_mechanical_piston_glue")

    e.shaped(
      "essentials:multi_piston_sticky",
        [
          "G",
          "P"
        ],
        {
          G: "kubejs:glue",
          P: "essentials:multi_piston"
        }
    ).id("kubejs:sticky_multi_piston_glue")


    // Custom nuggets -> Material
    e.shaped(
      "emerald",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/emerald"
        }
    ).id("kubejs:emerald")

    e.shaped(
      "diamond",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/diamond"
        }
    ).id("kubejs:diamond")

    e.shaped(
      "twilightforest:fiery_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/fiery"
        }
    ).id("kubejs:fiery_ingot")

    e.shaped(
      "twilightforest:ironwood_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/ironwood"
        }
    ).id("kubejs:ironwood_ingot")

    e.shaped(
      "twilightforest:knightmetal_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/knightmetal"
        }
    ).id("kubejs:knightmetal_ingot")

    e.shaped(
      "twilightforest:steeleaf_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/steeleaf"
        }
    ).id("kubejs:steeleaf_ingot")

})