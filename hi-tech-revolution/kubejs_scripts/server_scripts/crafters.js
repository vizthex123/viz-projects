// Changes all the auto-crafters to have a set order

// Adds tags that are only used in this script
ServerEvents.tags("item", e => {

    e.add("revolution:autocrafter/low_tier", ["projectred_expansion:auto_crafter", "quark:crafter"])
    e.add("revolution:autocrafter/mid_tier", ["enderio:crafter", "thermal:machine_crafter"])

})

ServerEvents.recipes(e => {

    // Quark and Project Red's crafters use the default recipe

    // Fabricator
    e.remove("xycraft_machines:shaped/fabricator")
    e.shaped(
      "xycraft_machines:fabricator",
        [
          "XCX",
          "KMK",
          "XWX"
        ],
        {
          C: "#revolution:autocrafter/low_tier",
          K: "#xycraft:building/kivi",
          M: "xycraft_machines:machine_base",
          W: "#forge:chests",
          X: "xycraft_world:xychorium_gem_blue"
        }
    ).id("kubejs:fabricator")

    // EnderIO Crafter
    // Sidegrade of the Fabricator
    e.remove("enderio:crafter")
    e.shaped(
      "enderio:crafter",
        [
          "SSS",
          "IVI",
          "GFG"
        ],
        {
          F: "xycraft_machines:fabricator",
          G: "#forge:gears/iron",
          I: "#forge:ingots/iron",
          S: "#forge:silicon",
          V: "enderio:void_chassis"
        }
    ).id("kubejs:crafter_enderio")

    // Sequential Fabricator
    // Sidegrade of the Fabricator
    e.remove("thermal:machine_crafter")
    e.shaped(
      "thermal:machine_crafter",
        [
          " F ",
          "TMT",
          "GRG"
        ],
        {
          F: "xycraft_machines:fabricator",
          M: "thermal:machine_frame",
          G: "#forge:gears/copper",
          R: "thermal:rf_coil",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:sequential_fabricator")

    // RFTools' Crafters
    e.remove("rftoolsutility:crafter1")
    e.remove("rftoolsutility:crafter2")
    e.remove("rftoolsutility:crafter3")
    e.shaped(
      "rftoolsutility:crafter1",
        [
          " F ",
          "RMR",
          "CSC"
        ],
        {
          F: "xycraft_machines:fabricator",
          C: "#forge:chests",
          M: "rftoolsbase:machine_frame",
          R: "redstone_torch",
          S: "#revolution:autocrafter/mid_tier"
        }
    ).id("kubejs:crafter")

    e.shapeless("rftoolsutility:crafter2", ["rftoolsutility:crafter1", "projectred_expansion:project_bench"]).id("kubejs:crafter2")
    e.shapeless("rftoolsutility:crafter3", ["rftoolsutility:crafter2", "projectred_expansion:project_bench", "projectred_expansion:project_bench"]).id("kubejs:crafter3")

})