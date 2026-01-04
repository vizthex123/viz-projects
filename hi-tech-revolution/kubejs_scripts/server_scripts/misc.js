// Adds miscellanous recipes
ServerEvents.recipes(e => {

    // Make Tag Filter Modules use Raw Iron
    e.remove({id: "prettypipes:tag_filter_modifier"})
    e.shaped(
      "prettypipes:tag_filter_modifier",
        [
          "III",
          "RBR",
          " R "
        ],
        {
          B: "prettypipes:blank_module",
          I: "raw_iron",
          R: "redstone"
        }
    ).id("kubejs:tag_filter_modifier")

    // Make Pneumatic Tubes use Bronze (as they should)
    e.remove({id: "projectred_expansion:pneumatic_tube"})
    e.shaped(
      "8x projectred_expansion:pneumatic_tube",
        [
          "BGB",
          "BGB",
          "BGB"
        ],
        {
          B: "#forge:ingots/bronze",
          G: "#forge:glass_panes"
        }
    ).id("kubejs:pneumatic_tube")

    // Make Slimeballs from Moss Blocks
    e.shaped(
      "slime_ball",
        [
          "MMM",
          "MFM",
          "MMM"
        ],
        {
          F: ["alexscaves:fertilizer", "thermal:phytogrow"],
          M: "moss_block"
        }
    ).id("kubejs:slimeball_with_moss_block")

    // Add a recipe for the Bundle
    e.shaped(
      "bundle",
        [
          "S",
          "L"
        ],
        {
          L: "#forge:leather",
          S: "#forge:string"
        }
    ).id("kubejs:bundle")

    // Change the Disenchanter's recipe
    e.remove({id: "disenchanting_table:disenchanting_table"})
    e.shaped(
      "disenchanting_table:disenchanting_table",
        [
          " B ",
          "LEL",
          "XXX"
        ],
        {
          B: "book",
          E: "enchanting_table",
          L: "lapis_lazuli",
          X: "#revolution:xychorized_obsidian"
        }
    ).id("kubejs:disenchanting_table")

    // Incomplete Processor
    // Used to make AE2 Processors in the Combiner
    e.shaped(
      "xycraft_machines:incomplete_processor",
        [
          "GSG", // Rock and stone!
          "SCS",
          "GSG"
        ],
        {
          C: ["#forge:dusts/coal", "#forge:dusts/charcoal"],
          G: "gold_nugget",
          S: "#forge:silicon"
        }
    ).id("kubejs:incomplete_processor")

    // Changed the Ranged Pump's recipe
    e.remove({id: "rangedpumps:pump"})
    e.shaped(
      "rangedpumps:pump",
        [
          " G ",
          "EPE",
          "ETE"
        ],
        {
          E: "thermal:electrum_ingot",
          G: "#forge:gears/iron",
          P: ["ad_astra:water_pump", "xycraft_machines:hydro_pump"],
          T: ["ae2:sky_stone_tank", "deepresonance:tank", "rftoolsutility:tank", "thermal:fluid_cell", "thermal:fluid_tank_minecart", "xycraft_machines:valve"]
        }
    ).id("kubejs:pump")

})