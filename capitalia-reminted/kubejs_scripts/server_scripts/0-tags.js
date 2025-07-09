// Manages tags for items, blocks, and fluids
ServerEvents.tags("item", e => {

    //// Quests
    e.add("reminted:equipment_gem", ["#forge:gems/ruby", "#forge:gems/sapphire", "#forge:gems/peridot"])

    e.add("reminted:log_pile_covers", ["clay", "dirt", "gravel", "netherrack", "end_stone", "end_stone_bricks"])



    //// Recipes
    e.add("reminted:bowls", ["bowl", "autumnity:snail_shell_piece", "ecologics:coconut_husk"])

    e.add("reminted:revertable_chests", ["#quark:revertable_chests", "#woodwevegot:chests"])
    e.add("reminted:revertable_trapped_chests", ["#quark:revertable_trapped_chests", "#woodwevegot:trapped_chests"])

    e.add("reminted:revertable_barrels", ["#woodwevegot:barrels", "#variantbarrels:barrels"])

    e.add("reminted:biomass", ["#minecraft:saplings", "#forge:crops", "#forge:seeds", "ecologics:coconut_husk"])
    e.add("reminted:oily_item", ["biomeswevegone:aloe_vera", "ecologics:coconut_slice", "#forge:raw_fishes"])

    e.add("reminted:furnace", ["furnace", "quark:blackstone_furnace", "quark:deepslate_furnace"])
    e.add("reminted:stonelike", ["stone", "deepslate", "calcite", "tuff", "projectred_exploration:marble", "quark:jasper", "quark:limestone", "quark:shale"])
    e.add("reminted:mosslike", ["vine", "yungscavebiomes:prickly_vines", "ecologics:surface_moss", "quark:moss_paste", "#upgrade_aquatic:moss_corals", "forestry:bee_comb_mossy"])

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





    // Minecraft
    e.add("minecraft:freeze_immune_wearables", ["minecraft:netherite_helmet", "minecraft:netherite_chestplate", "minecraft:netherite_leggings", "minecraft:netherite_boots", "mekanismtools:refined_glowstone_helmet", "mekanismtools:refined_glowstone_chestplate", "mekanismtools:refined_glowstone_leggings", "mekanismtools:refined_glowstone_boots", "travelersboots:travelers_boots"])



    //// Fixes
    /// Ores & gems are in ore_fixer.js
    e.add("forge:seeds", ["torchflower_seeds", "biomemakeover:rootling_seeds"])

    e.add("forge:raw_fishes", ["cod", "salmon", "biomemakeover:glowfish"])

    e.add("forge:cobblestone", ["biomemakeover:blighted_cobblestone", "projectred_exploration:basalt_cobble"])
    e.add("forge:cobblestone/basalt", ["projectred_exploration:basalt_cobble"])

    e.add("ae2:all_quartz_dust", ["#forge:dusts/quartz"])



    //// Misc
    e.add("forge:slimeballs", ["autumnity:snail_goo", "biomemakeover:ectoplasm"])

    e.add("reminted:corundum", ["quark:red_corundum_cluster", "quark:orange_corundum_cluster", "quark:yellow_corundum_cluster", "quark:green_corundum_cluster", "quark:blue_corundum_cluster", "quark:indigo_corundum_cluster", "quark:violet_corundum_cluster", "quark:white_corundum_cluster", "quark:black_corundum_cluster"])

    e.add("reminted:corundum_blocks", ["quark:red_corundum", "quark:orange_corundum", "quark:yellow_corundum", "quark:green_corundum", "quark:blue_corundum", "quark:indigo_corundum", "quark:violet_corundum", "quark:white_corundum", "quark:black_corundum",

    "quark:waxed_red_corundum", "quark:waxed_orange_corundum", "quark:waxed_yellow_corundum", "quark:waxed_green_corundum", "quark:waxed_blue_corundum", "quark:waxed_indigo_corundum", "quark:waxed_violet_corundum", "quark:waxed_white_corundum", "quark:waxed_black_corundum"])

    e.add("reminted:corundum_sheets", ["quark:red_corundum_pane", "quark:orange_corundum_pane", "quark:yellow_corundum_pane", "quark:green_corundum_pane", "quark:blue_corundum_pane", "quark:indigo_corundum_pane", "quark:violet_corundum_pane", "quark:white_corundum_pane", "quark:black_corundum_pane"])

    e.add("reminted:glazed_terracotta", ["white_glazed_terracotta", "orange_glazed_terracotta", "magenta_glazed_terracotta", "light_blue_glazed_terracotta", "yellow_glazed_terracotta", "lime_glazed_terracotta", "pink_glazed_terracotta", "gray_glazed_terracotta", "light_gray_glazed_terracotta", "cyan_glazed_terracotta", "purple_glazed_terracotta", "blue_glazed_terracotta", "brown_glazed_terracotta", "green_glazed_terracotta", "red_glazed_terracotta", "black_glazed_terracotta"])



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

    // Add Wood We've Got's ladders to the quark tag
    e.add("quark:ladders", ["#woodwevegot:ladders"])

    // Fix the Travel Anchor not having a mining tool
    e.add("minecraft:mineable/pickaxe", ["travelanchors:travel_anchor"])

    // Fix the Bounty Board not having a mining tool
    e.add("minecraft:mineable/axe", ["bountiful:bountyboard"])

    // Make various ores require an Iron Pickaxe
    e.remove("minecraft:needs_stone_tool", ["#forge:ores/uranium", "#forge:ores/lead", "#forge:ores/nether_lead"])

    e.add("minecraft:needs_iron_tool", ["#forge:ores/uranium", "#forge:ores/lead", "#forge:ores/nether_lead"])

})