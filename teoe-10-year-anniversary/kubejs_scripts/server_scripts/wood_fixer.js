// Lets you craft stuff with modded woods when there's only variants of each
ServerEvents.tags("item", e => {

    // Custom saplings & logs tags for aether support
    Ingredient.of("#minecraft:saplings").itemIds.forEach(id => {
        if(id != "aether:skyroot_sapling" )
        e.add("teoe10:saplings", id)
    })

    Ingredient.of("#minecraft:logs").itemIds.forEach(id => {
        if(id != "aether:skyroot_log" && id != "aether:stripped_skyroot_log" && id != "aether:skyroot_wood" && id != "aether:stripped_skyroot_wood")
        e.add("teoe10:logs", id)
    })

    e.add("teoe10:skyroot_logs", ["aether:skyroot_log", "aether:stripped_skyroot_log", "aether:skyroot_wood", "aether:stripped_skyroot_wood"])

    // Logs
    e.add("teoe10:variantless_logs",
    [/*"#ecologics:coconut_logs",
    "#ecologics:walnut_logs",
    "#ecologics:azalea_logs",
    "#ecologics:flowering_azalea_logs",
*/
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

    "#forge:rubberwood_logs"])



    // Planks
    e.add("teoe10:variantless_planks",
    [/*"ecologics:coconut_planks",
    "ecologics:walnut_planks",
    "ecologics:azalea_planks",
    "ecologics:flowering_azalea_planks",
*/
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

    "faktocraft:rubber_planks",
    "thermal:rubberwood_planks"])

    // Custom chest conversion tags
    e.add("teoe10:convertable_chests", ["quark:oak_chest", "quark:spruce_chest", "quark:birch_chest", "quark:jungle_chest", "quark:acacia_chest", "quark:dark_oak_chest", "quark:warped_chest", "quark:crimson_chest", "quark:nether_brick_chest", "quark:purpur_chest", "quark:prismarine_chest", "quark:azalea_chest", "quark:blossom_chest", "quark:mangrove_chest", "quark:ancient_chest", "quark:cherry_chest", "quark:bamboo_chest", "quark:ashen_chest",

    "twilightforest:twilight_oak_chest", "twilightforest:canopy_chest", "twilightforest:mangrove_chest", "twilightforest:dark_chest", "twilightforest:time_chest", "twilightforest:transformation_chest", "twilightforest:mining_chest", "twilightforest:sorting_chest"])

    e.add("teoe10:convertable_trapped_chests", ["quark:oak_trapped_chest", "quark:spruce_trapped_chest", "quark:birch_trapped_chest", "quark:jungle_trapped_chest", "quark:acacia_trapped_chest", "quark:dark_oak_trapped_chest", "quark:warped_trapped_chest", "quark:crimson_trapped_chest", "quark:nether_brick_trapped_chest", "quark:purpur_trapped_chest", "quark:prismarine_trapped_chest", "quark:azalea_trapped_chest", "quark:blossom_trapped_chest", "quark:mangrove_trapped_chest", "quark:ancient_trapped_chest", "quark:cherry_trapped_chest", "quark:bamboo_trapped_chest"])

})



// Add recipes that use the above tags
// Also fixes a few other recipes
ServerEvents.recipes(e => {

    // Saplings -> Stick
    e.shapeless("stick", ["#teoe10:saplings"]).id("kubejs:sapling_stick_extraction")
    e.shapeless("aether:skyroot_stick", ["aether:skyroot_sapling"]).id("kubejs:skyroot_sapling_stick_extraction")

    // Skyroot Logs -> Sticks
    e.shaped(
      "16x aether:skyroot_stick",
        [
          "L",
          "L"
        ],
        {
          L: "#teoe10:skyroot_logs"
        }
    ).id("kubejs:skyroot_sticks_from_logs")

    // Custom Logs -> Sticks recipe to ensure Aether support
    e.shaped(
      "16x stick",
        [
          "L",
          "L"
        ],
        {
          L: "#teoe10:logs"
        }
    ).id("kubejs:sticks_from_logs")
/*
    // Pinecone -> Sticks
    e.shapeless("2x environmental:pine_planks", [["environmental:pinecone", "environmental:waxed_pinecone"]]).id("kubejs:pinecone_stick_extraction")
*/
    // Convert wooden chests to vanilla ones
    e.remove({id: "quark:building/crafting/chests/chest_revert"})
    e.shapeless("chest", ["#teoe10:convertable_chests"]).id("kubejs:chest_conversion")
    e.shapeless("trapped_chest", ["#teoe10:convertable_trapped_chests"]).id("kubejs:trapped_chest_conversion")

    // Chests with Planks
    e.shaped(
      "chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "#teoe10:variantless_planks"
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
          L: "#teoe10:variantless_logs"
        }
    ).id("kubejs:chest_logs")



    // Drawers with unsupported woods
    e.shaped(
      "storagedrawers:oak_full_drawers_1",
        [
          "PPP",
          "PCP",
          "PPP"
        ],
        {
          C: "#forge:chests/wooden",
          P: "#teoe10:variantless_planks"
        }
    ).id("kubejs:single_oak_drawer")

    e.shaped(
      "2x storagedrawers:oak_full_drawers_2",
        [
          "PCP",
          "PPP",
          "PCP"
        ],
        {
          C: "#forge:chests/wooden",
          P: "#teoe10:variantless_planks"
        }
    ).id("kubejs:double_oak_drawer")

    e.shaped(
      "4x storagedrawers:oak_full_drawers_4",
        [
          "CPC",
          "PPP",
          "CPC",
        ],
        {
          C: "#forge:chests/wooden",
          P: "#teoe10:variantless_planks"
        }
    ).id("kubejs:quadruple_oak_drawer")


    // Make ladders from modded planks
    e.shaped(
      "4x ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "#teoe10:variantless_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:ladder")

})