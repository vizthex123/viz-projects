// If anything breaks, it"s Lady Lexxie"s fault (on the KubeJS Discord) for making me move everything into 1 file
onEvent("item.registry", e => {

    // Sawdust
    e.create("glue")
    e.create("sawdust_clump").burnTime(200)
    e.create("compressed_sawdust").burnTime(200)
    e.create("mdf").tag("minecraft:planks").burnTime(300).displayName("MDF Board") // rip cardboard box :c

    // Scrap
    e.create("copper_scrap")
    e.create("small_copper_scrap")
    e.create("tiny_copper_scrap")
    e.create("iron_scrap")
    e.create("small_iron_scrap")
    e.create("tiny_iron_scrap")
    e.create("gold_scrap")
    e.create("small_gold_scrap")
    e.create("tiny_gold_scrap")
    e.create("diamond_scrap")
    e.create("small_diamond_scrap")

    e.create("platinum_scrap")
    e.create("small_platinum_scrap")

    e.create("lumium_scrap")
    e.create("small_lumium_scrap")

    e.create("fiery_scrap")
    e.create("small_fiery_scrap")
    e.create("ironwood_scrap")
    e.create("small_ironwood_scrap")
    e.create("knightmetal_scrap")
    e.create("small_knightmetal_scrap")
    e.create("steeleaf_scrap")
    e.create("small_steeleaf_scrap")

    // Ores
    e.create("crushed_cobalt").tag("create:crushed_ores")
    e.create("crushed_platinum").tag("create:crushed_ores")
    e.create("crushed_pendorite").tag("create:crushed_ores")
    e.create("iridium_chunks").rarity("rare")

    // Misc
    e.create("quicklime")
    e.create("quintessence").rarity("epic").maxStackSize(1).glow(true)
    e.create("iridium_fuel_cell").rarity("rare").burnTime(51200).maxStackSize(4)
    // e.create("artificial_dragon_egg").texture("kubejs:item/artificial_dragon_egg").rarity("epic").maxStackSize(1)
    e.create("portal_catalyst").tag("twilightforest:portal/activator").displayName("Twilight Portal Catalyst").rarity("uncommon").maxStackSize(1).glow(true)

})