// Adds tags to items
onEvent("item.tags", e => {

    ////// Forge

    // Limestone
    e.add("forge:limestone", ["create:limestone", "quark:limestone"])



    ////// Custom
    // Used for tooltips (and JEI filtering)
    e.add("quintessence:coinable", ["conjurer_illager:throwable_ball", "conjurer_illager:throwing_card"])

    // Coinification
    e.add("quintessence:scepter", ["twilightforest:twilight_scepter", "twilightforest:lifedrain_scepter", "twilightforest:zombie_scepter", "twilightforest:fortification_scepter"])
    e.add("quintessence:snow_queen_bow", ["twilightforest:seeker_bow", "twilightforest:triple_bow"])




    //// Quests

    // Apothecaries
    e.add("quintessence:apothecary", ["botania:apothecary_default", "botania:apothecary_desert", "botania:apothecary_forest", "botania:apothecary_fungal", "botania:apothecary_mesa", "botania:apothecary_mossy", "botania:apothecary_mountain", "botania:apothecary_plains", "botania:apothecary_swamp", "botania:apothecary_taiga"])

    // Beacon Base
    // Mainly for the Gaia Quest, but you can also find them easier this way
    e.add("quintessence:beacon_base", ["gold_block", "iron_block", "diamond_block", "netherite_block", "tconstruct:cobalt_block", "tconstruct:hepatizon_block", "tconstruct:manyullyn_block", "tconstruct:queens_slime_block", "lightmanscurrency:coinblock_copper", "lightmanscurrency:coinblock_iron", "lightmanscurrency:coinblock_gold", "lightmanscurrency:coinblock_emerald", "lightmanscurrency:coinblock_diamond", "lightmanscurrency:coinblock_netherite"])

    // Belts
    e.add("quintessence:belt", ["malum:belt_of_the_magebane", "malum:belt_of_the_prospector", "malum:belt_of_the_starved"])

    // Chest Upgrades
    e.add("quintessence:better_chest", ["ironchest:wood_to_copper_chest_upgrade", "ironchest:wood_to_iron_chest_upgrade", "ironchest:copper_to_iron_chest_upgrade", "ironchest:copper_chest", "ironchest:iron_chest"])

    // Cooking for Blockheads' blocks & upgrades
    e.add("quintessence:decor", ["cookingforblockheads:corner", "cookingforblockheads:hanging_corner"])
    e.add("quintessence:storage", ["cookingforblockheads:cabinet", "cookingforblockheads:counter"])
    e.add("quintessence:upgrade", ["cookingforblockheads:heating_unit", "cookingforblockheads:ice_unit", "cookingforblockheads:preservation_chamber"])

    // Corundum
    e.add("quintessence:corundum", ["quark:black_corundum_cluster", "quark:blue_corundum_cluster", "quark:green_corundum_cluster", "quark:indigo_corundum_cluster", "quark:orange_corundum_cluster", "quark:red_corundum_cluster", "quark:violet_corundum_cluster", "quark:white_corundum_cluster", "quark:yellow_corundum_cluster"])

    // Crafting Storages
    e.add("quintessence:crafting_storage", ["ae2:1k_crafting_storage", "ae2:4k_crafting_storage", "ae2:16k_crafting_storage", "ae2:64k_crafting_storage", "ae2:256k_crafting_storage"])

    // Diving Suits
    e.add("quintessence:diving_helmet", ["aquamirae:three_bolt_helmet", "create:copper_diving_helmet", "thermal:diving_helmet"])
    e.add("quintessence:diving_chestplate", ["aquamirae:three_bolt_suit", "create:copper_backtank", "thermal:diving_chestplate"])
    e.add("quintessence:diving_leggings", ["aquamirae:three_bolt_leggings", "thermal:diving_leggings"])
    e.add("quintessence:diving_boots", ["aquamirae:three_bolt_boots", "create:copper_diving_boots", "thermal:diving_boots"])

    // (Flui)ducts
    e.add("quintessence:fluiduct", ["thermal:fluid_duct", "thermal:fluid_duct_windowed"])
    e.add("quintessence:duct", ["#quintessence:fluiduct", "thermal:energy_duct"])

    // Furnaces
    // Also used to fix recipes cuz Quark is stupid af
    e.add("quintessence:furnace", ["furnace", "quark:blackstone_furnace", "quark:deepslate_furnace"])

    // Malum's blocks
    e.add("quintessence:base", ["malum:runewood_totem_base", "malum:soulwood_totem_base"])
    e.add("quintessence:pedestal", ["malum:tainted_rock_item_pedestal", "malum:twisted_rock_item_pedestal", "malum:runewood_item_pedestal", "malum:soulwood_item_pedestal", "malum:tainted_rock_item_stand", "malum:twisted_rock_item_stand", "malum:runewood_item_stand", "malum:soulwood_item_stand"])

    // Paxels
    e.add("quintessence:paxels", ["easypaxellite:wood_paxel", "easypaxellite:stone_paxel", "easypaxellite:iron_paxel", "easypaxellite:golden_paxel", "easypaxellite:diamond_paxel", "easypaxellite:netherite_paxel"])

    // Scrolls
    e.add("quintessence:scroll", ["waystones:bound_scroll", "waystones:return_scroll", "waystones:warp_scroll"])

    // RF Coils
    e.add("quintessence:coil", ["thermal:rf_coil_augment", "thermal:rf_coil_storage_augment", "thermal:rf_coil_xfer_augment"])

    // Ropes
    e.add("quintessence:rope", ["additionaladditions:rope", "quark:rope"])

    // Tape Measures
    // Also used for the Quintessence recipe
    e.add("quintessence:tape_measure", ["quark:abacus", "measurements:tape_measure"])

    // Waystones
    e.add("quintessence:waystones", ["waystones:waystone", "waystones:mossy_waystone", "waystones:sandy_waystone"])






    //// Recipes
    // AE2 Presses
    e.add("quintessence:ae2_press", ["ae2:calculation_processor_press", "ae2:engineering_processor_press", "ae2:logic_processor_press", "ae2:silicon_press"])

    // Bindings & paper (book recipe)
    e.add("expansion:binding", ["#forge:leather", "phantom_membrane"])
    e.add("expansion:paper", ["paper", "kubejs:parchment"])

    // Dragon Scales
    e.add("quintessence:dragon_scale", ["tconstruct:dragon_scale", "quark:dragon_scale"])

    // Eggs
    e.add("quintessence:egg", ["egg", "turtle_egg", "additionaladditions:fried_egg", "quark:egg_parrot_blue", "quark:egg_parrot_green", "quark:egg_parrot_grey", "quark:egg_parrot_red_blue", "quark:egg_parrot_yellow_blue"])

    // Leather Armour
    e.add("quintessence:leather_armour", ["leather_helmet", "leather_chestplate", "leather_leggings", "leather_boots", "leather_horse_armor"])

    // Magic Dust
    e.add("quintessence:magic_dust", ["enigmaticlegacy:astral_dust", "obscure_api:astral_dust", "ob_core:magic_dust"])

    // Shards
    e.add("quintessence:shard", ["amethyst_shard", "byg:emeraldite_shards", "byg:subzero_crystal_shard", "byg:therium_shard"])

    // Sleepers
    e.add("create:sleepers", ["polished_andesite_slab", "cobbled_deepslate_slab", "polished_deepslate_slab", "create:cut_andesite_slab", "create:polished_cut_andesite_slab", "create:cut_deepslate_slab", "create:polished_cut_deepslate_slab", "create:cut_tuff_slab", "create:polished_cut_tuff_slab", "nourished_nether:smooth_basalt_slab", "quark:tuff_slab", "quark:polished_tuff_slab"])

    // Spellstones
    e.add("quintessence:spellstone", ["enigmaticlegacy:angel_blessing", "enigmaticlegacy:enigmatic_item", "enigmaticlegacy:eye_of_nebula", "enigmaticlegacy:golem_heart", "enigmaticlegacy:magma_heart", "enigmaticlegacy:ocean_stone", "enigmaticlegacy:void_pearl"])

    // Soul Sand
    e.add("quintessence:soul_sand", ["soul_sand", "soul_soil", "byg:warped_soul_sand", "byg:warped_soul_soil"])

    // Quicklime smelting components
    e.add("quintessence:calcium_carbonate", ["#forge:limestone", "calcite", "byg:travertine"])

    // Torches
    e.add("quintessence:torch", ["torch", "soul_torch", "redstone_torch", "aquatictorches:aquatic_torch", "botania:animated_torch", "malum:ether_torch", "malum:iridescent_ether_torch"])

    // Trading Terminals
    e.add("quintessence:trading_terminal", ["lightmanscurrency:terminal", "lightmanscurrency:portable_terminal"])
    e.add("quintessence:gem_trading_terminal", ["lightmanscurrency:gem_terminal", "lightmanscurrency:portable_gem_terminal"])

    // Wooden Tools
    e.add("quintessence:wooden_tool", ["wooden_sword", "wooden_pickaxe", "wooden_shovel", "wooden_hoe", "wooden_axe"])

    // Vines
    e.add("quintessence:vines", ["vine", "weeping_vines", "twisting_vines", "byg:embur_gel_vines", "byg:imparius_vine", "byg:lament_vine", "byg:shulkren_vine", "byg:skyris_vine", "byg:wailing_vine", "enlightened_end:cerulean_vine", "yungscavebiomes:prickly_vines"])
    e.add("quintessence:slimy_vines", ["tconstruct:ender_slime_vine", "tconstruct:sky_slime_vine"])

    // Custom tag for arrow recycling
    e.add("quintessence:arrows", ["#minecraft:arrows"])
    e.remove("quintessence:arrows", ["spectral_arrow", "apotheosis:broadhead_arrow", "apotheosis:explosive_arrow", "apotheosis:obsidian_arrow", "apotheosis:iron_mining_arrow", "apotheosis:diamond_mining_arrow"])
    /* can't get this working, oof
    Ingredient.of("#minecraft:arrows").itemIds.forEach(id => {
        if(id != "minecraft:spectral_arrow" && id != "apotheosis:broadhead_arrow" && id != "apotheosis:explosive_arrow" && id != "apotheosis:obsidian_arrow" && id != "apotheosis:iron_mining_arrow" && id != "apotheosis:diamond_mining_arrow")
        e.add("quintessence:arrows", id)
    })
    */

 

    ////// Fixes
    /// Alpbetized by mod, with Mineraft & Forge at the top

    // Modded logs
    e.add("logs", ["byg:imbued_nightshade_log"])

    // Modded 
    e.add("boats", ["byg:aspen_boat", "byg:baobab_boat", "byg:blue_enchanted_boat", "byg:cherry_boat", "byg:cika_boat", "byg:cypress_boat", "byg:ebony_boat", "byg:fir_boat", "byg:green_enchanted_boat", "byg:holly_boat", "byg:jacaranda_boat", "byg:mahogany_boat", "byg:mangrove_boat", "byg:maple_boat", "byg:palm_boat", "byg:pine_boat", "byg:rainbow_eucalyptus_boat", "byg:redwood_boat", "byg:skyris_boat", "byg:willow_boat", "byg:witch_hazel_boat", "byg:zelkova_boat", "quark:azalea_boat", "quark:blossom_boat", "malum:runewood_boat", "malum:soulwood_boat"])

    // Modded Signs
    e.add("signs", ["quark:azalea_sign", "quark:blossom_sign", "malum:runewood_sign", "malum:soulwood_sign"])

    // Modded Flowers
    e.add("tall_flowers", ["byg:delphinium", "byg:tall_allium", "byg:tall_pink_allium"])
    e.remove("small_flowers", ["byg:delphinium", "byg:tall_allium", "byg:tall_pink_allium"])

    // Modded Music Discs
    e.add("music_discs", ["aquamirae:music_disc_forsaken_drownage", "aquamirae:music_disc_horizon", "conjurer_illager:music_disc_delve_deeper"])



    // Modded Chests
    e.add("forge:chests", ["ae2:sky_stone_chest", "ae2:smooth_sky_stone_chest"])

    // Create's Glass Blocks & Panes
    // Adds the Silica tag so the recipes are auto-added
    e.add("forge:glass/silica", ["create:oak_window", "create:spruce_window", "create:birch_window", "create:jungle_window", "create:acacia_window", "create:dark_oak_window", "create:crimson_window", "create:warped_window"])

    e.add("forge:glass_panes/silica", ["create:tiled_glass_pane", "create:framed_glass_pane", "create:horizontal_framed_glass_pane", "create:vertical_framed_glass_pane",
    "create:oak_window_pane", "create:spruce_window_pane", "create:birch_window_pane", "create:jungle_window_pane", "create:acacia_window_pane", "create:dark_oak_window_pane", "create:crimson_window_pane", "create:warped_window_pane"])

    // Missing ore tags
    e.add("forge:ores/brilliance", ["malum:brilliant_stone", "malum:brilliant_deepslate"])

    // Missing Block, Ingot, Nugget, and Dust tags
    e.add("forge:storage_blocks", ["ob_core:platinum_block", "ob_core:raw_platinum_block"])
    e.add("forge:storage_blocks/platinum", ["ob_core:platinum_block"])
    e.add("forge:storage_blocks/raw_platinum", ["ob_core:raw_platinum_block"])

    e.add("forge:ingots", ["byg:pendorite_ingot", "industrialforegoing:pink_slime_ingot", "ob_core:platinum_ingot"])
    e.add("forge:ingots/platinum", ["ob_core:platinum_ingot"])

    e.add("forge:nuggets", ["ob_core:platinum_nugget", "nourished_nether:netherite_nugget"])
    e.add("forge:nuggets/platinum", ["ob_core:platinum_nugget"])

    e.add("forge:dusts", ["thermal:ender_pearl_dust"])

    // Mushrooms
    e.add("forge:mushrooms", ["crimson_fungus", "warped_fungus", "naturesaura:aura_mushroom", "naturesaura:crimson_aura_mushroom", "naturesaura:warped_aura_mushroom"])

    // Misc fixes
    e.add("forge:slimeballs", ["byg:embur_gel_ball"])
    e.add("forge:dyes/green", ["quark:moss_paste"])
    e.add("forge:glass/silica", ["#forge:glass/colorless"])

    e.add("ae2:all_quartz_dust", ["thermal:quartz_dust"])

    e.remove("create:crushed_ores", ["bygonenether:withered_debris"])
    e.add("create:crushed_raw_materials", ["bygonenether:withered_debris", "malum:crushed_brilliance", "malum:crushed_soulstone"])

    e.add("malum:gross_foods", ["spider_eye", "poisonous_potato"])



    // BYG Dyes
    e.add("byg:orange_dye", ["byg:firecracker_flower_bush"])
    e.add("byg:green_dye", ["byg:shrub"])

    e.remove("byg:pink_dye", ["byg:firecracker_flower_bush", "byg:japanese_orchid", "byg:tall_pink_allium"])
    e.remove("byg:purple_dye", ["byg:pink_allium"])



    // Add the Limestone stone type to Quark's limestone
    e.add("create:stone_types/limestone", ["quark:limestone", "quark:limestone_stairs", "quark:limestone_wall", "quark:polished_limestone", "quark:polished_limestone_stairs", "quark:chiseled_limestone_bricks", "quark:limestone_bricks", "quark:limestone_bricks_stairs", "quark:limestone_bricks_wall", "quark:limestone_pillar"])


    // Auction Stands
    e.add("lightmanscurrency:auction_stand", ["lightmanscurrency:auction_stand_acacia", "lightmanscurrency:auction_stand_birch", "lightmanscurrency:auction_stand_crimson", "lightmanscurrency:auction_stand_dark_oak", "lightmanscurrency:auction_stand_jungle", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_spruce", "lightmanscurrency:auction_stand_warped",

    "lightmanscurrency:auction_stand_byg_aspen", "lightmanscurrency:auction_stand_byg_baobab", "lightmanscurrency:auction_stand_byg_blue_enchanted", "lightmanscurrency:auction_stand_byg_bulbis", "lightmanscurrency:auction_stand_byg_cherry", "lightmanscurrency:auction_stand_byg_cika", "lightmanscurrency:auction_stand_byg_cypress", "lightmanscurrency:auction_stand_byg_ebony", "lightmanscurrency:auction_stand_byg_embur", "lightmanscurrency:auction_stand_byg_ether", "lightmanscurrency:auction_stand_byg_fir", "lightmanscurrency:auction_stand_byg_fungal_imparius", "lightmanscurrency:auction_stand_byg_green_enchanted", "lightmanscurrency:auction_stand_byg_holly", "lightmanscurrency:auction_stand_byg_imbued_nightshade", "lightmanscurrency:auction_stand_byg_imparius", "lightmanscurrency:auction_stand_byg_jacaranda", "lightmanscurrency:auction_stand_byg_lament", "lightmanscurrency:auction_stand_byg_mahogany", "lightmanscurrency:auction_stand_byg_mangrove", "lightmanscurrency:auction_stand_byg_maple", "lightmanscurrency:auction_stand_byg_nightshade", "lightmanscurrency:auction_stand_byg_palm", "lightmanscurrency:auction_stand_byg_palm", "lightmanscurrency:auction_stand_byg_palm", "lightmanscurrency:auction_stand_byg_palo_verde", "lightmanscurrency:auction_stand_byg_pine", "lightmanscurrency:auction_stand_byg_rainbow_eucalyptus", "lightmanscurrency:auction_stand_byg_redwood", "lightmanscurrency:auction_stand_byg_skyris", "lightmanscurrency:auction_stand_byg_sythian", "lightmanscurrency:auction_stand_byg_willow", "lightmanscurrency:auction_stand_byg_witch_hazel", "lightmanscurrency:auction_stand_byg_withering_oak", "lightmanscurrency:auction_stand_byg_zelkova"])



    // Randomium whitelist
    e.add("randomium:whitelist", ["raw_copper", "raw_iron", "raw_gold",
    "byg:raw_pendorite", "create:raw_zinc", "malum:raw_soulstone",
    "ob_core:magic_dust", "ob_core:platinum_raw",
    "tconstruct:raw_cobalt", "thermal:raw_tin", "thermal:raw_nickel", "thermal:raw_silver", "thermal:raw_lead",
    "deepresonance:resonating_ore_stone", "deepresonance:resonating_ore_deepslate", "deepresonance:resonating_ore_nether", "deepresonance:resonating_ore_end",
    "lightmanscurrency:coin_copper", "lightmanscurrency:coin_iron", "lightmanscurrency:coin_gold", "lightmanscurrency:coin_emerald",
    "lightmanscurrency:coinpile_copper", "lightmanscurrency:coinblock_copper", "lightmanscurrency:coinpile_iron"])



    ////// Removals
    e.removeAllTagsFrom("tcintegrations:bronze_block")
    e.removeAllTagsFrom("tcintegrations:bronze_ingot")
    e.removeAllTagsFrom("tcintegrations:bronze_nugget")

    e.remove("twilightforest:portal/activator", ["diamond"])

    // Gears
    e.remove("forge:gears", ["industrialforegoing:iron_gear", "industrialforegoing:gold_gear", "industrialforegoing:diamond_gear"])
    e.remove("forge:gears/iron", ["industrialforegoing:iron_gear", "industrialforegoing:gold_gear", "industrialforegoing:diamond_gear"])
    e.remove("forge:gears/gold", ["industrialforegoing:gold_gear"])
    e.remove("forge:gears/diamond", ["industrialforegoing:diamond_gear"])

})



// Adds tags to blocks
onEvent("block.tags", e => {

    e.add("mineable/pickaxe", ["chickenchunks:chunk_loader", "chickenchunks:spot_loader"])
    e.add("needs_diamond_tool", ["chickenchunks:chunk_loader", "chickenchunks:spot_loader"])

})