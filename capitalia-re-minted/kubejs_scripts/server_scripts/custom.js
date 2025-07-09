// Adds recipes for my custom items
ServerEvents.recipes(e => {

    // Lubricating Elixir
    e.recipes.thermal.press(["kubejs:lubricating_elixir"], ["#reminted:oily_item", "kubejs:empty_vial"], 0.5).energy(1200).id("kubejs:lubricating_elixir")

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
    // Legitimise counterfeit loyalty points
    e.recipes.extendedcrafting.compressor("kubejs:loyalty_point", "kubejs:prestige_chit", "kubejs:loyalty_point_counterfeit", 25, 50000).powerRate(500).id("kubejs:loyalty_point_legitimiserinator");

    // Prestige Chit with Loyalty Points
    e.recipes.extendedcrafting.compressor("kubejs:prestige_chit", "essentiallycurrency:emerald_coin", "kubejs:loyalty_point", 250, 100000).powerRate(1000).id("kubejs:loyal_prestige_chit");

    // Prestige Chit
    e.recipes.extendedcrafting.compressor("kubejs:prestige_chit", "essentiallycurrency:emerald_coin", "kubejs:prestige_pittance", 100, 10000).powerRate(100).id("kubejs:prestige_chit");

    // Prestige Scrip
    e.shapeless("kubejs:prestige_scrip", ["kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit", "kubejs:prestige_chit"]).id("kubejs:prestige_scrip")



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