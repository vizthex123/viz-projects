// Adds tags to items that can be processed into Scrap
onEvent("item.tags", e => {

    //// Scrap amounts:
    //// ≥ 9 Ingots of material = 1 Scrap
    //// 1 Ingot of material = 1 Small (default scrap type)
    //// ≤8 Nuggets of material = 1 Tiny

    /// Item order is as follows:
    /// Tags, equipment (Armour -> tools -> other), items, blocks

    // Copper
    e.add("quintessence:scrappable/copper", ["#forge:gears/copper", "#forge:plates/copper", "lightning_rod", "spyglass",

    "ae2:fluid_cell_housing", "ae2:fluid_storage_cell_1k", "ae2:fluid_storage_cell_4k", "ae2:fluid_storage_cell_16k", "ae2:fluid_storage_cell_64k", "ae2:fluid_storage_cell_256k", 

    "#create:valve_handles", "create:copper_diving_helmet", "create:copper_backtank", "create:copper_diving_boots", "create:copper_casing", "create:copper_door", "create:fluid_pipe", "create:smart_fluid_pipe", "create:fluid_valve", "create:mechanical_pump",

    "additionaladditions:depth_meter", "additionaladditions:watering_can",

    "botania:cacophonium",

    "essentials:sorting_hopper",

    "functionalstorage:copper_upgrade",

    "ironchest:wood_to_copper_chest_upgrade", "ironchest:copper_chest", "ironchest:trapped_copper_chest",

    "quark:pipe",

    "tconstruct:travelers_helmet", "tconstruct:travelers_chestplate", "tconstruct:travelers_leggings", "tconstruct:travelers_boots", "tconstruct:travelers_shield", "tconstruct:copper_can"])


    //// ≤ 8 Nuggets
    e.add("quintessence:scrappable/copper_tiny", ["createaddition:copper_spool", "createaddition:festive_spool", "enlightened_end:helium_dart", "enlightened_end:xenon_dart"])


    //// ≥ 9 Ingots
    e.add("quintessence:scrappable/copper_big", ["create:steam_engine"])





    // Iron
    e.add("quintessence:scrappable/iron", ["#quintessence:tape_measure", "chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "leathered_boots:leathered_chainmail_boots",
    "iron_helmet", "iron_chestplate", "iron_leggings", "iron_boots", "leathered_boots:leathered_iron_boots",
    "iron_sword", "iron_pickaxe", "iron_shovel", "iron_hoe", "iron_axe", "shield", "shears", "crossbow", "flint_and_steel",
    "bucket", "compass",

    "activator_rail", "detector_rail", "minecart", "chest_minecart", "furnace_minecart", "tnt_minecart",
    "blast_furnace", "cauldron", "heavy_weighted_pressure_plate", "tripwire_hook", "hopper", "iron_door", "iron_trapdoor", "smithing_table", "stonecutter", 

    "additionaladditions:crossbow_with_spyglass",

    "ae2:wireless_booster",

    "apotheosis:broadhead_arrow", "apotheosis:iron_mining_arrow", "apotheosis:salvaging_table", 

    "aquamirae:terrible_helmet", "aquamirae:terrible_chestplate", "aquamirae:terrible_leggings", "aquamirae:terrible_boots", "aquamirae:terrible_sword", "aquamirae:poisoned_blade", "aquamirae:oxygen_tank",

    "bloodmagic:daggerofsacrifice",

    "byg:chain_plating",

    "cookingforblockheads:heating_unit", "cookingforblockheads:ice_unit", "cookingforblockheads:fridge", "cookingforblockheads:oven", "cookingforblockheads:toaster",

    "create:filter", "create:super_glue", "create:chute", "create:ornate_iron_window", "create:mechanical_mixer", "create:mechanical_drill", "create:mechanical_saw", "create:metal_bracket",

    "enigmaticlegacy:iron_ring",

    "enlightened_end:flash_bomb", "enlightened_end:helium_lantern", "enlightened_end:xenon_lantern",

    "essentials:wrench", "essentials:item_chute", "essentials:basic_fluid_splitter", "essentials:basic_item_splitter",

    "fuel_canister:fuel_canister",

    "functionalstorage:iron_downgrade", "functionalstorage:compacting_framed_drawer", "functionalstorage:framed_1", "functionalstorage:framed_2", "functionalstorage:framed_4", "functionalstorage:compacting_drawer", "functionalstorage:simple_compacting_drawer",

    "ironchest:copper_to_iron_chest_upgrade", "ironchest:wood_to_iron_chest_upgrade", "ironchest:iron_chest", "ironchest:trapped_iron_chest", 

    "malum:crude_scythe",

    "thermal:hazmat_helmet", "thermal:hazmat_chestplate", "thermal:hazmat_leggings", "thermal:hazmat_boots", "thermal:drill_head", "thermal:saw_blade", "thermal:redstone_servo", "thermal:slot_seal", "thermal:crossover_rail",

    "quark:trowel", "quark:abacus", "quark:backpack",

    "quark:framed_glass", "quark:grate", "quark:iron_button", "quark:iron_ladder",

    "xnet:antenna"])


    //// ≤ 8 Nuggets
    e.add("quintessence:scrappable/iron_tiny", ["chain", "iron_bars", "lantern", "soul_lantern", "rail",

    "botania:ghost_rail",

    "byg:boric_lantern", "byg:cryptic_lantern", "byg:glowstone_lantern", "byg:therium_lantern",

    "cookingforblockheads:tool_rack",

    "create:encased_chain_drive",
    "createaddition:spool",

    "quark:iron_plate", "quark:iron_plate_slab", "quark:iron_plate_stairs", "quark:iron_plate_vertical_slab", "quark:rusty_iron_plate", "quark:rusty_iron_plate_slab", "quark:rusty_iron_plate_stairs", "quark:rusty_iron_plate_vertical_slab",

    "refinedpipes:basic_extractor_attachment", "refinedpipes:basic_item_pipe",

    "twilightforest:iron_ladder", "#whisperwoods:wisp_lantern"])


    //// ≥ 9 Ingots
    e.add("quintessence:scrappable/iron_big", ["iron_horse_armor", "hopper_minecart", "anvil", "chipped_anvil", "damaged_anvil",
    "aquamirae:three_bolt_helmet", "aquamirae:three_bolt_suit", "aquamirae:three_bolt_leggings", "aquamirae:three_bolt_boots",

    "bloodmagic:soulforge",

    "create:mechanical_press", "create:schematicannon",

    "xnet:antenna_base", "xnet:antenna_dish"])





    // Gold
    e.add("quintessence:scrappable/gold", ["golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots", "leathered_boots:leathered_gold_boots",
    "golden_sword", "golden_pickaxe", "golden_shovel", "golden_hoe", "golden_axe",
    "bell", "clock", "gilded_blackstone", "glistering_melon_slice", "golden_apple", "golden_carrot", "light_weighted_pressure_plate", "powered_rail",

    "additionaladditions:gold_ring",

    "bloodmagic:sacrificialdagger",

    "create:steam_whistle",

    "enigmaticlegacy:extradimensional_eye", "enigmaticlegacy:gem_ring",

    "functionalstorage:gold_upgrade",

    "ironchest:iron_to_gold_chest_upgrade",

    "nourished_nether:gilded_blackstone_bricks",

    "quark:gold_button"])


    //// ≤ 8 Nuggets
    e.add("quintessence:scrappable/gold_tiny", ["quark:gold_bars", "tconstruct:gold_bars"])

    //// ≥ 9 Ingots
    e.add("quintessence:scrappable/gold_big", ["golden_horse_armor"])



    // Diamond
    e.add("quintessence:scrappable/diamond", ["diamond_helmet", "diamond_chestplate", "diamond_leggings", "diamond_boots", "leathered_boots:leathered_diamond_boots",
    "diamond_sword", "diamond_pickaxe", "diamond_shovel", "diamond_hoe", "diamond_axe",
    "enchanting_table", "jukebox",

    "apotheosis:diamond_mining_arrow",

    "enigmaticlegacy:mining_charm",

    "functionalstorage:diamond_upgrade",

    "longfallboots:longfallboots",

    "quark:pickarang"])


    //// ≥ 9 Ingots
    e.add("quintessence:scrappable/diamond_big", ["diamond_horse_armor"])



    // Netherite
    e.add("quintessence:scrappable/netherite", ["netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots", "leathered_boots:leathered_netherite_boots",
    "netherite_sword", "netherite_pickaxe", "netherite_shovel", "netherite_hoe", "netherite_axe", "lodestone",

    "additionaladditions:gilded_netherite_helmet", "additionaladditions:gilded_netherite_chestplate", "additionaladditions:gilded_netherite_leggings", "additionaladditions:gilded_netherite_boots",
    "bygonenether:gilded_netherite_helmet", "bygonenether:gilded_netherite_chestplate", "bygonenether:gilded_netherite_leggings", "bygonenether:gilded_netherite_boots",

    "functionalstorage:netherite_upgrade",

    "quark:flamerang"])



    //// Modded
    // Platinum
    e.add("quintessence:scrappable/platinum", ["ob_core:paladin_helmet", "ob_core:paladin_extra_helmet", "ob_core:paladin_chestplate", "ob_core:paladin_leggings", "ob_core:paladin_boots",
    "ob_core:dagger_billet", "ob_core:sword_billet", "ob_core:lance_billet", "ob_core:prospectors_pick",
    "#quintessence:ae2_press", "ob_core:platinum_bolt", "ob_core:platinum_bricks"])


    // Lumium
    e.add("quintessence:scrappable/lumium", ["#forge:gears/lumium", "#forge:plates/lumium", "thermal:lumium_crossover_rail", "thermal:lumium_glass"])


    // Rose Gold
    // Smelts into Copper, blasts into Gold
    e.add("quintessence:scrappable/rose_gold", ["additionaladditions:rose_gold_helmet", "additionaladditions:rose_gold_chestplate", "additionaladditions:rose_gold_leggings", "additionaladditions:rose_gold_boots",
    "additionaladditions:rose_gold_sword", "additionaladditions:rose_gold_pickaxe", "additionaladditions:rose_gold_shovel", "additionaladditions:rose_gold_hoe", "additionaladditions:rose_gold_axe"])


    //// Twilight Forest
    // Fiery
    e.add("quintessence:scrappable/fiery", ["twilightforest:fiery_helmet", "twilightforest:fiery_chestplate", "twilightforest:fiery_leggings", "twilightforest:fiery_boots",
    "twilightforest:fiery_sword", "twilightforest:fiery_pickaxe"])

    // Ironwood
    e.add("quintessence:scrappable/ironwood", ["twilightforest:ironwood_helmet", "twilightforest:ironwood_chestplate", "twilightforest:ironwood_leggings", "twilightforest:ironwood_boots",
    "twilightforest:ironwood_sword", "twilightforest:ironwood_pickaxe", "twilightforest:ironwood_shovel", "twilightforest:ironwood_hoe", "twilightforest:ironwood_axe"])

    // Knightmetal
    e.add("quintessence:scrappable/knightmetal", ["twilightforest:knightmetal_helmet", "twilightforest:knightmetal_chestplate", "twilightforest:knightmetal_leggings", "twilightforest:knightmetal_boots",
    "twilightforest:knightmetal_sword", "twilightforest:knightmetal_pickaxe", "twilightforest:knightmetal_axe", "twilightforest:knightmetal_shield", "twilightforest:knightmetal_ring"])

    e.add("quintessence:scrappable/knightmetal_big", ["twilightforest:block_and_chain", "twilightforest:phantom_helmet", "twilightforest:phantom_chestplate", "twilightforest:mazebreaker_pickaxe"])

    // Steeleaf
    e.add("quintessence:scrappable/steeleaf", ["twilightforest:steeleaf_helmet", "twilightforest:steeleaf_chestplate", "twilightforest:steeleaf_leggings", "twilightforest:steeleaf_boots",
    "twilightforest:steeleaf_sword", "twilightforest:steeleaf_pickaxe", "twilightforest:steeleaf_shovel", "twilightforest:steeleaf_hoe", "twilightforest:steeleaf_axe"])




    ///// Items with no scrap
    // Bronze
    e.add("quintessence:scrappable/bronze",
    ["essentials:multi_piston", "essentials:multi_piston_sticky",
    "thermal:watering_can", "thermal:device_water_gen", "thermal:fluid_cell_frame", "thermal:fluid_duct", "thermal:fluid_duct_windowed"])

    // Prismarine
    e.add("quintessence:scrappable/prismarine",
    ["trident", "apotheosis:prismatic_web", "thermal:prismarine_activator_rail", "thermal:prismarine_crossover_rail", "thermal:prismarine_detector_rail", "thermal:prismarine_rail", "upgrade_aquatic:prismarine_rod"])

})



