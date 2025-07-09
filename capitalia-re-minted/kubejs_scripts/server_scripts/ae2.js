// Changes some recipes for AE2
ServerEvents.recipes(e => {

    // Energy Acceptor -> ME Controller
    e.shaped(
      "ae2:controller",
        [
          "SPS",
          "FEF",
          "SFS",
        ],
        {
          E: "ae2:energy_acceptor",
          F: "ae2:fluix_crystal",
          P: "ae2:engineering_processor",
          S: "ae2:sky_stone_block"
        }
    ).id("kubejs:acceptor_upgrade")

})