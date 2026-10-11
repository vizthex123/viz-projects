// Manages tags for items, blocks, and fluids
// Remember that latex tags are in its own script!
// I really need to convert all of these standard ones I use into a datapack lol (or a mod, but java is too damn complicated ;-;)
ServerEvents.tags("item", e => {

    //// Quests
    e.add("teoe10:iron_pickaxe", ["iron_pickaxe", "projectred_exploration:ruby_pickaxe", "projectred_exploration:sapphire_pickaxe", "projectred_exploration:peridot_pickaxe"])

    e.add("teoe10:wooden_pipe", ["classicpipes:oak_pipe", "classicpipes:spruce_pipe", "classicpipes:birch_pipe", "classicpipes:jungle_pipe", "classicpipes:acacia_pipe", "classicpipes:dark_oak_pipe", "classicpipes:mangrove_pipe", "classicpipes:cherry_pipe", "classicpipes:bamboo_pipe", "classicpipes:crimson_pipe", "classicpipes:warped_pipe"])

    e.add("teoe10:basic_powergen", ["forestry:engine_peat", "thermal:dynamo_stirling", "thermal:dynamo_lapidary", "thermal:dynamo_gourmand", "extrautilitiesreborn:survival_generator", "extrautilitiesreborn:furnace_generator", "extrautilitiesreborn:culinary_generator", "extrautilitiesreborn:death_generator"])

    e.add("teoe10:furnace", ["furnace", "quark:deepslate_furnace", "quark:blackstone_furnace", "natura:nether_furnace"])

    e.add("teoe10:binding", ["#forge:string", "#forge:slimeballs"])



    //// Custom recipes
    e.add("teoe10:bowls", ["bowl", "#forge:bowls"])
    e.add("teoe10:obsidian", ["obsidian", "crying_obsidian"])
    e.add("teoe10:mosslike", ["vine", "twilightforest:moss_patch", "quark:moss_paste", "forestry:bee_comb_mossy"])
    e.add("teoe10:wheatlike", ["wheat", "natura:barley"]) // Used for bread and the shipping bin

    e.add("teoe10:torch_sticks", ["#forge:rods/wooden", "#forge:rods/stone"])
    e.add("teoe10:torch_fuel/poor", ["minicoal:mini_coal", "minicoal:mini_charcoal"])
    e.add("teoe10:torch_fuel/inefficient", ["glow_lichen", "thermal:tar"])
    e.add("teoe10:torch_fuel/standard", ["#minecraft:coals", "thermal:bitumen"])
    e.add("teoe10:torch_fuel/efficient", ["thermal:coal_coke"])



    //// Datapacks
    e.add("teoe10:crab", ["biomemakeover:raw_crab", "quark:crab_leg", "quark:crab_shell"])
    e.add("teoe10:apples", ["apple", "natura:potashapple", "aether:white_apple"])
    e.add("teoe10:berries", ["natura:blackberry", "natura:blueberry", "natura:raspberry", "natura:maloberry"])
    e.add("teoe10:berries/nether", ["natura:blightberry", "natura:duskberry", "natura:skyberry", "natura:stingberry"])
    e.add("teoe10:berries/goldenleaf", ["deep_aether:goldenleaf_berries", "deep_aether:frozen_goldenleaf_berries"])
    e.add("teoe10:aether_saplings", ["deep_aether:roseroot_sapling", "deep_aether:blue_roseroot_sapling", "deep_aether:yagroot_sapling", "deep_aether:cruderoot_sapling", "deep_aether:conberry_sapling", "deep_aether:sunroot_sapling"])
    e.add("teoe10:golden_logs", ["aether:golden_oak_log", "aether:golden_oak_wood"])



    //// Forge
    e.add("forge:slimeballs", ["biomemakeover:ectoplasm", "thermal:tar", "thermal:rosin"])



    //// Fixes
    e.add("forge:nuggets", ["leafscopperbackport:copper_nugget", "minicoal:mini_coal", "minicoal:mini_charcoal"])
    e.add("forge:nuggets/copper", ["leafscopperbackport:copper_nugget"])
    e.add("forge:nuggets/coal", ["minicoal:mini_coal"])
    e.add("forge:nuggets/charcoal", ["minicoal:mini_charcoal"])

    e.add("forge:rubberwood_logs", ["#faktocraft:rubberwood_like"])

    e.add("forge:consumables/prevents_player_death", ["biomemakeover:enchanted_totem"])
    e.add("curios:charm", ["biomemakeover:enchanted_totem"])



    //// Misc
    e.add("teoe10:corundum", ["quark:red_corundum_cluster", "quark:orange_corundum_cluster", "quark:yellow_corundum_cluster", "quark:green_corundum_cluster", "quark:blue_corundum_cluster", "quark:indigo_corundum_cluster", "quark:violet_corundum_cluster", "quark:white_corundum_cluster", "quark:black_corundum_cluster"])

    e.add("teoe10:corundum_blocks", ["quark:red_corundum", "quark:orange_corundum", "quark:yellow_corundum", "quark:green_corundum", "quark:blue_corundum", "quark:indigo_corundum", "quark:violet_corundum", "quark:white_corundum", "quark:black_corundum",

    "quark:waxed_red_corundum", "quark:waxed_orange_corundum", "quark:waxed_yellow_corundum", "quark:waxed_green_corundum", "quark:waxed_blue_corundum", "quark:waxed_indigo_corundum", "quark:waxed_violet_corundum", "quark:waxed_white_corundum", "quark:waxed_black_corundum"])

    e.add("teoe10:corundum_sheets", ["quark:red_corundum_pane", "quark:orange_corundum_pane", "quark:yellow_corundum_pane", "quark:green_corundum_pane", "quark:blue_corundum_pane", "quark:indigo_corundum_pane", "quark:violet_corundum_pane", "quark:white_corundum_pane", "quark:black_corundum_pane"])

    e.add("teoe10:glazed_terracotta", ["white_glazed_terracotta", "orange_glazed_terracotta", "magenta_glazed_terracotta", "light_blue_glazed_terracotta", "blue_glazed_terracotta", "lime_glazed_terracotta", "pink_glazed_terracotta", "gray_glazed_terracotta", "light_gray_glazed_terracotta", "cyan_glazed_terracotta", "purple_glazed_terracotta", "blue_glazed_terracotta", "brown_glazed_terracotta", "green_glazed_terracotta", "red_glazed_terracotta", "black_glazed_terracotta"])
    e.add("teoe10:terracotta_shingles", ["quark:shingles", "quark:white_shingles", "quark:orange_shingles", "quark:magenta_shingles", "quark:light_blue_shingles", "quark:blue_shingles", "quark:lime_shingles", "quark:pink_shingles", "quark:gray_shingles", "quark:light_gray_shingles", "quark:cyan_shingles", "quark:purple_shingles", "quark:blue_shingles", "quark:brown_shingles", "quark:green_shingles", "quark:red_shingles", "quark:black_shingles"])


    //// Removals
    e.remove("quark:stone_tool_materials", ["flint"])

    e.removeAllTagsFrom("ae2wtlib:wireless_universal_terminal")
    e.removeAllTagsFrom("infested_cobblestone")
    e.removeAllTagsFrom("infested_deepslate")
    e.removeAllTagsFrom("infested_stone")

})



