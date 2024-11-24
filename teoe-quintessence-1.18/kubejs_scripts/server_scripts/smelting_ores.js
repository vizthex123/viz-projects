// Unifies ores smelting recipes (just like in Hi-Tech quintessence)
onEvent("item.tags", e => {

    // Tag fixes
    e.add("forge:ores", ["#deepresonance:resonant_ore", "enlightened_end:bismuth_ore", "enlightened_end:irradium_ore", "enlightened_end:malachite_ore", "ob_core:deepslate_platinum_ore"])

    e.add("deepresonance:resonant_ore", ["#deepresonance:resonant_ore"])
    e.add("forge:ores/resonant", ["#deepresonance:resonant_ore"])

    e.add("forge:ores/bismuth", ["enlightened_end:bismuth_ore", "excavated_variants:byg_cryptic_bismuth_ore", "excavated_variants:byg_ether_bismuth_ore", "excavated_variants:byg_purpur_bismuth_ore"])
    e.add("forge:ores/irradium", ["enlightened_end:irradium_ore", "excavated_variants:byg_cryptic_irradium_ore", "excavated_variants:byg_ether_irradium_ore", "excavated_variants:byg_purpur_irradium_ore"])
    e.add("forge:ores/malachite", ["enlightened_end:malachite_ore", "excavated_variants:byg_cryptic_malachite_ore", "excavated_variants:byg_ether_malachite_ore", "excavated_variants:byg_purpur_malachite_ore"])

    e.add("forge:ores/platinum", ["ob_core:deepslate_platinum_ore"])

    e.add("forge:ores/blazing_quartz", ["malum:blazing_quartz_ore"])
    e.add("forge:ores/cthonic_gold", ["malum:block_of_cthonic_gold"])
    e.add("forge:ores/soulstone", ["malum:soulstone_ore", "malum:deepslate_soulstone_ore"])



    e.add("forge:storage_blocks", ["waxed_copper_block", "bloodmagic:rawdemoniteblock", "enlightened_end:raw_bismuth_block", "enlightened_end:raw_irradium_block", "malum:block_of_raw_soulstone"])
    e.add("forge:storage_blocks/copper", ["waxed_copper_block"])

    e.add("forge:storage_blocks/raw_demonite", ["bloodmagic:rawdemoniteblock"])
    e.add("forge:storage_blocks/raw_bismuth", ["enlightened_end:raw_bismuth_block"])
    e.add("forge:storage_blocks/raw_irradium", ["enlightened_end:raw_irradium_block"])
    e.add("forge:storage_blocks/raw_soulstone", ["malum:block_of_raw_soulstone"])



    // Custom recipe tag so I don't disrupt TE's recipes
    e.add("quintessence:type/copper", ["create:crushed_raw_copper", "#forge:dusts/copper", "#forge:raw_materials/copper", "#forge:ores/copper"])
    e.add("quintessence:type/iron", ["create:crushed_raw_iron", "#forge:dusts/iron", "#forge:raw_materials/iron", "#forge:ores/iron"])
    e.add("quintessence:type/gold", ["create:crushed_raw_gold", "#forge:dusts/gold", "#forge:raw_materials/gold", "#forge:ores/gold"])

    e.add("quintessence:type/tin", ["#forge:dusts/tin", "#forge:raw_materials/tin", "#forge:ores/tin"])
    e.add("quintessence:type/lead", ["#forge:dusts/lead", "#forge:raw_materials/lead", "#forge:ores/lead"])
    e.add("quintessence:type/silver", ["#forge:dusts/silver", "#forge:raw_materials/silver", "#forge:ores/silver"])
    e.add("quintessence:type/nickel", ["#forge:dusts/nickel", "#forge:raw_materials/nickel", "#forge:ores/nickel"])

})



