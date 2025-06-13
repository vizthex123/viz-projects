// Adds information to items in REI
REIEvents.information(e => {

    //// KubeJS
    // Lubricating Elixir
    e.addItem("kubejs:lubricating_elixir", "Crafting Elixir", ["Crafting Elixirs can be used in place of Redstone in a handful of recipes.\n\nGained from Innovator and Logistics Technician bounties."])

    // Research Point
    e.addItem("kubejs:research_point", "Research Points", ["Earned by conducting research on various items in the Writing Desk.\n\nA short list can be found in its quest.\n\nThis process can be improved with a laboratory."])

    // Loyalty Point
    e.addItem(["kubejs:loyalty_point", "kubejs:loyalty_point_counterfeit"], "Loyalty Points", ["By proving your loyalty to the company's cause, you'll be rewarded with our proprietary Loyalty Point.\n\nThey can be spent in the corresponding shop for a variety of resources (or converted into cash).\n\nSome locals may try to peddle off counterfeit, and we advise you burn any if you encounter them."])

    // Prestige
    e.addItem(["kubejs:prestige_scrip", "kubejs:prestige_chit", "kubejs:prestige_pittance"], "Prestige", ["Prestige can be used in the Prestige Shop, or sold for a few Credits.\n\nThere are three tiers: Pittance, Chit, and Scrip. Each one can be upgrade into the next tier, but not downgraded.\n\nGained from Numismatic & Gemologist bounties, challenge quests, and endgame quests."])



    // Soiled Tome
    e.addItem("researchlab:soiled_tome", "Tome of Knowledge", ["Required to conduct basic research.\n\Not consumed during the research process."])

})