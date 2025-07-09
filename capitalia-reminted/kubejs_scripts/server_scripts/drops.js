// Adds drops to various things
LootJS.modifiers((e) => {

    // Make Sheeps drop Sheepskin
    e.addEntityLootModifier("minecraft:sheep").addLoot(
        LootEntry.of("kubejs:sheepskin").when((c) => c.randomChance(0.25))
    );

    // Make Pigs drop Pig Hide
    e.addEntityLootModifier("minecraft:pig").addLoot(
        LootEntry.of("kubejs:pig_hide").when((c) => c.randomChance(0.2))
    );

})