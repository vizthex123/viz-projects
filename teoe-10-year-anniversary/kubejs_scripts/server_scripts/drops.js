// Adds drops to various things
LootJS.modifiers((e) => {

    //// Mobs
    /// Coin drops (each tier is worth 100 of the previous)
    /// idk why the mod doesn't cover the rest of the pillager faction lol
    // Vindicator
    e.addEntityLootModifier("minecraft:vindicator").randomChance(1/8).addWeightedLoot([0, 4], Item.of("numismaticoverhaul:silver_coin"));

    // Evoker
    e.addEntityLootModifier("minecraft:evoker").randomChance(1/6).addWeightedLoot([1, 8], Item.of("numismaticoverhaul:silver_coin"));


    // Zombie
    e.addEntityLootModifier("minecraft:zombie").randomChance(1/2).addWeightedLoot([0, 8], Item.of("numismaticoverhaul:bronze_coin"));
    e.addEntityLootModifier("minecraft:husk").randomChance(1/2).addWeightedLoot([2, 12], Item.of("numismaticoverhaul:bronze_coin"));

    // Skeleton
    e.addEntityLootModifier("minecraft:skeleton").randomChance(1/4).addWeightedLoot([0, 16], Item.of("numismaticoverhaul:bronze_coin"));
    e.addEntityLootModifier("minecraft:stray").randomChance(1/4).addWeightedLoot([4, 20], Item.of("numismaticoverhaul:bronze_coin"));
    e.addEntityLootModifier("minecraft:wither_skeleton").randomChance(1/2).addWeightedLoot([5, 20], Item.of("numismaticoverhaul:bronze_coin"));

    // Creeper
    e.addEntityLootModifier("minecraft:creeper").randomChance(1/2).addWeightedLoot([0, 1], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("minecraft:creeper").randomChance(1/10).addWeightedLoot([1, 1], Item.of("numismaticoverhaul:gold_coin"));

    // Enderman
    e.addEntityLootModifier("minecraft:enderman").randomChance(1/2).addWeightedLoot([0, 2], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("minecraft:enderman").randomChance(1/2).addWeightedLoot([10, 50], Item.of("numismaticoverhaul:bronze_coin"));





    /// Modded mobs
    // Cyberware
    e.addEntityLootModifier("cyber_ware_port:cyber_zombie").randomChance(1/1).addWeightedLoot([0, 1], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("cyber_ware_port:cyber_skeleton").randomChance(1/1).addWeightedLoot([0, 2], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("cyber_ware_port:cyber_wither_skeleton").randomChance(1/1).addWeightedLoot([0, 3], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("cyber_ware_port:cyber_creeper").randomChance(1/1).addWeightedLoot([1, 2], Item.of("numismaticoverhaul:silver_coin"));


    // Enderzoology    
    e.addEntityLootModifier("enderzoology:infested_zombie").randomChance(1/2).addWeightedLoot([2, 16], Item.of("numismaticoverhaul:bronze_coin"));
    e.addEntityLootModifier("enderzoology:concussion_creeper").randomChance(1/6).addWeightedLoot([0, 3], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("enderzoology:fallen_knight").randomChance(1/3).addWeightedLoot([1, 1], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("enderzoology:wither_witch").randomChance(1/3).addWeightedLoot([1, 1], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("enderzoology:enderminy").randomChance(1/2).addWeightedLoot([0, 1], Item.of("numismaticoverhaul:silver_coin"));
    e.addEntityLootModifier("enderzoology:enderminy").randomChance(1/2).addWeightedLoot([5, 25], Item.of("numismaticoverhaul:bronze_coin"));

/*
    //// Blocks
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
*/

});