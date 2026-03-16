// Fixes various issues with the wood variants in the pack
ServerEvents.tags("item", e => {
    
    // Logs
    e.add("reminted:variantless_logs", ["biomemakover:blighted_balsa_log", "biomemakover:willow_log", "biomemakover:swamp_cypress_log", "biomemakover:ancient_oak_log", "ecologics:coconut_log", "ecologics:walnut_log", "ecologics:azalea_log", "ecologics:flowering_azalea_log",

    "forestry:larch_log", "forestry:teak_log", "forestry:acacia_desert_log", "forestry:lime_log", "forestry:chestnut_log", "forestry:wenge_log", "forestry:baobab_log", "forestry:sequoia_log", "forestry:kapok_log", "forestry:ebony_log", "forestry:mahogany_log", "forestry:balsa_log", "forestry:willow_log", "forestry:walnut_log", "forestry:greenheart_log", "forestry:hill_cherry_log", "forestry:mahoe_log", "forestry:poplar_log", "forestry:palm_log", "forestry:papaya_log", "forestry:pine_log", "forestry:plum_log", "forestry:citrus_log", "forestry:giganteum_log", "forestry:ipe_log", "forestry:padauk_log", "forestry:cocobolo_log", "forestry:zebrawood_log",

    "forestry:larch_fireproof_log", "forestry:teak_fireproof_log", "forestry:acacia_desert_fireproof_log", "forestry:lime_fireproof_log", "forestry:chestnut_fireproof_log", "forestry:wenge_fireproof_log", "forestry:baobab_fireproof_log", "forestry:sequoia_fireproof_log", "forestry:kapok_fireproof_log", "forestry:ebony_fireproof_log", "forestry:mahogany_fireproof_log", "forestry:balsa_fireproof_log", "forestry:willow_fireproof_log", "forestry:walnut_fireproof_log", "forestry:greenheart_fireproof_log", "forestry:hill_cherry_fireproof_log", "forestry:mahoe_fireproof_log", "forestry:poplar_fireproof_log", "forestry:palm_fireproof_log", "forestry:papaya_fireproof_log", "forestry:pine_fireproof_log", "forestry:plum_fireproof_log", "forestry:citrus_fireproof_log", "forestry:giganteum_fireproof_log", "forestry:ipe_fireproof_log", "forestry:padauk_fireproof_log", "forestry:cocobolo_fireproof_log", "forestry:zebrawood_fireproof_log",

    "thermal:rubberwood_log"])


    // Planks
    e.add("reminted:variantless_planks", ["biomemakover:blighted_balsa_planks", "biomemakover:willow_planks", "biomemakover:swamp_cypress_planks", "biomemakover:ancient_oak_planks", "ecologics:coconut_planks", "ecologics:walnut_planks", "ecologics:azalea_planks", "ecologics:flowering_azalea_planks",

    "forestry:larch_planks", "forestry:teak_planks", "forestry:acacia_desert_planks", "forestry:lime_planks", "forestry:chestnut_planks", "forestry:wenge_planks", "forestry:baobab_planks", "forestry:sequoia_planks", "forestry:kapok_planks", "forestry:ebony_planks", "forestry:mahogany_planks", "forestry:balsa_planks", "forestry:willow_planks", "forestry:walnut_planks", "forestry:greenheart_planks", "forestry:hill_cherry_planks", "forestry:mahoe_planks", "forestry:poplar_planks", "forestry:palm_planks", "forestry:papaya_planks", "forestry:pine_planks", "forestry:plum_planks", "forestry:citrus_planks", "forestry:giganteum_planks", "forestry:ipe_planks", "forestry:padauk_planks", "forestry:cocobolo_planks", "forestry:zebrawood_planks",

    "forestry:larch_fireproof_planks", "forestry:teak_fireproof_planks", "forestry:acacia_desert_fireproof_planks", "forestry:lime_fireproof_planks", "forestry:chestnut_fireproof_planks", "forestry:wenge_fireproof_planks", "forestry:baobab_fireproof_planks", "forestry:sequoia_fireproof_planks", "forestry:kapok_fireproof_planks", "forestry:ebony_fireproof_planks", "forestry:mahogany_fireproof_planks", "forestry:balsa_fireproof_planks", "forestry:willow_fireproof_planks", "forestry:walnut_fireproof_planks", "forestry:greenheart_fireproof_planks", "forestry:hill_cherry_fireproof_planks", "forestry:mahoe_fireproof_planks", "forestry:poplar_fireproof_planks", "forestry:palm_fireproof_planks", "forestry:papaya_fireproof_planks", "forestry:pine_fireproof_planks", "forestry:plum_fireproof_planks", "forestry:citrus_fireproof_planks", "forestry:giganteum_fireproof_planks", "forestry:ipe_fireproof_planks", "forestry:padauk_fireproof_planks", "forestry:cocobolo_fireproof_planks", "forestry:zebrawood_fireproof_planks",

    "thermal:rubberwood_planks"])


    // Slabs
    e.add("reminted:variantless_slabs", ["biomemakover:blighted_balsa_slab", "biomemakover:willow_slab", "biomemakover:swamp_cypress_slab", "biomemakover:ancient_oak_slab", "ecologics:coconut_slab", "ecologics:walnut_slab", "ecologics:azalea_slab", "ecologics:flowering_azalea_slab",

    "forestry:larch_slab", "forestry:teak_slab", "forestry:acacia_desert_slab", "forestry:lime_slab", "forestry:chestnut_slab", "forestry:wenge_slab", "forestry:baobab_slab", "forestry:sequoia_slab", "forestry:kapok_slab", "forestry:ebony_slab", "forestry:mahogany_slab", "forestry:balsa_slab", "forestry:willow_slab", "forestry:walnut_slab", "forestry:greenheart_slab", "forestry:hill_cherry_slab", "forestry:mahoe_slab", "forestry:poplar_slab", "forestry:palm_slab", "forestry:papaya_slab", "forestry:pine_slab", "forestry:plum_slab", "forestry:citrus_slab", "forestry:giganteum_slab", "forestry:ipe_slab", "forestry:padauk_slab", "forestry:cocobolo_slab", "forestry:zebrawood_slab",

    "forestry:larch_fireproof_slab", "forestry:teak_fireproof_slab", "forestry:acacia_desert_fireproof_slab", "forestry:lime_fireproof_slab", "forestry:chestnut_fireproof_slab", "forestry:wenge_fireproof_slab", "forestry:baobab_fireproof_slab", "forestry:sequoia_fireproof_slab", "forestry:kapok_fireproof_slab", "forestry:ebony_fireproof_slab", "forestry:mahogany_fireproof_slab", "forestry:balsa_fireproof_slab", "forestry:willow_fireproof_slab", "forestry:walnut_fireproof_slab", "forestry:greenheart_fireproof_slab", "forestry:hill_cherry_fireproof_slab", "forestry:mahoe_fireproof_slab", "forestry:poplar_fireproof_slab", "forestry:palm_fireproof_slab", "forestry:papaya_fireproof_slab", "forestry:pine_fireproof_slab", "forestry:plum_fireproof_slab", "forestry:citrus_fireproof_slab", "forestry:giganteum_fireproof_slab", "forestry:ipe_fireproof_slab", "forestry:padauk_fireproof_slab", "forestry:cocobolo_fireproof_slab", "forestry:zebrawood_fireproof_slab",

    "thermal:rubberwood_slab"])


    // Fences
    e.add("reminted:variantless_fences", ["biomemakover:blighted_balsa_fence", "biomemakover:willow_fence", "biomemakover:swamp_cypress_fence", "biomemakover:ancient_oak_fence", "ecologics:coconut_fence", "ecologics:walnut_fence", "ecologics:azalea_fence", "ecologics:flowering_azalea_fence",

    "forestry:larch_fence", "forestry:teak_fence", "forestry:acacia_desert_fence", "forestry:lime_fence", "forestry:chestnut_fence", "forestry:wenge_fence", "forestry:baobab_fence", "forestry:sequoia_fence", "forestry:kapok_fence", "forestry:ebony_fence", "forestry:mahogany_fence", "forestry:balsa_fence", "forestry:willow_fence", "forestry:walnut_fence", "forestry:greenheart_fence", "forestry:hill_cherry_fence", "forestry:mahoe_fence", "forestry:poplar_fence", "forestry:palm_fence", "forestry:papaya_fence", "forestry:pine_fence", "forestry:plum_fence", "forestry:citrus_fence", "forestry:giganteum_fence", "forestry:ipe_fence", "forestry:padauk_fence", "forestry:cocobolo_fence", "forestry:zebrawood_fence",

    "forestry:larch_fireproof_fence", "forestry:teak_fireproof_fence", "forestry:acacia_desert_fireproof_fence", "forestry:lime_fireproof_fence", "forestry:chestnut_fireproof_fence", "forestry:wenge_fireproof_fence", "forestry:baobab_fireproof_fence", "forestry:sequoia_fireproof_fence", "forestry:kapok_fireproof_fence", "forestry:ebony_fireproof_fence", "forestry:mahogany_fireproof_fence", "forestry:balsa_fireproof_fence", "forestry:willow_fireproof_fence", "forestry:walnut_fireproof_fence", "forestry:greenheart_fireproof_fence", "forestry:hill_cherry_fireproof_fence", "forestry:mahoe_fireproof_fence", "forestry:poplar_fireproof_fence", "forestry:palm_fireproof_fence", "forestry:papaya_fireproof_fence", "forestry:pine_fireproof_fence", "forestry:plum_fireproof_fence", "forestry:citrus_fireproof_fence", "forestry:giganteum_fireproof_fence", "forestry:ipe_fireproof_fence", "forestry:padauk_fireproof_fence", "forestry:cocobolo_fireproof_fence", "forestry:zebrawood_fireproof_fence",

    "thermal:rubberwood_fence"])


    // Fence Gates
    e.add("reminted:variantless_fence_gates", ["biomemakover:blighted_balsa_fence_gate", "biomemakover:willow_fence_gate", "biomemakover:swamp_cypress_fence_gate", "biomemakover:ancient_oak_fence_gate", "ecologics:coconut_fence_gate", "ecologics:walnut_fence_gate", "ecologics:azalea_fence_gate", "ecologics:flowering_azalea_fence_gate",

    "forestry:larch_fence_gate", "forestry:teak_fence_gate", "forestry:acacia_desert_fence_gate", "forestry:lime_fence_gate", "forestry:chestnut_fence_gate", "forestry:wenge_fence_gate", "forestry:baobab_fence_gate", "forestry:sequoia_fence_gate", "forestry:kapok_fence_gate", "forestry:ebony_fence_gate", "forestry:mahogany_fence_gate", "forestry:balsa_fence_gate", "forestry:willow_fence_gate", "forestry:walnut_fence_gate", "forestry:greenheart_fence_gate", "forestry:hill_cherry_fence_gate", "forestry:mahoe_fence_gate", "forestry:poplar_fence_gate", "forestry:palm_fence_gate", "forestry:papaya_fence_gate", "forestry:pine_fence_gate", "forestry:plum_fence_gate", "forestry:citrus_fence_gate", "forestry:giganteum_fence_gate", "forestry:ipe_fence_gate", "forestry:padauk_fence_gate", "forestry:cocobolo_fence_gate", "forestry:zebrawood_fence_gate",

    "forestry:larch_fireproof_fence_gate", "forestry:teak_fireproof_fence_gate", "forestry:acacia_desert_fireproof_fence_gate", "forestry:lime_fireproof_fence_gate", "forestry:chestnut_fireproof_fence_gate", "forestry:wenge_fireproof_fence_gate", "forestry:baobab_fireproof_fence_gate", "forestry:sequoia_fireproof_fence_gate", "forestry:kapok_fireproof_fence_gate", "forestry:ebony_fireproof_fence_gate", "forestry:mahogany_fireproof_fence_gate", "forestry:balsa_fireproof_fence_gate", "forestry:willow_fireproof_fence_gate", "forestry:walnut_fireproof_fence_gate", "forestry:greenheart_fireproof_fence_gate", "forestry:hill_cherry_fireproof_fence_gate", "forestry:mahoe_fireproof_fence_gate", "forestry:poplar_fireproof_fence_gate", "forestry:palm_fireproof_fence_gate", "forestry:papaya_fireproof_fence_gate", "forestry:pine_fireproof_fence_gate", "forestry:plum_fireproof_fence_gate", "forestry:citrus_fireproof_fence_gate", "forestry:giganteum_fireproof_fence_gate", "forestry:ipe_fireproof_fence_gate", "forestry:padauk_fireproof_fence_gate", "forestry:cocobolo_fireproof_fence_gate", "forestry:zebrawood_fireproof_fence_gate",

    "thermal:rubberwood_fence_gate"])


    // Chests & Barrels
    e.add("reminted:revertable_barrels", ["#woodwevegot:barrels", "#variantbarrels:barrels"])
    e.add("reminted:revertable_chests", ["#quark:revertable_chests", "#woodwevegot:chests"])
    e.add("reminted:revertable_trapped_chests", ["#quark:revertable_trapped_chests", "#woodwevegot:trapped_chests"])

})



