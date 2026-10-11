// Adds various recipes
ServerEvents.recipes(e => {

    // Matrix Enchanting Table
    e.shaped(
      "quark:matrix_enchanter",
        [
          " L ",
          "BEB",
          "OOO"
        ],
        {
          B: "xycraft_world:xychorium_gem_blue",
          L: "xycraft_world:xychorium_gem_light",
          E: "enchanting_table",
          O: "#teoe10:obsidian"
        }
    ).id("kubejs:matrix_enchanting_table")

    // Translocator upgrades
    e.remove({id: "transprotwo:dispatcher"})
    e.shaped(
      "4x transprotwo:dispatcher",
        [
          "ITI",
          "E E",
          "ITI"
        ],
        {
          E: "ender_pearl",
          I: "#forge:ingots/ironwood",
          T: "translocators:item_translocator"
        }
    ).id("kubejs:dispatcher")

    e.remove({id: "transprotwo:fluid_dispatcher"})
    e.shaped(
      "4x transprotwo:fluid_dispatcher",
        [
          "ITI",
          "E E",
          "ITI"
        ],
        {
          E: "ender_pearl",
          I: "#forge:ingots/knightmetal",
          T: "translocators:fluid_translocator"
        }
    ).id("kubejs:fluid_dispatcher")

    /// Make Forestry's bronze tools cheaper
    e.remove({id: "forestry:bronze_sword"})
    e.remove({id: "forestry:bronze_pickaxe"})
    e.remove({id: "forestry:bronze_axe"})
    e.remove({id: "forestry:bronze_shovel"})
    e.remove({id: "forestry:bronze_hoe"})
    e.shaped(
      "forestry:bronze_sword",
        [
          " T ",
          "ACA",
          " S "
        ],
        {
          A: "#teoe10:binding",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_sword")

    e.shaped(
      "forestry:bronze_pickaxe",
        [
          "CAC", // I learned KubeJS to remake that one video
          "TST",
          " S "
        ],
        {
          A: "#teoe10:binding",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_pickaxe")

    e.shaped(
      "forestry:bronze_axe",
        [
          "TCA",
          "CS ",
          " S "
        ],
        {
          A: "#teoe10:binding",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_axe")

    e.shaped(
      "forestry:bronze_shovel",
        [
          "CAT", // loaf!
          " S ",
          " S "
        ],
        {
          A: "#teoe10:binding",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_shovel")

    e.shaped(
      "forestry:bronze_hoe",
        [
          "CTA",
          " S ",
          " S "
        ],
        {
          A: "#teoe10:binding",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_hoe")

})