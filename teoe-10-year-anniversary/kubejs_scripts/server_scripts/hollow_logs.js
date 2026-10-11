// Fix the recipe conflict with Forestry's Log Piles and Quark's Hollow Logs
// I could just change the Log Piles, but I didn't want to since they're already fine (it's 4 logs slapped together vs. stripping out a bunch of log filling, ya know?)
// Also adds some QoL recipes that uses them, and supports Twilight Forest's hollow logs
ServerEvents.tags("item", e => {

    // Custom tags for this script
    e.add("hollow_log_fixer:hollow_logs", ["deep_aether:rotten_roseroot_log", "#quark:hollow_logs", "twilightforest:hollow_twilight_oak_log", "twilightforest:hollow_canopy_log", "twilightforest:hollow_mangrove_log", "twilightforest:hollow_dark_log", "twilightforest:hollow_time_log", "twilightforest:hollow_transformation_log", "twilightforest:hollow_mining_log", "twilightforest:hollow_sorting_log", "twilightforest:hollow_oak_log", "twilightforest:hollow_spruce_log", "twilightforest:hollow_birch_log", "twilightforest:hollow_jungle_log", "twilightforest:hollow_acacia_log", "twilightforest:hollow_dark_oak_log", "twilightforest:hollow_vangrove_log", "twilightforest:hollow_cherry_log"])
    e.add("hollow_log_fixer:burnable_hollow_logs", ["deep_aether:rotten_roseroot_log", "twilightforest:hollow_twilight_oak_log", "twilightforest:hollow_canopy_log", "twilightforest:hollow_mangrove_log", "twilightforest:hollow_dark_log", "twilightforest:hollow_time_log", "twilightforest:hollow_transformation_log", "twilightforest:hollow_mining_log", "twilightforest:hollow_sorting_log", "twilightforest:hollow_oak_log", "twilightforest:hollow_spruce_log", "twilightforest:hollow_birch_log", "twilightforest:hollow_jungle_log", "twilightforest:hollow_acacia_log", "twilightforest:hollow_dark_oak_log", "twilightforest:hollow_vangrove_log", "twilightforest:hollow_cherry_log"])

    Ingredient.of("#quark:hollow_logs").itemIds.forEach(id => {
        if(id != "quark:hollow_crimson_stem" && id != "quark:hollow_warped_stem")
        e.add("hollow_log_fixer:burnable_hollow_logs", id)
    })

})

