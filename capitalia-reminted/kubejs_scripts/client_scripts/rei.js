// Adds information to items in REI
REIEvents.information(e => {

    //// KubeJS
    // Lubricant
    e.addItem("kubejs:lubricant", "Lubricant", ["Lubricant can be used in place of Redstone and Electrotine in a handful of recipes.\n\nGained from Innovator, Mekanist, and Logistics Technician bounties. or crafted with machinery."])

    // Research Point
    e.addItem("kubejs:research_point", "Research Points", ["Earned by conducting research on various items in the Writing Desk (a short list can be found in its quest).\n\nThis process can be improved with a laboratory."])

    // Loyalty Point
    e.addItem(["kubejs:loyalty_point", "kubejs:loyalty_point_counterfeit"], "Loyalty Points", ["By proving your loyalty to the company's cause, you'll be rewarded with our proprietary Loyalty Point.\n\nThey can be spent in the corresponding shop for a variety of resources (or converted into cash).\n\nSome locals may try to peddle off counterfeits, and we advise you burn any if you encounter them."])

    // Prestige
    e.addItem(["kubejs:prestige_pittance", "kubejs:prestige_chit", "kubejs:prestige_scrip"], "Prestige", ["Prestige can be used in the Prestige Shop, or sold for a few Credits.\n\nThere are three tiers: Pittance, Chit, and Scrip. Each one can be upgrade into the next tier, but not downgraded.\n\nGained from challenge quests and endgame quests.\n\nIn addition, some of the locals may peddle off small amounts they've gained by trading with employees."])



    //// Misc
    // Cladded Upgrade Templates
    e.addItem("biomemakeover:cladding_upgrade_smithing_template", "Cladding Upgrade Template", ["Drops from Pillagers. Can also be found in their structures."])

    // TE's Compost
    e.addItem("thermal:compost", "Compost", ["Gained from the Batch Composter."])

    // Translocators
    e.addItem("translocators:item_translocator", "Translocator Upgrades", ["Supports two upgrades:\n\n- An Iron Ingot makes them emit a redstone signal if there is no space for their filtered items.\n\n- A Diamond Nugget enables regulate mode, which makes the node maintain a set amount of filtered items in their attached inventory.\n\nShift + right-click a node to remove its upgrades."])

    // Soiled Tome
    e.addItem("researchlab:soiled_tome", "Tome of Basic Knowledge", ["Required to conduct basic research.\n\nNot consumed during the research process.\n\nCan be recycled."])

})