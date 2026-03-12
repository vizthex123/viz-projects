// Manages tags for items, blocks, and fluids
ServerEvents.tags("item", e => {

    //// Quests
    e.add("reminted:log_pile_covers", ["clay", "dirt", "gravel", "netherrack", "end_stone", "end_stone_bricks"])

    e.add("reminted:equipment_gem", ["#forge:gems/ruby", "#forge:gems/sapphire", "#forge:gems/peridot"])

    e.add("reminted:basic_pickaxe", ["stone_pickaxe", "mekanismtools:lapis_lazuli_pickaxe"])
    e.add("reminted:bronze_pickaxe", ["mekanismtools:bronze_pickaxe", "forestry:bronze_pickaxe", "forestry:broken_bronze_pickaxe"])
    e.add("reminted:iron_pickaxe", ["iron_pickaxe", "projectred_exploration:ruby_pickaxe", "projectred_exploration:sapphire_pickaxe", "projectred_exploration:peridot_pickaxe"])

    e.add("reminted:wooden_pipe", ["classicpipes:oak_pipe", "classicpipes:spruce_pipe", "classicpipes:birch_pipe", "classicpipes:jungle_pipe", "classicpipes:acacia_pipe", "classicpipes:dark_oak_pipe", "classicpipes:mangrove_pipe", "classicpipes:cherry_pipe", "classicpipes:bamboo_pipe", "classicpipes:crimson_pipe", "classicpipes:warped_pipe"])



    //// Recipes
    e.add("reminted:bowls", ["bowl", "autumnity:snail_shell_piece", "ecologics:coconut_husk"])
    e.add("reminted:shells", ["nautilus_shell", "ecologics:seashell", "autumnity:snail_shell_piece", "quark:crab_shell"])
    e.add("reminted:mushrooms", ["#forge:mushrooms", "crimson_fungus", "warped_fungus"])

    e.add("reminted:torch_fuel", ["#minecraft:coals", "thermal:bitumen", "biomemakeover:dried_peat"])

    e.add("reminted:adhesive", ["#forge:slimeballs"]) // Glue gets this on startup
    e.add("reminted:crab_meat", ["ecologics:crab_meat", "quark:crab_leg", "biomemakeover:raw_crab", "quark:cooked_crab_leg", "biomemakeover:cooked_crab"])
    e.add("reminted:cladding_duplication", ["biomemakeover:mesmerite", "quark:permafrost", "quark:shale", "biomemakeover:cladded_stone"])



    /// Custom processing recipes
    e.add("reminted:oily", ["sunflower", "biomeswevegone:aloe_vera", "ecologics:coconut_slice", "#forge:foods/fish/raw"])

    e.add("reminted:furnace", ["furnace", "quark:blackstone_furnace", "quark:deepslate_furnace"])
    e.add("reminted:mosslike", ["vine", "yungscavebiomes:prickly_vines", "ecologics:surface_moss", "quark:moss_paste", "#upgrade_aquatic:moss_corals", "forestry:bee_comb_mossy"])
    e.add("reminted:mudlike", ["mud", "packed_mud", "muddy_mangrove_roots"])

    e.add("reminted:stonelike", ["stone", "dripstone_block", "calcite", "tuff", "biomeswevegone:mossy_stone", "biomeswevegone:rocky_stone", "quark:limestone", "quark:shale"])
    e.add("reminted:stonelike/tough", ["deepslate", "andesite", "diorite", "granite", "blackstone", "projectred_exploration:basalt_cobble", "projectred_exploration:marble", "quark:jasper"])

    e.add("reminted:glazed_terracotta", ["white_glazed_terracotta", "orange_glazed_terracotta", "magenta_glazed_terracotta", "light_blue_glazed_terracotta", "blue_glazed_terracotta", "lime_glazed_terracotta", "pink_glazed_terracotta", "gray_glazed_terracotta", "light_gray_glazed_terracotta", "cyan_glazed_terracotta", "purple_glazed_terracotta", "blue_glazed_terracotta", "brown_glazed_terracotta", "green_glazed_terracotta", "red_glazed_terracotta", "black_glazed_terracotta"])
    e.add("reminted:terracotta_shingles", ["quark:shingles", "quark:white_shingles", "quark:orange_shingles", "quark:magenta_shingles", "quark:light_blue_shingles", "quark:blue_shingles", "quark:lime_shingles", "quark:pink_shingles", "quark:gray_shingles", "quark:light_gray_shingles", "quark:cyan_shingles", "quark:purple_shingles", "quark:blue_shingles", "quark:brown_shingles", "quark:green_shingles", "quark:red_shingles", "quark:black_shingles"])

    e.add("reminted:all_terracotta", ["#minecraft:terracotta", "#reminted:glazed_terracotta", "#reminted:terracotta_shingles"])


    e.add("reminted:automation_agent", ["redstone", "projectred_core:electrotine_dust", "ae2:sky_dust"]) // Lubricant gets this on startup
    e.add("reminted:cleaning_agent", ["ae2:sky_dust"])



    // Biomass & Meaty Clumps
    e.add("reminted:biomass", ["#forge:seeds", "#forge:crops", "#forge:fruits", "#forge:mushrooms", "#forge:crops", "#forge:seeds", "#forge:pumpkins",
    "#minecraft:flowers", "#minecraft:saplings", "#reminted:vines", "#reminted:cacti", "kelp", "moss_carpet", "moss_block", "biomeswevegone:clover_patch", "ecologics:coconut_husk"])
    e.add("reminted:biomass/meaty", ["#forge:foods/meat/raw", "#forge:foods/meat/cooked", "#reminted:crab_meat", "#forge:foods/fish/raw", "#forge:raw_turkey", "biomemakeover:raw_toad"])



    // Used for latex
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
    e.add("minecraft:freeze_immune_wearables", ["netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots",

    "biomemakeover:cladded_helmet", "biomemakeover:cladded_chestplate", "biomemakeover:cladded_leggings", "biomemakeover:cladded_boots",

    "mekanismtools:refined_glowstone_helmet", "mekanismtools:refined_glowstone_chestplate", "mekanismtools:refined_glowstone_leggings", "mekanismtools:refined_glowstone_boots",

    "travelersboots:travelers_boots"])



    //// Mod tags
    e.add("laboratoryblocks:starch_ingredient", ["potato", "poisonous_potato"])



    //// Fixes
    /// Ores & gems are in ore_fixer.js
    e.add("forge:paper", ["paper"]) // Parchment gets this on startup
    e.add("forge:seeds", ["torchflower_seeds", "biomemakeover:rootling_seeds"])

    e.add("forge:foods/fish/raw", ["#forge:raw_fishes"])
    e.add("forge:foods/fish/cooked", ["#forge:cooked_fishes"])

    e.add("forge:cobblestone", ["biomemakeover:blighted_cobblestone", "biomeswevegone:dacite_cobblestone", "biomeswevegone:white_dacite_cobblestone", "projectred_exploration:basalt_cobble", "upgrade_aquatic:kelpy_cobblestone"])
    e.add("forge:cobblestone/basalt", ["projectred_exploration:basalt_cobble"])

    e.add("forge:raw_materials", ["rosegoldequipment:raw_rose_gold", "salt:raw_rock_salt"])
    e.add("forge:raw_materials/salt", ["salt:raw_rock_salt"])

    e.add("ae2:all_quartz_dust", ["#forge:dusts/quartz"])

    // Add modded ladders to the custom tag
    e.add("reminted:wooden_ladders", ["#woodwevegot:ladders"])
    Ingredient.of("#quark:ladders").itemIds.forEach(id => {
        if(id != "laboratoryblocks:laboratory_ladder" && id != "quark:iron_ladder")
        e.add("reminted:wooden_ladders", id)
    })



    //// Misc
    e.add("forge:slimeballs", ["biomemakeover:ectoplasm", "autumnity:snail_goo"])

    e.add("reminted:corundum", ["quark:red_corundum_cluster", "quark:orange_corundum_cluster", "quark:yellow_corundum_cluster", "quark:green_corundum_cluster", "quark:blue_corundum_cluster", "quark:indigo_corundum_cluster", "quark:violet_corundum_cluster", "quark:white_corundum_cluster", "quark:black_corundum_cluster"])

    e.add("reminted:corundum_blocks", ["quark:red_corundum", "quark:orange_corundum", "quark:yellow_corundum", "quark:green_corundum", "quark:blue_corundum", "quark:indigo_corundum", "quark:violet_corundum", "quark:white_corundum", "quark:black_corundum",

    "quark:waxed_red_corundum", "quark:waxed_orange_corundum", "quark:waxed_yellow_corundum", "quark:waxed_green_corundum", "quark:waxed_blue_corundum", "quark:waxed_indigo_corundum", "quark:waxed_violet_corundum", "quark:waxed_white_corundum", "quark:waxed_black_corundum"])

    e.add("reminted:corundum_sheets", ["quark:red_corundum_pane", "quark:orange_corundum_pane", "quark:yellow_corundum_pane", "quark:green_corundum_pane", "quark:blue_corundum_pane", "quark:indigo_corundum_pane", "quark:violet_corundum_pane", "quark:white_corundum_pane", "quark:black_corundum_pane"])



    //// Removals
    e.remove("quark:stone_tool_materials", ["flint"])
    e.remove("forge:nuggets", ["minicoal:mini_coal", "minicoal:mini_charcoal"])

    e.removeAllTagsFrom("infested_cobblestone")
    e.removeAllTagsFrom("infested_deepslate")
    e.removeAllTagsFrom("infested_stone")

})



