// Adds drops to various things
LootJS.modifiers((e) => {

    // Make Sheeps drop Sheepskin
    e.addEntityLootModifier("minecraft:sheep").addLoot(
        LootEntry.of("kubejs:sheepskin").when((c) => c.randomChance(0.35))
    );

    // Make Pigs drop Pig Hide
    e.addEntityLootModifier("minecraft:pig").addLoot(
        LootEntry.of("kubejs:pig_hide").when((c) => c.randomChance(0.22))
    );


/*
    //// Coin drops
    // Zombies
    e.addEntityLootModifier("minecraft:zombie").addLoot(
        LootEntry.of("essentiallycurrency:copper_coin")
        .withCount(1, 5)
        .when((c) => c.randomChance(0.5))
    );
*/
})