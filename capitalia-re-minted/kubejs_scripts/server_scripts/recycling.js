// Adds tags and recipes for the recycling system (technically v4.0, I suppose?)
ServerEvents.tags("item", e => {

    // Primitive research
    e.add("reminted:primitive_research", ["researchlab:writing_desk", "researchlab:soiled_tome"])

    // Scrap tag
    // Order is default Iron, Gold, Mekanism's nuggets, then custom items
    e.add("reminted:shreddable", ["chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings", "iron_boots", "iron_sword", "iron_pickaxe", "iron_axe", "iron_shovel", "iron_hoe", "iron_horse_armor", "quark:trowel", "mekanismtools:iron_paxel",

    "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots", "golden_sword", "golden_pickaxe", "golden_axe", "golden_shovel", "golden_hoe", "golden_horse_armor", "mekanismtools:gold_paxel",

    "mekanismtools:bronze_helmet", "mekanismtools:bronze_chestplate", "mekanismtools:bronze_leggings", "mekanismtools:bronze_boots", "mekanismtools:bronze_sword", "mekanismtools:bronze_pickaxe", "mekanismtools:bronze_axe", "mekanismtools:bronze_shovel", "mekanismtools:bronze_hoe", "mekanismtools:bronze_paxel",
    
    "mekanismtools:osmium_helmet", "mekanismtools:osmium_chestplate", "mekanismtools:osmium_leggings", "mekanismtools:osmium_boots", "mekanismtools:osmium_sword", "mekanismtools:osmium_pickaxe", "mekanismtools:osmium_axe", "mekanismtools:osmium_shovel", "mekanismtools:osmium_hoe", "mekanismtools:osmium_paxel",

    "mekanismtools:steel_helmet", "mekanismtools:steel_chestplate", "mekanismtools:steel_leggings", "mekanismtools:steel_boots", "mekanismtools:steel_sword", "mekanismtools:steel_pickaxe", "mekanismtools:steel_axe", "mekanismtools:steel_shovel", "mekanismtools:steel_hoe", "mekanismtools:steel_paxel",

    "mekanismtools:refined_glowstone_helmet", "mekanismtools:refined_glowstone_chestplate", "mekanismtools:refined_glowstone_leggings", "mekanismtools:refined_glowstone_boots", "mekanismtools:refined_glowstone_sword", "mekanismtools:refined_glowstone_pickaxe", "mekanismtools:refined_glowstone_axe", "mekanismtools:refined_glowstone_shovel", "mekanismtools:refined_glowstone_hoe", "mekanismtools:refined_glowstone_paxel",

    "crossbow", "iron_door", "iron_trapdoor", "ironchests:copper_chest_upgrade", "ironchests:iron_chest_upgrade", "ironchests:copper_chest", "ironchests:iron_chest", "ironchests:copper_barrel", "ironchests:iron_barrel", "ironchests:lock", "ironchests:key", "ironchests:key_ring", "ironchests:iron_dolly", "wooledboots:wooled_chainmail_boots", "wooledboots:wooled_iron_boots", "wooledboots:wooled_gold_boots"])

    // Netherite and Refined Obsidian items are considered "dense", and give 4x the Scrap
    e.add("reminted:shreddable/dense", ["netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots", "netherite_sword", "netherite_pickaxe", "netherite_axe", "netherite_shovel", "netherite_hoe", "mekanismtools:netherite_paxel", "wooledboots:wooled_netherite_boots",

    "mekanismtools:refined_obsidian_helmet", "mekanismtools:refined_obsidian_chestplate", "mekanismtools:refined_obsidian_leggings", "mekanismtools:refined_obsidian_boots", "mekanismtools:refined_obsidian_sword", "mekanismtools:refined_obsidian_pickaxe", "mekanismtools:refined_obsidian_axe", "mekanismtools:refined_obsidian_shovel", "mekanismtools:refined_obsidian_hoe", "mekanismtools:refined_obsidian_paxel", "wooledboots:wooled_refined_obsidian_boots"])

})



// Recipes
ServerEvents.recipes(e => {

    // Remove smelting recipes
    e.remove({id: "minecraft:iron_nugget_from_smelting"})
    e.remove({id: "mekanismtools:iron_nugget_from_smelting"})
    e.remove({id: "quark:tools/smelting/trowel_to_iron_nugget"})

    e.remove({id: "minecraft:iron_nugget_from_blasting"})
    e.remove({id: "mekanismtools:iron_nugget_from_blasting"})

    //// Convert Scrap into various items
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

    // Osmium
    e.shaped(
      "mekanism:ingot_osmium",
        [
          "SSS",
          "SBS",
          "SSS"
        ],
        {
          B: "#forge:slimeballs",
          S: "kubejs:scrap"
        }
    ).id("kubejs:scrap_to_osmium")

    // Netherite Scrap
    e.recipes.extendedcrafting.compressor("netherite_scrap", "netherrack", "kubejs:scrap", 20, 16000).powerRate(16).id("kubejs:netherite_scrap");

})