// Blocks
ServerEvents.tags("block", e => {

    // Fix the mineable tag missing on several blocks
    e.add("minecraft:mineable/pickaxe", ["conveyor_belt_plus:splitter", "extrautilitiesreborn:dark_ethereal_glass", "extrautilitiesreborn:ethereal_glass", "extrautilitiesreborn:ineffable_glass", "extrautilitiesreborn:ineffable_glass_inverted", "translocators:item_translocator", "translocators:fluid_translocator", "transprotwo:dispatcher", "transprotwo:fluid_dispatcher", "transprotwo:power_dispatcher"])
    e.add("minecraft:mineable/axe", ["deep_aether:rotten_roseroot_log", "bountiful:bountyboard"])

    //// Change the mining levels for things
    e.remove("minecraft:needs_stone_tool", ["#forge:ores/lead", "#forge:ores/silver"])
    e.remove("minecraft:needs_iron_tools", ["biggerreactors:uranium_ore", "biggerreactors:deepslate_uranium_ore"])

    e.add("minecraft:needs_iron_tool", ["#forge:ores/lead", "#forge:ores/nickel", "#forge:ores/silver", "#forge:ores/uranium"])

    // Allow all modded wooden chests to be upgraded into Iron Chests
    e.add("ironchests:upgradeable_wooden_chests", ["quark:ashen_chest", "quark:bamboo_chest","quark:cherry_chest", "twilightforest:twilight_oak_chest", "twilightforest:canopy_chest", "twilightforest:mangrove_chest", "twilightforest:dark_chest", "twilightforest:time_chest", "twilightforest:transformation_chest", "twilightforest:mining_chest", "twilightforest:sorting_chest"])

})