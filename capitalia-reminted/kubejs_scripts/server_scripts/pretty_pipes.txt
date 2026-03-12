// Changes recipes for Pretty Pipes' content
ServerEvents.recipes(e => {

    //// Change filter modules to better fit the pack's progression
    // Blank Module
    e.remove({id: "prettypipes:blank_module"})
    e.shapeless("prettypipes:blank_module", ["smooth_stone", "#reminted:automation_agent"]).id("kubejs:blank_module")

    // Mod Filter
    e.remove({id: "prettypipes:mod_filter_modifier"})
    e.shaped(
      "prettypipes:mod_filter_modifier",
        [
          " P ",
          "ABA",
          " A "
        ],
        {
          A: "#reminted:automation_agent",
          B: "prettypipes:blank_module",
          P: "kubejs:loyalty_point"
        }
    ).id("kubejs:mod_filter")

    // Tag Filter
    e.remove({id: "prettypipes:tag_filter_modifier"})
    e.shaped(
      "prettypipes:tag_filter_modifier",
        [
          "CCC",
          "ABA",
          " A "
        ],
        {
          A: "#reminted:automation_agent",
          B: "prettypipes:blank_module",
          C: "raw_copper"
        }
    ).id("kubejs:tag_filter")

    /// Item Filters
    e.remove({id: "prettypipes:low_filter_module"})
    e.remove({id: "prettypipes:medium_filter_module"})
    e.remove({id: "prettypipes:high_filter_module"})

    // Low
    e.shaped(
      "prettypipes:low_filter_module",
        [
          " H ",
          "AMA",
          " A "
        ],
        {
          A: "#reminted:automation_agent",
          H: "woodenhopper:wooden_hopper",
          M: "prettypipes:blank_module"
        }
    ).id("kubejs:low_filter")

    // Medium
    e.shaped(
      "prettypipes:medium_filter_module",
        [
          " H ",
          "RMR",
          " R "
        ],
        {
          R: "#forge:ingots/bronze",
          H: "brickhopper:brick_hopper",
          M: "prettypipes:low_filter_module"
        }
    ).id("kubejs:medium_filter")

    // High
    e.shaped(
      "prettypipes:high_filter_module",
        [
          " I ",
          "IMI",
          " I "
        ],
        {
          I: "iron_ingot",
          M: "prettypipes:medium_filter_module"
        }
    ).id("kubejs:high_filter")

    // Damage Filter Module
    e.remove({id: "prettypipes:damage_filter_modifier"})
    e.shaped(
      "prettypipes:damage_filter_modifier",
        [
          " P ",
          "AMA",
          " A "
        ],
        {
          A: "#reminted:automation_agent",
          P: "#reminted:bronze_pickaxe",
          M: "prettypipes:blank_module"
        }
    ).id("kubejs:damage_filter")



    // Pipe
    e.remove({id: "prettypipes:pipe"})
    e.shaped(
     "4x prettypipes:pipe",
        [
          " B ",
          "GSG", // Rock and Stone!
          " B "
        ],
        {
          B: "#forge:ingots/bronze",
          G: "#forge:glass/silica",
          S: "smooth_stone"
        }
    ).id("kubejs:pipe")

    // Item Terminal
    e.remove({id: "prettypipes:item_terminal"})
    e.shaped(
     "prettypipes:item_terminal",
        [
          " C ",
          "BSB",
          " E "
        ],
        {
          B: "#forge:ingots/bronze",
          C: "#forge:chests/wooden",
          E: "prettypipes:low_extraction_module",
          S: "smooth_stone"
        }
    ).id("kubejs:item_terminal")

    // Crafting Terminal
    e.remove({id: "prettypipes:crafting_terminal"})
    e.shaped(
     "prettypipes:crafting_terminal",
        [
          " A ",
          "CIC",
          " A "
        ],
        {
          A: "#reminted:automation_agent",
          C: "#forge:workbench",
          I: "prettypipes:item_terminal"
        }
    ).id("kubejs:crafting_terminal")

})