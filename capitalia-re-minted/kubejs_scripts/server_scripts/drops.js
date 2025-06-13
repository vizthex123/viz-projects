// Adds drops to various things
LootJS.modifiers((e) => {
/*
    // Fix Nether Fluorite Ore not dropping anything   
    e.addBlockLootModifier("mekanismoresfornetherandend:netherfluorite").addLoot(
        LootEntry.of("mekanism:fluorite_gem").amount(1, 3)
    );
*/
    // Make Sheeps drop Sheepskin
    e.addEntityLootModifier("minecraft:sheep").addLoot(
        LootEntry.of("kubejs:sheepskin").when((c) => c.randomChance(0.25))
    );

    // Make Pigs drop Pig Hide
    e.addEntityLootModifier("minecraft:pig").addLoot(
        LootEntry.of("kubejs:pig_hide").when((c) => c.randomChance(0.2))
    );

})