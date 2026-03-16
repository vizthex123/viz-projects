// Adds tags and recipes for the recycling system (technically v4.0, I suppose?)
ServerEvents.tags("item", e => {

    // Scrap tag
    // Accepts damn near any metallic item
    e.add("reminted:shreddable", ["chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings", "iron_boots", "iron_horse_armor", "iron_sword", "iron_pickaxe", "iron_axe", "iron_shovel", "iron_hoe", "shears",

    "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots", "golden_horse_armor", "golden_sword", "golden_pickaxe", "golden_axe", "golden_shovel", "golden_hoe", "iron_door", "iron_trapdoor", "blast_furnace",
 
    "flint_and_steel", "bucket", "hopper", "minecart", "chest_minecart", "furnace_minecart", "hopper_minecart", "golden_apple", "golden_carrot", "glistering_melon_slice",

    "#forge:gears/iron", "#forge:gears/plates", "#minecraft:hanging_signs",

    "exlinecopperequipment:copper_sword", "exlinecopperequipment:copper_pickaxe", "exlinecopperequipment:copper_axe", "exlinecopperequipment:copper_shovel", "exlinecopperequipment:copper_hoe",
    "exlinecopperequipment:copper_helmet", "exlinecopperequipment:copper_chestplate", "exlinecopperequipment:copper_leggings", "exlinecopperequipment:copper_boots", "exlinecopperequipment:copper_horse_armor",

    "forestry:bronze_sword", "forestry:bronze_pickaxe", "forestry:bronze_axe", "forestry:bronze_shovel", "forestry:bronze_hoe",

    "mekanismtools:osmium_sword", "mekanismtools:osmium_pickaxe", "mekanismtools:osmium_axe", "mekanismtools:osmium_shovel", "mekanismtools:osmium_hoe",

    "mekanismtools:iron_paxel", "mekanismtools:gold_paxel", "mekanismtools:bronze_paxel", "mekanismtools:osmium_paxel", "energymeter:meter",



    "ae2:crank",

    "forestry:electron_tube_gold", "forestry:fabricator", 

    "ironchests:copper_chest_upgrade", "ironchests:iron_chest_upgrade", "ironchests:copper_chest", "ironchests:iron_chest", "ironchests:copper_barrel", "ironchests:iron_barrel", "ironchests:lock", "ironchests:key", "ironchests:key_ring", "ironchests:iron_dolly",

    "laboratoryblocks:configuration_tool", "leathered_boots:leathered_chainmail_boots", "leathered_boots:leathered_iron_boots", "leathered_boots:leathered_gold_boots",

    "projectred_expansion:auto_crafter", "projectred_exploration:iron_sickle", "projectred_exploration:gold_sickle", "cb_microblock:iron_saw", "projectred_exploration:gold_saw",

    "rosegoldequipment:rose_golden_sword", "rosegoldequipment:rose_golden_pickaxe", "rosegoldequipment:rose_golden_axe", "rosegoldequipment:rose_golden_shovel", "rosegoldequipment:rose_golden_hoe", "rosegoldequipment:rose_golden_helmet", "rosegoldequipment:rose_golden_chestplate", "rosegoldequipment:rose_golden_leggings", "rosegoldequipment:rose_golden_boots",

    "simplyjetpacks:leather_strap",

    "wooledboots:wooled_chainmail_boots", "wooledboots:wooled_iron_boots", "wooledboots:wooled_gold_boots",

    "quark:trowel", "quark:iron_button", "quark:iron_rod", "quark:pipe", "quark:encased_pipe",

    "quickquarry:iron_quarry", "quickquarry:ender_quarry", "squarry:fuel_quarry", "squarry:powered_quarry",

	"quark:crafter", "craftingautomat:autocrafter", "thermal:machine_crafter",

	"mm:machine_core", "mm:transmutation_core", "mm:fluid_input", "mm:fluid_output", "mm:energy_input", "mm:energy_output", "mm:item_input", "mm:item_output", "mm:item_large_input", "mm:item_large_output", "mm:circuitry", "mm:gearbox", "mm:vent"])


    // Small items (<1 ingot to craft)
    // Mostly in lab_blocks.js
    e.add("reminted:shreddable/small", ["tripwire_hook", "iron_bars", "quark:iron_plate", "quark:iron_plate_stairs", "quark:iron_plate_slab", "quark:iron_plate_vertical_slab", "quark:rusty_iron_plate", "quark:rusty_iron_plate_stairs", "quark:rusty_iron_plate_slab", "quark:rusty_iron_plate_vertical_slab", "quark:iron_pillar", "quark:iron_ladder"])


    // Lead, Netherite, and Refined Obsidian items are considered "dense", and give a special type of Scrap
    // Also applies to Enchanted Golden Apples cuz they used to be crafted with 8 Gold Blocks (anyone else remember that?)
    e.add("reminted:shreddable/dense", ["enchanted_golden_apple", "#forge:gears/lead", "#forge:plates/lead", "thermal:energy_duct", "thermal:fluid_duct", "thermal:flux_capacitor", "thermal:flux_magnet", "thermal:energy_cell_frame", "thermal:energy_cell", "thermal:charge_bench",

    "#forge:gears/netherite", "#forge:plates/netherite", "netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots", "netherite_sword", "netherite_pickaxe", "netherite_axe", "netherite_shovel", "netherite_hoe", "mekanismtools:netherite_paxel", "leathered_boots:leathered_netherite_boots", "wooledboots:wooled_netherite_boots",

    "squarry:upgrade_fortune_3", "lodestone", "functionalstorage:armory_cabinet"])


    // Diamond and other gems have their own version
    e.add("reminted:shreddable/gem", ["#forge:gears/diamond", "#forge:plates/diamond",

    "diamond_helmet", "diamond_chestplate", "diamond_leggings", "diamond_boots", "diamond_horse_armor", "diamond_sword", "diamond_pickaxe", "diamond_axe", "diamond_shovel", "diamond_hoe", "mekanismtools:diamond_paxel", "mekanismtools:lapis_lazuli_paxel",

    "ae2:nether_quartz_sword", "ae2:nether_quartz_pickaxe", "ae2:nether_quartz_axe", "ae2:nether_quartz_shovel", "ae2:nether_quartz_hoe", "ae2:certus_quartz_sword", "ae2:certus_quartz_pickaxe", "ae2:certus_quartz_axe", "ae2:certus_quartz_shovel", "ae2:certus_quartz_hoe", "ae2:fluix_sword", "ae2:fluix_pickaxe", "ae2:fluix_axe", "ae2:fluix_shovel", "ae2:fluix_hoe", "ae2:nether_quartz_cutting_knife", "ae2:certus_quartz_cutting_knife", "ae2:nether_quartz_wrench", "ae2:certus_quartz_wrench",

    "ironchests:diamond_dolly",

    "leathered_boots:leathered_diamond_boots", "wooledboots:wooled_diamond_boots",

    "projectred_exploration:ruby_sword", "projectred_exploration:ruby_pickaxe", "projectred_exploration:ruby_axe", "projectred_exploration:ruby_shovel", "projectred_exploration:ruby_hoe", "projectred_exploration:sapphire_sword", "projectred_exploration:sapphire_pickaxe", "projectred_exploration:sapphire_axe", "projectred_exploration:sapphire_shovel", "projectred_exploration:sapphire_hoe", "projectred_exploration:peridot_sword", "projectred_exploration:peridot_pickaxe", "projectred_exploration:peridot_axe", "projectred_exploration:peridot_shovel", "projectred_exploration:peridot_hoe", "projectred_exploration:ruby_helmet", "projectred_exploration:ruby_chestplate", "projectred_exploration:ruby_leggings", "projectred_exploration:ruby_boots", "projectred_exploration:sapphire_helmet", "projectred_exploration:sapphire_chestplate", "projectred_exploration:sapphire_leggings", "projectred_exploration:sapphire_boots", "projectred_exploration:peridot_helmet", "projectred_exploration:peridot_chestplate", "projectred_exploration:peridot_leggings", "projectred_exploration:peridot_boots",

    "projectred_exploration:diamond_sickle", "projectred_exploration:ruby_sickle", "projectred_exploration:sapphire_sickle", "projectred_exploration:peridot_sickle",

    "cb_microblock:diamond_saw", "projectred_exploration:ruby_saw", "projectred_exploration:sapphire_saw", "projectred_exploration:peridot_saw",

    "classicpipes:diamond_pipe", "classicpipes:diamond_fluid_pipe"
    ])


    // Leather
    e.add("reminted:shreddable/leather", ["leather_horse_armor", "leather_helmet", "leather_chestplate", "leather_leggings", "leather_boots", "wooledboots:wooled_leather_boots", "travelersboots:travelers_boots", "bundle", "#upgrade_aquatic:bedrolls"])


    // Sawdust
    e.add("reminted:shreddable/wood", ["wooden_sword", "wooden_pickaxe", "wooden_axe", "wooden_shovel", "wooden_hoe", "mekanismtools:wood_paxel", "forestry:scoop",

    "#minecraft:signs", "#minecraft:wooden_slabs", "#minecraft:wooden_stairs", "#minecraft:wooden_fences", "#forge:fence_gates/wooden", "#minecraft:wooden_doors", "#minecraft:wooden_trapdoors","#minecraft:wooden_pressure_plates",

    "#forge:boats", "#forge:workbench", "#forge:chests/wooden", "#forge:barrels/wooden", 

    "#functionalstorage:drawer", "#reminted:wooden_pipe"])


    // Glue Residue
    e.add("reminted:reprocess_into_glue_residue", ["lead", "magma_cream", "sticky_piston"])



    /// Rock Crusher
    // Mud
    e.add("reminted:crushable/mud", ["packed_mud", "mud_bricks", "mud_brick_stairs", "mud_brick_wall", "quark:carved_mud_bricks", "quark:mud_pillar", "quark:mud_brick_lattice", "mud_brick_slab", "quark:mud_brick_vertical_slab"])

    // Stone
    e.add("reminted:crushable/stone", ["#reminted:furnace", "smoker", "blast_furnace", "furnace_minecart"])

    // Stone Tools
    e.add("reminted:crushable/stone_tool", ["stone_sword", "stone_pickaxe", "stone_axe", "stone_shovel", "stone_hoe", "mekanismtools:stone_paxel"])

    // Machine Blocks
    e.add("reminted:crushable/machine_block", ["mm:machine_core", "mm:item_small_input", "mm:item_small_output", "mm:circuitry", "mm:gearbox", "mm:vent"])

})



