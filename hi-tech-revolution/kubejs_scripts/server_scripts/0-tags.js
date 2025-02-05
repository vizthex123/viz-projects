// Manages tags for items, blocks, and fluids
ServerEvents.tags("item", e => {

    //// Custom
    /// Tags used exclusively in multiblock recipes are in masterful_machinery.js
    /* Tags in the dyes script:
    Cacti
    Cave Plants
    Nether Plants
    Vines
    */

    /// Recipes
    e.add("revolution:paper", ["paper"]) // Parchment gets this tag on startup
    e.add("revolution:binding", ["#forge:leather", "phantom_membrane"]) // Parchment gets this tag on startup
    e.add("revolution:bowls", ["bowl", "ecologics:coconut_husk"])

    e.add("revolution:stick_extraction", ["alexscaves:pewen_branch", "alexscaves:thornwood_branch", "biomesoplenty:bramble", "biomesoplenty:dead_branch", "biomesoplenty:reed"])
    e.add("revolution:torch_fuel", ["#minecraft:coals", "thermal:bitumen", "glow_lichen"])


    e.add("revolution:mosslike", ["vine", "biomesoplenty:willow_vine", "ecologics:surface_moss", "forestry:bee_comb_mossy", "quark:moss_paste"])

    e.add("revolution:corundum", ["quark:red_corundum_cluster", "quark:orange_corundum_cluster", "quark:yellow_corundum_cluster", "quark:green_corundum_cluster", "quark:blue_corundum_cluster", "quark:indigo_corundum_cluster", "quark:violet_corundum_cluster", "quark:white_corundum_cluster", "quark:black_corundum_cluster"])

    e.add("revolution:corundum_blocks", ["quark:red_corundum", "quark:orange_corundum", "quark:yellow_corundum", "quark:green_corundum", "quark:blue_corundum", "quark:indigo_corundum", "quark:violet_corundum", "quark:white_corundum", "quark:black_corundum",

    "quark:waxed_red_corundum", "quark:waxed_orange_corundum", "quark:waxed_yellow_corundum", "quark:waxed_green_corundum", "quark:waxed_blue_corundum", "quark:waxed_indigo_corundum", "quark:waxed_violet_corundum", "quark:waxed_white_corundum", "quark:waxed_black_corundum"])

    e.add("revolution:corundum_sheets", ["quark:red_corundum_pane", "quark:orange_corundum_pane", "quark:yellow_corundum_pane", "quark:green_corundum_pane", "quark:blue_corundum_pane", "quark:indigo_corundum_pane", "quark:violet_corundum_pane", "quark:white_corundum_pane", "quark:black_corundum_pane"])



    e.add("revolution:carbon_dust", ["#forge:dusts/coal", "#forge:dusts/charcoal"])

    e.add("revolution:furnace", ["furnace", "quark:blackstone_furnace", "quark:deepslate_furnace"])
    e.add("revolution:furnace_cobblestone", ["cobblestone", "mossy_cobblestone", "tuff", "ad_astra:glacio_cobblestone", "ad_astra:mercury_cobblestone", "ad_astra:mars_cobblestone", "ad_astra:moon_cobblestone", "ad_astra:venus_cobblestone", "quark:jasper", "quark:shale", "upgrade_aquatic:kelpy_cobblestone"])

    e.add("revolution:input_stones", ["#forge:stone", "tuff", "quark:jasper", "quark:shale"])


    e.add("revolution:drawer1", ["functionalstorage:acacia_1", "functionalstorage:birch_1", "functionalstorage:cherry_1", "functionalstorage:crimson_1", "functionalstorage:dark_oak_1", "functionalstorage:jungle_1", "functionalstorage:mangrove_1", "functionalstorage:oak_1", "functionalstorage:spruce_1", "functionalstorage:warped_1", "functionalstorage:rubberwood_1"])

    e.add("revolution:drawer2", ["functionalstorage:acacia_2", "functionalstorage:birch_2", "functionalstorage:cherry_2", "functionalstorage:crimson_2", "functionalstorage:dark_oak_2", "functionalstorage:jungle_2", "functionalstorage:mangrove_2", "functionalstorage:oak_2", "functionalstorage:spruce_2", "functionalstorage:warped_2", "functionalstorage:rubberwood_2"])

    e.add("revolution:drawer4", ["functionalstorage:acacia_4", "functionalstorage:birch_4", "functionalstorage:cherry_4", "functionalstorage:crimson_4", "functionalstorage:dark_oak_4", "functionalstorage:jungle_4", "functionalstorage:mangrove_4", "functionalstorage:oak_4", "functionalstorage:spruce_4", "functionalstorage:warped_4", "functionalstorage:rubberwood_4"])



    e.add("revolution:pink_salt_blocks", ["galosphere:pink_salt", "galosphere:pastel_pink_salt", "galosphere:rose_pink_salt"])

    e.add("revolution:xychorized_obsidian", ["xycraft_override:crying_obsidian_blue", "xycraft_override:crying_obsidian_green", "xycraft_override:crying_obsidian_red", "xycraft_override:crying_obsidian_dark", "xycraft_override:crying_obsidian_light"])

    e.add("revolution:glass_viewer", ["xycraft_world:glass_viewer", "xycraft_world:glass_viewer_silicon", "xycraft_world:glass_viewer_dire", "xycraft_world:glass_viewer_glowing", "xycraft_world:glass_viewer_glowing_clear", "xycraft_world:glass_viewer_dark", "xycraft_world:glass_viewer_reinforced", "xycraft_world:glass_viewer_immortal", "xycraft_world:glass_viewer_rgb_white", "xycraft_world:glass_viewer_rgb_glowing_white", "xycraft_world:glass_viewer_phantom", "xycraft_world:glass_viewer_phantom_glowing", "xycraft_world:glass_viewer_phantom_dark"])





    /// Quest tags
    e.add("revolution:compacting_drawer", ["functionalstorage:simple_compacting_drawer", "functionalstorage:compacting_drawer", "functionalstorage:framed_simple_compacting_drawer", "functionalstorage:compacting_framed_drawer"])
    e.add("revolution:mid_tier_crafter", ["enderio:crafter", "thermal:machine_crafter"])
    e.add("revolution:me_storage", ["ae2:chest", "ae2:drive"])

    e.add("revolution:basic_generator", ["ad_astra:coal_generator", "thermal:dynamo_stirling", "thermal:dynamo_lapidary", "thermal:dynamo_gourmand"])
    e.add("revolution:blast_furnace", ["ad_astra:etrionic_blast_furnace", "thermal:machine_smelter"])

    e.add("revolution:plate_producer", ["ad_astra:compressor", "thermal:machine_press"])
    e.add("revolution:refinery", ["ad_astra:fuel_refinery", "thermal:machine_refinery"])

    e.add("revolution:pipe_filter", ["prettypipes:low_filter_module", "prettypipes:tag_filter_modifier", "prettypipes:damage_filter_modifier", "prettypipes:nbt_filter_modifier", "prettypipes:mod_filter_modifier"])


    //// Forge tags
    e.add("forge:eggs", ["#minecraft:eggs", "turtle_egg", "sniffer_egg", "enderzoology:owl_egg", "quark:egg_parrot_blue", "quark:egg_parrot_green", "quark:egg_parrot_gray", "quark:egg_parrot_red_blue", "quark:egg_parrot_yellow_blue"])
    e.add("forge:feathers", ["ecologics:penguin_feather"])
    e.add("forge:leather", ["alexscaves:tough_hide"])
    e.add("forge:mushrooms", ["ad_astra:aeronos_mushroom", "ad_astra:strophar_mushroom", "quark:glow_shroom"])
    e.add("forge:slimeballs", ["mobcompack:rose_gelball", "outer_end:spectragel", "thermal:tar", "thermal:rosin"])

    e.add("forge:rods", ["cb_microblock:stone_rod"])
    e.add("forge:rods/wooden", ["cb_microblock:stone_rod"])

    e.add("forge:cobblestone", ["#revolution:furnace_cobblestone"])



    e.add("forge:gems", ["ad_astra_proxima_plus:micyurite", "alexscaves:occult_gem"])

    e.add("forge:ingots", ["ad_astra:etrium_ingot", "ad_astra_proxima_plus:refined_micyurite", "alexscaves:azure_neodymium_ingot", "alexscaves:scarlet_neodymium_ingot", "jetboots:obsidian_infused_gold", "railcraft:brass_ingot", "railcraft:zinc_ingot", "thermalendergy:melodium_ingot", "thermalendergy:prismalium_ingot", "thermalendergy:stellarium_ingot"])
    e.add("forge:ingots/neodymium", ["alexscaves:azure_neodymium_ingot", "alexscaves:scarlet_neodymium_ingot"])
    e.add("forge:ingots/etrium", ["ad_astra:etrium_ingot"])

    e.add("forge:nuggets", ["#forge:nuggets/coal", "ad_astra:etrium_nugget", "thermalendergy:melodium_nugget", "thermalendergy:prismalium_nugget", "thermalendergy:stellarium_nugget"])
    e.add("forge:nuggets/coal", ["minicoal:mini_coal"])
    e.add("forge:nuggets/charcoal", ["minicoal:mini_charcoal"])
    e.add("forge:nuggets/etrium", ["ad_astra:etrium_nugget"])

    e.add("forge:dusts", ["railcraft:charcoal_dust", "railcraft:ender_dust", "railcraft:slag", "railcraft:saltpeter_dust", "thermalendergy:melodium_dust", "thermalendergy:prismalium_dust", "thermalendergy:stellarium_dust"])
    e.add("forge:dusts/charcoal", ["railcraft:charcoal_dust"])
    e.add("forge:dusts/ender_pearl", ["railcraft:ender_dust"])

    e.add("forge:storage_blocks/raw_copper", ["quark:raw_copper_bricks"])
    e.add("forge:storage_blocks/raw_iron", ["quark:raw_iron_bricks"])
    e.add("forge:storage_blocks/raw_gold", ["quark:raw_gold_bricks"])



    e.add("forge:plates", ["ad_astra_proxima_plus:micyurite_plate"])



    // Mod tags
    e.add("ae2:all_quartz_dust", ["#forge:dusts/quartz"])

    e.add("quark:stone_tool_materials", ["phantasm:cirite"])
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
    e.add("planks", ["quark:vertical_bamboo_planks", "quark:vertical_cherry_planks", "quark:vertical_mangrove_planks"])

    e.add("boats", ["outer_end:azure_boat", "outer_end:azure_chest_boat", "quark:azalea_boat", "quark:azalea_chest_boat"])
    e.add("chest_boats", ["outer_end:azure_chest_boat", "quark:azalea_chest_boat"])

    e.add("fence_gates", ["outer_end:azure_fence_gate"])
    e.add("wooden_fences", ["outer_end:azure_fence"])
        e.add("forge:fence_gates", ["#minecraft:fence_gates", "outer_end:azure_fence_gate"])
        e.add("forge:fence_gates/wooden", ["outer_end:azure_fence_gate"])

    e.add("stairs", ["outer_end:azure_stairs"])
    e.add("wooden_stairs", ["outer_end:azure_stairs"])

    e.add("rails", ["alexscaves:magnetic_levitation_rail"])

    e.add("signs", ["outer_end:azure_sign"])
    e.add("hanging_signs", ["outer_end:azure_hanging_sign"])


    e.add("sand", ["ad_astra_proxima_plus:proxima_b_sand", "ad_astra_proxima_plus:vicino_sand", "yungscavebiomes:ancient_sand"])
    e.add("forge:sand", ["#minecraft:sand"])

    e.add("forge:chests", ["ae2:sky_stone_chest", "ae2:smooth_sky_stone_chest", "outer_end:azure_chest", "outer_end:azure_trapped_chest"])
    e.add("forge:chests/wooden", ["outer_end:azure_chest", "outer_end:azure_trapped_chest"])

    e.add("ad_astra:venus_sandstone", ["ad_astra:venus_sandstone"])



    /// Crop fixes
    e.add("forge:crops", ["glow_berries", "sweet_berries", "pitcher_pod", "torchflower_seeds", "outer_end:azure_berries", "phantasm:pream_berry", "upgrade_aquatic:mulberry"])

    e.add("forge:crops/azureberry", ["outer_end:azure_berries"])
    e.add("forge:crops/preamberry", ["phantasm:pream_berry"])
    e.add("forge:crops/mulberry", ["upgrade_aquatic:mulberry"])



    //// Removals
    e.remove("sand", ["suspicious_sand", "biomesoplenty:mossy_black_sand"])
    e.remove("smelts_to_glass", ["biomesoplenty:mossy_black_sand"])
    e.remove("forge:eggs", ["alexscaves:tremorzilla_egg"])
    e.remove("forge:music_discs", ["biomesoplenty:music_disc_wanderer"])

    e.remove("quark:stone_tool_materials", ["flint", "infested_stone", "infested_cobblestone", "infested_deepslate"])

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