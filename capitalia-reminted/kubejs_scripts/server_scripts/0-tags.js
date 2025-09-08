// Manages tags for items, blocks, and fluids
ServerEvents.tags("item", e => {

    //// Quests
    e.add("reminted:log_pile_covers", ["clay", "dirt", "gravel", "netherrack", "end_stone", "end_stone_bricks"])

    e.add("reminted:equipment_gem", ["#forge:gems/ruby", "#forge:gems/sapphire", "#forge:gems/peridot"])

    e.add("reminted:iron_pickaxe", ["iron_pickaxe", "projectred_exploration:ruby_pickaxe", "projectred_exploration:peridot_pickaxe", "projectred_exploration:sapphire_pickaxe"])



    //// Recipes
    e.add("reminted:bowls", ["bowl", "autumnity:snail_shell_piece", "ecologics:coconut_husk"])
    e.add("reminted:shells", ["nautilus_shell", "autumnity:snail_shell_piece", "ecologics:seashell", "quark:crab_shell"])
    e.add("reminted:mushrooms", ["#forge:mushrooms", "crimson_fungus", "warped_fungus"])

    
    e.add("reminted:variantless_logs", ["biomemakover:blighted_balsa_log", "biomemakover:willow_log", "biomemakover:swamp_cypress_log", "biomemakover:ancient_oak_log", "ecologics:cocnut_log", "ecologics:walnut_log", "ecologics:azalea_log", "ecologics:flowering_azalea_log",

    "forestry:larch_log", "forestry:teak_log", "forestry:acacia_desert_log", "forestry:lime_log", "forestry:chestnut_log", "forestry:wenge_log", "forestry:baobab_log", "forestry:sequoia_log", "forestry:kapok_log", "forestry:ebony_log", "forestry:mahogany_log", "forestry:balsa_log", "forestry:willow_log", "forestry:walnut_log", "forestry:greenheart_log", "forestry:hill_cherry_log", "forestry:mahoe_log", "forestry:poplar_log", "forestry:palm_log", "forestry:papaya_log", "forestry:pine_log", "forestry:plum_log", "forestry:citrus_log", "forestry:giganteum_log", "forestry:ipe_log", "forestry:padauk_log", "forestry:cocobolo_log", "forestry:zebrawood_log",

    "forestry:larch_fireproof_log", "forestry:teak_fireproof_log", "forestry:acacia_desert_fireproof_log", "forestry:lime_fireproof_log", "forestry:chestnut_fireproof_log", "forestry:wenge_fireproof_log", "forestry:baobab_fireproof_log", "forestry:sequoia_fireproof_log", "forestry:kapok_fireproof_log", "forestry:ebony_fireproof_log", "forestry:mahogany_fireproof_log", "forestry:balsa_fireproof_log", "forestry:willow_fireproof_log", "forestry:walnut_fireproof_log", "forestry:greenheart_fireproof_log", "forestry:hill_cherry_fireproof_log", "forestry:mahoe_fireproof_log", "forestry:poplar_fireproof_log", "forestry:palm_fireproof_log", "forestry:papaya_fireproof_log", "forestry:pine_fireproof_log", "forestry:plum_fireproof_log", "forestry:citrus_fireproof_log", "forestry:giganteum_fireproof_log", "forestry:ipe_fireproof_log", "forestry:padauk_fireproof_log", "forestry:cocobolo_fireproof_log", "forestry:zebrawood_fireproof_log",

    "thermal:rubberwood_log"])
    e.add("reminted:variantless_planks", ["biomemakover:blighted_balsa_planks", "biomemakover:willow_planks", "biomemakover:swamp_cypress_planks", "biomemakover:ancient_oak_planks", "ecologics:cocnut_planks", "ecologics:walnut_planks", "ecologics:azalea_planks", "ecologics:flowering_azalea_planks",

    "forestry:larch_planks", "forestry:teak_planks", "forestry:acacia_desert_planks", "forestry:lime_planks", "forestry:chestnut_planks", "forestry:wenge_planks", "forestry:baobab_planks", "forestry:sequoia_planks", "forestry:kapok_planks", "forestry:ebony_planks", "forestry:mahogany_planks", "forestry:balsa_planks", "forestry:willow_planks", "forestry:walnut_planks", "forestry:greenheart_planks", "forestry:hill_cherry_planks", "forestry:mahoe_planks", "forestry:poplar_planks", "forestry:palm_planks", "forestry:papaya_planks", "forestry:pine_planks", "forestry:plum_planks", "forestry:citrus_planks", "forestry:giganteum_planks", "forestry:ipe_planks", "forestry:padauk_planks", "forestry:cocobolo_planks", "forestry:zebrawood_planks",

    "forestry:larch_fireproof_planks", "forestry:teak_fireproof_planks", "forestry:acacia_desert_fireproof_planks", "forestry:lime_fireproof_planks", "forestry:chestnut_fireproof_planks", "forestry:wenge_fireproof_planks", "forestry:baobab_fireproof_planks", "forestry:sequoia_fireproof_planks", "forestry:kapok_fireproof_planks", "forestry:ebony_fireproof_planks", "forestry:mahogany_fireproof_planks", "forestry:balsa_fireproof_planks", "forestry:willow_fireproof_planks", "forestry:walnut_fireproof_planks", "forestry:greenheart_fireproof_planks", "forestry:hill_cherry_fireproof_planks", "forestry:mahoe_fireproof_planks", "forestry:poplar_fireproof_planks", "forestry:palm_fireproof_planks", "forestry:papaya_fireproof_planks", "forestry:pine_fireproof_planks", "forestry:plum_fireproof_planks", "forestry:citrus_fireproof_planks", "forestry:giganteum_fireproof_planks", "forestry:ipe_fireproof_planks", "forestry:padauk_fireproof_planks", "forestry:cocobolo_fireproof_planks", "forestry:zebrawood_fireproof_planks",

    "thermal:rubberwood_planks"])

    e.add("reminted:variantless_slabs", ["biomemakover:blighted_balsa_slab", "biomemakover:willow_slab", "biomemakover:swamp_cypress_slab", "biomemakover:ancient_oak_slab", "ecologics:cocnut_slab", "ecologics:walnut_slab", "ecologics:azalea_slab", "ecologics:flowering_azalea_slab",

    "forestry:larch_slab", "forestry:teak_slab", "forestry:acacia_desert_slab", "forestry:lime_slab", "forestry:chestnut_slab", "forestry:wenge_slab", "forestry:baobab_slab", "forestry:sequoia_slab", "forestry:kapok_slab", "forestry:ebony_slab", "forestry:mahogany_slab", "forestry:balsa_slab", "forestry:willow_slab", "forestry:walnut_slab", "forestry:greenheart_slab", "forestry:hill_cherry_slab", "forestry:mahoe_slab", "forestry:poplar_slab", "forestry:palm_slab", "forestry:papaya_slab", "forestry:pine_slab", "forestry:plum_slab", "forestry:citrus_slab", "forestry:giganteum_slab", "forestry:ipe_slab", "forestry:padauk_slab", "forestry:cocobolo_slab", "forestry:zebrawood_slab",

    "forestry:larch_fireproof_slab", "forestry:teak_fireproof_slab", "forestry:acacia_desert_fireproof_slab", "forestry:lime_fireproof_slab", "forestry:chestnut_fireproof_slab", "forestry:wenge_fireproof_slab", "forestry:baobab_fireproof_slab", "forestry:sequoia_fireproof_slab", "forestry:kapok_fireproof_slab", "forestry:ebony_fireproof_slab", "forestry:mahogany_fireproof_slab", "forestry:balsa_fireproof_slab", "forestry:willow_fireproof_slab", "forestry:walnut_fireproof_slab", "forestry:greenheart_fireproof_slab", "forestry:hill_cherry_fireproof_slab", "forestry:mahoe_fireproof_slab", "forestry:poplar_fireproof_slab", "forestry:palm_fireproof_slab", "forestry:papaya_fireproof_slab", "forestry:pine_fireproof_slab", "forestry:plum_fireproof_slab", "forestry:citrus_fireproof_slab", "forestry:giganteum_fireproof_slab", "forestry:ipe_fireproof_slab", "forestry:padauk_fireproof_slab", "forestry:cocobolo_fireproof_slab", "forestry:zebrawood_fireproof_slab",

    "thermal:rubberwood_slab"])

    e.add("reminted:revertable_barrels", ["#woodwevegot:barrels", "#variantbarrels:barrels"])
    e.add("reminted:revertable_chests", ["#quark:revertable_chests", "#woodwevegot:chests"])
    e.add("reminted:revertable_trapped_chests", ["#quark:revertable_trapped_chests", "#woodwevegot:trapped_chests"])


    // This tag doesn't cover mob drops
    e.add("reminted:biomass", ["#forge:seeds", "#forge:crops", "#forge:fruits", "#forge:mushrooms", "#forge:crops", "#forge:seeds", "#forge:pumpkins",
    "#minecraft:flowers", "#minecraft:saplings", "#reminted:vines", "reminted:cacti", "kelp", "moss_carpet", "moss_block", "ecologics:coconut_husk"])
    e.add("reminted:biomass/meaty", ["#forge:foods/meat/raw", "#forge:raw_fishes", "#forge:raw_turkey", "biomemakeover:raw_crab", "biomemakeover:raw_toad", "quark:crab_leg"])
    e.add("reminted:biomass/oily", ["biomeswevegone:aloe_vera", "ecologics:coconut_slice", "#forge:raw_fishes"])

    e.add("reminted:adhesive", ["#forge:slimeballs"])

    e.add("reminted:furnace", ["furnace", "quark:blackstone_furnace", "quark:deepslate_furnace"])
    e.add("reminted:mudlike", ["mud", "packed_mud", "muddy_mangrove_roots"])
    e.add("reminted:mosslike", ["vine", "yungscavebiomes:prickly_vines", "ecologics:surface_moss", "quark:moss_paste", "#upgrade_aquatic:moss_corals", "forestry:bee_comb_mossy"])
    e.add("reminted:stonelike", ["stone", "deepslate", "tuff", "blackstone", "biomeswevegone:rocky_stone", "quark:jasper", "quark:limestone", "quark:shale"])
    e.add("reminted:stonelike/tough", ["calcite", "andesite", "diorite", "granite", "projectred_exploration:basalt_cobble", "projectred_exploration:marble"])

    e.add("reminted:automation_agent", ["redstone", "projectred_core:electrotine_dust"])

    e.add("reminted:bronze_pickaxe", ["forestry:bronze_pickaxe", "forestry:broken_bronze_pickaxe"])

    e.add("reminted:writing_utensil", ["feather", "ink_sac", "glow_ink_sac", "writable_book", "brush"])


    // Used for latex and dyes
    e.add("reminted:cacti", ["biomeswevegone:mini_cactus", "biomeswevegone:prickly_pear_cactus", "biomeswevegone:golden_spined_cactus", "biomemakeover:barrel_cactus", "biomemakeover:barrel_cactus_flowered", "yungscavebiomes:prickly_peach_cactus", "cactus", "biomeswevegone:barrel_cactus", "biomeswevegone:carved_barrel_cactus", "biomeswevegone:flowering_barrel_cactus", "biomemakeover:saguaro_cactus"])
    e.add("reminted:cave_plants", ["glow_lichen", "yungscavebiomes:frost_lily", "yungscavebiomes:prickly_peach"])
    e.add("reminted:nether_plants", ["crimson_fungus", "warped_fungus", "crimson_roots", "warped_roots"])
    e.add("reminted:vines", ["vine", "weeping_vines", "twisting_vines", "yungscavebiomes:prickly_vines"])

    Ingredient.of("#minecraft:tall_flowers").itemIds.forEach(id => {
        if(id != "minecraft:sunflower")
        e.add("reminted:tall_flowers", id)
    })



    //// Bounties
    e.add("reminted:froglight", ["pearlescent_froglight", "ochre_froglight", "verdant_froglight"])
    e.add("reminted:golden_food", ["golden_apple", "enchanted_golden_apple", "golden_carrot", "glistering_melon_slice"])





    // Minecraft
    e.add("minecraft:freeze_immune_wearables", ["minecraft:netherite_helmet", "minecraft:netherite_chestplate", "minecraft:netherite_leggings", "minecraft:netherite_boots", "mekanismtools:refined_glowstone_helmet", "mekanismtools:refined_glowstone_chestplate", "mekanismtools:refined_glowstone_leggings", "mekanismtools:refined_glowstone_boots", "travelersboots:travelers_boots"])



    //// Fixes
    /// Ores & gems are in ore_fixer.js
    e.add("forge:seeds", ["torchflower_seeds", "biomemakeover:rootling_seeds"])

    e.add("forge:raw_fishes", ["cod", "salmon", "biomemakeover:glowfish"])

    e.add("forge:cobblestone", ["biomemakeover:blighted_cobblestone", "biomeswevegone:dacite_cobblestone", "projectred_exploration:basalt_cobble"])
    e.add("forge:cobblestone/basalt", ["projectred_exploration:basalt_cobble"])

    e.add("ae2:all_quartz_dust", ["#forge:dusts/quartz"])

    // Logs & planks for my manual chest fix
    // I need to find a better way to do this, man...
    e.add("reminted:planks", ["biomemakeover:blighted_balsa_planks",
    "ecologics:azalea_planks", "ecologics:flowering_azalea_planks", "ecologics:coconut_planks", "ecologics:walnut_planks",
    "forestry:larch_planks"
    ])



    //// Misc
    e.add("forge:slimeballs", ["biomemakeover:ectoplasm", "autumnity:snail_goo"])

    e.add("reminted:corundum", ["quark:red_corundum_cluster", "quark:orange_corundum_cluster", "quark:yellow_corundum_cluster", "quark:green_corundum_cluster", "quark:blue_corundum_cluster", "quark:indigo_corundum_cluster", "quark:violet_corundum_cluster", "quark:white_corundum_cluster", "quark:black_corundum_cluster"])

    e.add("reminted:corundum_blocks", ["quark:red_corundum", "quark:orange_corundum", "quark:yellow_corundum", "quark:green_corundum", "quark:blue_corundum", "quark:indigo_corundum", "quark:violet_corundum", "quark:white_corundum", "quark:black_corundum",

    "quark:waxed_red_corundum", "quark:waxed_orange_corundum", "quark:waxed_yellow_corundum", "quark:waxed_green_corundum", "quark:waxed_blue_corundum", "quark:waxed_indigo_corundum", "quark:waxed_violet_corundum", "quark:waxed_white_corundum", "quark:waxed_black_corundum"])

    e.add("reminted:corundum_sheets", ["quark:red_corundum_pane", "quark:orange_corundum_pane", "quark:yellow_corundum_pane", "quark:green_corundum_pane", "quark:blue_corundum_pane", "quark:indigo_corundum_pane", "quark:violet_corundum_pane", "quark:white_corundum_pane", "quark:black_corundum_pane"])

    e.add("reminted:glazed_terracotta", ["white_glazed_terracotta", "orange_glazed_terracotta", "magenta_glazed_terracotta", "light_blue_glazed_terracotta", "yellow_glazed_terracotta", "lime_glazed_terracotta", "pink_glazed_terracotta", "gray_glazed_terracotta", "light_gray_glazed_terracotta", "cyan_glazed_terracotta", "purple_glazed_terracotta", "blue_glazed_terracotta", "brown_glazed_terracotta", "green_glazed_terracotta", "red_glazed_terracotta", "black_glazed_terracotta"])

    e.add("laboratoryblocks:starch_ingredient", ["potato", "poisonous_potato"])



    //// Removals
    e.remove("quark:stone_tool_materials", ["flint"])

    e.removeAllTagsFrom("infested_cobblestone")
    e.removeAllTagsFrom("infested_deepslate")
    e.removeAllTagsFrom("infested_stone")

    // HammerLib's items
    e.removeAllTagsFrom("hammerlib:wrench")
    e.removeAllTagsFrom("hammerlib:gears/wooden")
    e.removeAllTagsFrom("hammerlib:gears/stone")
    e.removeAllTagsFrom("hammerlib:gears/copper")
    e.removeAllTagsFrom("hammerlib:gears/iron")
    e.removeAllTagsFrom("hammerlib:gears/gold")
    e.removeAllTagsFrom("hammerlib:gears/diamond")
    e.removeAllTagsFrom("hammerlib:gears/netherite")

})



// Block tags
ServerEvents.tags("block", e => {

    //// Fix missing/incorrect mining tags
    // Bounty Board, Quick Quarrry, and Travel Anchor  not having a mining tool
    e.add("minecraft:mineable/axe", ["bountiful:bountyboard"])

    e.add("minecraft:mineable/pickaxe", ["energymeter:meter", "quickquarry:stone_quarry", "quickquarry:iron_quarry", "quickquarry:ender_quarry", "quickquarry:mechanical_breaker", "travelanchors:travel_anchor"])
    e.remove("quickquarry:mineable/pickaxe", ["quickquarry:stone_quarry", "quickquarry:iron_quarry", "quickquarry:ender_quarry", "quickquarry:mechanical_breaker"])

    e.add("minecraft:needs_iron_tool", ["quickquarry:ender_quarry"])


    // Add Wood We've Got's ladders to the quark tag
    e.add("quark:ladders", ["#woodwevegot:ladders"])


    // Make various ores require an Iron Pickaxe
    e.remove("minecraft:needs_stone_tool", ["#forge:ores/uranium", "#forge:ores/lead"])

    e.add("minecraft:needs_iron_tool", ["#forge:ores/uranium", "#forge:ores/lead"])

})