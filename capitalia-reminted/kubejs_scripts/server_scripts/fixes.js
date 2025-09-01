// Fixes various recipes
ServerEvents.recipes(e => {

    // Crafting Tables, Chests, and Barrels with unvarianted woods
    e.shaped(
      "crafting_table",
        [
          "PP",
          "PP"
        ],
        {
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:crafting_table")

    e.shaped(
      "barrel",
        [
          "PSP",
          "P P",
          "PSP"
        ],
        {
          P: "#reminted:variantless_planks",
          S: "#reminted:variantless_slabs"
        }
    ).id("kubejs:barrel")

    e.shaped(
      "chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:chest")

    e.shaped(
      "4x chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#reminted:variantless_logs"
        }
    ).id("kubejs:chest_logs")

    e.shaped(
      "autumnity:maple_chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "forestry:maple_planks"
        }
    ).id("kubejs:maple_chest")

    e.shaped(
      "4x autumnity:maple_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: ["#autumnity:maple_logs", "#forestry:maple_logs"]
        }
    ).id("kubejs:maple_chest_logs")



    // Revert all modded chests and barrels
    e.remove({id: "quark:building/crafting/chests/chest_revert"})
    e.remove({id: "quark:building/crafting/chests/trapped_chest_revert"})
    e.remove({id: "variantbarrels:barrel"})
    e.shapeless("chest", ["#reminted:revertable_chests"]).id("kubejs:revert_chests")
    e.shapeless("trapped_chest", ["#reminted:revertable_trapped_chests"]).id("kubejs:revert_trapped_chests")
    e.shapeless("barrel", ["#reminted:revertable_barrels"]).id("kubejs:revert_barrels")



    ///// Furnace upgrades with tags
    /// Makes them use my custom tag
    // Furnace
    e.remove({output: "furnace"})
    e.remove({output: "smoker"})
    e.remove({output: "blast_furnace"})
    e.remove({output: "furnace_minecart"})

    e.shaped(
      "furnace",
        [
          "FFF",
          "F F",
          "FFF"
        ],
        {
          F: ["cobblestone", "mossy_cobblestone"]
        }
    ).id("kubejs:furnace")

    // Smoker
    e.shaped(
      "smoker",
        [
          " L ",
          "LFL",
          " L ",
        ],
        {
          F: "#reminted:furnace",
          L: "#minecraft:logs"
        }
    ).id("kubejs:smoker")

    // Blast Furnace
    e.shaped(
      "blast_furnace",
        [
          "III",
          "IFI",
          "SSS"
        ],
        {
          F: "#reminted:furnace",
          I: "iron_ingot",
          S: ["smooth_stone", "smooth_basalt"]
        }
    ).id("kubejs:blast_furnace")

    // Minecart with Furnace (the most useless item lol)
    e.shaped(
      "furnace_minecart",
        [
          "F",
          "M"
        ],
        {
          F: "#reminted:furnace",
          M: "minecart"
        }
    ).id("kubejs:furnace_minecart")

    e.shaped(
      "furnace_minecart",
        [
          "IFI",
          "III"
        ],
        {
          F: "#reminted:furnace",
          I: "iron_ingot"
        }
    ).id("kubejs:furnace_minecart_direct")

})