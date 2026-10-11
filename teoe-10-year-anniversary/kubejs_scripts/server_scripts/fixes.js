// Fixes various recipes
ServerEvents.recipes(e => {

    // Fix all of the duplicate charcoal smelting recipes
    e.remove({type: "smelting", output: "charcoal"})
    e.smelting("charcoal", "#minecraft:logs_that_burn", 0.15).id("kubejs:charcoal")

    // Unify bread recipes
    e.remove({id: "minecraft:bread"})
    e.remove({id: "natura:bread_from_barley"})
    e.shaped(
      "bread",
        [
          "WWW"
        ],
        {
          W: "#teoe10:wheatlike"
        }
    ).id("kubejs:bread")

    ///// Furnace upgrades with tags
    /// Makes them use my custom tag
    e.remove({output: "furnace"})
    e.remove({output: "smoker"})
    e.remove({output: "blast_furnace"})
    e.remove({output: "furnace_minecart"})
    e.remove({output: "quark:deepslate_furnace"})

    // Furnace
    e.shaped(
      "furnace",
        [
          "CCC",
          "C C",
          "CCC",
        ],
        {
          C: ["cobblestone", "mossy_cobblestone", "undermod:cobblestone_eroded"]
        }
    ).id("kubejs:furnace")

    // Deepslate Furnace
    e.shaped(
      "quark:deepslate_furnace",
        [
          "CCC",
          "C C",
          "CCC",
        ],
        {
          C: ["cobbled_deepslate", "projectred_exploration:basalt_cobble"]
        }
    ).id("kubejs:deepslate_furnace")

    // Smoker
    e.shaped(
      "smoker",
        [
          " L ",
          "LFL",
          " L ",
        ],
        {
          F: "#teoe10:furnace",
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
          F: "#teoe10:furnace",
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
          F: "#teoe10:furnace",
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
          F: "#teoe10:furnace",
          I: "iron_ingot"
        }
    ).id("kubejs:furnace_minecart_direct")

})