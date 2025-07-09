// Adds tags and recipes for the recycling system (technically v4.0, I suppose?)
ServerEvents.tags("item", e => {

    // Primitive research
    e.add("reminted:primitive_research", ["researchlab:writing_desk", "researchlab:soiled_tome"])

    // Scrap tag
    // Order is default Iron, Gold, Mekanism's nuggets, then custom items
    e.add("reminted:shreddable", ["chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings", "iron_boots", "iron_sword", "iron_pickaxe", "iron_axe", "iron_shovel", "iron_hoe", "iron_horse_armor", "quark:trowel",

    "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots", "golden_sword", "golden_pickaxe", "golden_axe", "golden_shovel", "golden_hoe", "golden_horse_armor",

    "crossbow", "iron_door", "iron_trapdoor", "ironchests:copper_chest_upgrade", "ironchests:iron_chest_upgrade", "ironchests:copper_chest", "ironchests:iron_chest", "ironchests:copper_barrel", "ironchests:iron_barrel", "ironchests:lock", "ironchests:key", "ironchests:key_ring", "ironchests:iron_dolly", "wooledboots:wooled_chainmail_boots", "wooledboots:wooled_iron_boots", "wooledboots:wooled_gold_boots"])

    // Netherite and Refined Obsidian items are considered "dense", and give 4x the Scrap
    e.add("reminted:shreddable/dense", ["netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots", "netherite_sword", "netherite_pickaxe", "netherite_axe", "netherite_shovel", "netherite_hoe", "cl0uds_paxels:netherite_paxel", "wooledboots:wooled_netherite_boots", "#forge:gears/netherite", "#forge:plates/netherite",

    "lodestone", "functionalstorage:armory_cabinet", "squarry:upgrade_fortune_3"
    ])

})



// Recipes
ServerEvents.recipes(e => {

    // Remove smelting recipes
    e.remove({id: "minecraft:iron_nugget_from_smelting"})
    e.remove({id: "minecraft:gold_nugget_from_smelting"})
    e.remove({id: "quark:tools/smelting/trowel_to_iron_nugget"})

    e.remove({id: "minecraft:iron_nugget_from_blasting"})
    e.remove({id: "minecraft:gold_nugget_from_blasting"})

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

    // Copper
    e.shapeless("copper_ingot", ["kubejs:scrap"]).id("kubejs:scrap_to_copper")

    // Tin
    e.shapeless("thermal:tin_ingot", ["kubejs:scrap", "kubejs:scrap"]).id("kubejs:scrap_to_tin")

    // Silver & Lead
    e.shapeless("thermal:silver_ingot", ["kubejs:scrap", "kubejs:scrap", "kubejs:scrap", "#forge:dyes/white"]).id("kubejs:scrap_to_silver")
    e.shapeless("thermal:lead_ingot", ["kubejs:scrap", "kubejs:scrap", "kubejs:scrap", "#forge:dyes/black"]).id("kubejs:scrap_to_lead")

    e.shapeless("3x thermal:silver_ingot", ["kubejs:scrap_dense", "#forge:dyes/white"]).id("kubejs:dense_scrap_to_silver")
    e.shapeless("3x thermal:lead_ingot", ["kubejs:scrap_dense", "#forge:dyes/black"]).id("kubejs:dense_scrap_to_lead")

    // Netherite Scrap
    e.recipes.extendedcrafting.compressor("2x netherite_scrap", "netherrack", "kubejs:scrap_dense", 10, 16000).powerRate(16).id("kubejs:netherite_scrap");

})