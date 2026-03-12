// Adds items to Forestry's backpacks
ServerEvents.tags("item", e => {

    /// Digger
    e.add("forestry:backpack/allow/digger", ["#minecraft:dirt", "#minecraft:terracotta", "#reminted:glazed_terracotta", "#forge:cobblestone/basalt", "#forge:stone/basalt", "#forge:stone/marble",

    "moss_carpet", "magma_block",

    "biomeswevegone:mossy_stone", "biomeswevegone:rocky_stone",

    "quark:polished_dripstone", "quark:polished_tuff", "quark:soul_sandstone",

    "yungscavebiomes:ancient_sandstone", "yungscavebiomes:brittle_ancient_sandstone", "yungscavebiomes:chiseled_ancient_sandstone", "yungscavebiomes:cut_ancient_sandstone", "yungscavebiomes:layered_ancient_sandstone", "yungscavebiomes:smooth_ancient_sandstone", "yungscavebiomes:brittle_sandstone", "yungscavebiomes:brittle_red_sandstone", "yungscavebiomes:layered_sandstone", "yungscavebiomes:layered_red_sandstone", "yungscavebiomes:icicle"
    ])

    e.remove("forestry:backpack/allow/digger", ["forestry:bronze_pickaxe", "forestry:bronze_shovel"])


    // Miner
    e.add("forestry:backpack/allow/miner", ["#forge:raw_materials/uranium", "#forge:nuggets/uranium", "#forge:raw_materials/zinc", "#forge:nuggets/zinc",

    "#forge:storage_blocks/raw_tin", "#forge:storage_blocks/raw_nickel", "#forge:storage_blocks/raw_lead", "#forge:storage_blocks/raw_silver", "#forge:storage_blocks/raw_uranium",

    "glowstone", "raw_copper_block", "raw_iron_block", "raw_gold_block",

    "rosegoldequipment:raw_rose_gold_block"
    ])

    e.remove("forestry:backpack/allow/miner", ["mekanism:sawdust"])


    // Forester
    e.add("forestry:backpack/allow/forester", ["#minecraft:leaves", "#reminted:cacti", "#reminted:cave_plants", "#reminted:nether_plants", "#reminted:vines",
    "#forge:mushrooms",

    "bamboo", "sweet_berries", "mangrove_roots", "muddy_mangrove_roots", "moss_block", "moss_carpet",

    "biomemakeover:bulbus_root", "biomemakeover:roasted_bulbus_root", "biomemakeover:rootling_seeds", 

    "buzzier_bees:four_leaf_clover",

    "ecologics:surface_moss",

    "quark:moss_paste",

    "upgrade_aquatic:pickerelweed", "upgrade_aquatic:boiled_pickerelweed"
    ])


    // Hunter
    e.add("forestry:backpack/allow/hunter", ["#minecraft:arrows", "#minecraft:wool", "#reminted:shell",
    "#forge:foods/meat/raw", "#forge:foods/meat/cooked",

    "phantom_membrane",

    "biomemakeover:scuttler_tail", "biomemakeover:ectoplasm", "biomemakeover:blightbat_wings", "biomemakeover:bat_wings", "biomemakeover:dragonfly_wings", "biomemakeover:crude_cladding", "biomemakeover:crude_fragment", "biomemakeover:soul_embers", "biomemakeover:moth_scales", "biomemakeover:wart",

    "enderzoology:confusing_powder", "enderzoology:ender_fragment", "enderzoology:withering_dust",

    "quark:ravager_hide", "quark:crab_shell", "quark:soul_bead", "quark:dragon_scale",

    "upgrade_aquatic:elder_eye"
    ])


    // Adventurer
    // Applied to many of my custom items on startup
    e.add("forestry:backpack/allow/adventurer", ["essentiallycurrency:copper_coin", "essentiallycurrency:iron_coin", "essentiallycurrency:gold_coin", "essentiallycurrency:diamond_coin", "essentiallycurrency:emerald_coin", "essentiallycurrency:netherite_coin",

    "netherite_upgrade_smithing_template", "ae2:fluix_upgrade_smithing_template", "biomemakeover:cladding_upgrade_smithing_template", "leathered_boots:leather_upgrade_smithing_template", "#minecraft:trim_templates",

    "#minecraft:decorated_pot_sherds", "#forge:books", "name_tag", "saddle",

    "#forge:boats",
    "#forge:armor/helmet", "#forge:armor/chestplate", "#forge:armor/leggings", "#forge:armor/boots", "turtle_shell",
    "#minecraft:swords", "#minecraft:pickaxes", "#minecraft:axes", "#minecraft:shovels", "#minecraft:hoes", "#forge:tools/paxels",

    "leather_horse_armor", "leather_helmet", "leather_chestplate", "leather_leggings", "leather_boots",

    "bucket", "bow", "crossbow", "#minecraft:arrows", "fishing_rod", "lead", "shears", "compass", "clock", "spyglass", "map", "elytra", "#minecraft:music_discs", "enchanted_book", "leather_horse_armor", "exlinecopperequipment:copper_horse_armor", "iron_horse_armor", "golden_horse_armor", "diamond_horse_armor",

    "experience_bottle", "golden_apple", "enchanted_golden_apple", "barrel", "chest"
    ])


    // Builder
    e.add("forestry:backpack/allow/builder", ["#forge:workbench", "#reminted:all_terracotta", "#minecraft:stone_bricks", "#minecraft:stairs", "#minecraft:slabs", "#minecraft:walls", "#minecraft:candles", "#minecraft:fences", "#minecraft:fence_gates", "#minecraft:buttons", "#minecraft:wooden_pressure_plates", "packed_mud",

    "#reminted:furnace", "cartography_table", "fletching_table", "smithing_table",

    "#blueprint:wooden_ladders",

    "bamboo_mosaic", "deepslate_bricks", "cracked_deepslate_bricks", "mud_bricks", "blast_furnace", "smoker",

    "projectred_exploration:basalt_brick", "projectred_exploration:basalt_brick_wall",

    "#quark:shards", "quark:sturdy_stone", "quark:thatch", "#quark:vertical_slabs"
    ])

})