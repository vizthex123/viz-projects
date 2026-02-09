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
    e.add("revolution:binding", ["#forge:leather", "phantom_membrane"])

    e.add("revolution:bowls", ["bowl", "autumnity:snail_shell_piece", "ecologics:coconut_husk"])
    e.add("revolution:mushrooms", ["#forge:mushrooms", "crimson_fungus", "warped_fungus"])

    e.add("revolution:stick_materials", ["alexscaves:pewen_branch", "alexscaves:thornwood_branch", "biomesoplenty:bramble", "biomesoplenty:dead_branch", "biomesoplenty:reed"])


    e.add("revolution:limestone", ["alexscaves:limestone"])

    e.add("revolution:mosslike", ["vine", "biomesoplenty:willow_vine", "ecologics:surface_moss", "forestry:bee_comb_mossy", "yungscavebiomes:prickly_vines", "#upgrade_aquatic:moss_corals"])


    e.add("revolution:sandstone_slab", ["sandstone_slab", "smooth_sandstone_slab", "cut_sandstone_slab"])
    e.add("revolution:red_sandstone_slab", ["red_sandstone_slab", "smooth_red_sandstone_slab", "cut_red_sandstone_slab"])

    e.add("revolution:sandstone", ["sandstone", "smooth_sandstone", "cut_sandstone", "chiseled_sandstone", "yungscavebiomes:brittle_sandstone", "yungscavebiomes:layered_sandstone", "sandstone_stairs", "smooth_sandstone_stairs", "sandstone_wall"])

    e.add("revolution:red_sandstone", ["red_sandstone", "smooth_red_sandstone", "cut_red_sandstone", "chiseled_red_sandstone", "yungscavebiomes:brittle_red_sandstone", "yungscavebiomes:layered_red_sandstone", "red_sandstone_stairs", "smooth_red_sandstone_stairs", "red_sandstone_wall"])


    e.add("revolution:black_sandstone", ["biomesoplenty:black_sandstone", "biomesoplenty:smooth_black_sandstone", "biomesoplenty:cut_black_sandstone", "biomesoplenty:chiseled_black_sandstone", "biomesoplenty:black_sandstone_stairs", "biomesoplenty:smooth_black_sandstone_stairs", "biomesoplenty:black_sandstone_wall"])
    e.add("revolution:black_sandstone_slab", ["biomesoplenty:black_sandstone_slab", "biomesoplenty:smooth_black_sandstone_slab", "biomesoplenty:cut_black_sandstone_slab"])


    e.add("revolution:white_sandstone", ["biomesoplenty:white_sandstone", "biomesoplenty:smooth_white_sandstone", "biomesoplenty:cut_white_sandstone", "biomesoplenty:chiseled_white_sandstone", "biomesoplenty:white_sandstone_stairs", "biomesoplenty:smooth_white_sandstone_stairs", "biomesoplenty:white_sandstone_wall"])
    e.add("revolution:white_sandstone_slab", ["biomesoplenty:white_sandstone_slab", "biomesoplenty:smooth_white_sandstone_slab", "biomesoplenty:cut_white_sandstone_slab"])


    e.add("revolution:orange_sandstone", ["biomesoplenty:orange_sandstone", "biomesoplenty:smooth_orange_sandstone", "biomesoplenty:cut_orange_sandstone", "biomesoplenty:chiseled_orange_sandstone", "biomesoplenty:orange_sandstone_stairs", "biomesoplenty:smooth_orange_sandstone_stairs", "biomesoplenty:orange_sandstone_wall"])
    e.add("revolution:orange_sandstone_slab", ["biomesoplenty:orange_sandstone_slab", "biomesoplenty:smooth_orange_sandstone_slab", "biomesoplenty:cut_orange_sandstone_slab"])


    e.add("revolution:ancient_sandstone", ["yungscavebiomes:ancient_sandstone", "yungscavebiomes:brittle_ancient_sandstone", "yungscavebiomes:smooth_ancient_sandstone", "yungscavebiomes:cut_ancient_sandstone", "yungscavebiomes:chiseled_ancient_sandstone", "yungscavebiomes:layered_ancient_sandstone", "yungscavebiomes:ancient_sandstone_wall"])
    e.add("revolution:ancient_sandstone_slab", ["yungscavebiomes:ancient_sandstone_slab", "yungscavebiomes:smooth_ancient_sandstone_slab", "yungscavebiomes:cut_ancient_sandstone_slab"])



    // Used for dye fixes and latex
    e.add("revolution:cacti", ["cactus", "biomemakeover:saguaro_cactus", "yungscavebiomes:prickly_peach_cactus", "biomesoplenty:tiny_cactus", "biomemakeover:barrel_cactus", "biomemakeover:barrel_cactus_flowered"])
    e.add("revolution:cave_plants", ["glow_lichen", "yungscavebiomes:frost_lily", "yungscavebiomes:prickly_peach"])
    e.add("revolution:nether_plants", ["crimson_fungus", "warped_fungus", "crimson_roots", "warped_roots",

    "netherexp:blightwart", "netherexp:crimson_sprouts", "netherexp:blue_scale_fungus", "netherexp:red_scale_fungus", "netherexp:soul_swirls", "netherexp:soul_torchflower", "netherexp:weeping_helix", "netherexp:twisting_helix", "netherexp:weeping_ivy", "netherexp:twisting_ivy", "#netherexp:glowspores"])
    e.add("revolution:vines", ["vine", "weeping_vines", "twisting_vines", "alexscaves:archaic_vine", "biomesoplenty:willow_vine", "outer_end:azure_vines", "yungscavebiomes:prickly_vines"])

    Ingredient.of("#minecraft:tall_flowers").itemIds.forEach(id => {
        if(id != "minecraft:sunflower")
        e.add("revolution:tall_flowers", id)
    })



    e.add("revolution:carbon_dust", ["#forge:dusts/coal", "#forge:dusts/charcoal"])

    e.add("revolution:furnace", ["furnace"])
    e.add("revolution:furnace_cobblestone", ["cobblestone", "mossy_cobblestone", "tuff", "ad_astra:glacio_cobblestone", "ad_astra:mercury_cobblestone", "ad_astra:mars_cobblestone", "ad_astra:moon_cobblestone", "ad_astra:venus_cobblestone", "railcraft:quarried_cobblestone", "railcraft:quarried_stone", "upgrade_aquatic:kelpy_cobblestone"])
    e.add("revolution:blast_furnace_smooth_stone", ["smooth_stone", "smooth_basalt", "alexscaves:smooth_limestone", "yungscavebiomes:smooth_ancient_sandstone"])

    e.add("revolution:shulker_boxes", ["shulker_box", "white_shulker_box", "orange_shulker_box", "magenta_shulker_box", "light_blue_shulker_box", "yellow_shulker_box", "lime_shulker_box", "pink_shulker_box", "gray_shulker_box", "light_gray_shulker_box", "cyan_shulker_box", "purple_shulker_box", "blue_shulker_box", "brown_shulker_box", "green_shulker_box", "red_shulker_box", "black_shulker_box"])

    e.add("revolution:drawer1", ["functionalstorage:acacia_1", "functionalstorage:birch_1", "functionalstorage:cherry_1", "functionalstorage:crimson_1", "functionalstorage:dark_oak_1", "functionalstorage:jungle_1", "functionalstorage:mangrove_1", "functionalstorage:oak_1", "functionalstorage:spruce_1", "functionalstorage:warped_1", "functionalstorage:rubberwood_1"])

    e.add("revolution:drawer2", ["functionalstorage:acacia_2", "functionalstorage:birch_2", "functionalstorage:cherry_2", "functionalstorage:crimson_2", "functionalstorage:dark_oak_2", "functionalstorage:jungle_2", "functionalstorage:mangrove_2", "functionalstorage:oak_2", "functionalstorage:spruce_2", "functionalstorage:warped_2", "functionalstorage:rubberwood_2"])

    e.add("revolution:drawer4", ["functionalstorage:acacia_4", "functionalstorage:birch_4", "functionalstorage:cherry_4", "functionalstorage:crimson_4", "functionalstorage:dark_oak_4", "functionalstorage:jungle_4", "functionalstorage:mangrove_4", "functionalstorage:oak_4", "functionalstorage:spruce_4", "functionalstorage:warped_4", "functionalstorage:rubberwood_4"])



    e.add("revolution:pink_salt_blocks", ["galosphere:pink_salt", "galosphere:pastel_pink_salt", "galosphere:rose_pink_salt"])

    e.add("revolution:xychorized_obsidian", ["xycraft_override:crying_obsidian_blue", "xycraft_override:crying_obsidian_green", "xycraft_override:crying_obsidian_red", "xycraft_override:crying_obsidian_dark", "xycraft_override:crying_obsidian_light"])

    e.add("revolution:glass_viewer", ["xycraft_world:glass_viewer", "xycraft_world:glass_viewer_silicon", "xycraft_world:glass_viewer_dire", "xycraft_world:glass_viewer_glowing", "xycraft_world:glass_viewer_glowing_clear", "xycraft_world:glass_viewer_dark", "xycraft_world:glass_viewer_reinforced", "xycraft_world:glass_viewer_immortal", "xycraft_world:glass_viewer_rgb_white", "xycraft_world:glass_viewer_rgb_glowing_white", "xycraft_world:glass_viewer_phantom", "xycraft_world:glass_viewer_phantom_glowing", "xycraft_world:glass_viewer_phantom_dark"])



    //// Quest tags
    e.add("revolution:wooden_pipe", ["classicpipes:oak_pipe", "classicpipes:spruce_pipe", "classicpipes:birch_pipe", "classicpipes:jungle_pipe", "classicpipes:acacia_pipe", "classicpipes:dark_oak_pipe", "classicpipes:mangrove_pipe", "classicpipes:cherry_pipe", "classicpipes:bamboo_pipe", "classicpipes:crimson_pipe", "classicpipes:warped_pipe"])

    e.add("revolution:log_pile_cover", ["dirt", "gravel", "clay", "netherrack", "end_stone", "end_stone_bricks"])
    e.add("revolution:gem_pickaxe", ["projectred_exploration:ruby_pickaxe", "projectred_exploration:peridot_pickaxe", "projectred_exploration:sapphire_pickaxe"])
