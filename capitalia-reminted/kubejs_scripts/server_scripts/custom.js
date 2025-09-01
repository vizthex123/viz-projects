// Adds recipes for my custom items
ServerEvents.recipes(e => {

    // Scrap recipes are in recycling.js

    //// Glue recipes
    // Glue Residue
    e.shapeless("kubejs:glue", ["kubejs:glue_residue", "kubejs:glue_residue", "kubejs:glue_residue", "kubejs:empty_vial"]).id("kubejs:glue")  
    e.blasting("kubejs:glue_residue", "#forge:slimeballs", 0.1).id("kubejs:glue_residue")

    // Disc Residue
    // Recipe is in recycling.js
    e.shapeless("kubejs:glue", ["#forge:slimeballs", "kubejs:disc_residue", "kubejs:empty_vial"]).id("kubejs:glue_disc_residue")

    // Moss Paste
    e.shaped(
      "kubejs:glue",
        [
          "MMM",
          "MEM",
          "MMM"
        ],
        {
          E: "kubejs:empty_vial",
          M: "quark:moss_paste"
        }
    ).id("kubejs:glue_moss_paste")



    // Empty Vial
    e.shaped(
     "2x kubejs:empty_vial",
        [
          "S",
          "G",
          "G"
        ],
        {
          G: "#forge:glass/silica",
          S: "#forge:rods/stone"
        }
    ).id("kubejs:empty_vial")

    // Lubricating Elixir
    e.recipes.thermal.press(["kubejs:lubricating_elixir"], ["#reminted:biomass/oily", "kubejs:empty_vial"], 0.5).energy(1200).id("kubejs:lubricating_elixir")



    /// Biomass and Meaty Clumps
    e.shaped(
     "kubejs:biomass",
        [
          "BBB",
          "BEB",
          "BBB",
        ],
        {
          B: "#reminted:biomass",
          E: "kubejs:empty_vial"
        }
    ).id("kubejs:biomass")

    e.shaped(
     "kubejs:meaty_clump",
        [
          "BBB",
          "BEB",
          "BBB",
        ],
        {
          B: "#reminted:biomass/meaty",
          E: "kubejs:empty_vial"
        }
    ).id("kubejs:meaty_clump")



    // Rose Gold Template
    e.shaped(
      "2x kubejs:rose_gold_template",
        [
          "RGR",
          "RCR",
          "RGR"
        ],
        {
          C: "#forge:ingots/copper",
          G: "#forge:ingots/gold",
          R: "#forge:ingots/rose_gold"
        }
    ).id("kubejs:rose_gold_template")



    // Research Catalyst
    e.shaped(
     "2x kubejs:research_catalyst",
        [
          " C ",
          "GCG",
          " G "
        ],
        {
          C: "clay_ball",
          G: "#forge:glass/silica"
        }
    ).id("kubejs:research_catalyst_basic")

    e.shaped(
     "4x kubejs:research_catalyst",
        [
          " S ",
          "GAG",
          " G "
        ],
        {
          A: "#reminted:automation_agent",
          G: "#forge:glass/silica",
          S: "#forge:rods/stone"
        }
    ).id("kubejs:research_catalyst")



    //// Loyalty & Prestiege
    // Prestige Scrip
    // 1 Chit = 1/5 of a Scrip
    e.shapeless("kubejs:prestige_scrip", ["kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit"]).id("kubejs:prestige_scrip")

    // Legitimise counterfeit loyalty points
    // Counterfeits are worth 1/10 of a point
    e.recipes.extendedcrafting.compressor("kubejs:loyalty_point", "kubejs:research_point", "kubejs:loyalty_point_counterfeit", 10, 10000).powerRate(5).id("kubejs:loyalty_point_legitimiserinator");

    // Craft Prestige with Loyalty Points
    // 1 Scrip = 500 Points
    e.recipes.extendedcrafting.compressor("kubejs:prestige_chit", "essentiallycurrency:emerald_coin", "kubejs:loyalty_point", 100, 100000).powerRate(1000).id("kubejs:prestige_chit");

    // Craft Prestige with Pittance
    // 1 Scrip = 100 Pittance
    e.recipes.extendedcrafting.compressor("kubejs:prestige_scrip", "essentiallycurrency:emerald_coin", "kubejs:prestige_pittance", 100, 10000).powerRate(100).id("kubejs:condense_prestige_pittance");



    //// Powdered Stone
    // Gravel
    e.shaped(
     "gravel",
      [
        "PP",
        "PP"
      ],
      {
        P: "kubejs:powdered_stone"
      }
    ).id("kubejs:gravel")

    // Cobblestone
    e.shaped(
     "4x cobblestone",
      [
        "PGP",
        "GPG",
        "PGP"
      ],
      {
        G: "gravel",
        P: "kubejs:powdered_stone"
      }
    ).id("kubejs:cobblestone")

})