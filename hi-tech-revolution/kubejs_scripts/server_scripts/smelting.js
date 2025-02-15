// Adds smelting recipes
ServerEvents.recipes(e => {

    // Candles -> Wax
    e.smelting("honeycomb", "#minecraft:candles", 0.1).id("kubejs:candle_to_wax")

    // Smelt Soul Sand into Glass
    e.blasting("minecraft:brown_stained_glass", ["soul_sand", "soul_soil"], 1, 200).id("kubejs:blast_soul_sand")



    //// Blast Raw Ore Blocks
    e.blasting("copper_block", "#forge:storage_blocks/raw_copper", 4.5, 800).id("kubejs:blast_raw_copper_block")
    e.blasting("iron_block", "#forge:storage_blocks/raw_iron", 6.3, 800).id("kubejs:blast_raw_iron_block")
    e.blasting("gold_block", "#forge:storage_blocks/raw_gold", 13.5, 800).id("kubejs:blast_raw_gold_block")

    e.blasting("ad_astra:desh_block", "#forge:storage_blocks/raw_desh", 18).id("kubejs:blast_raw_desh_block")
    e.blasting("ad_astra:ostrum_block", "#forge:storage_blocks/raw_ostrum", 27).id("kubejs:blast_raw_ostrum_block")
    e.blasting("ad_astra:calorite_block", "#forge:storage_blocks/raw_calorite", 36).id("kubejs:blast_raw_calorite_block")

    e.blasting("biggerreactors:uranium_block", "#forge:storage_blocks/raw_uranium", 36).id("kubejs:blast_raw_uranium_block")

    e.blasting("thermal:tin_block", "#forge:storage_blocks/raw_tin", 9, 800).id("kubejs:blast_raw_tin_block")
    e.blasting("thermal:lead_block", "#forge:storage_blocks/raw_lead", 18, 800).id("kubejs:blast_raw_lead_block")
    e.blasting("thermal:silver_block", "#forge:storage_blocks/raw_silver", 18, 800).id("kubejs:blast_raw_silver_block")
    e.blasting("thermal:nickel_block", "#forge:storage_blocks/raw_nickel", 18, 800).id("kubejs:blast_raw_nickel_block")

    e.blasting("xycraft_world:aluminum_storage", "#forge:storage_blocks/raw_aluminum", 4.5, 800).id("kubejs:blast_raw_aluminum_block")

})