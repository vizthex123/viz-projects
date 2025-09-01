// Adds tooltips to various items
ItemEvents.tooltip(e=>{

    // Tooltip removal provided by vomiter on the KubeJS discord
    e.addAdvanced(Ingredient.of("@essentiallycurrency").itemIds, (item, advanced, text) => {
        text.removeIf(t => t.toString().includes("Utility Item"))
    })

    // Coin values
    e.add("essentiallycurrency:copper_coin", Text.gold("$1"))
    e.add("essentiallycurrency:iron_coin", Text.gold("$5"))
    e.add("essentiallycurrency:gold_coin", Text.gold("$10"))
    e.add("essentiallycurrency:diamond_coin", Text.gold("$25"))
    e.add("essentiallycurrency:emerald_coin", Text.gold("$50"))
    e.add("essentiallycurrency:netherite_coin", Text.gold("$75"))

    // Trophy statements
    e.add("kubejs:trophy", Text.green("A testament to your victory over a challenge."))
    e.add("kubejs:platinum_trophy", Text.gold("A reminder of your mastery of this planet."))


    // Pretty Pipes' filter modules
    e.add("prettypipes:low_filter_module", "Slots: 5")
    e.add("prettypipes:medium_filter_module", "Slots: 9")
    e.add("prettypipes:high_filter_module", "Slots: 18")
    e.add("prettypipes:filter_increase_module", "Slots: +18")

    e.add("prettypipes:low_crafting_module", "1 Input, 1 Output")
    e.add("prettypipes:medium_crafting_module", "4 Inputs, 2 Outputs")
    e.add("prettypipes:high_crafting_module", "9 Inputs, 3 Outputs")

    e.add("ppfluids:low_fluid_filter_module", "Slots: 2")
    e.add("ppfluids:medium_fluid_filter_module", "Slots: 4")
    e.add("ppfluids:high_fluid_filter_module", "Slots: 8")


    // Misc
    e.add("#reminted:primitive_research", Text.white("I could probably recycle this later on..."))

})