/*
    e.add("revolution:compacting_drawer", ["functionalstorage:simple_compacting_drawer", "functionalstorage:compacting_drawer", "functionalstorage:framed_simple_compacting_drawer", "functionalstorage:compacting_framed_drawer"])
    e.add("revolution:me_storage", ["ae2:chest", "ae2:drive"])

    e.add("revolution:basic_generator", ["ad_astra:coal_generator", "thermal:dynamo_stirling", "thermal:dynamo_lapidary", "thermal:dynamo_gourmand"])
    e.add("revolution:blast_furnace", ["ad_astra:etrionic_blast_furnace", "thermal:machine_smelter"])

    e.add("revolution:plate_producer", ["ad_astra:compressor", "thermal:machine_press"])
    e.add("revolution:refinery", ["ad_astra:fuel_refinery", "thermal:machine_refinery"])
*/
    e.add("revolution:pipe_filter", ["prettypipes:low_filter_module", "prettypipes:tag_filter_modifier", "prettypipes:damage_filter_modifier", "prettypipes:nbt_filter_modifier", "prettypipes:mod_filter_modifier"])



    //// Vanilla tags
    // Revertable chests
    Ingredient.of("#forge:chests/wooden").itemIds.forEach(id => {
        if(id != "minecraft:chest" && id != "minecraft:trapped_chest")
        e.add("revolution:revertable_chests", id)
    })

    e.add("minecraft:stone_crafting_materials", ["stone", "railcraft:quarried_stone", "railcraft:quarried_cobblestone"])



    //// Forge tags
    e.add("forge:mushrooms", ["ad_astra:aeronos_mushroom", "ad_astra:strophar_mushroom"])

    e.add("forge:eggs", ["#minecraft:eggs", "turtle_egg", "sniffer_egg", "enderzoology:owl_egg"])
    e.add("forge:leather", ["alexscaves:tough_hide"])
    e.add("forge:slimeballs", ["biomemakeover:ectoplasm", "mobcompack:rose_gelball", "outer_end:spectragel", "thermal:tar", "thermal:rosin"])

    e.add("forge:foods/meat/raw", ["alexscaves:dinosaur_chop", "alexscaves:sea_pig", "biomemakeover:raw_toad", "biomemakeover:raw_crab", "outer_end:stalker_meat"])
    e.add("forge:foods/meat/cooked", ["alexscaves:cooked_trilocaris_tail", "alexscaves:cooked_mussel", "alexscaves:cooked_dinosaur_chop", "outer_end:cooked_stalker_meat"])

    e.add("forge:foods/fish/raw", ["alexscaves:trilocaris_tail", "alexscaves:radgill", "biomemakeover:glowfish", "upgrade_aquatic:lionfish", "upgrade_aquatic:perch", "upgrade_aquatic:pike"])
    e.add("forge:foods/fish/cooked", ["alexscaves:cooked_radgill", "alexscaves:cooked_lanternfish", "alexscaves:cooked_tripodfish", "biomemakeover:cooked_glowfish"])

    e.add("forge:rods", ["cb_microblock:stone_rod"])
    e.add("forge:rods/wooden", ["cb_microblock:stone_rod"])

    e.add("forge:cobblestone", ["#revolution:furnace_cobblestone"])



    e.add("forge:ingots", ["ad_astra:etrium_ingot", "alexscaves:azure_neodymium_ingot", "alexscaves:scarlet_neodymium_ingot", "jetboots:obsidian_infused_gold", "railcraft:brass_ingot", "railcraft:zinc_ingot", "thermalendergy:melodium_ingot", "thermalendergy:prismalium_ingot", "thermalendergy:stellarium_ingot"])
    e.add("forge:ingots/neodymium", ["alexscaves:azure_neodymium_ingot", "alexscaves:scarlet_neodymium_ingot"])
    e.add("forge:ingots/etrium", ["ad_astra:etrium_ingot"])

    e.add("forge:nuggets", ["#forge:nuggets/coal", "#forge:nuggets/charcoal", "#forge:nuggets/brass", "ad_astra:etrium_nugget", "thermalendergy:melodium_nugget", "thermalendergy:prismalium_nugget", "thermalendergy:stellarium_nugget"])
    e.add("forge:nuggets/coal", ["minicoal:mini_coal"])
    e.add("forge:nuggets/charcoal", ["minicoal:mini_charcoal"])
    e.add("forge:nuggets/etrium", ["ad_astra:etrium_nugget"])

    e.add("forge:dusts", ["railcraft:charcoal_dust", "railcraft:ender_dust", "railcraft:slag", "railcraft:saltpeter_dust", "thermalendergy:melodium_dust", "thermalendergy:prismalium_dust", "thermalendergy:stellarium_dust"])
    e.add("forge:dusts/charcoal", ["railcraft:charcoal_dust"])
    e.add("forge:dusts/ender_pearl", ["railcraft:ender_dust"])



    // Nerf certus ore mod by removing its tags
    e.removeAllTagsFrom("qor:certus_quartz_crystal")
    e.add("forge:gems", ["qor:certus_quartz_crystal", "forestry:amber"])



    // Mod tags
    e.add("ae2:all_quartz_dust", ["#forge:dusts/quartz"])

    e.add("curios:charm", ["biomemakeover:enchanted_totem"])
    e.add("forge:consumables/prevents_player_death", ["biomemakeover:enchanted_totem"])

    e.add("blueprint:wooden_ladders", ["ad_astra:aeronos_ladder", "ad_astra:strophar_ladder", "outer_end:azure_ladder"])

    e.add("thermal:devices", ["thermal:device_water_gen"])



    //// Removals
    e.remove("sand", ["suspicious_sand", "biomesoplenty:mossy_black_sand"])
    e.remove("smelts_to_glass", ["biomesoplenty:mossy_black_sand"])
    e.remove("forge:eggs", ["alexscaves:tremorzilla_egg"])
    e.remove("forge:music_discs", ["biomesoplenty:music_disc_wanderer"])

    e.removeAllTagsFrom("infested_cobblestone")
    e.removeAllTagsFrom("infested_deepslate")
    e.removeAllTagsFrom("infested_stone")

    e.removeAllTagsFrom("biggerreactors:wrench")
    e.removeAllTagsFrom("scannable:blank_module")



    // Add the "destroyed in space" tag to other items
    e.add("ad_astra:destroyed_in_space", ["#woodworks:leaf_piles", "biomesoplenty:bramble_leaves", "biomesoplenty:orange_maple_leaf_pile", "biomesoplenty:red_maple_leaf_pile", "biomesoplenty:yellow_maple_leaf_pile", "buzzier_bees:four_leaf_clover", "xycraft_world:aluminum_torch", "xycraft_world:copper_torch"])

})



