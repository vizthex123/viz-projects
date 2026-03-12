// Changes Rose Gold's recipes
ServerEvents.recipes(e => {

    //// Parchment (acts like paper)
    // Sawdust
    e.remove({id: "mekanism:paper"})
    e.shaped(
      "3x kubejs:parchment",
        [
          "SSS",
          " G ",
          "SSS"
        ],
        {
          G: "kubejs:glue",
          S: "#forge:sawdust"
        }
    ).id("kubejs:parchment")

    // Quicklime
    e.shaped(
      "8x kubejs:parchment",
        [
          "SQS",
          "QGQ",
          "SQS"
        ],
        {
          G: "kubejs:glue",
          S: "#forge:sawdust",
          Q: "kubejs:quicklime"
        }
    ).id("kubejs:parchment_quicklime")



    //// Sawdust
    // Clump
    e.shaped(
      "kubejs:sawdust_clump",
        [
          "SS",
          "SS"
        ],
        {
          S: "#forge:sawdust"
        }
    ).id("kubejs:sawdust_clump")

    // Compressed
    e.recipes.thermal.press(["kubejs:compressed_sawdust"], "kubejs:sawdust_clump", 0).energy(400).id("kubejs:compressed_sawdust")

    // Compressed -> Charcoal
    e.smelting("charcoal", "kubejs:compressed_sawdust", 0.1).id("kubejs:smelt_compressed_sawdust")

    // Craft Sticks with Compressed Sawdust
    e.shaped(
      "2x stick",
        [
          "C",
          "C"
        ],
        {
          C: "kubejs:compressed_sawdust"
        }
    ).id("kubejs:sawdust_sticks")



    //// MDF Board
    e.shaped(
      "kubejs:mdf",
        [
          "SSS",
          "SGS",
          "SSS"
        ],
        {
          G: "kubejs:glue",
          S: "#forge:sawdust"
        }
    ).id("kubejs:mdf_board")

    // Compressed
    e.shaped(
      "6x kubejs:mdf",
        [
          "CGC",
          "CGC"
        ],
        {
          C: "kubejs:compressed_sawdust",
          G: "kubejs:glue"
        }
    ).id("kubejs:mdf_compressed")

    // MDF Chest
    e.shaped(
      "chest",
        [
          "MMM",
          "M M",
          "MMM"
        ],
        {
          M: "kubejs:mdf"
        }
    ).id("kubejs:mdf_chest")

})