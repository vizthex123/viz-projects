// Adds information to items in REI
REIEvents.information(e => {

    //// Alex's Caves blocks
    e.addItem("alexscaves:drain", "Draining", ["Empties a room filled with water after receiving a redstone signal, depositing it into the area below."])
    e.addItem("alexscaves:copper_valve", "Draining", ["Can be used with the Drain to make things more thematic."])

    e.addItem("alexscaves:quarry", "Magnetic Mining", ["When combined with a Magnetic Quarry Smasher, this device will mine everything in an area selected with Magnetic Lights."])
    e.addItem("alexscaves:quarry_smasher", "Magnetic Mining", ["When combined with a Magnetic Quarry, this device will mine everything in an area selected with Magnetic Lights."])
    e.addItem("alexscaves:magnetic_light", "Magnetic Lights", ["Power with Redstone to select an area for the Magnetic Quarry."])

    e.addItem("alexscaves:nuclear_furnace_component", "Nuclear Smelting", ["Construct in a 2x2 to make a Nuclear Furnace - which acts like a Blast Furnace, but smelts items much faster. Its fuel also lasts much longer."])



    //// Misc
    // Soul Ember uses
    e.addItem("biomemakeover:soul_embers", "Soul Embers", ["Can be used in place of Blaze Powder in a Brewing Stand."])

    // Blutonium crafting info
    e.addItem("biggerreactors:blutonium_ingot", "Blutonium", ["Use a Cyanite Reprocessor to convert Cyanite into Blutonium."])

    // Advanced Tempad info
    e.addItem("tempad:he_who_remains_tempad", "Advanced Tempad", ["Can be found extremely rarely as dungeon loot.\n\n25 uses (instead of 10) before needing a recharge."])

    // TE's Compost
    e.addItem("thermal:compost", "Compost", ["Gained from the Batch Composter."])

})