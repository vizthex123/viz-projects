// Lets you craft stuff with modded woods when there's only variants of each
ServerEvents.tags("item", e => {

    // Logs

    e.add("revolution:logs",
    ["#ad_astra:aeronos_logs",
    "#ad_astra:strophar_logs",
    "#ad_astra:glacian_logs",

    "#alexscaves:pewen_logs",
    "#alexscaves:thornwood_logs",

    "#biomesoplenty:dead_logs",
    "#biomesoplenty:fir_logs",
    "#biomesoplenty:hellbark_logs",
    "#biomesoplenty:jacaranda_logs",
    "#biomesoplenty:magic_logs",
    "#biomesoplenty:mahogany_logs",
    "#biomesoplenty:palm_logs",
    "#biomesoplenty:redwood_logs",
    "#biomesoplenty:umbran_logs",
    "#biomesoplenty:willow_logs",

	"#ecologics:coconut_logs",
    "#ecologics:walnut_logs",
    "#ecologics:azalea_logs",
    "#ecologics:flowering_azalea_logs",

    "#outer_end:azure_stems",

    "#forge:rubberwood_logs"])



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

    "thermal:rubberwood_planks"])

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

    // Chests with Logs
    e.shaped(
      "4x chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#revolution:logs"
        }
    ).id("kubejs:chest_logs")



    //// Log recipes for Woodworks' chests
    // Oak
    e.shaped(
      "4x woodworks:oak_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:oak_logs"
        }
    ).id("kubejs:oak_chest_logs")

    // Dark Oak
    e.shaped(
      "4x woodworks:dark_oak_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:dark_oak_logs"
        }
    ).id("kubejs:dark_oak_chest_logs")

    // Spruce
    e.shaped(
      "4x woodworks:spruce_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:spruce_logs"
        }
    ).id("kubejs:spruce_chest_logs")

    // Birch
    e.shaped(
      "4x woodworks:birch_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:birch_logs"
        }
    ).id("kubejs:birch_chest_logs")

    // Jungle
    e.shaped(
      "4x woodworks:jungle_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:jungle_logs"
        }
    ).id("kubejs:jungle_chest_logs")

    // Acacia
    e.shaped(
      "4x woodworks:acacia_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:acacia_logs"
        }
    ).id("kubejs:acacia_chest_logs")

    // Mangrove
    e.shaped(
      "4x woodworks:mangrove_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:mangrove_logs"
        }
    ).id("kubejs:mangrove_chest_logs")

    // Cherry
    e.shaped(
      "4x woodworks:cherry_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:cherry_logs"
        }
    ).id("kubejs:cherry_chest_logs")

    // Crimson
    e.shaped(
      "4x woodworks:crimson_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:crimson_stems"
        }
    ).id("kubejs:crimson_chest_logs")
    
    // Warped
    e.shaped(
      "4x woodworks:warped_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:warped_stems"
        }
    ).id("kubejs:warped_chest_logs")

    // Make the Bamboo Closet use a stick so it doesn't conflict with Quark's chest
    e.remove({id: "woodworks:bamboo_closet"})
    e.shaped(
      "woodworks:bamboo_closet",
        [
          "PPP",
          "PSP",
          "PPP"
        ],
        {
          P: "bamboo_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:bamboo_closet")

    e.shaped(
      "4x woodworks:bamboo_closet",
        [
          "LLL",
          "LPL",
          "LLL"
        ],
        {
          L: "#minecraft:bamboo_blocks",
          P: "bamboo_planks"
        }
    ).id("kubejs:bamboo_closet_logs")



    // Upgrade Aquatic log chest recipes
    e.shaped(
      "4x upgrade_aquatic:driftwood_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#upgrade_aquatic:driftwood_logs"
        }
    ).id("kubejs:driftwood_chest_logs")

    e.shaped(
      "4x upgrade_aquatic:river_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#upgrade_aquatic:river_logs"
        }
    ).id("kubejs:river_chest_logs")



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
      "quark:ancient_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#quark:ancient_logs"
        }
    ).id("kubejs:ashen_chest_logs")

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
      "4x quark:azalea_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#quark:azalea_logs"
        }
    ).id("kubejs:azalea_chest_logs")

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

    e.shaped(
      "4x quark:blossom_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#quark:blossom_logs"
        }
    ).id("kubejs:trumpet_chest_logs")

    e.shaped(
      "quark:bamboo_chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "minecraft:bamboo_planks"
        }
    ).id("kubejs:bamboo_chest")

    e.shaped(
      "4x quark:bamboo_chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#minecraft:bamboo_blocks"
        }
    ).id("kubejs:bamboo_chest_logs")

    e.shapeless("quark:ancient_trapped_chest", ["quark:ancient_chest", "tripwire_hook"]).id("kubejs:trapped_ashen_chest")
    e.shapeless("quark:azalea_trapped_chest", ["quark:azalea_chest", "tripwire_hook"]).id("kubejs:trapped_azalea_chest")
    e.shapeless("quark:blossom_trapped_chest", ["quark:blossom_chest", "tripwire_hook"]).id("kubejs:trapped_trumpet_chest")
    e.shapeless("quark:bamboo_trapped_chest", ["quark:bamboo_chest", "tripwire_hook"]).id("kubejs:trapped_bamboo_chest")

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

    // Make the Stick recipe for the Bamboo Ladder give half as much
    e.remove({id: "woodworks:bamboo_ladder"})
    e.shaped(
      "2x woodworks:bamboo_ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "bamboo_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:bamboo_ladder")

})