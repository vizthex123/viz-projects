// Adds items to Forestry"s backpacks
ServerEvents.tags("item", e => {

    // Digger
    e.add("forestry:backpack/allow/digger", ["#minecraft:sand", "#revolution:pink_salt_blocks", "#forge:sand", "#forge:stone", "#forge:end_stones", "#quark:stone_tool_materials",

    "ad_astra:sky_stone", "ad_astra:mars_stone", "ad_astra:conglomerate", "ad_astra:venus_stone", "ad_astra:venus_sandstone", "ad_astra:mercury_stone", "ad_astra:glacio_stone", "ad_astra:permafrost", "ad_astra:polished_conglomerate", "ad_astra:polished_venus_stone", "ad_astra:polished_mercury_stone", "ad_astra:polished_glacio_stone", "ad_astra:polished_permafrost", "ad_astra:infernal_spire_block",
    "ad_astra_proxima_plus:proxima_b_stone", "ad_astra_proxima_plus:proxima_b_sandstone", "ad_astra_proxima_plus:vicino_stone",

    "biomesoplenty:origin_grass_block", "biomesoplenty:glowing_moss_block", "biomesoplenty:dried_salt", 

    "bygonenether:withered_blackstone", "bygonenether:cracked_withered_blackstone", "bygonenether:soul_stone",

    "galosphere:polished_pink_salt", "galosphere:polished_rose_pink_salt", "galosphere:polished_pastel_pink_salt",
    "galosphere:chiseled_pink_salt", "galosphere:chiseled_rose_pink_salt", "galosphere:chiseled_pastel_pink_salt",

    "phantasm:oblivion", "phantasm:raw_purpur", "phantasm:choral_block",

    "projectred_exploration:marble", "projectred_exploration:basalt", "projectred_exploration:basalt_cobble",

    "quark:polished_dripstone", "quark:polished_tuff", "quark:soul_sandstone",

    "yungscavebiomes:ancient_sandstone", "yungscavebiomes:brittle_ancient_sandstone", "yungscavebiomes:chiseled_ancient_sandstone", "yungscavebiomes:cut_ancient_sandstone", "yungscavebiomes:layered_ancient_sandstone", "yungscavebiomes:smooth_ancient_sandstone", "yungscavebiomes:brittle_sandstone", "yungscavebiomes:brittle_red_sandstone", "yungscavebiomes:layered_sandstone", "yungscavebiomes:layered_red_sandstone", "yungscavebiomes:icicle"
    ])


    // Miner
    e.add("forestry:backpack/allow/miner", ["#revolution:corundum", "#revolution:corundum_blocks", "#revolution:corundum_sheets",
    "#forge:storage_blocks/raw_uranium", "#forge:storage_blocks/uranium", "#forge:raw_materials/uranium", "#forge:nuggets/uranium",

    "glowstone",
    
    "ad_astra:ice_shard", "ad_astra_proxima_plus:micyurite_block",

    "alexscaves:raw_azure_neodymium", "alexscaves:raw_scarlet_neodymium", "alexscaves:sulfur",

    "biomesoplenty:rose_quartz_chunk",

    "bygonenether:withered_debris",

    "galosphere:allurite_shard", "galosphere:lumiere_shard", "galosphere:pink_salt_shard",

    "#outer_end:crystal_shards", "outer_end:halite_crystal",

    "phantasm:crystal_shard", "phantasm:void_crystal_shard",

    "thermal:oil_sand", "thermal:oil_red_sand"
    ])


    // Builder
    e.add("forestry:backpack/allow/builder", ["#minecraft:stone_bricks", "#minecraft:stairs", "#minecraft:slabs", "#minecraft:walls", "#minecraft:candles", "#minecraft:buttons", "#minecraft:wooden_pressure_plates", 
    "#revolution:furnaces",
    "#alexscaves:concrete", "#quark:shards", "#quark:vertical_slabs",

    "bamboo_mosaic", "deepslate_bricks", "cracked_deepslate_bricks", "mud_bricks",

    "ad_astra:permafrost_tiles",

    "bygonenether:chiseled_withered_blackstone", "bygonenether:warped_nether_bricks", "bygonenether:chiseled_warped_nether_bricks",

    "projectred_exploration:basalt_brick",

    "quark:sturdy_stone", "quark:thatch"
    ])


    // Forester
    e.add("forestry:backpack/allow/forester", ["#minecraft:leaves", "#revolution:cacti", "#revolution:cave_plants", "#revolution:nether_plants", "#revolution:vines",
    "#forge:mushrooms", "#forge:bark",

    "bamboo", "mangrove_roots", "muddy_mangrove_roots",

    "#ad_astra:glacian_logs", "#ad_astra:aeronos_caps", "#ad_astra:strophar_caps", 
    
    "alexscaves:pine_nuts", "alexscaves:pewen_sap", "alexscaves:pewen_branch", 
    
    "biomesoplenty:dead_branch", "biomesoplenty:waterlily", "biomesoplenty:bramble", "biomesoplenty:barley", "biomesoplenty:cattail", "biomesoplenty:reed", "biomesoplenty:sea_oats",

    "buzzier_bees:four_leaf_clover",

    "ecologics:surface_moss",

    "phantasm:oblifruit", "phantasm:pome_slice",

    "quark:moss_paste",

    "thermal:frost_melon_slice", "thermal:glowstone_mushroom_spores", "thermal:gunpowder_mushroom_spores", "thermal:redstone_mushroom_spores","thermal:slime_mushroom_spores",

    "upgrade_aquatic:pickerelweed", "upgrade_aquatic:boiled_pickerelweed"
    ])


    // Hunter
    e.add("forestry:backpack/allow/hunter", ["#minecraft:arrows", "#minecraft:wool", "#revolution:tooth", "#alexscaves:raw_meats", "#alexscaves:gummy_items",

    "alexscaves:cooked_trilocaris_tail", "alexscaves:mussel", "alexscaves:cooked_mussel", "alexscaves:immortal_embryo", 
    "alexscaves:heavyweight", "alexscaves:tectonic_shard", "alexscaves:fissile_core", "alexscaves:dark_tatters", "alexscaves:pure_darkness",
    "alexscaves:ferrouslime_ball", "alexscaves:telecore", "alexscaves:notor_gizmo", "alexscaves:bioluminesscence", "alexscaves:depth_charge", "alexscaves:tough_hide", "alexscaves:heavy_bone",
    "alexscaves:charred_remnant", "alexscaves:guano", "alexscaves:moth_dust", "alexscaves:vesper_wing", "alexscaves:sweet_tooth", "alexscaves:sharpened_candy_cane", "alexscaves:candy_cane", "alexscaves:caramel", "alexscaves:gingerbread_crumbs", "alexscaves:gumball_pile", "alexscaves:radiant_essence", "alexscaves:licowitch_radiant_essence", "alexscaves:chocolate_ice_cream_scoop", "alexscaves:sweetberry_ice_cream_scoop", "alexscaves:vanilla_ice_cream_scoop",

    "bettertridents:trident_fragment",

    "bygonenether:warped_ender_pearl",

    "enderzoology:ender_fragment", "enderzoology:confusing_powder", "enderzoology:withering_dust",

    "outer_end:floral_paste", "outer_end:stalker_meat", "outer_end:cooked_stalker_meat",

    "phantasm:behemoth_meat", "phantasm:behemoth_steak",

    "quark:ravager_hide", "quark:crab_leg", "quark:cooked_crab_leg", "quark:crab_shell", "quark:soul_bead", "quark:dragon_scale",

    "thermal:basalz_rod", "thermal:blitz_rod", "thermal:blizz_rod", "thermal:basalz_powder", "thermal:blitz_powder", "thermal:blizz_powder",

    "upgrade_aquatic:elder_eye"
    ])


    // Adventurer
    e.add("forestry:backpack/allow/adventurer", ["#minecraft:decorated_pot_sherds", "#minecraft:trim_templates", "#revolution:rare_cave_item", "#coinsje:coin_like",
    "book",

    "netherite_upgrade_smithing_template", "ae2:fluix_upgrade_smithing_template", "galosphere:preserved_template", "galosphere:silver_upgrade_smithing_template", "jetboots:jetboots_template", "outer_end:cobalt_upgrade_template", "outer_end:mint_upgrade_template", "outer_end:rose_upgrade_template",

    "alexscaves:cave_tablet", "alexscaves:cave_codex", "alexscaves:cave_map", "alexscaves:pearl", "alexscaves:sea_glass_shards", "alexscaves:toxic_paste", "alexscaves:unrefined_waste", "alexscaves:jelly_bean"
    ])



    // Builder"s Backpack for the Laboratory Blocks mod
    // I just don"t wanna constantly scroll past it
    e.add("forestry:backpack/allow/builder", ["laboratoryblocks:laboratory_pillar", "laboratoryblocks:enlighted_laboratory_pillar", 
    "laboratoryblocks:gray_laboratory_pillar", "laboratoryblocks:enlighted_gray_laboratory_pillar", "laboratoryblocks:clear_laboratory_screen", "laboratoryblocks:enlighted_clear_laboratory_screen", "laboratoryblocks:laboratory_fan", "laboratoryblocks:enlighted_laboratory_fan", "laboratoryblocks:laboratory_fan_redstone_controlled", "laboratoryblocks:enlighted_laboratory_fan_redstone_controlled", 
    "laboratoryblocks:laboratory_vent", "laboratoryblocks:enlighted_laboratory_vent", "laboratoryblocks:laboratory_vent_connecting", "laboratoryblocks:enlighted_laboratory_vent_connecting", "laboratoryblocks:left-faced_blue_signaling_laboratory_block", "laboratoryblocks:enlighted_left-faced_blue_signaling_laboratory_block", "laboratoryblocks:right-faced_blue_signaling_laboratory_block",
    "laboratoryblocks:enlighted_right-faced_blue_signaling_laboratory_block", "laboratoryblocks:left-faced_red_signaling_laboratory_block",
    "laboratoryblocks:enlighted_left-faced_red_signaling_laboratory_block", "laboratoryblocks:right-faced_red_signaling_laboratory_block",
    "laboratoryblocks:enlighted_right-faced_red_signaling_laboratory_block", "laboratoryblocks:left-faced_green_signaling_laboratory_block",
    "laboratoryblocks:enlighted_left-faced_green_signaling_laboratory_block", "laboratoryblocks:right-faced_green_signaling_laboratory_block","laboratoryblocks:enlighted_right-faced_green_signaling_laboratory_block", "laboratoryblocks:pla_block", "laboratoryblocks:enlighted_pla_block", "laboratoryblocks:pla_tiles", "laboratoryblocks:enlighted_pla_tiles", "laboratoryblocks:laboratory_block", "laboratoryblocks:enlighted_laboratory_block", "laboratoryblocks:screwed_laboratory_block", "laboratoryblocks:enlighted_screwed_laboratory_block", "laboratoryblocks:laboratory_tiles", "laboratoryblocks:enlighted_laboratory_tiles", "laboratoryblocks:gray_laboratory_tiles", "laboratoryblocks:enlighted_gray_laboratory_tiles", "laboratoryblocks:mixed_laboratory_tiles", "laboratoryblocks:enlighted_mixed_laboratory_tiles", "laboratoryblocks:oak_laboratory_tiles", "laboratoryblocks:enlighted_oak_laboratory_tiles", "laboratoryblocks:spruce_laboratory_tiles", "laboratoryblocks:enlighted_spruce_laboratory_tiles", "laboratoryblocks:birch_laboratory_tiles", "laboratoryblocks:enlighted_birch_laboratory_tiles", "laboratoryblocks:dark_oak_laboratory_tiles", "laboratoryblocks:enlighted_dark_oak_laboratory_tiles", "laboratoryblocks:jungle_laboratory_tiles", "laboratoryblocks:enlighted_jungle_laboratory_tiles", "laboratoryblocks:acacia_laboratory_tiles", "laboratoryblocks:enlighted_acacia_laboratory_tiles", "laboratoryblocks:mangrove_laboratory_tiles", "laboratoryblocks:enlighted_mangrove_laboratory_tiles", "laboratoryblocks:cherry_laboratory_tiles", "laboratoryblocks:enlighted_cherry_laboratory_tiles", "laboratoryblocks:bamboo_laboratory_tiles", "laboratoryblocks:enlighted_bamboo_laboratory_tiles", "laboratoryblocks:crimson_laboratory_tiles", "laboratoryblocks:enlighted_crimson_laboratory_tiles", "laboratoryblocks:warped_laboratory_tiles", "laboratoryblocks:enlighted_warped_laboratory_tiles", "laboratoryblocks:oak_laboratory_floor", "laboratoryblocks:enlighted_oak_laboratory_floor", "laboratoryblocks:spruce_laboratory_floor", "laboratoryblocks:enlighted_spruce_laboratory_floor", "laboratoryblocks:birch_laboratory_floor", "laboratoryblocks:enlighted_birch_laboratory_floor", "laboratoryblocks:dark_oak_laboratory_floor", "laboratoryblocks:enlighted_dark_oak_laboratory_floor", "laboratoryblocks:jungle_laboratory_floor", "laboratoryblocks:enlighted_jungle_laboratory_floor", "laboratoryblocks:acacia_laboratory_floor", "laboratoryblocks:enlighted_acacia_laboratory_floor", "laboratoryblocks:mangrove_laboratory_floor", "laboratoryblocks:enlighted_mangrove_laboratory_floor", "laboratoryblocks:cherry_laboratory_floor", "laboratoryblocks:enlighted_cherry_laboratory_floor", "laboratoryblocks:bamboo_laboratory_floor", "laboratoryblocks:enlighted_bamboo_laboratory_floor", "laboratoryblocks:crimson_laboratory_floor", "laboratoryblocks:enlighted_crimson_laboratory_floor", "laboratoryblocks:warped_laboratory_floor", "laboratoryblocks:enlighted_warped_laboratory_floor", "laboratoryblocks:pla_flooring", "laboratoryblocks:enlighted_pla_flooring", "laboratoryblocks:tiled_pla_flooring", "laboratoryblocks:enlighted_tiled_pla_flooring", "laboratoryblocks:laboratory_glass", "laboratoryblocks:enlighted_laboratory_glass",
    "laboratoryblocks:laboratory_bookshelf", "laboratoryblocks:enlighted_laboratory_bookshelf", "laboratoryblocks:chiseled_laboratory_bookshelf", "laboratoryblocks:enlighted_chiseled_laboratory_bookshelf"])

})