// Block tags
ServerEvents.tags("fluid", e => {

    // Thick fluids for Classic Pipes
    // Thin is the default, so I can ignore it lol
    e.add("classicpipes:thick", ["#forge:crude_oil", "thermal:heavy_oil", "thermal:ender", "thermal:glowstone"])

})



// Block tags
ServerEvents.tags("block", e => {

    //// Fix missing/incorrect mining tags
    // Bounty Board, Quick Quarrry, and Travel Anchor  not having a mining tool
    e.add("minecraft:mineable/axe", ["bountiful:bountyboard"])

    e.add("minecraft:mineable/pickaxe", ["energymeter:meter",

    "quickquarry:stone_quarry", "quickquarry:iron_quarry", "quickquarry:ender_quarry", "quickquarry:mechanical_breaker",

    "rangedpumps:pump", "travelanchors:travel_anchor",

    "transprotwo:dispatcher", "transprotwo:fluid_dispatcher", "transprotwo:power_dispatcher"])
    e.remove("quickquarry:mineable/pickaxe", ["quickquarry:stone_quarry", "quickquarry:iron_quarry", "quickquarry:ender_quarry", "quickquarry:mechanical_breaker"])

    e.add("minecraft:needs_iron_tool", ["quickquarry:ender_quarry"])


    // Add modded ladders to the quark tag
    e.add("quark:ladders", ["#woodwevegot:ladders", "laboratoryblocks:laboratory_ladder"])


    // Make various ores require an Iron Pickaxe
    e.remove("minecraft:needs_stone_tool", ["#forge:ores/lead", "#forge:ores/nether_lead", "#forge:ores/osmium", "#forge:ores/uranium"])

    e.add("minecraft:needs_iron_tool", ["#forge:ores/lead", "#forge:ores/nether_lead", "#forge:ores/osmium", "#forge:ores/uranium"])

})