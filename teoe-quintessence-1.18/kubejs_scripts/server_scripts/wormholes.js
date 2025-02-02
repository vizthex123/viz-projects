// Changes recipes for the Wormholes mod
onEvent("recipes", e => {

    // Disable the Coal Generator since there's other mods installed
    e.remove({id: "wormhole:coal_generator"})

    // Recipe removals
    e.remove({id: "wormhole:portal_frame"})
    e.remove({id: "wormhole:portal_stabilizer"})
    e.remove({id: "wormhole:basic_energy_cell"})
    e.remove({id: "wormhole:advanced_energy_cell"})
    e.remove({id: "wormhole:basic_target_cell"})
    e.remove({id: "wormhole:advanced_target_cell"})
    e.remove({id: "wormhole:target_device"})
    e.remove({id: "wormhole:advanced_target_device"})

    // Portal Frame
    e.shaped(
      "4x wormhole:portal_frame",
        [
          "SRS",
          "RER",
          "SRS"
        ],
        {
          E: "ender_pearl",
          S: "#forge:ingots/steel",
          R: "redstone"
        }
    ).id("kubejs:portal_frame")

    // Portal Stabilizer
    e.shaped(
      "wormhole:portal_stabilizer",
        [
          "SGS",
          "ERE",
          "SGS"
        ],
        {
          E: "ender_pearl",
          G: "glowstone_dust",
          S: "#forge:ingots/steel",
          R: "thermal:rf_coil_storage_augment"
        }
    ).id("kubejs:portal_stabilizer")



    //// Energy Cells
    // Basic
    e.shaped(
      "wormhole:basic_energy_cell",
        [
          "R R",
          " C ",
          "R R"
        ],
        {
          C: "#quintessence:coil",
          R: "extendedcrafting:redstone_ingot"
        }
    ).id("kubejs:basic_energy_cell")

    // Advanced
    e.shaped(
      "wormhole:advanced_energy_cell",
        [
          "RFR",
          "RBR",
          "RRR"
        ],
        {
          B: "wormhole:basic_energy_cell",
          F: "thermal:flux_capacitor",
          R: "extendedcrafting:redstone_ingot"
        }
    ).id("kubejs:advanced_energy_cell")



    //// Target Cells
    // Basic
    e.shaped(
      "wormhole:basic_target_cell",
        [
          "RLR",
          "LTL",
          "RLR"
        ],
        {
          L: "lapis_lazuli",
          R: "extendedcrafting:redstone_ingot",
          T: "target"
        }
    ).id("kubejs:basic_target_cell")

    e.shaped(
      "wormhole:advanced_target_cell",
        [
          "EGE",
          "GTG",
          "EGE"
        ],
        {
          E: "extendedcrafting:ender_ingot",
          G: "glowstone_dust",
          T: "target"
        }
    ).id("kubejs:advanced_target_cell")



    //// Target Definition Devices
    // Basic
    e.shaped(
      "wormhole:target_device",
        [
          "  R",
          "CCE",
          "CTE"
        ],
        {
          C: "#forge:ingots/constantan",
          E: "ender_pearl",
          R: "redstone",
          T: "target"
        }
    ).id("kubejs:target_device")

    // Advanced
    e.shaped(
      "wormhole:advanced_target_device",
        [
          "  R",
          "SSE",
          "STR"
        ],
        {
          E: "ender_pearl",
          R: "redstone",
          S: "#forge:ingots/steel",
          T: "wormhole:target_device"
        }
    ).id("kubejs:advanced_target_device")

})