// Add recipes to processing items into Scrap
onEvent("recipes", e => {

    ///// Scrap recipes
    e.shapeless("kubejs:copper_scrap", ["kubejs:small_copper_scrap", "kubejs:small_copper_scrap", "kubejs:small_copper_scrap"]).id("kubejs:copper_scrap")
    e.shaped(
        "kubejs:copper_scrap",
        [
          "SSS",
          "SSS",
          "SSS"
        ],
        {
          S: "kubejs:tiny_copper_scrap"
        }
    ).id("kubejs:copper_scrap_from_tiny")

    e.shapeless("kubejs:iron_scrap", ["kubejs:small_iron_scrap", "kubejs:small_iron_scrap", "kubejs:small_iron_scrap"]).id("kubejs:iron_scrap")
    e.shaped(
        "kubejs:iron_scrap",
        [
          "SSS",
          "SSS",
          "SSS"
        ],
        {
          S: "kubejs:tiny_iron_scrap"
        }
    ).id("kubejs:iron_scrap_from_tiny")

    e.shapeless("kubejs:gold_scrap", ["kubejs:small_gold_scrap", "kubejs:small_gold_scrap", "kubejs:small_gold_scrap"]).id("kubejs:gold_scrap")
    e.shaped(
        "kubejs:gold_scrap",
        [
          "SSS",
          "SSS",
          "SSS"
        ],
        {
          S: "kubejs:tiny_gold_scrap"
        }
    ).id("kubejs:gold_scrap_from_tiny")

    e.shapeless("kubejs:diamond_scrap", ["kubejs:small_diamond_scrap", "kubejs:small_diamond_scrap", "kubejs:small_diamond_scrap"]).id("kubejs:diamond_scrap")

    e.shapeless("kubejs:emerald_scrap", ["kubejs:small_emerald_scrap", "kubejs:small_emerald_scrap", "kubejs:small_emerald_scrap"]).id("kubejs:emerald_scrap")


    //// Modded
    e.shapeless("kubejs:platinum_scrap", ["kubejs:small_platinum_scrap", "kubejs:small_platinum_scrap", "kubejs:small_platinum_scrap"]).id("kubejs:platinum_scrap")
    e.shapeless("kubejs:lumium_scrap", ["kubejs:small_lumium_scrap", "kubejs:small_lumium_scrap", "kubejs:small_lumium_scrap"]).id("kubejs:lumium_scrap")

    /// Twilight Forest
    e.shapeless("kubejs:fiery_scrap", ["kubejs:small_fiery_scrap", "kubejs:small_fiery_scrap", "kubejs:small_fiery_scrap"]).id("kubejs:fiery_scrap")
    e.shapeless("kubejs:ironwood_scrap", ["kubejs:small_ironwood_scrap", "kubejs:small_ironwood_scrap", "kubejs:small_ironwood_scrap"]).id("kubejs:ironwood_scrap")
    e.shapeless("kubejs:knightmetal_scrap", ["kubejs:small_knightmetal_scrap", "kubejs:small_knightmetal_scrap", "kubejs:small_knightmetal_scrap"]).id("kubejs:knightmetal_scrap")
    e.shapeless("kubejs:steeleaf_scrap", ["kubejs:small_steeleaf_scrap", "kubejs:small_steeleaf_scrap", "kubejs:small_steeleaf_scrap"]).id("kubejs:steeleaf_scrap")

})