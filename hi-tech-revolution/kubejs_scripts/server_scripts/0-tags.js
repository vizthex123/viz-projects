// Manages tags for items, blocks, and fluids
ServerEvents.tags("item", e => {

    //// Custom
    /// Tags used exclusively in multiblock recipes are in masterful_machinery.js

    /// Recipes
    e.add("revolution:bowls", ["bowl", "ecologics:coconut_husk"])
    e.add("revolution:mosslike", ["vine", "biomesoplenty:willow_vine", "ecologics:surface_moss", "quark:moss_paste"])
    e.add("revolution:torch_fuel", ["#minecraft:coals", "thermal:bitumen", "glow_lichen", "cavesanddepths:lichenfungusplaceable", "caveroot:torch_spore"])


    e.add("revolution:corundum", ["quark:red_corundum_cluster", "quark:orange_corundum_cluster", "quark:yellow_corundum_cluster", "quark:green_corundum_cluster", "quark:blue_corundum_cluster", "quark:indigo_corundum_cluster", "quark:violet_corundum_cluster", "quark:white_corundum_cluster", "quark:black_corundum_cluster"])



    e.add("revolution:furnace", ["furnace", "quark:blackstone_furnace", "quark:deepslate_furnace"])
    e.add("revolution:furnace_cobblestone", ["cobblestone", "mossy_cobblestone", "tuff", "ad_astra:glacio_cobblestone", "ad_astra:mercury_cobblestone", "ad_astra:mars_cobblestone", "ad_astra:moon_cobblestone", "ad_astra:venus_cobblestone", "cavesanddepths:chert", "cavesanddepths:cobbled_slate", "cavesanddepths:mossy_cobblestone", "cavesanddepths:mossy_cobbled_deepslate", "quark:jasper", "quark:shale", "upgrade_aquatic:kelpy_cobblestone"])

    e.add("revolution:input_stones", ["#forge:stone", "tuff", "quark:jasper", "quark:shale"])


    e.add("revolution:drawer1", ["functionalstorage:acacia_1", "functionalstorage:birch_1", "functionalstorage:cherry_1", "functionalstorage:crimson_1", "functionalstorage:dark_oak_1", "functionalstorage:jungle_1", "functionalstorage:mangrove_1", "functionalstorage:oak_1", "functionalstorage:spruce_1", "functionalstorage:warped_1", "functionalstorage:rubberwood_1"])

    e.add("revolution:drawer2", ["functionalstorage:acacia_2", "functionalstorage:birch_2", "functionalstorage:cherry_2", "functionalstorage:crimson_2", "functionalstorage:dark_oak_2", "functionalstorage:jungle_2", "functionalstorage:mangrove_2", "functionalstorage:oak_2", "functionalstorage:spruce_2", "functionalstorage:warped_2", "functionalstorage:rubberwood_2"])

    e.add("revolution:drawer4", ["functionalstorage:acacia_4", "functionalstorage:birch_4", "functionalstorage:cherry_4", "functionalstorage:crimson_4", "functionalstorage:dark_oak_4", "functionalstorage:jungle_4", "functionalstorage:mangrove_4", "functionalstorage:oak_4", "functionalstorage:spruce_4", "functionalstorage:warped_4", "functionalstorage:rubberwood_4"])



    e.add("revolution:pink_salt_blocks", ["galosphere:pink_salt", "galosphere:pastel_pink_salt", "galosphere:rose_pink_salt"])

    e.add("revolution:xychorized_obsidian", ["xycraft_override:crying_obsidian_blue", "xycraft_override:crying_obsidian_green", "xycraft_override:crying_obsidian_red", "xycraft_override:crying_obsidian_dark", "xycraft_override:crying_obsidian_light"])

    e.add("revolution:glass_viewer", ["xycraft_world:glass_viewer", "xycraft_world:glass_viewer_silicon", "xycraft_world:glass_viewer_dire", "xycraft_world:glass_viewer_glowing", "xycraft_world:glass_viewer_glowing_clear", "xycraft_world:glass_viewer_dark", "xycraft_world:glass_viewer_reinforced", "xycraft_world:glass_viewer_immortal", "xycraft_world:glass_viewer_rgb_white", "xycraft_world:glass_viewer_rgb_glowing_white", "xycraft_world:glass_viewer_phantom", "xycraft_world:glass_viewer_phantom_glowing", "xycraft_world:glass_viewer_phantom_dark"])





    /// Quest tags
    e.add("revolution:me_storage", ["ae2:chest", "ae2:drive"])
    e.add("revolution:basic_generator", ["ad_astra:coal_generator", "thermal:dynamo_stirling", "thermal:dynamo_lapidary", "thermal:dynamo_gourmand"])
    e.add("revolution:plate_producer", ["ad_astra:compressor", "thermal:machine_press"])
    e.add("revolution:blast_furnace", ["ad_astra:etrionic_blast_furnace", "thermal:machine_smelter"])
    e.add("revolution:refinery", ["ad_astra:fuel_refinery", "thermal:machine_refinery"])



    //// Forge tags
    e.add("forge:eggs", ["#minecraft:eggs", "turtle_egg", "sniffer_egg", "enderzoology:owl_egg", "quark:egg_parrot_blue", "quark:egg_parrot_green", "quark:egg_parrot_gray", "quark:egg_parrot_red_blue", "quark:egg_parrot_yellow_blue"])
    e.add("forge:feathers", ["ecologics:penguin_feather"])
    e.add("forge:leather", ["alexscaves:tough_hide", "nourished_nether:hoglin_hide"])
    e.add("forge:mushrooms", ["ad_astra:aeronos_mushroom", "ad_astra:strophar_mushroom", "regions_unexplored:mycotoxic_mushrooms", "silverbirch:shelf_fungus"])
    e.add("forge:slimeballs", ["mobcompack:rose_gelball", "outer_end:spectragel", "thermal:tar", "thermal:rosin", "thermal_extra:sticky_ball"])

    e.add("forge:rods", ["cb_microblock:stone_rod"])
    e.add("forge:rods/wooden", ["cb_microblock:stone_rod"])

    e.add("forge:cobblestone", ["#revolution:furnace_cobblestone"])
    e.add("forge:stone", ["cavesanddepths:mossy_deepslate"])


    e.add("forge:gems", ["ad_astra_proxima_plus:micyurite", "alexscaves:occult_gem"])

    e.add("forge:nuggets/coal", ["minicoal:mini_coal", "minicoal:mini_charcoal"])
    e.add("forge:nuggets", ["copperworks:amethyst_piece", "#forge:nuggets/coal"])

    e.add("forge:ingots", ["ad_astra_proxima_plus:refined_micyurite", "alexscaves:azure_neodymium_ingot", "alexscaves:scarlet_neodymium_ingot", "jetboots:obsidian_infused_gold", "nourished_nether:necronium_ingot"])
    e.add("forge:ingots/rose_gold", ["cavesanddepths:rose_gold_ingot"])
    e.add("forge:ingots/neodymium", ["alexscaves:azure_neodymium_ingot", "alexscaves:scarlet_neodymium_ingot"])

    e.add("forge:storage_blocks/raw_copper", ["quark:raw_copper_bricks"])
    e.add("forge:storage_blocks/raw_iron", ["quark:raw_iron_bricks"])
    e.add("forge:storage_blocks/raw_gold", ["quark:raw_gold_bricks"])
    e.add("forge:storage_blocks/rose_gold", ["cavesanddepths:rose_gold_block"])

    e.add("forge:plates", ["copperworks:copper_plate", "copperworks:iron_plate"])
    e.add("forge:plates/copper", ["copperworks:copper_plate"])
    e.add("forge:plates/iron", ["copperworks:iron_plate"])



    // Mod tags
    e.add("ae2:all_quartz_dust", ["#forge:dusts/quartz"])

    e.add("blueprint:wooden_ladders", ["ad_astra:aeronos_ladder", "ad_astra:strophar_ladder", "outer_end:azure_ladder"])
    Ingredient.of("quark:ladders").itemIds.forEach(id => {
        if(id != "quark:iron_ladder")
        e.add("blueprint:wooden_ladders", id)
    })

    Ingredient.of("#quark:hollow_logs").itemIds.forEach(id => {
        if(id != "quark:hollow_crimson_stem" && id != "quark:hollow_warped_stem")
        e.add("revolution:burnable_hollow_logs", id)
    })



    //// Fixes
    e.add("saplings", ["silverbirch:silver_birch_sapling"])

    e.add("boats", ["outer_end:azure_boat", "outer_end:azure_chest_boat", "quark:azalea_boat", "quark:azalea_chest_boat"])
    e.add("chest_boats", ["outer_end:azure_chest_boat", "quark:azalea_chest_boat"])

    e.add("fence_gates", ["outer_end:azure_fence_gate"])
    e.add("wooden_fences", ["outer_end:azure_fence"])
        e.add("forge:fence_gates", ["#minecraft:fence_gates", "outer_end:azure_fence_gate", "silverbirch:silver_birch_fence_gate"])
        e.add("forge:fence_gates/wooden", ["outer_end:azure_fence_gate", "silverbirch:silver_birch_fence_gate"])

    e.add("slabs", ["silverbirch:fungus_shingle_slab"])
    e.add("stairs", ["outer_end:azure_stairs", "silverbirch:fungus_shingle_stairs"])
    e.add("wooden_stairs", ["outer_end:azure_stairs"])
    e.add("walls", ["silverbirch:fungus_shingle_wall"])

    e.add("rails", ["alexscaves:magnetic_levitation_rail"])


    e.add("forge:chests", ["ae2:sky_stone_chest", "ae2:smooth_sky_stone_chest", "outer_end:azure_chest", "outer_end:azure_trapped_chest"])
    e.add("forge:chests/wooden", ["outer_end:azure_chest", "outer_end:azure_trapped_chest"])


    e.add("signs", ["outer_end:azure_sign"])
    e.add("hanging_signs", ["outer_end:azure_hanging_sign"])



    /// Crop fixes
    e.add("forge:crops", ["glow_berries", "sweet_berries", "pitcher_pod", "torchflower_seeds", "outer_end:azure_berries", "phantasm:pream_berry", "regions_unexplored:salmonberry", "upgrade_aquatic:mulberry"])

    e.add("forge:crops/azureberry", ["outer_end:azure_berries"])
    e.add("forge:crops/preamberry", ["phantasm:pream_berry"])
    e.add("forge:crops/mulberry", ["upgrade_aquatic:mulberry"])



    // Misc tags
    e.add("sand", ["ad_astra_proxima_plus:proxima_b_sand", "ad_astra_proxima_plus:vicino_sand"])

    e.add("curios:charm", ["nourished_nether:totem_of_post_mortem"])
    e.add("forge:consumables/prevents_player_death", ["nourished_nether:totem_of_post_mortem"])

    e.add("ad_astra:venus_sandstone", ["ad_astra:venus_sandstone"])



    //// Removals
    e.remove("quark:stone_tool_materials", ["flint", "infested_stone", "infested_cobblestone", "infested_deepslate"])
    e.remove("forge:music_discs", ["biomesoplenty:music_disc_wanderer"])
    e.remove("sand", ["suspicious_sand", "biomesoplenty:mossy_black_sand"])
    e.remove("smelts_to_glass", ["biomesoplenty:mossy_black_sand"])

    e.removeAllTagsFrom("infested_cobblestone")
    e.removeAllTagsFrom("infested_deepslate")
    e.removeAllTagsFrom("infested_stone")

    e.removeAllTagsFrom("biggerreactors:wrench")

    // Quark's chests
    // Might re-enable them if enough people ask
    e.removeAllTagsFrom("quark:oak_chest")
    e.removeAllTagsFrom("quark:spruce_chest")
    e.removeAllTagsFrom("quark:birch_chest")
    e.removeAllTagsFrom("quark:jungle_chest")
    e.removeAllTagsFrom("quark:acacia_chest")
    e.removeAllTagsFrom("quark:dark_oak_chest")
    e.removeAllTagsFrom("quark:mangrove_chest")
    e.removeAllTagsFrom("quark:cherry_chest")
    e.removeAllTagsFrom("quark:crimson_chest")
    e.removeAllTagsFrom("quark:warped_chest")

    e.removeAllTagsFrom("quark:oak_trapped_chest")
    e.removeAllTagsFrom("quark:spruce_trapped_chest")
    e.removeAllTagsFrom("quark:birch_trapped_chest")
    e.removeAllTagsFrom("quark:jungle_trapped_chest")
    e.removeAllTagsFrom("quark:acacia_trapped_chest")
    e.removeAllTagsFrom("quark:dark_oak_trapped_chest")
    e.removeAllTagsFrom("quark:mangrove_trapped_chest")
    e.removeAllTagsFrom("quark:cherry_trapped_chest")
    e.removeAllTagsFrom("quark:crimson_trapped_chest")
    e.removeAllTagsFrom("quark:warped_trapped_chest")


    // Add the "destroyed in space" tag to other items
    e.add("ad_astra:destroyed_in_space", ["#quark:hedges", "#woodworks:leaf_piles", "biomesoplenty:bramble_leaves", "biomesoplenty:orange_maple_leaf_pile", "biomesoplenty:red_maple_leaf_pile", "biomesoplenty:yellow_maple_leaf_pile", "buzzier_bees:four_leaf_clover", "xycraft_world:aluminum_torch", "xycraft_world:copper_torch"])

})



// Block tags
ServerEvents.tags("block", e => {

    // Add the "destroyed in space" tag to other blocks
    e.add("ad_astra:destroyed_in_space", ["#quark:hedges", "#woodworks:leaf_piles", "biomesoplenty:bramble_leaves", "biomesoplenty:orange_maple_leaf_pile", "biomesoplenty:red_maple_leaf_pile", "biomesoplenty:yellow_maple_leaf_pile", "buzzier_bees:four_leaf_clover", "xycraft_world:aluminum_torch", "xycraft_world:copper_torch"])

})



// Fluid tags
ServerEvents.tags("fluid", e => {

    // e.add("forge:oil", ["ad_astra:oil", "thermal:crude_oil", "thermal:creosote"])
    e.add("forge:fuel", ["ad_astra:fuel", "thermal:refined_fuel"])
    e.add("forge:lava", ["lava", "ad_astra_proxima_plus:proxima_e_diamond_lava"])
    e.add("forge:steam", ["biggerreactors:steam", "systeams:steam"])

})