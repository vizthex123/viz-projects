// Adds custom items
StartupEvents.registry("item", e => {

    // Items
    e.create("stone_stick").tag("forge:rods").tag("forge:rods/stone").tag("forge:rods/wooden")
    e.create("disc_residue")
    e.create("portal_catalyst").tag("twilightforest:portal/activator").displayName("Twilight Portal Catalyst").rarity("uncommon").maxStackSize(1).glow(true)

    // Sawdust
    e.create("glue")
    e.create("sawdust")
    e.create("compressed_sawdust").burnTime(200)
    e.create("mdf").tag("minecraft:planks").burnTime(400).displayName("MDF Board")

    // Scrap
    e.create("copper_scrap")
    e.create("small_copper_scrap")
    e.create("iron_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("small_iron_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("gold_scrap")
    e.create("small_gold_scrap")
    e.create("diamond_scrap")
    e.create("small_diamond_scrap")
    e.create("silver_scrap")
    e.create("small_silver_scrap")

    e.create("fiery_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("small_fiery_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("ironwood_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("small_ironwood_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("knightmetal_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("small_knightmetal_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("steeleaf_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("small_steeleaf_scrap").tag("alexscaves:ferromagnetic_items")

})