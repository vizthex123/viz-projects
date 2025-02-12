// Fix the recipe conflict with Log Piles and Hollow Logs
ServerEvents.recipes(e => {

    // Removals
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


    // Vanilla
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