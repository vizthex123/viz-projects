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



    // Fix the Ghast Ores having no drops
    // Big thanks to Flabort on the KubeJS discord for fixing this (i'm too stupid to understand how this mod works lol)
    e.addBlockLootModifier("elementaryores:ore_ghast_nether")
        .addWeightedLoot(
            [1, 6], 
            [  
                Item.of("gunpowder").withChance(3),
                Item.of("ghast_tear").withChance(1)
            ]);



	/// Add Glass Shards to modded Glass types
	// Laboratory
	e.addBlockLootModifier("laboratoryblocks:laboratory_glass").addWeightedLoot(
		[2, 4],
		[Item.of("quark:clear_shard").withChance(1)]
	);

	e.addBlockLootModifier("laboratoryblocks:enlighted_laboratory_glass").addWeightedLoot(
        [2, 4],
        [Item.of("quark:clear_shard").withChance(1)]
    );

	// Soul
	e.addBlockLootModifier("netherexp:soul_glass").addWeightedLoot(
		[2, 4],
		[Item.of("quark:blue_shard").withChance(1)]
	);



    //// Coin drops
    // Zombie
    e.addEntityLootModifier("minecraft:zombie").randomChance(1/2).addWeightedLoot([0, 8], Item.of("essentiallycurrency:copper_coin"));

    // Skeleton
    e.addEntityLootModifier("minecraft:skeleton").randomChance(1/4).addWeightedLoot([0, 16], Item.of("essentiallycurrency:copper_coin"));

    // Creeper
    e.addEntityLootModifier("minecraft:creeper").randomChance(1/6).addWeightedLoot([0, 3], Item.of("essentiallycurrency:iron_coin"));

});