// Recipes
ServerEvents.recipes(e => {

    //// Quality-of-Life recipes
    // Hollow Logs -> Sticks
    e.shaped(
      "8x stick",
        [
          "H",
          "H"
        ],
        {
          H: "#hollow_log_fixer:hollow_logs"
        }
    ).id("kubejs:hollow_sticks")

    // Hollow Logs -> Planks
    e.shapeless("2x acacia_planks", ["quark:hollow_acacia_log"]).id("kubejs:hollow_acacia_planks")
    e.shapeless("2x birch_planks", ["quark:hollow_birch_log"]).id("kubejs:hollow_birch_planks")
    e.shapeless("2x cherry_planks", ["quark:hollow_cherry_log"]).id("kubejs:hollow_cherry_planks")
    e.shapeless("2x dark_oak_planks", ["quark:hollow_dark_oak_log"]).id("kubejs:hollow_dark_oak_planks")
    e.shapeless("2x jungle_planks", ["quark:hollow_jungle_log"]).id("kubejs:hollow_jungle_planks")
    e.shapeless("2x mangrove_planks", ["quark:hollow_mangrove_log"]).id("kubejs:hollow_mangrove_planks")
    e.shapeless("2x oak_planks", ["quark:hollow_oak_log"]).id("kubejs:hollow_oak_planks")
    e.shapeless("2x spruce_planks", ["quark:hollow_spruce_log"]).id("kubejs:hollow_spruce_planks")

    e.shapeless("2x crimson_planks", ["quark:hollow_crimson_stem"]).id("kubejs:hollow_crimson_planks")
    e.shapeless("2x warped_planks", ["quark:hollow_warped_stem"]).id("kubejs:hollow_warped_planks")

    e.shapeless("2x quark:ancient_planks", ["quark:hollow_ancient_log"]).id("kubejs:hollow_ancient_planks")
    e.shapeless("2x quark:azalea_planks", ["quark:hollow_azalea_log"]).id("kubejs:hollow_azalea_planks")
    e.shapeless("2x quark:blossom_planks", ["quark:hollow_blossom_log"]).id("kubejs:hollow_trumpet_planks")

    // Hollow Logs -> Charcoal
    e.smelting("charcoal", "#hollow_log_fixer:burnable_hollow_logs", 0.1).id("kubejs:hollow_charcoal")

    //// Forestry conflict fixer
    /// Recipe removals
    const hollow_log_removal = [
        "quark:building/crafting/hollowlogs/hollow_ancient_log",
        "quark:building/crafting/hollowlogs/hollow_azalea_log",
        "quark:building/crafting/hollowlogs/hollow_blossom_log",
        "quark:building/crafting/hollowlogs/hollow_oak_log",
        "quark:building/crafting/hollowlogs/hollow_spruce_log",
        "quark:building/crafting/hollowlogs/hollow_birch_log",
        "quark:building/crafting/hollowlogs/hollow_jungle_log",
        "quark:building/crafting/hollowlogs/hollow_acacia_log",
        "quark:building/crafting/hollowlogs/hollow_dark_oak_log",
        "quark:building/crafting/hollowlogs/hollow_mangrove_log",
        "quark:building/crafting/hollowlogs/hollow_cherry_log",    
        "quark:building/crafting/hollowlogs/hollow_crimson_stem",
        "quark:building/crafting/hollowlogs/hollow_warped_stem"
    ]

    hollow_log_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

    /// Quark
    e.shaped(
      "4x quark:hollow_ancient_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "quark:ancient_log"
        }
    ).id("kubejs:hollow_ashen_log")

    e.shaped(
      "4x quark:hollow_azalea_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "quark:azalea_log"
        }
    ).id("kubejs:hollow_azalea_log")

    e.shaped(
      "4x quark:hollow_blossom_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "quark:blossom_log"
        }
    ).id("kubejs:hollow_trumpet_log")

    e.shaped(
      "4x quark:hollow_oak_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "oak_log"
        }
    ).id("kubejs:hollow_oak_log")

    e.shaped(
      "4x quark:hollow_spruce_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "spruce_log"
        }
    ).id("kubejs:hollow_spruce_log")

    e.shaped(
      "4x quark:hollow_birch_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "birch_log"
        }
    ).id("kubejs:hollow_birch_log")

    e.shaped(
      "4x quark:hollow_jungle_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "jungle_log"
        }
    ).id("kubejs:hollow_jungle_log")

    e.shaped(
      "4x quark:hollow_acacia_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "acacia_log"
        }
    ).id("kubejs:hollow_acacia_log")

    e.shaped(
      "4x quark:hollow_dark_oak_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "dark_oak_log"
        }
    ).id("kubejs:hollow_dark_oak_log")

    e.shaped(
      "4x quark:hollow_mangrove_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "mangrove_log"
        }
    ).id("kubejs:hollow_mangrove_log")

    e.shaped(
      "4x quark:hollow_cherry_log",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "cherry_log"
        }
    ).id("kubejs:hollow_cherry_log")

    e.shaped(
      "4x quark:hollow_crimson_stem",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "crimson_stem"
        }
    ).id("kubejs:hollow_crimson_stem")

    e.shaped(
      "4x quark:hollow_warped_stem",
        [
          " L ",
          "LFL",
          " L "
        ],
        {
          F: "flint",
          L: "warped_stem"
        }
    ).id("kubejs:hollow_warped_stem")

})