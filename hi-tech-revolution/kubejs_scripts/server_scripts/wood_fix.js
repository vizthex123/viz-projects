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

    "#forestry:larch_logs",
    "#forestry:teak_logs",
    "#forestry:desert_acacia_logs",
    "#forestry:lime_logs",
    "#forestry:chestnut_logs",
    "#forestry:wenge_logs",
    "#forestry:baobab_logs",
    "#forestry:sequoia_logs",
    "#forestry:kapok_logs",
    "#forestry:ebony_logs",
    "#forestry:mahogany_logs",
    "#forestry:balsa_logs",
    "#forestry:willow_logs",
    "#forestry:walnut_logs",
    "#forestry:greenheart_logs",
    "#forestry:hill_cherry_logs",
    "#forestry:mahoe_logs",
    "#forestry:poplar_logs",
    "#forestry:palm_logs",
    "#forestry:papaya_logs",
    "#forestry:pine_logs",
    "#forestry:plum_logs",
    "#forestry:maple_logs",
    "#forestry:citrus_logs",
    "#forestry:giganteum_logs",
    "#forestry:ipe_logs",
    "#forestry:padauk_logs",
    "#forestry:cocobolo_logs",
    "#forestry:zebrawood_logs",

    "#forestry:fireproof_oak_logs",
	"#forestry:fireproof_spruce_logs",
	"#forestry:fireproof_birch_logs",
	"#forestry:fireproof_jungle_logs",
	"#forestry:fireproof_acacia_logs",
	"#forestry:fireproof_dark_oak_logs",
	"#forestry:fireproof_cherry_logs",
    "#forestry:fireproof_larch_logs",
    "#forestry:fireproof_teak_logs",
    "#forestry:fireproof_desert_acacia_logs",
    "#forestry:fireproof_lime_logs",
    "#forestry:fireproof_chestnut_logs",
    "#forestry:fireproof_wenge_logs",
    "#forestry:fireproof_baobab_logs",
    "#forestry:fireproof_sequoia_logs",
    "#forestry:fireproof_kapok_logs",
    "#forestry:fireproof_ebony_logs",
    "#forestry:fireproof_mahogany_logs",
    "#forestry:fireproof_balsa_logs",
    "#forestry:fireproof_willow_logs",
    "#forestry:fireproof_walnut_logs",
    "#forestry:fireproof_greenheart_logs",
    "#forestry:fireproof_hill_cherry_logs",
    "#forestry:fireproof_mahoe_logs",
    "#forestry:fireproof_poplar_logs",
    "#forestry:fireproof_palm_logs",
    "#forestry:fireproof_papaya_logs",
    "#forestry:fireproof_pine_logs",
    "#forestry:fireproof_plum_logs",
    "#forestry:fireproof_maple_logs",
    "#forestry:fireproof_citrus_logs",
    "#forestry:fireproof_giganteum_logs",
    "#forestry:fireproof_ipe_logs",
    "#forestry:fireproof_padauk_logs",
    "#forestry:fireproof_cocobolo_logs",
    "#forestry:fireproof_zebrawood_logs",

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

    "forestry:larch_planks",
    "forestry:teak_planks",
    "forestry:desert_acacia_planks",
    "forestry:lime_planks",
    "forestry:chestnut_planks",
    "forestry:wenge_planks",
    "forestry:baobab_planks",
    "forestry:sequoia_planks",
    "forestry:kapok_planks",
    "forestry:ebony_planks",
    "forestry:mahogany_planks",
    "forestry:balsa_planks",
    "forestry:willow_planks",
    "forestry:walnut_planks",
    "forestry:greenheart_planks",
    "forestry:hill_cherry_planks",
    "forestry:mahoe_planks",
    "forestry:poplar_planks",
    "forestry:palm_planks",
    "forestry:papaya_planks",
    "forestry:pine_planks",
    "forestry:plum_planks",
    "forestry:maple_planks",
    "forestry:citrus_planks",
    "forestry:giganteum_planks",
    "forestry:ipe_planks",
    "forestry:padauk_planks",
    "forestry:cocobolo_planks",
    "forestry:zebrawood_planks",

    "forestry:oak_fireproof_planks",
	"forestry:spruce_fireproof_planks",
	"forestry:birch_fireproof_planks",
	"forestry:jungle_fireproof_planks",
	"forestry:acacia_fireproof_planks",
	"forestry:dark_oak_fireproof_planks",
	"forestry:cherry_fireproof_planks",
    "forestry:larch_fireproof_planks",
    "forestry:teak_fireproof_planks",
    "forestry:desert_acacia_fireproof_planks",
    "forestry:lime_fireproof_planks",
    "forestry:chestnut_fireproof_planks",
    "forestry:wenge_fireproof_planks",
    "forestry:baobab_fireproof_planks",
    "forestry:sequoia_fireproof_planks",
    "forestry:kapok_fireproof_planks",
    "forestry:ebony_fireproof_planks",
    "forestry:mahogany_fireproof_planks",
    "forestry:balsa_fireproof_planks",
    "forestry:willow_fireproof_planks",
    "forestry:walnut_fireproof_planks",
    "forestry:greenheart_fireproof_planks",
    "forestry:hill_cherry_fireproof_planks",
    "forestry:mahoe_fireproof_planks",
    "forestry:poplar_fireproof_planks",
    "forestry:palm_fireproof_planks",
    "forestry:papaya_fireproof_planks",
    "forestry:pine_fireproof_planks",
    "forestry:plum_fireproof_planks",
    "forestry:maple_fireproof_planks",
    "forestry:citrus_fireproof_planks",
    "forestry:giganteum_fireproof_planks",
    "forestry:ipe_fireproof_planks",
    "forestry:padauk_fireproof_planks",
    "forestry:cocobolo_fireproof_planks",
    "forestry:zebrawood_fireproof_planks",

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


/*
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
*/


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