ServerEvents.recipes(e => {

    // Revert all modded chests and barrels
    e.remove({id: "quark:building/crafting/chests/chest_revert"})
    e.remove({id: "quark:building/crafting/chests/trapped_chest_revert"})
    e.remove({id: "variantbarrels:barrel"})
    e.shapeless("chest", ["#reminted:revertable_chests"]).id("kubejs:revert_chests")
    e.shapeless("trapped_chest", ["#reminted:revertable_trapped_chests"]).id("kubejs:revert_trapped_chests")
    e.shapeless("barrel", ["#reminted:revertable_barrels"]).id("kubejs:revert_barrels")

    // Make Crafting Tables, Chests, and Barrels with woods that don't have variant mod support
    e.shaped(
      "crafting_table",
        [
          "PP",
          "PP"
        ],
        {
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:crafting_table")

    e.shaped(
      "barrel",
        [
          "PSP",
          "P P",
          "PSP"
        ],
        {
          P: "#reminted:variantless_planks",
          S: "#reminted:variantless_slabs"
        }
    ).id("kubejs:barrel")

    e.shaped(
      "chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:chest")

    e.shaped(
      "4x chest",
        [
          "LLL",
          "L L",
          "LLL"
        ],
        {
          L: "#reminted:variantless_logs"
        }
    ).id("kubejs:chest_logs")



    // Functional Storage drawers
    e.shaped(
      "functionalstorage:oak_1",
        [
          "PPP",
          "PCP",
          "PPP"
        ],
        {
          C: "#forge:chests/wooden",
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:single_oak_drawer")

    e.shaped(
      "2x functionalstorage:oak_2",
        [
          "PCP",
          "PPP",
          "PCP"
        ],
        {
          C: "#forge:chests/wooden",
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:double_oak_drawer")

    e.shaped(
      "4x functionalstorage:oak_4",
        [
          "CPC",
          "PPP",
          "CPC",
        ],
        {
          C: "#forge:chests/wooden",
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:quadruple_oak_drawer")



    // Oak Wooden Pipe with modded woods
    e.shaped(
      "8x classicpipes:oak_pipe",
        [
          "PGP"
        ],
        {
          G: "#forge:glass/silica",
          P: "#reminted:variantless_planks"
        }
    ).id("kubejs:variantless_oak_pipe")

})