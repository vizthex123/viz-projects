// Fixes recipes I can't fix with replacer.js
ServerEvents.recipes(e => {

    // Condense Certus Quartz decrafting into a single recipe
    e.remove({type: "crafting_shapeless", output: "ae2:certus_quartz_crystal"})
    e.shapeless("4x ae2:certus_quartz_crystal", [["ae2:quartz_block", "ae2:smooth_quartz_block", "ae2:cut_quartz_block", "ae2:quartz_bricks", "ae2:chiseled_quartz_block", "ae2:quartz_pillar"]]).id("kubejs:decraft_certus")

    // Craft Chests with modded planks
    e.shaped(
    "autumnity:maple_chest",
        [
          "WWW",
          "W W",
          "WWW"
        ],
        {
          W: "autumnity:maple_planks"
        }
    ).id("kubejs:maple_chest")

    e.shaped(
    "upgrade_aquatic:driftwood_chest",
        [
          "WWW",
          "W W",
          "WWW"
        ],
        {
          W: "upgrade_aquatic:driftwood_planks"
        }
    ).id("kubejs:driftwood_chest")

    e.shaped(
    "upgrade_aquatic:river_chest",
        [
          "WWW",
          "W W",
          "WWW"
        ],
        {
          W: "upgrade_aquatic:river_planks"
        }
    ).id("kubejs:river_chest")

  ///// Furnace upgrades with tags
  // Furnace
  // Makes it use my custom tag
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
      F: "#modpack:furnace_stones"
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
      F: "#modpack:furnace",
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
      F: "#modpack:furnace",
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
      F: "#modpack:furnace",
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
      F: "#modpack:furnace",
      I: "iron_ingot"
    }
  ).id("kubejs:furnace_minecart_direct")

})