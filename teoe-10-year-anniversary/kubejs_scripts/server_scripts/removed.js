// Removes various recipes
ServerEvents.recipes(e => {

    // Remove redundant recipes
    const redudant_removal = [
        "extrautilitiesreborn:gold_chest_rcp",
        "forestry:gear_bronze",
        "forestry:gear_copper",
        "forestry:gear_tin",
        "forestry:gear_iron"
    ]

    redudant_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

    // Misc removals
    const misc_removal = [
        "minecraft:shield",
        "aether:skyroot_iron_vanilla_shield",
        "twilightforest:equipment/knightmetal_shield",
        "redstone_arsenal:flux_shield",
        "bountiful:crafting/bountyboard"
    ]

    misc_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

})