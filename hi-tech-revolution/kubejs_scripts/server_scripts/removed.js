// Removes various recipes
ServerEvents.recipes(e => {

    // Remove redundant recipes
    // I found this fancy method in the 1.21 direwolf20 pack, and it's neat
    const redudant_removal = [
        "minecraft:magma_cream",
        "forestry:charcoal",
        "oceanfront:bonemeal",
        "outer_end:slime_from_gel",
        "xycraft_machines:shaped/sticky_piston_tagged",
        "yungscavebiomes:glass_from_ancient_sand"
    ]

    redudant_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


    // Remove vanilla wool dyeing recipes
    const dyeing_removal = [
        "minecraft:dye_white_wool",
        "minecraft:dye_orange_wool",
        "minecraft:dye_magenta_wool",
        "minecraft:dye_light_blue_wool",
        "minecraft:dye_yellow_wool",
        "minecraft:dye_lime_wool",
        "minecraft:dye_pink_wool",
        "minecraft:dye_gray_wool",
        "minecraft:dye_light_gray_wool",
        "minecraft:dye_cyan_wool",
        "minecraft:dye_purple_wool",
        "minecraft:dye_blue_wool",
        "minecraft:dye_brown_wool",
        "minecraft:dye_green_wool",
        "minecraft:dye_red_wool",
        "minecraft:dye_black_wool"
    ]

    dyeing_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


    // Removed to prevent recipe conflicts with variants
    // Each one has a Transmutator recipe, and should work with default recipes (e.g. uncrafting blocks)
    const conflict_removal = [
        "forestry:resource_storage_apatite",
        "galosphere:silver_block",
        "galosphere:silver_ingot",
        "galosphere:silver_nugget",
        "galosphere:silver_ingot_from_nuggets",
        "galosphere:raw_silver_block",
        "railcraft:bronze_ingot",
        "railcraft:bronze_ingot_from_bronze_nugget",
        "railcraft:bronze_block_from_bronze_ingot",
        "tcintegrations:bronze_nuggets_from_ingot",
        "tcintegrations:bronze_ingots_from_block",
        "tcintegrations:bronze_block_from_ingots",
        "thermal:apatite_block"
    ]

    conflict_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


    // Removed for balancing/replacement
    const balance_removal = [
        "ad_astra:steel_ingot",
        "ad_astra:steel_block",
        "ad_astra:strophar_ladder",
        "ae2:vibration_chamber",
        "ecologics:mushroom_stew_from_coconut_husk",
        "ecologics:rabbit_stew_from_red_mushroom_and_coconut_husk",
        "ecologics:rabbit_stew_from_brown_mushroom_and_coconut_husk",
        "forestry:ingot_bronze_alloying",
        "forestry:glistering_melon_slice",
        "railcraft:bronze_ingot_crafted_with_ingots",
        "railcraft:invar_ingot_crafted_with_ingots",
        "rftoolsbase:dimensionalshard",
        "thermal:augments/rs_control_augment",
        "wooltweaks:wool_to_string"
    ]

    balance_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


    // Removes recipes I moved to Masterful Machinery
    const masterful_removal = [
        "minecraft:ender_pearl",
        "minecraft:netherite_ingot",
        "minecraft:white_concrete_powder",
        "minecraft:orange_concrete_powder",
        "minecraft:magenta_concrete_powder",
        "minecraft:light_blue_concrete_powder",
        "minecraft:yellow_concrete_powder",
        "minecraft:lime_concrete_powder",
        "minecraft:pink_concrete_powder",
        "minecraft:gray_concrete_powder",
        "minecraft:light_gray_concrete_powder",
        "minecraft:cyan_concrete_powder",
        "minecraft:purple_concrete_powder",
        "minecraft:blue_concrete_powder",
        "minecraft:brown_concrete_powder",
        "minecraft:green_concrete_powder",
        "minecraft:red_concrete_powder",
        "minecraft:black_concrete_powder",
        "minecraft:music_disc_5",
        "enderio:smelting/biggerreactors/smelting/graphite_ingot",
        "alexscaves:music_disc_fusion",
        "upgrade_aquatic:music_disc_atlantis",
        "alexscaves:azure_neodymium_ingot",
        "alexscaves:scarlet_neodymium_ingot",
        "mffs:steel_compound",
        "redstone_arsenal:materials/flux_gem",
        "redstone_arsenal:materials/flux_dust",
        "redstone_arsenal:materials/flux_ingot_fire_charge_from_dust",
        "tempad:tempad"
    ]

    masterful_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

    // Removes recipes I moved to the Reprocessor
    e.remove({id: "biggerreactors:smelting/graphite_ingot"})
    e.remove({id: "biggerreactors:blasting/graphite_ingot"})


    // Removes recipes I moved to the Shredder
    e.remove({id: "thermal:machines/smelter/smelter_iron_armor"})
    e.remove({id: "thermal:machines/smelter/smelter_iron_tools"})

    e.remove({id: "thermal:machines/smelter/smelter_gold_armor"})
    e.remove({id: "thermal:machines/smelter/smelter_gold_tools"})

    e.remove({id: "thermal:machines/pulverizer/pulverizer_diamond_armor"})
    e.remove({id: "thermal:machines/pulverizer/pulverizer_diamond_tools"})



    // Remove errored recipes
    const error_removal = [
        "outer_end:azure_vertical_to_planks",
        "outer_end:azure_vertical_to_slab",
        "outer_end:himmel_vertical_to_slab",
        "outer_end:slab_from_vertical_slab",
        "outer_end:violite/bricks/slab_from_vertical_slab",
        "outer_end:violite/mossy_bricks/slab_from_vertical_slab",
        "outer_end:violite/mossy_tiles/slab_from_vertical_slab",
        "outer_end:violite/slab_from_vertical_slab",
        "outer_end:violite/tiles/slab_from_vertical_slab",
        "thermal:compat/biomesoplenty/sawmill_bop_cherry_logs",
        "thermal:compat/biomesoplenty/tree_extractor_bop_pink_cherry",
        "thermal:compat/biomesoplenty/tree_extractor_bop_white_cherry",
        "thermal:compat/biomesoplenty/insolator_bop_white_cherry_sapling",
        "thermal:compat/biomesoplenty/insolator_bop_pink_cherry_sapling",
        "thermal:compat/quark/insolator_quark_pink_blossom_sapling"
    ]

    error_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

})