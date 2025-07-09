// Fixes various recipes
ServerEvents.recipes(e => {

    // Revert all modded chests and barrels
    e.remove({id: "quark:building/crafting/chests/chest_revert"})
    e.remove({id: "quark:building/crafting/chests/trapped_chest_revert"})
    e.remove({id: "variantbarrels:barrel"})
    e.shapeless("chest", ["#reminted:revertable_chests"]).id("kubejs:chest")
    e.shapeless("trapped_chest", ["#reminted:revertable_trapped_chests"]).id("kubejs:trapped_chest")
    e.shapeless("barrel", ["#reminted:revertable_barrels"]).id("kubejs:barrel")


    // Fix the Task Screen recipes conflicting with each other
    e.remove({id: "ftbquests:screen_5"})
    e.remove({id: "ftbquests:screen_7"})
    e.shapeless("ftbquests:screen_5", ["ftbquests:screen_3", "ftbquests:screen_1", "ftbquests:screen_1"]).id("kubejs:task_screen_5")
    e.shapeless("ftbquests:screen_7", ["ftbquests:screen_5", "ftbquests:screen_1", "ftbquests:screen_1"]).id("kubejs:task_screen_7")



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