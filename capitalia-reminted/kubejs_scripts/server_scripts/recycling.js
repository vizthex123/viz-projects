// Adds tags and recipes for the recycling system (technically v4.0, I suppose?)
ServerEvents.tags("item", e => {

    // Primitive research
    // Used for a custom recycling recipe
    e.add("reminted:primitive_research", ["researchlab:writing_desk", "researchlab:soiled_tome"])

    // Scrap tag
    e.add("reminted:shreddable", ["chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings", "iron_boots", "iron_sword", "iron_pickaxe", "iron_axe", "iron_shovel", "iron_hoe", "iron_horse_armor",

    "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots", "golden_sword", "golden_pickaxe", "golden_axe", "golden_shovel", "golden_hoe", "golden_horse_armor", "crossbow", "iron_door", "iron_trapdoor",

    "golden_apple", "golden_carrot", "glistering_melon_slice",

    "cl0uds_paxels:iron_paxel", "cl0uds_paxels:golden_paxel",

    "ironchests:copper_chest_upgrade", "ironchests:iron_chest_upgrade", "ironchests:copper_chest", "ironchests:iron_chest", "ironchests:copper_barrel", "ironchests:iron_barrel", "ironchests:lock", "ironchests:key", "ironchests:key_ring", "ironchests:iron_dolly", "quark:trowel", "wooledboots:wooled_chainmail_boots",
    "wooledboots:wooled_iron_boots", "wooledboots:wooled_gold_boots",

    "quickquarry:iron_quarry", "quickquarry:ender_quarry", "squarry:fuel_quarry", "squarry:powered_quarry"])

    // Lead, Netherite, and Refined Obsidian items are considered "dense", and give a special type of Scrap
    // Also applies to Enchanted Golden Apples cuz they used to be crafted with 8 Gold Blocks (anyone else remember that?)
    e.add("reminted:shreddable/dense", ["#forge:gears/lead", "#forge:plates/lead", "thermal:energy_duct", "thermal:fluid_duct", "thermal:flux_capacitor", "thermal:flux_magnet", "thermal:energy_cell_frame", "thermal:energy_cell", "thermal:charge_bench",

    "enchanted_golden_apple", 

    "#forge:gears/netherite", "#forge:plates/netherite", "netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots", "netherite_sword", "netherite_pickaxe", "netherite_axe", "netherite_shovel", "netherite_hoe", "lodestone", "cl0uds_paxels:netherite_paxel", "functionalstorage:armory_cabinet", "squarry:upgrade_fortune_3", "wooledboots:wooled_netherite_boots"])

})



// Recipes
ServerEvents.recipes(e => {

    // Remove default recipes
    e.remove({id: "minecraft:iron_nugget_from_smelting"})
    e.remove({id: "minecraft:gold_nugget_from_smelting"})
    e.remove({id: "quark:tools/smelting/trowel_to_iron_nugget"})

    e.remove({id: "minecraft:iron_nugget_from_blasting"})
    e.remove({id: "minecraft:gold_nugget_from_blasting"})

    /// Disc Residue
    e.blasting("kubejs:disc_residue", "#minecraft:music_discs", 2).id("kubejs:disc_residue")

    // Disc Residue -> Bitumen & Oil
    e.recipes.thermal.centrifuge(["8x thermal:bitumen", Fluid.of("thermal:crude_oil", 250)], "kubejs:disc_residue", 4).energy(1200).id("kubejs:disc_residue_to_bitumen")

    /// Convert Congealed Matter into various items
    // It can substitute for Scrap by using the reminted:scrap tag

    //// Convert Scrap into various items
    // Iron
    e.shaped(
      "iron_ingot",
        [
          "SS",
          "UU"
        ],
        {
          S: "kubejs:scrap",
          U: "#reminted:scrap"
        }
    ).id("kubejs:scrap_to_iron")

    // Copper
    e.shapeless("copper_ingot", ["kubejs:scrap"]).id("kubejs:scrap_to_copper")

    // Tin
    e.shapeless("thermal:tin_ingot", ["kubejs:scrap", "#reminted:scrap"]).id("kubejs:scrap_to_tin")

    // Silver & Lead
    e.shapeless("thermal:silver_ingot", ["kubejs:scrap", "#reminted:scrap", "#reminted:scrap", "#forge:dyes/white"]).id("kubejs:scrap_to_silver")
    e.shapeless("thermal:lead_ingot", ["kubejs:scrap", "#reminted:scrap", "#reminted:scrap", "kubejs:congealed_matter"]).id("kubejs:scrap_to_lead")

    e.shapeless("3x thermal:silver_ingot", ["kubejs:scrap_dense", "kubejs:congealed_matter", "#forge:dyes/white"]).id("kubejs:dense_scrap_to_silver")
    e.shapeless("3x thermal:lead_ingot", ["kubejs:scrap_dense", "kubejs:congealed_matter", "kubejs:congealed_matter"]).id("kubejs:dense_scrap_to_lead")
/*
    // Netherite Scrap
    e.recipes.extendedcrafting.compressor("netherite_scrap", "netherrack", "kubejs:scrap_dense", 10, 16500).powerRate(16).id("kubejs:netherite_scrap");
*/
})