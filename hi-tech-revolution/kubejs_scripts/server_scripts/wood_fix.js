// Lets you craft stuff with modded woods when there's only variants of each
ServerEvents.tags("item", e => {

    // Planks
    e.add("revolution:planks",
    ["ad_astra:aeronos_planks",
    "ad_astra:strophar_planks",
    "ad_astra:glacian_planks",

    "alexscaves:pewen_planks",
    "alexscaves:thornwood_planks",

    "biomesoplenty:dead_planks",
    "biomesoplenty:fir_planks",
    "biomesoplenty:hellbark_planks",
    "biomesoplenty:jacaranda_planks",
    "biomesoplenty:magic_planks",
    "biomesoplenty:mahogany_planks",
    "biomesoplenty:palm_planks",
    "biomesoplenty:redwood_planks",
    "biomesoplenty:umbran_planks",
    "biomesoplenty:willow_planks",

    "ecologics:coconut_planks",
    "ecologics:walnut_planks",
    "ecologics:azalea_planks",
    "ecologics:flowering_azalea_planks",

    "outer_end:azure_planks",

    "thermal:rubberwood_planks",
    ])

    Ingredient.of("#revolution:planks").itemIds.forEach(id => {
        if(id != "ad_astra:aeronos_planks" && id != "ad_astra:strophar_planks")
        e.add("revolution:ladder_planks", id)
    })

})



// Add recipes that use the above tags
// Also fixes a few other recipes
ServerEvents.recipes(e => {
    
    // Chests with Planks
    e.shaped(
      "chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "#revolution:planks"
        }
    ).id("kubejs:chest")

    //// Quark's wooden blocks
    /// Chests
    e.shaped(
      "quark:ancient_chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "quark:ancient_planks"
        }
    ).id("kubejs:ashen_chest")

    e.shaped(
      "quark:azalea_chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "quark:azalea_planks"
        }
    ).id("kubejs:azalea_chest")

    e.shaped(
      "quark:blossom_chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "quark:blossom_planks"
        }
    ).id("kubejs:trumpet_chest")

    e.shapeless("quark:ancient_trapped_chest", ["quark:ancient_chest", "tripwire_hook"]).id("kubejs:trapped_ashen_chest")
    e.shapeless("quark:azalea_trapped_chest", ["quark:azalea_chest", "tripwire_hook"]).id("kubejs:trapped_azalea_chest")
    e.shapeless("quark:blossom_trapped_chest", ["quark:blossom_chest", "tripwire_hook"]).id("kubejs:trapped_trumpet_chest")

    /// Ladders
    e.shaped(
      "4x quark:ancient_ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "quark:ancient_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:ashen_ladder")

    e.shaped(
      "4x quark:azalea_ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "quark:azalea_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:azalea_ladder")

    e.shaped(
      "4x quark:blossom_ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "quark:blossom_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:blossom_ladder")

    /// Bookshelves
    e.shaped(
      "quark:ancient_bookshelf",
        [
          "PPP",
          "BBB",
          "PPP"
        ],
        {
          B: "book",
          P: "quark:ancient_planks"
        }
    ).id("kubejs:ashen_bookshelf")

    e.shaped(
      "quark:azalea_bookshelf",
        [
          "PPP",
          "BBB",
          "PPP"
        ],
        {
          B: "book",
          P: "quark:azalea_planks"
        }
    ).id("kubejs:azalea_bookshelf")

    e.shaped(
      "quark:blossom_bookshelf",
        [
          "PPP",
          "BBB",
          "PPP"
        ],
        {
          B: "book",
          P: "quark:blossom_planks"
        }
    ).id("kubejs:trumpet_bookshelf")

    // Make ladders from modded planks
    e.shaped(
      "4x ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "#revolution:ladder_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:ladder")

})