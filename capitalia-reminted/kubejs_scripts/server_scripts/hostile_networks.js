// Changes recipes for Hostile Neural Networks
ServerEvents.recipes(e => {

    // Recipe removals
    e.remove({id: "hostilenetworks:framework"})
    e.remove({id: "hostilenetworks:deep_learner"})
    e.remove({id: "hostilenetworks:sim_chamber"})
    e.remove({id: "hostilenetworks:loot_fabricator"})

    // Model Framework
    e.shaped(
      "hostilenetworks:blank_data_model",
        [
          "PBC",
          "PSG",
          "PBC",
        ],
        {
          B: "#forge:dyes/blue",
          C: "clay_ball",
          G: "gold_nugget",
          P: "#forge:glass_panes",
          S: "smooth_stone"
        }
    ).id("kubejs:framework")

    // Deep Learner
    e.shaped(
      "hostilenetworks:deep_learner",
        [
          "SLS",
          "RGR",
          "SOS",
        ],
        {
          G: "#forge:glass_panes",
          L: "kubejs:lubricating_elixir",
          O: "#forge:obsidian",
          R: "#forge:dusts/redstone",
          S: "#forge:ingots/steel"
        }
    ).id("kubejs:deep_learner")

    // Simulation Chamber
    e.shaped(
      "hostilenetworks:sim_chamber",
        [
          " G ",
          "EOE",
          "LSL",
        ],
        {
          E: "#forge:dusts/electrotine",
          G: "#forge:glass_panes",
          L: "#forge:dusts/lapis",
          O: "#forge:obsidian",
          S: "#forge:ingots/steel"
        }
    ).id("kubejs:simulation_chamber")

    // Loot Fabricator
    e.shaped(
      "hostilenetworks:loot_fabricator",
        [
          " G ",
          "AOA",
          "GCG",
        ],
        {
          C: "craftingautomat:autocrafter",
          A: "#forge:dusts/apatite",
          G: "#forge:glass_panes",
          O: "#forge:obsidian"
        }
    ).id("kubejs:loot_fabricator")

})