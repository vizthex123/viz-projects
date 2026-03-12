// Adds recipes for my custom items
// Scrap recipes are in recycling.js
ServerEvents.recipes(e => {

    // Temp conversion recipe
    // REMOVE THIS AND THE TOOLTIP IN THE NEXT UPDATE!!
    e.shapeless("kubejs:lubricant", ["kubejs:lubricating_elixir"]).id("kubejs:convert_lubricating_elixir")  


    // Shredded Hide -> Leather
    e.shapeless("leather", ["kubejs:shredded_hide", "kubejs:shredded_hide", "#reminted:adhesive"]).id("kubejs:leather_from_shredded_hide")

    // Quicklime
    e.blasting("kubejs:quicklime", "quark:limestone", 0.1).id("kubejs:blast_limestone")

    // Quicklime -> Steel
    e.recipes.thermal.smelter([Item.of("thermal:steel_ingot").withChance(0.25)], ["quark:limestone", ["iron_ingot", "thermal:iron_dust"], "8x kubejs:quicklime"]).energy(6400).id("kubejs:quicklime_steel")


    //// Glue recipes
    // Glue Residue
    e.smelting("kubejs:glue_residue", "sunflower", 0.1).id("kubejs:glue_residue")
    e.blasting("kubejs:glue_residue", "#reminted:oily", 0.2).id("kubejs:oily_glue_residue")
    e.shapeless("kubejs:glue", ["kubejs:empty_vial", "kubejs:glue_residue", "kubejs:glue_residue"]).id("kubejs:glue")

    // Disc Residue
    e.shapeless("4x kubejs:glue", ["kubejs:empty_vial", "#forge:slimeballs", "kubejs:disc_residue"]).id("kubejs:glue_disc_residue")

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

    /// Uses
    // Sticky Piston
    e.shaped(
      "sticky_piston",
        [
          "G",
          "G",
          "P"
        ],
        {
          G: "kubejs:glue",
          P: "piston"
        }
    ).id("kubejs:sticky_piston_glue")




    //// Disc Residue
    /// Its recipe is in recycling.js
    // Disc Residue -> Bitumen & Oil
    e.recipes.thermal.centrifuge(["8x thermal:bitumen", Fluid.of("thermal:crude_oil", 250)], "kubejs:disc_residue", 4).energy(1200).id("kubejs:disc_residue_to_bitumen")



    // Empty Vial
    e.shaped(
     "kubejs:empty_vial",
        [
          "PP",
          "GG",
          "GG"
        ],
        {
          P: "kubejs:powdered_stone",
          G: "#forge:glass_panes"
        }
    ).id("kubejs:empty_vial")

    e.shaped(
     "2x kubejs:empty_vial",
        [
          "C",
          "G",
          "G"
        ],
        {
          C: "clay_ball",
          G: "#forge:glass/silica"
        }
    ).id("kubejs:empty_vial_clay")

    // Lubricant
    e.recipes.thermal.press(["kubejs:lubricant"], ["2x #reminted:oily", "kubejs:empty_vial"], 0.5).energy(1200).id("kubejs:lubricant")



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
          " M ",
          "MEM",
          " M ",
        ],
        {
          M: "#reminted:biomass/meaty",
          E: "kubejs:empty_vial"
        }
    ).id("kubejs:meaty_clump")

    // Surface Moss -> Biomass
    e.recipes.extendedcrafting.compressor("kubejs:biomass", "kubejs:empty_vial", "ecologics:surface_moss", 32, 6000).powerRate(30).id("kubejs:biomass_moss");



    // Rose Gold Template
    e.shaped(
      "kubejs:rose_gold_template",
        [
          " R ",
          "RAR",
          " R "
        ],
        {
          A: "#reminted:adhesive",
          R: "#forge:ingots/rose_gold"
        }
    ).id("kubejs:rose_gold_template")



    //// Loyalty & Prestiege
    // Prestige Scrip
    // 1 Chit = 1/5 of a Scrip
    e.shapeless("kubejs:prestige_scrip", ["kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit"]).id("kubejs:prestige_scrip")
    e.shapeless("5x kubejs:prestige_chit", ["kubejs:prestige_scrip"]).id("kubejs:decraft_prestige_scrip")

    // Legitimise counterfeit loyalty points
    // Counterfeits are worth 1/10 of a point
    e.recipes.extendedcrafting.compressor("kubejs:loyalty_point", "kubejs:research_point", "kubejs:loyalty_point_counterfeit", 10, 10000).powerRate(5).id("kubejs:loyalty_point_legitimiserinator");

    // Craft Prestige with Loyalty Points
    // 1 Scrip = 500 Points
    e.recipes.extendedcrafting.compressor("kubejs:prestige_chit", "essentiallycurrency:emerald_coin", "kubejs:loyalty_point", 100, 50000).powerRate(1000).id("kubejs:prestige_chit");

    // Craft Prestige with Pittance
    // 1 Scrip = 100 Pittance
    e.recipes.extendedcrafting.compressor("kubejs:prestige_scrip", "essentiallycurrency:emerald_coin", "kubejs:prestige_pittance", 100, 25000).powerRate(100).id("kubejs:condense_prestige_pittance");



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

    // Andesite
    e.shaped(
     "andesite",
      [
        "PPP",
        "PPP",
        "PPP"
      ],
      {
        P: "kubejs:powdered_stone"
      }
    ).id("kubejs:andesite")

    // Diorite
    e.shaped(
     "diorite",
      [
        "PPP",
        "PCP",
        "PPP"
      ],
      {
        C: "#forge:cobblestone",
        P: "kubejs:powdered_stone"
      }
    ).id("kubejs:diorite")

    // Granite
    e.shaped(
     "granite",
      [
        "PPP",
        "PSP",
        "PPP"
      ],
      {
        S: "#forge:stone",
        P: "kubejs:powdered_stone"
      }
    ).id("kubejs:granite")

    // Cobblestone
    e.recipes.extendedcrafting.compressor("cobblestone", "gravel", "kubejs:powdered_stone", 16, 4000).powerRate(32).id("kubejs:cobblestone");

    // Deepslate
    e.recipes.extendedcrafting.compressor("deepslate", "cobblestone", "kubejs:powdered_stone", 32, 8000).powerRate(64).id("kubejs:deepslate");

})