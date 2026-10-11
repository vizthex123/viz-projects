// Adds items to Forestry's backpacks
ServerEvents.tags("item", e => {

    // Digger
    e.add("forestry:backpack/allow/digger", ["#minecraft:sand", "#forge:stone/basalt", "#forge:cobblestone/basalt", "#forge:stone/marble", "#forge:end_stones",

    "moss_carpet", "magma_block", "cinnabar", "sulfur", "sulfur_spike",

    "#aether:aether_dirt", "aether:quicksoil", "#aether:holystone", "aether:icestone", "deep_aether:aether_coarse_dirt", "deep_aether:raw_clorite",

    /*"biomesoplenty:origin_grass_block", "biomesoplenty:glowing_moss_block", "biomesoplenty:dried_salt",*/ 

    "bygonenether:withered_blackstone", "bygonenether:cracked_withered_blackstone", "bygonenether:soul_stone",

    "galosphere:polished_pink_salt", "galosphere:polished_rose_pink_salt", "galosphere:polished_pastel_pink_salt",
    "galosphere:chiseled_pink_salt", "galosphere:chiseled_rose_pink_salt", "galosphere:chiseled_pastel_pink_salt",

    "netherexp:soul_magma_block",

    /*"railcraft:quarried_cobblestone", "railcraft:quarried_stone",*/

    "yungscavebiomes:ancient_sandstone", "yungscavebiomes:brittle_ancient_sandstone", "yungscavebiomes:chiseled_ancient_sandstone", "yungscavebiomes:cut_ancient_sandstone", "yungscavebiomes:layered_ancient_sandstone", "yungscavebiomes:smooth_ancient_sandstone", "yungscavebiomes:brittle_sandstone", "yungscavebiomes:brittle_red_sandstone", "yungscavebiomes:layered_sandstone", "yungscavebiomes:layered_red_sandstone", "yungscavebiomes:icicle"
    ])


    // Miner
    e.add("forestry:backpack/allow/miner", ["#teoe10:corundum", "#teoe10:corundum_blocks", "#teoe10:corundum_sheets",
    "#forge:raw_materials/uranium", "#forge:nuggets/uranium", "#forge:raw_materials/zinc", "#forge:nuggets/zinc",

    "glowstone",

    "aether:ambrosium_shard",

    "biomemakeover:illunite_shard",

    /*"biomesoplenty:rose_quartz_chunk",*/

    "bygonenether:withered_debris",

    "galosphere:allurite_shard", "galosphere:lumiere_shard", "galosphere:pink_salt_shard",

    "thermal:oil_sand", "thermal:oil_red_sand"
    ])


    // Forester
    e.add("forestry:backpack/allow/forester", ["#minecraft:leaves", "#teoe10:cacti", "#forge:bark", "#forge:mushrooms", "#forge:fruits",

    "bamboo", "mangrove_roots", "muddy_mangrove_roots",

    "alexscaves:pine_nuts", "alexscaves:pewen_sap", "alexscaves:pewen_branch", "alexscaves:thornwood_branch",

    "biomemakeover:bulbus_root", "biomemakeover:roasted_bulbus_root", "biomemakeover:rootling_seeds", 

    /*"biomesoplenty:dead_branch", "biomesoplenty:waterlily", "biomesoplenty:bramble", "biomesoplenty:barley", "biomesoplenty:cattail", "biomesoplenty:reed", "biomesoplenty:sea_oats",

    "buzzier_bees:four_leaf_clover",

    "ecologics:surface_moss",*/

    "thermal:frost_melon_slice", "thermal:glowstone_mushroom_spores", "thermal:gunpowder_mushroom_spores", "thermal:redstone_mushroom_spores","thermal:slime_mushroom_spores",

    /*"upgrade_aquatic:pickerelweed", "upgrade_aquatic:boiled_pickerelweed"*/
    ])


    // Hunter
    e.add("forestry:backpack/allow/hunter", ["#minecraft:arrows", "#minecraft:wool", "#teoe10:tooth",
    "#forge:foods/meat/raw", "#forge:foods/meat/cooked",

    "biomemakeover:scuttler_tail", "biomemakeover:ectoplasm", "biomemakeover:blightbat_wings", "biomemakeover:bat_wings", "biomemakeover:dragonfly_wings", "biomemakeover:crude_cladding", "biomemakeover:crude_fragment", "biomemakeover:soul_embers", "biomemakeover:moth_scales", "biomemakeover:wart",

    "bygonenether:warped_ender_pearl",

    "enderzoology:ender_fragment", "enderzoology:confusing_powder", "enderzoology:withering_dust",

    "thermal:basalz_rod", "thermal:blitz_rod", "thermal:blizz_rod", "thermal:basalz_powder", "thermal:blitz_powder", "thermal:blizz_powder"
    ])


    // Adventurer
    e.add("forestry:backpack/allow/adventurer", ["numismaticoverhaul:bronze_coin", "numismaticoverhaul:silver_coin", "numismaticoverhaul:gold_coin", "numismaticoverhaul:money_bag", 
    "#minecraft:decorated_pot_sherds", "#minecraft:trim_templates",
    "#forge:books",

    "chest", "cauldron", "experience_bottle", "enchanted_golden_apple",

    "netherite_upgrade_smithing_template", "ae2:fluix_upgrade_smithing_template", "biomemakeover:cladding_upgrade_smithing_template", "galosphere:preserved_template", "galosphere:silver_upgrade_smithing_template"
    ])


    // Builder
    e.add("forestry:backpack/allow/builder", ["#minecraft:terracotta", "#teoe10:glazed_terracotta", "teoe10:terracotta_shingles", "#minecraft:stone_bricks", "#minecraft:stairs", "#minecraft:slabs", "#minecraft:walls", "#minecraft:candles", "#minecraft:buttons", "#minecraft:wooden_pressure_plates", "#teoe10:furnaces",

    "bamboo_mosaic", "deepslate_bricks", "cracked_deepslate_bricks", "mud_bricks", "blast_furnace", "smoker",

    "biomemakeover:cracked_bricks", "biomemakeover:cracked_brick_stairs", "biomemakeover:cracked_brick_slab", "biomemakeover:cracked_brick_wall",

    "bygonenether:chiseled_withered_blackstone", "bygonenether:warped_nether_bricks", "bygonenether:chiseled_warped_nether_bricks",

    "projectred_exploration:basalt_brick", "projectred_exploration:basalt_brick_wall"
    ])



    // Builder's Backpack for the XyCraft's various blocks
    // I just don't wanna constantly scroll past all of these lol
    e.add("forestry:backpack/allow/builder", ["xycraft_world:aluminum_bricks_cloud_blue", "xycraft_world:aluminum_bricks_cloud_green", "xycraft_world:aluminum_bricks_cloud_red", "xycraft_world:aluminum_bricks_cloud_dark", "xycraft_world:aluminum_bricks_cloud_light",

    "xycraft_world:bricks_blue", "xycraft_world:bricks_green", "xycraft_world:bricks_red", "xycraft_world:bricks_dark", "xycraft_world:bricks_light",

    "xycraft_world:deepslate_bricks_blue", "xycraft_world:deepslate_bricks_green", "xycraft_world:deepslate_bricks_red", "xycraft_world:deepslate_bricks_dark", "xycraft_world:deepslate_bricks_light",

    "xycraft_world:kivi_bricks_cloud_blue", "xycraft_world:kivi_bricks_cloud_green", "xycraft_world:kivi_bricks_cloud_red", "xycraft_world:kivi_bricks_cloud_dark", "xycraft_world:kivi_bricks_cloud_light",

    "xycraft_world:prismarine_bricks_blue", "xycraft_world:prismarine_bricks_green", "xycraft_world:prismarine_bricks_red", "xycraft_world:prismarine_bricks_dark", "xycraft_world:prismarine_bricks_light",

    "xycraft_world:mud_bricks_blue", "xycraft_world:mud_bricks_green", "xycraft_world:mud_bricks_red", "xycraft_world:mud_bricks_dark", "xycraft_world:mud_bricks_light",

    "xycraft_world:stone_bricks_blue", "xycraft_world:stone_bricks_green", "xycraft_world:stone_bricks_red", "xycraft_world:stone_bricks_dark", "xycraft_world:stone_bricks_light",
    "xycraft_world:mossy_stone_bricks_blue", "xycraft_world:mossy_stone_bricks_green", "xycraft_world:mossy_stone_bricks_red", "xycraft_world:mossy_stone_bricks_dark", "xycraft_world:mossy_stone_bricks_light", "xycraft_world:chiseled_stone_bricks_blue", "xycraft_world:chiseled_stone_bricks_green", "xycraft_world:chiseled_stone_bricks_red", "xycraft_world:chiseled_stone_bricks_dark", "xycraft_world:chiseled_stone_bricks_light",

    "xycraft_world:quartz_bricks_blue", "xycraft_world:quartz_bricks_green", "xycraft_world:quartz_bricks_red", "xycraft_world:quartz_bricks_dark", "xycraft_world:quartz_bricks_light",

    "xycraft_world:polished_blackstone_bricks_blue", "xycraft_world:polished_blackstone_bricks_green", "xycraft_world:polished_blackstone_bricks_red", "xycraft_world:polished_blackstone_bricks_dark", "xycraft_world:polished_blackstone_bricks_light", "xycraft_world:nether_bricks_blue", "xycraft_world:nether_bricks_green", "xycraft_world:nether_bricks_red", "xycraft_world:nether_bricks_dark", "xycraft_world:nether_bricks_light", "xycraft_world:chiseled_nether_bricks_blue", "xycraft_world:chiseled_nether_bricks_green", "xycraft_world:chiseled_nether_bricks_red", "xycraft_world:chiseled_nether_bricks_dark", "xycraft_world:chiseled_nether_bricks_light", "xycraft_world:end_stone_bricks_blue", "xycraft_world:end_stone_bricks_green", "xycraft_world:end_stone_bricks_red", "xycraft_world:end_stone_bricks_dark", "xycraft_world:end_stone_bricks_light",

    "xycraft_world:aluminum_tiles_cloud_blue", "xycraft_world:aluminum_tiles_cloud_green", "xycraft_world:aluminum_tiles_cloud_red", "xycraft_world:aluminum_tiles_cloud_dark", "xycraft_world:aluminum_tiles_cloud_light",

    "xycraft_world:deepslate_tiles_blue", "xycraft_world:deepslate_tiles_green", "xycraft_world:deepslate_tiles_red", "xycraft_world:deepslate_tiles_dark", "xycraft_world:deepslate_tiles_light",

    "xycraft_world:kivi_tiles_cloud_blue", "xycraft_world:kivi_tiles_cloud_green", "xycraft_world:kivi_tiles_cloud_red", "xycraft_world:kivi_tiles_cloud_dark", "xycraft_world:kivi_tiles_cloud_light",

    "xycraft_world:chiseled_wood_pillar_blue", "xycraft_world:chiseled_wood_pillar_green", "xycraft_world:chiseled_wood_pillar_red", "xycraft_world:chiseled_wood_pillar_dark", "xycraft_world:chiseled_wood_pillar_light",

    "xycraft_world:aluminum_pillar_blue", "xycraft_world:aluminum_pillar_green", "xycraft_world:aluminum_pillar_red", "xycraft_world:aluminum_pillar_dark", "xycraft_world:aluminum_pillar_light",
    "xycraft_world:kivi_pillar_blue", "xycraft_world:kivi_pillar_green", "xycraft_world:kivi_pillar_red", "xycraft_world:kivi_pillar_dark", "xycraft_world:kivi_pillar_light",

    "xycraft_world:purpur_pillar_blue", "xycraft_world:purpur_pillar_green", "xycraft_world:purpur_pillar_red", "xycraft_world:purpur_pillar_dark", "xycraft_world:purpur_pillar_light",

    "xycraft_world:aluminum_trim_blue", "xycraft_world:aluminum_trim_green", "xycraft_world:aluminum_trim_red", "xycraft_world:aluminum_trim_dark", "xycraft_world:aluminum_trim_light",
    "xycraft_world:kivi_trim_blue", "xycraft_world:kivi_trim_green", "xycraft_world:kivi_trim_red", "xycraft_world:kivi_trim_dark", "xycraft_world:kivi_trim_light",

    "xycraft_world:immortal_aluminum_blue", "xycraft_world:immortal_aluminum_green", "xycraft_world:immortal_aluminum_red", "xycraft_world:immortal_aluminum_dark", "xycraft_world:immortal_aluminum_light",

    "xycraft_world:immortal_stone_blue", "xycraft_world:immortal_stone_green", "xycraft_world:immortal_stone_red", "xycraft_world:immortal_stone_dark", "xycraft_world:immortal_stone_light",

    "#xycraft:building/aluminum", "#xycraft:building/cloud/inverted_blue", "#xycraft:building/cloud/inverted_green", "#xycraft:building/cloud/inverted_red", "#xycraft:building/cloud/inverted_dark", "#xycraft:building/cloud/inverted_light"])

})