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

})