onEvent("recipes", e => {

    // Remove default recipes
    e.remove({type: "smelting", output: "copper_ingot"})
    e.remove({type: "smelting", output: "iron_ingot"})
    e.remove({type: "smelting", output: "gold_ingot"})

    e.remove({type: "blasting", output: "copper_ingot"})
    e.remove({type: "blasting", output: "iron_ingot"})
    e.remove({type: "blasting", output: "gold_ingot"})

    // Copper
    e.smelting("copper_ingot", "#quintessence:type/copper", 0.5).id("kubejs:smelt_copper")
    e.blasting("copper_ingot", "#quintessence:type/copper", 0.5).id("kubejs:blast_copper")

    // Iron
    e.smelting("iron_ingot", "#quintessence:type/iron", 0.7).id("kubejs:smelt_iron")
    e.blasting("iron_ingot", "#quintessence:type/iron", 0.7).id("kubejs:blast_iron")

    // Gold
    e.smelting("gold_ingot", "#quintessence:type/gold", 1).id("kubejs:smelt_gold")
    e.blasting("gold_ingot", "#quintessence:type/gold", 1).id("kubejs:blast_gold")



    //// Ores no sane person would smelt
    e.remove({type: "smelting", output: "coal"})
    e.remove({type: "smelting", output: "redstone"})
    e.remove({type: "smelting", output: "lapis_lazuli"})
    e.remove({type: "smelting", output: "diamond"})
    e.remove({type: "smelting", output: "emerald"})
    e.remove({type: "smelting", output: "quartz"})

    e.remove({type: "blasting", output: "coal"})
    e.remove({type: "blasting", output: "redstone"})
    e.remove({type: "blasting", output: "lapis_lazuli"})
    e.remove({type: "blasting", output: "diamond"})
    e.remove({type: "blasting", output: "emerald"})
    e.remove({type: "blasting", output: "quartz"})

    // Coal
    e.smelting("coal", "#forge:ores/coal", 0.1).id("kubejs:smelt_coal")
    e.blasting("coal", "#forge:ores/coal", 0.1).id("kubejs:blast_coal")

    // Redstone
    e.smelting("redstone", "#forge:ores/redstone", 0.7).id("kubejs:smelt_redstone")
    e.blasting("redstone", "#forge:ores/redstone", 0.7).id("kubejs:blast_redstone")

    // Lapis Lazuli
    e.smelting("lapis_lazuli", "#forge:ores/lapis", 0.2).id("kubejs:smelt_lapis_lazuli")
    e.blasting("lapis_lazuli", "#forge:ores/lapis", 0.2).id("kubejs:blast_lapis_lazuli")

    // Diamond
    e.smelting("diamond", "#forge:ores/diamond", 1).id("kubejs:smelt_diamond")
    e.blasting("diamond", "#forge:ores/diamond", 1).id("kubejs:blast_diamond")

    // Emerald
    e.smelting("emerald", "#forge:ores/emerald", 2).id("kubejs:smelt_emerald")
    e.blasting("emerald", "#forge:ores/emerald", 2).id("kubejs:blast_emerald")

    // Quartz
    e.smelting("quartz", "#forge:ores/quartz", 0.2).id("kubejs:smelt_quartz")
    e.blasting("quartz", "#forge:ores/quartz", 0.2).id("kubejs:blast_quartz")













    //// Smelt Scrap into Ingots
    //// XP gain is 50% of what Raw -> Ingot smelting gives
    e.smelting("copper_ingot", "kubejs:copper_scrap", 0.25).id("kubejs:smelt_copper_scrap")
    e.smelting("iron_ingot", "kubejs:iron_scrap", 0.35).id("kubejs:smelt_iron_scrap")
    e.smelting("gold_ingot", "kubejs:gold_scrap", 0.5).id("kubejs:smelt_gold_scrap")
    e.smelting("diamond", "kubejs:diamond_scrap", 0.5).id("kubejs:smelt_diamond_scrap")
    e.smelting("emerald", "kubejs:emerald_scrap", 1).id("kubejs:smelt_emerald_scrap")

    e.blasting("copper_ingot", "kubejs:copper_scrap", 0.25).id("kubejs:blast_copper_scrap")
    e.blasting("iron_ingot", "kubejs:iron_scrap", 0.35).id("kubejs:blast_iron_scrap")
    e.blasting("gold_ingot", "kubejs:gold_scrap", 0.5).id("kubejs:blast_gold_scrap")
    e.blasting("diamond", "kubejs:diamond_scrap", 0.5).id("kubejs:blast_diamond_scrap")
    e.blasting("emerald", "kubejs:emerald_scrap", 1).id("kubejs:blast_emerald_scrap")


    e.smelting("ob_core:platinum_ingot", "kubejs:platinum_scrap", 1.5).id("kubejs:smelt_platinum_scrap")
    e.smelting("thermal:lumium_ingot", "kubejs:lumium_scrap", 1).id("kubejs:smelt_lumium_scrap")

    e.blasting("ob_core:platinum_ingot", "kubejs:platinum_scrap", 1.5).id("kubejs:smelt_platinum_scrap")
    e.blasting("thermal:lumium_ingot", "kubejs:lumium_scrap", 1).id("kubejs:smelt_lumium_scrap")


    e.smelting("twilightforest:fiery_ingot", "kubejs:fiery_scrap", 2).id("kubejs:smelt_fiery_scrap")
    e.smelting("twilightforest:ironwood_ingot", "kubejs:ironwood_scrap", 1).id("kubejs:smelt_ironwood_scrap")
    e.smelting("twilightforest:knightmetal_ingot", "kubejs:knightmetal_scrap", 1).id("kubejs:smelt_knightmetal_scrap")
    e.smelting("twilightforest:steeleaf_ingot", "kubejs:steeleaf_scrap", 1.5).id("kubejs:smelt_steeleaf_scrap")

    e.blasting("twilightforest:fiery_ingot", "kubejs:fiery_scrap", 2).id("kubejs:blast_fiery_scrap")
    e.blasting("twilightforest:ironwood_ingot", "kubejs:ironwood_scrap", 1).id("kubejs:blast_ironwood_scrap")
    e.blasting("twilightforest:knightmetal_ingot", "kubejs:knightmetal_scrap", 1).id("kubejs:blast_knightmetal_scrap")
    e.blasting("twilightforest:steeleaf_ingot", "kubejs:steeleaf_scrap", 1.5).id("kubejs:blast_steeleaf_scrap")

})