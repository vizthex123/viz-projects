// Adds items to Forestry"s backpacks
ServerEvents.tags("item", e => {

    // Digger
    e.add("forestry:backpack/allow/digger", ["#forge:stone/basalt", "#forge:cobblestone/basalt", "#forge:stone/marble",
    "moss_carpet",

    "quark:polished_dripstone", "quark:polished_tuff", "quark:soul_sandstone",

    "yungscavebiomes:ancient_sandstone", "yungscavebiomes:brittle_ancient_sandstone", "yungscavebiomes:chiseled_ancient_sandstone", "yungscavebiomes:cut_ancient_sandstone", "yungscavebiomes:layered_ancient_sandstone", "yungscavebiomes:smooth_ancient_sandstone", "yungscavebiomes:brittle_sandstone", "yungscavebiomes:brittle_red_sandstone", "yungscavebiomes:layered_sandstone", "yungscavebiomes:layered_red_sandstone", "yungscavebiomes:icicle"
    ])


    // Miner
    e.add("forestry:backpack/allow/miner", ["#forge:raw_materials/uranium", "#forge:nuggets/uranium", "#forge:raw_materials/zinc", "#forge:nuggets/zinc",
    "glowstone"
    ])

    e.remove("forestry:backpack/allow/miner", ["mekanism:sawdust"])


    // Forester
    e.add("forestry:backpack/allow/forester", ["#minecraft:leaves", "#revolution:cacti", "#revolution:cave_plants", "#revolution:nether_plants", "#revolution:vines",
    "#forge:mushrooms",

    "bamboo", "mangrove_roots", "muddy_mangrove_roots",

    "biomemakeover:bulbus_root", "biomemakeover:roasted_bulbus_root", "biomemakeover:rootling_seeds", 

    "buzzier_bees:four_leaf_clover",

    "ecologics:surface_moss",

    "quark:moss_paste",

    "upgrade_aquatic:pickerelweed", "upgrade_aquatic:boiled_pickerelweed"
    ])


    // Hunter
    e.add("forestry:backpack/allow/hunter", ["#minecraft:arrows", "#minecraft:wool", "#revolution:tooth",
    "#forge:foods/meat/raw", "#forge:foods/meat/cooked",

    "biomemakeover:scuttler_tail", "biomemakeover:ectoplasm", "biomemakeover:blightbat_wings", "biomemakeover:bat_wings", "biomemakeover:dragonfly_wings", "biomemakeover:crude_cladding", "biomemakeover:crude_fragment", "biomemakeover:soul_embers", "biomemakeover:moth_scales", "biomemakeover:wart",

    "enderzoology:ender_fragment", "enderzoology:confusing_powder", "enderzoology:withering_dust",

    "quark:ravager_hide", "quark:crab_shell", "quark:soul_bead", "quark:dragon_scale",

    "upgrade_aquatic:elder_eye"
    ])


    // Adventurer
    e.add("forestry:backpack/allow/adventurer", ["#minecraft:decorated_pot_sherds", "#minecraft:trim_templates", "#forge:books",
    "netherite_upgrade_smithing_template", "ae2:fluix_upgrade_smithing_template",

    "kubejs:lubricating_elixir",

    "chest", "experience_bottle", "enchanted_golden_apple",
    "essentiallycurrency:copper_coin", "essentiallycurrency:iron_coin", "essentiallycurrency:gold_coin", "essentiallycurrency:diamond_coin", "essentiallycurrency:emerald_coin", "essentiallycurrency:netherite_coin"

    ])


    // Builder
    e.add("forestry:backpack/allow/builder", ["#minecraft:terracotta", "#minecraft:stone_bricks", "#minecraft:stairs", "#minecraft:slabs", "#minecraft:walls", "#minecraft:candles", "#minecraft:buttons", "#minecraft:wooden_pressure_plates", "#reminted:glazed_terracotta", "#reminted:furnaces", "#quark:shards", "#quark:vertical_slabs",

    "bamboo_mosaic", "deepslate_bricks", "cracked_deepslate_bricks", "mud_bricks", "blast_furnace", "smoker",

    "projectred_exploration:basalt_brick", "projectred_exploration:basalt_brick_wall",

    "quark:sturdy_stone", "quark:thatch"
    ])



    // Builder's Backpack for the Laboratory Blocks mod
    // I just don't wanna constantly scroll past all of these
    e.add("forestry:backpack/allow/builder", ["laboratoryblocks:laboratory_pillar", "laboratoryblocks:enlighted_laboratory_pillar", 
    "laboratoryblocks:gray_laboratory_pillar", "laboratoryblocks:enlighted_gray_laboratory_pillar", "laboratoryblocks:clear_laboratory_screen", "laboratoryblocks:enlighted_clear_laboratory_screen", "laboratoryblocks:laboratory_fan", "laboratoryblocks:enlighted_laboratory_fan", "laboratoryblocks:laboratory_fan_redstone_controlled", "laboratoryblocks:enlighted_laboratory_fan_redstone_controlled", 
    "laboratoryblocks:laboratory_vent", "laboratoryblocks:enlighted_laboratory_vent", "laboratoryblocks:laboratory_vent_connecting", "laboratoryblocks:enlighted_laboratory_vent_connecting", "laboratoryblocks:left-faced_blue_signaling_laboratory_block", "laboratoryblocks:enlighted_left-faced_blue_signaling_laboratory_block", "laboratoryblocks:right-faced_blue_signaling_laboratory_block",
    "laboratoryblocks:enlighted_right-faced_blue_signaling_laboratory_block", "laboratoryblocks:left-faced_red_signaling_laboratory_block",
    "laboratoryblocks:enlighted_left-faced_red_signaling_laboratory_block", "laboratoryblocks:right-faced_red_signaling_laboratory_block",
    "laboratoryblocks:enlighted_right-faced_red_signaling_laboratory_block", "laboratoryblocks:left-faced_green_signaling_laboratory_block",
    "laboratoryblocks:enlighted_left-faced_green_signaling_laboratory_block", "laboratoryblocks:right-faced_green_signaling_laboratory_block","laboratoryblocks:enlighted_right-faced_green_signaling_laboratory_block", "laboratoryblocks:pla_block", "laboratoryblocks:enlighted_pla_block", "laboratoryblocks:pla_tiles", "laboratoryblocks:enlighted_pla_tiles", "laboratoryblocks:laboratory_block", "laboratoryblocks:enlighted_laboratory_block", "laboratoryblocks:screwed_laboratory_block", "laboratoryblocks:enlighted_screwed_laboratory_block", "laboratoryblocks:laboratory_tiles", "laboratoryblocks:enlighted_laboratory_tiles", "laboratoryblocks:gray_laboratory_tiles", "laboratoryblocks:enlighted_gray_laboratory_tiles", "laboratoryblocks:mixed_laboratory_tiles", "laboratoryblocks:enlighted_mixed_laboratory_tiles", "laboratoryblocks:oak_laboratory_tiles", "laboratoryblocks:enlighted_oak_laboratory_tiles", "laboratoryblocks:spruce_laboratory_tiles", "laboratoryblocks:enlighted_spruce_laboratory_tiles", "laboratoryblocks:birch_laboratory_tiles", "laboratoryblocks:enlighted_birch_laboratory_tiles", "laboratoryblocks:dark_oak_laboratory_tiles", "laboratoryblocks:enlighted_dark_oak_laboratory_tiles", "laboratoryblocks:jungle_laboratory_tiles", "laboratoryblocks:enlighted_jungle_laboratory_tiles", "laboratoryblocks:acacia_laboratory_tiles", "laboratoryblocks:enlighted_acacia_laboratory_tiles", "laboratoryblocks:mangrove_laboratory_tiles", "laboratoryblocks:enlighted_mangrove_laboratory_tiles", "laboratoryblocks:cherry_laboratory_tiles", "laboratoryblocks:enlighted_cherry_laboratory_tiles", "laboratoryblocks:bamboo_laboratory_tiles", "laboratoryblocks:enlighted_bamboo_laboratory_tiles", "laboratoryblocks:crimson_laboratory_tiles", "laboratoryblocks:enlighted_crimson_laboratory_tiles", "laboratoryblocks:warped_laboratory_tiles", "laboratoryblocks:enlighted_warped_laboratory_tiles", "laboratoryblocks:oak_laboratory_floor", "laboratoryblocks:enlighted_oak_laboratory_floor", "laboratoryblocks:spruce_laboratory_floor", "laboratoryblocks:enlighted_spruce_laboratory_floor", "laboratoryblocks:birch_laboratory_floor", "laboratoryblocks:enlighted_birch_laboratory_floor", "laboratoryblocks:dark_oak_laboratory_floor", "laboratoryblocks:enlighted_dark_oak_laboratory_floor", "laboratoryblocks:jungle_laboratory_floor", "laboratoryblocks:enlighted_jungle_laboratory_floor", "laboratoryblocks:acacia_laboratory_floor", "laboratoryblocks:enlighted_acacia_laboratory_floor", "laboratoryblocks:mangrove_laboratory_floor", "laboratoryblocks:enlighted_mangrove_laboratory_floor", "laboratoryblocks:cherry_laboratory_floor", "laboratoryblocks:enlighted_cherry_laboratory_floor", "laboratoryblocks:bamboo_laboratory_floor", "laboratoryblocks:enlighted_bamboo_laboratory_floor", "laboratoryblocks:crimson_laboratory_floor", "laboratoryblocks:enlighted_crimson_laboratory_floor", "laboratoryblocks:warped_laboratory_floor", "laboratoryblocks:enlighted_warped_laboratory_floor", "laboratoryblocks:pla_flooring", "laboratoryblocks:enlighted_pla_flooring", "laboratoryblocks:tiled_pla_flooring", "laboratoryblocks:enlighted_tiled_pla_flooring", "laboratoryblocks:laboratory_glass", "laboratoryblocks:enlighted_laboratory_glass",
    "laboratoryblocks:laboratory_bookshelf", "laboratoryblocks:enlighted_laboratory_bookshelf", "laboratoryblocks:chiseled_laboratory_bookshelf", "laboratoryblocks:enlighted_chiseled_laboratory_bookshelf"])

})