// Recipes
ServerEvents.recipes(e => {

    // Remove default recipes
    e.remove({type: "smelting", output: "iron_nugget"})
    e.remove({type: "blasting", output: "iron_nugget"})

    e.remove({type: "smelting", output: "gold_nugget"})
    e.remove({type: "blasting", output: "gold_nugget"})

    e.remove({type: "smelting", output: "exlinecopperequipment:copper_nugget"})
    e.remove({type: "blasting", output: "exlinecopperequipment:copper_nugget"})

    // Disc Residue
    e.blasting("kubejs:disc_residue", "#minecraft:music_discs", 8).id("kubejs:disc_residue")

    // Sawmill version of wood recycling
    e.recipes.thermal.sawmill(["4x thermal:sawdust", Item.of("4x thermal:sawdust").withChance(0.5)], "#reminted:shreddable/wood", 0).energy(500).id("kubejs:wood_recycling")

    // Recycling stuff -> Transmutation Fluid
    e.recipes.thermal.crucible([Fluid.of("kubejs:transmutation_slurry", 250)], "kubejs:congealed_matter", 0).energy(2000).id("kubejs:melt_congealed_matter")
    e.recipes.thermal.crucible([Fluid.of("kubejs:transmutation_slurry", 50)], "kubejs:scrap", 0).energy(2000).id("kubejs:melt_scrap")
    e.recipes.thermal.crucible([Fluid.of("kubejs:transmutation_slurry", 10)], "thermal:sawdust", 0).energy(1000).id("kubejs:melt_sawdust")
    e.recipes.thermal.crucible([Fluid.of("kubejs:transmutation_slurry", 5)], "kubejs:powdered_stone", 0).energy(1500).id("kubejs:melt_powdered_stone")



    //// Convert Congealed Matter into various items

    // Ruby (power used is is 1470*4, rate is 125 because that's when RedPower was popular lol)
    e.recipes.extendedcrafting.compressor("thermal:ruby", "#reminted:equipment_gems", "kubejs:congealed_matter", 50, 5880).powerRate(125).id("kubejs:ruby");

    // Diamond
    e.recipes.extendedcrafting.compressor("diamond", "kubejs:scrap", "kubejs:congealed_matter", 100, 8192).powerRate(8).id("kubejs:diamond");



    //// Convert Scrap into various ingots

    // Iron
    e.shaped(
      "iron_ingot",
        [
          "SS",
          "SS"
        ],
        {
          S: "kubejs:scrap"
        }
    ).id("kubejs:scrap_to_iron")
    e.shapeless("8x iron_ingot", ["kubejs:scrap_dense", "kubejs:scrap_dense"]).id("kubejs:dense_scrap_to_iron")

    // Gold
    e.shaped(
      "gold_ingot",
        [
          "UUU",
          "SSS"
        ],
        {
          S: "kubejs:scrap",
          U: "kubejs:congealed_matter"
        }
    ).id("kubejs:scrap_to_gold")
    e.shapeless("3x gold_ingot", ["kubejs:scrap_dense", "kubejs:scrap_dense", "kubejs:congealed_matter", "kubejs:congealed_matter"]).id("kubejs:dense_scrap_to_gold")

    // Copper
    e.shapeless("copper_ingot", ["kubejs:scrap"]).id("kubejs:scrap_to_copper")

    // Tin
    e.shapeless("thermal:tin_ingot", ["kubejs:scrap", "kubejs:scrap"]).id("kubejs:scrap_to_tin")

    // Silver & Lead
    e.shapeless("thermal:silver_ingot", ["kubejs:scrap", "kubejs:scrap", "kubejs:scrap"]).id("kubejs:scrap_to_silver")
    e.shapeless("thermal:lead_ingot", ["kubejs:scrap", "kubejs:scrap", "kubejs:scrap", "kubejs:congealed_matter"]).id("kubejs:scrap_to_lead")

    e.shapeless("3x thermal:silver_ingot", ["kubejs:scrap_dense", "kubejs:congealed_matter"]).id("kubejs:dense_scrap_to_silver")
    e.shapeless("3x thermal:lead_ingot", ["kubejs:scrap_dense", "kubejs:congealed_matter", "kubejs:congealed_matter"]).id("kubejs:dense_scrap_to_lead")

    /// Dense Scrap

    // Netherite
    e.recipes.extendedcrafting.compressor("netherite_ingot", "netherrack", "kubejs:scrap_dense", 4, 16500).powerRate(16).id("kubejs:netherite_ingot");

})