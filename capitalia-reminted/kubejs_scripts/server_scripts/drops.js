// Adds drops to various things
LootJS.modifiers((e) => {

    // Make Sheeps drop Sheepskin
    e.addEntityLootModifier("minecraft:sheep").addLoot(
        LootEntry.of("kubejs:sheepskin").when((c) => c.randomChance(0.3))
    );

    // Make Pigs drop Pig Hide
    e.addEntityLootModifier("minecraft:pig").addLoot(
        LootEntry.of("kubejs:pig_hide").when((c) => c.randomChance(0.2))
    );


/*
    // Fix the Ghast Ores having no drops
    e.addBlockLootModifier("elementaryores:ore_ghast_nether")
        .addWeightedLoot(
            [1, 4], Item.of("gunpowder"),
            [0, 2], Item.of("ghast_tear"));



    /// Add Glass Shards to modded Glass types
    // Laboratory
    e.addBlockLootModifier("laboratoryblocks:laboratory_glass").addWeightedLoot([2, 4], Item.of("quark:glass_shard"));
    e.addBlockLootModifier("laboratoryblocks:enlighted_laboratory_glass").addWeightedLoot([2, 4], Item.of("quark:glass_shard"))

    // Soul
    e.addBlockLootModifier("netherexp:soul_glass").addWeightedLoot([2, 4], Item.of("quark:blue_shard"));
*/


    //// Coin drops
    // Zombie
    e.addEntityLootModifier("minecraft:zombie").addWeightedLoot([0, 5], Item.of("essentiallycurrency:copper_coin").withChance(0.2));

    // Skeleton
    e.addEntityLootModifier("minecraft:skeleton").addWeightedLoot([0, 7], Item.of("essentiallycurrency:copper_coin").withChance(0.25));

    // Creeper
    e.addEntityLootModifier("minecraft:creeper").addWeightedLoot([0, 2], Item.of("essentiallycurrency:iron_coin").withChance(0.35));

});