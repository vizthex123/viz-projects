// Changes some recipes for AE2
ServerEvents.recipes(e => {

    // Make Silicon use the tag (and furnace-only)
    e.remove({id: "ae2:smelting/silicon_from_certus_quartz_dust"})
    e.remove({id: "ae2:blasting/silicon_from_certus_quartz_dust"})
    e.smelting("ae2:silicon", "#ae2:all_quartz_dust", 0.35).id("kubejs:silicon")

    // Energy Acceptor -> ME Controller
    e.shaped(
      "ae2:controller",
        [
          "SPS",
          "FEF",
          "SCS",
        ],
        {
          C: "ae2:charged_certus_quartz_crystal",
          E: "ae2:energy_acceptor",
          F: "ae2:fluix_crystal",
          P: "ae2:engineering_processor",
          S: "ae2:sky_stone_block"
        }
    ).id("kubejs:ae2/acceptor_upgrade")

})