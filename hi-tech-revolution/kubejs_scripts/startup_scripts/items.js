// Adds custom items
StartupEvents.registry("item", e => {

    //// Items
    // e.create("stone_stick").tag("forge:rods").tag("forge:rods/stone").tag("forge:rods/wooden")
    e.create("aluminum_dust").tag("forge:dusts").tag("forge:dusts/aluminum")
    e.create("quicklime").tag("revolution:cleaning_agent")
    e.create("recycling_icon")

    //// Recycling
    e.create("barb")
    e.create("pulp")
    e.create("fibers")
    e.create("disc_residue")
    e.create("shredded_hide")

    /// Sawdust
    e.create("glue")
    e.create("sawdust_clump")
    e.create("compressed_sawdust").burnTime(200)
    e.create("mdf").tag("minecraft:planks").burnTime(300).displayName("MDF Board")



    /// Scrap
    e.create("small_copper_scrap")
    e.create("copper_scrap")

    e.create("tiny_iron_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("small_iron_scrap").tag("alexscaves:ferromagnetic_items")
    e.create("iron_scrap").tag("alexscaves:ferromagnetic_items")

    e.create("tiny_gold_scrap")
    e.create("small_gold_scrap")
    e.create("gold_scrap")

    e.create("small_diamond_scrap")
    e.create("diamond_scrap")

    e.create("small_silver_scrap")
    e.create("silver_scrap")

})