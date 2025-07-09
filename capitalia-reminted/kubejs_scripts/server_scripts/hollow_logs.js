// Fix the recipe conflict with Log Piles and Hollow Logs
// I could just change the Log Piles, but I didn't want to since they're already fine (it's 4 logs slapped together vs. stripping out a bunch of log materials, ya know?)
// Also adds some QoL recipes for them
ServerEvents.tags("item", e => {

// Custom tag
    Ingredient.of("#quark:hollow_logs").itemIds.forEach(id => {
        if(id != "quark:hollow_crimson_stem" && id != "quark:hollow_warped_stem")
        e.add("reminted:burnable_hollow_logs", id)
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
          H: "#quark:hollow_logs"
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
    e.smelting("charcoal", "#reminted:burnable_hollow_logs", 0.12).id("kubejs:hollow_charcoal")

    //// Conflict fixer
    // Recipe removals
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_ancient_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_azalea_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_blossom_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_oak_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_spruce_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_birch_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_jungle_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_acacia_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_dark_oak_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_mangrove_log"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_cherry_log"})    
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_crimson_stem"})
    e.remove({id: "quark:building/crafting/hollowlogs/hollow_warped_stem"})

    // Quark
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