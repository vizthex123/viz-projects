// Changes all the auto-crafters to have a set progression order
// Each tier offers an advantage over the previous (e.g. upgrades), which is why I decided to make them have a set order

// Adds tags that are only used in this script
ServerEvents.tags("item", e => {

    // Tiers: Low (Auto Crafter), Mid (Fabricator), High (Ender IO and TE crafters), Extreme (RFTools)
    e.add("revolution:autocrafters", ["projectred_expansion:auto_crafter", "xycraft_machines:fabricator", "enderio:crafter", "thermal:machine_crafter", "rftoolsutility:crafter1", "rftoolsutility:crafter2", "rftoolsutility:crafter3"])//, "quark:crafter"
    e.add("revolution:autocrafters/low_tier", ["projectred_expansion:auto_crafter"])//, "quark:crafter"
    e.add("revolution:autocrafters/mid_tier", ["xycraft_machines:fabricator"])
    e.add("revolution:autocrafters/high_tier", ["enderio:crafter", "thermal:machine_crafter"])
    e.add("revolution:autocrafters/extreme_tier", ["rftoolsutility:crafter1", "rftoolsutility:crafter2", "rftoolsutility:crafter3"])

})

ServerEvents.recipes(e => {

    // Quark and Project Red's crafters use their default recipes

    // Fabricator
    // Sidegrade of the Auto Crafter
    e.remove("xycraft_machines:shaped/fabricator")
    e.shaped(
      "xycraft_machines:fabricator",
        [
          "XCX",
          "KMK",
          "XWX"
        ],
        {
          C: "#revolution:autocrafters/low_tier",
          K: "#xycraft:building/kivi",
          M: "xycraft_machines:machine_base",
          W: "#forge:chests",
          X: "xycraft_world:xychorium_gem_blue"
        }
    ).id("kubejs:fabricator")

    // EnderIO Crafter
    // Sidegrade of the Auto Crafter
    e.remove("enderio:crafter")
    e.shaped(
      "enderio:crafter",
        [
          "SSS",
          "IVI",
          "GCG"
        ],
        {
          C: "#revolution:autocrafters/low_tier",
          G: "#forge:gears/iron",
          I: "#forge:ingots/iron",
          S: "#forge:silicon",
          V: "enderio:void_chassis"
        }
    ).id("kubejs:crafter_enderio")

    // Sequential Fabricator
    // Upgrade to the Fabricator
    e.remove("thermal:machine_crafter")
    e.shaped(
      "thermal:machine_crafter",
        [
          " C ",
          "TMT",
          "GRG"
        ],
        {
          C: "#revolution:autocrafters/low_tier",
          M: "thermal:machine_frame",
          G: "#forge:gears/copper",
          R: "thermal:rf_coil",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:sequential_fabricator")

    // RFTools' Crafters
    // Upgrade to the Fabricator
    e.remove("rftoolsutility:crafter1")
    e.remove("rftoolsutility:crafter2")
    e.remove("rftoolsutility:crafter3")
    e.shaped(
      "rftoolsutility:crafter1",
        [
          " C ",
          "RMR",
          "HSH"
        ],
        {
          C: "#revolution:autocrafters/mid_tier",
          H: "#forge:chests",
          M: "rftoolsbase:machine_frame",
          R: "redstone_torch",
          S: "#revolution:autocrafters/high_tier"
        }
    ).id("kubejs:crafter")

    e.shapeless("rftoolsutility:crafter2", ["rftoolsutility:crafter1", "projectred_expansion:project_bench"]).id("kubejs:crafter2")
    e.shapeless("rftoolsutility:crafter3", ["rftoolsutility:crafter2", "projectred_expansion:project_bench", "projectred_expansion:project_bench"]).id("kubejs:crafter3")

})