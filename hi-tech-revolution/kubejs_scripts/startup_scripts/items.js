// Adds custom items
StartupEvents.registry("item", e => {

    //// Items
    // e.create("stone_stick").tag("forge:rods").tag("forge:rods/stone").tag("forge:rods/wooden")
    e.create("aluminum_dust").tag("forge:dusts").tag("forge:dusts/aluminum")
    e.create("zinc_dust").tag("forge:dusts").tag("forge:dusts/zinc")
    e.create("quicklime").tag("revolution:cleaning_agent")
    e.create("recycling_icon")
    e.create("plutonium_pellet")
    e.create("plutonium_barrel").tag("alexscaves:nuclear_furnace_fuel")


    // Science test
    e.create("research")
/*
    // Recycling
    // This time, I'm just using a mod + the smeltery cuz this shit is so annoying to deal with lol
    e.create("disc_residue")
    e.create("powdered_stone")
*/
    // Recycling 4.0

    e.create("organic_refuse")
    // e.create("meaty_clump").tag("revolution:researchable/clump")

    e.create("scrap").tag("alexscaves:ferromagnetic_items").displayName("Scrap Pile")
    e.create("scrap_dense").tag("alexscaves:ferromagnetic_items").displayName("Dense Scrap Pile")
    e.create("congealed_matter")
    e.create("disc_residue")
    e.create("powdered_stone")
    e.create("parchment").tag("revolution:paper")

    /// Sawdust
    e.create("glue")
    e.create("sawdust_clump")
    e.create("compressed_sawdust").burnTime(200)
    e.create("mdf").tag("minecraft:planks").burnTime(300).displayName("MDF Board")
/*
    // Recycling 3.0
    // Order is Organic, Living, Earth, Stone, Metallic, Gems/Crystals, Nether, and End
    e.create("organic_refuse").tag("revolution:researchable/clump")
    e.create("muscular_mass").tag("revolution:researchable/clump")
    e.create("earthen_clump")
    e.create("rocky_remnants")
    e.create("scrap_pile").tag("alexscaves:ferromagnetic_items")
    e.create("crystalline_cluster") // Might rename it to Geminite or something? Would be good if it covered both gems and crystals while also sounding neat-ish.
    e.create("hellish_heap")
    e.create("ender_enigma")
*/

/*
might use this in v4.0
- the biomass and meaty clump textures are the same as the organic refuse and muscular mass

*/
})