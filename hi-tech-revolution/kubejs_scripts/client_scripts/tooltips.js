// Adds tooltips to various items
ItemEvents.tooltip(e => {

    // Soylent Green reference
    e.addAdvanced("alexscaves:green_soylent", (item, advanced, text) => {
    if (e.shift) {
      text.add(1, [Text.of("It's probably not made of people, right?").green()])
    }})

    // Coin values
    e.add("coinsje:copper_coin", Text.of("$1").gold())
    e.add("coinsje:iron_coin", Text.of("$10").gold())
    e.add("coinsje:gold_coin", Text.of("$100").gold())
    e.add("coinsje:diamond_coin", Text.of("$1,000").gold())
    e.add("coinsje:netherite_coin", Text.of("$10,000").gold())

    e.add("coinsje:copper_coin_pile", Text.of("$5").gold())
    e.add("coinsje:iron_coin_pile", Text.of("$50").gold())
    e.add("coinsje:gold_coin_pile", Text.of("$500").gold())
    e.add("coinsje:diamond_coin_pile", Text.of("$5,000").gold())
    e.add("coinsje:netherite_coin_pile", Text.of("$50,000").gold())

    // Slot size tooltips
    e.add("ironchests:copper_chest", Text.of("36 Slots").gray())
    e.add("ironchests:iron_chest", Text.of("54 Slots").gray())
    e.add("ironchests:gold_chest", Text.of("66 Slots").gray())
    e.add("ironchests:diamond_chest", Text.of("72 Slots").gray())
    e.add("ironchests:obsidian_chest", Text.of("72 Slots").gray())
    e.add("ironchests:crystal_chest", Text.of("72 Slots").gray())
    e.add("ironchests:netherite_chest", Text.of("91 Slots").gray())

    e.add("ironchests:copper_barrel", Text.of("36 Slots").gray())
    e.add("ironchests:iron_barrel", Text.of("54 Slots").gray())
    e.add("ironchests:gold_barrel", Text.of("66 Slots").gray())
    e.add("ironchests:diamond_barrel", Text.of("72 Slots").gray())
    e.add("ironchests:obsidian_barrel", Text.of("72 Slots").gray())
    e.add("ironchests:crystal_barrel", Text.of("72 Slots").gray())
    e.add("ironchests:netherite_barrel", Text.of("91 Slots").gray())

})