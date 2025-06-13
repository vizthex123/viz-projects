// Fixes the currency recipes cuz they're not shapeless by default ffs
ServerEvents.recipes(e => {

    // Craft extra permits just in case they're needed
Item.of('adminshop:permit', "{RepairCost:0,display:{Name:'{\"text\":\"Advanced Researcher\\'s License\"}'},key:2}")

    // Removals
    e.remove({type: "crafting_shaped", output: "essentiallycurrency:copper_coin"})
    e.remove({type: "crafting_shaped", output: "essentiallycurrency:iron_coin"})
    e.remove({type: "crafting_shaped", output: "essentiallycurrency:gold_coin"})
    e.remove({type: "crafting_shaped", output: "essentiallycurrency:diamond_coin"})
    e.remove({type: "crafting_shaped", output: "essentiallycurrency:emerald_coin"})
    e.remove({type: "crafting_shaped", output: "essentiallycurrency:netherite_coin"})



    // Iron
    e.shapeless("essentiallycurrency:iron_coin", ["essentiallycurrency:copper_coin", "essentiallycurrency:copper_coin", "essentiallycurrency:copper_coin", "essentiallycurrency:copper_coin", "essentiallycurrency:copper_coin"]).id("kubejs:iron_coin")

    e.shapeless("5x essentiallycurrency:copper_coin", ["essentiallycurrency:iron_coin"]).id("kubejs:iron_coin_decraft")

    // Gold
    e.shapeless("essentiallycurrency:gold_coin", ["essentiallycurrency:iron_coin", "essentiallycurrency:iron_coin"]).id("kubejs:gold_coin")

    e.shapeless("2x essentiallycurrency:iron_coin", ["essentiallycurrency:gold_coin"]).id("kubejs:gold_coin_decraft")

    // Diamond
    e.shapeless("essentiallycurrency:diamond_coin", ["essentiallycurrency:gold_coin", "essentiallycurrency:gold_coin", "essentiallycurrency:iron_coin"]).id("kubejs:diamond_coin")

    e.shapeless("essentiallycurrency:diamond_coin", ["essentiallycurrency:iron_coin", "essentiallycurrency:iron_coin", "essentiallycurrency:iron_coin", "essentiallycurrency:iron_coin", "essentiallycurrency:iron_coin"]).id("kubejs:diamond_coin_alt")

    e.shapeless("5x essentiallycurrency:iron_coin", ["essentiallycurrency:diamond_coin"]).id("kubejs:diamond_coin_decraft")

    // Emerald
    e.shapeless("essentiallycurrency:emerald_coin", ["essentiallycurrency:diamond_coin", "essentiallycurrency:diamond_coin"]).id("kubejs:emerald_coin")

    e.shapeless("essentiallycurrency:emerald_coin", ["essentiallycurrency:gold_coin", "essentiallycurrency:gold_coin", "essentiallycurrency:gold_coin", "essentiallycurrency:gold_coin", "essentiallycurrency:gold_coin"]).id("kubejs:emerald_coin_alt")

    e.shapeless("2x essentiallycurrency:diamond_coin", ["essentiallycurrency:emerald_coin"]).id("kubejs:emerald_coin_decraft")

    // Netherite
    // Why isn't this worth 100 ffs
    e.shapeless("essentiallycurrency:netherite_coin", ["essentiallycurrency:emerald_coin", "essentiallycurrency:diamond_coin"]).id("kubejs:netherite_coin")
    e.shapeless("essentiallycurrency:netherite_coin", ["essentiallycurrency:diamond_coin", "essentiallycurrency:diamond_coin", "essentiallycurrency:diamond_coin"]).id("kubejs:netherite_coin_alt")

    e.shapeless("3x essentiallycurrency:diamond_coin", ["essentiallycurrency:netherite_coin"]).id("kubejs:netherite_coin_decraft")

})