// Block tags
ServerEvents.tags("block", e => {

    // Add the "destroyed in space" tag to other blocks
    e.add("ad_astra:destroyed_in_space", ["#woodworks:leaf_piles",
    "angel_block:angel_block", "biomesoplenty:bramble_leaves", "biomesoplenty:orange_maple_leaf_pile", "biomesoplenty:red_maple_leaf_pile", "biomesoplenty:yellow_maple_leaf_pile", "buzzier_bees:four_leaf_clover", "xycraft_world:aluminum_torch", "xycraft_world:copper_torch"])

    // Add the "upgradeable wooden chest" tag to the modded ones
    e.add("ironchests:upgradeable_wooden_chests", ["environmental:pine_chest", "environmental:pine_chest", "environmental:willow_chest", "environmental:wisteria_chest",

    "upgrade_aquatic:driftwood_chest", "upgrade_aquatic:river_chest",

    "woodworks:oak_chest", "woodworks:spruce_chest", "woodworks:birch_chest", "woodworks:jungle_chest", "woodworks:acacia_chest", "woodworks:dark_oak_chest", "woodworks:mangrove_chest", "woodworks:cherry_chest", "woodworks:crimson_chest", "woodworks:warped_chest"])

})



// Fluid tags
ServerEvents.tags("fluid", e => {

    // e.add("forge:oil", ["ad_astra:oil", "thermal:crude_oil", "thermal:creosote"])
    e.add("forge:fuel", ["ad_astra:fuel", "thermal:refined_fuel"])
    e.add("forge:steam", ["biggerreactors:steam", "systeams:steam"])

})