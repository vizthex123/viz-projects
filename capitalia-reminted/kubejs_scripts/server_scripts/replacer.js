// Replaces items in recipes since re-doing them all is annoying
ServerEvents.recipes(e => {

    // Make recipes use variant crafting tables
    e.replaceInput(
      { input: "crafting_table" },
        "crafting_table",
        "#forge:workbench"
    )

    // Make recipes use my furnace tag
    e.replaceInput(
      { input: "furnace" },
        "furnace",
        "#reminted:furnace"
    )

    // Make recipes use variant chests
    e.replaceInput(
      { input: "chest" },
        "chest",
        "#forge:chests/wooden"
    )

    // Bowls
    e.replaceInput(
      { input: "bowl" },
        "bowl",
        "#reminted:bowls"
    )

    // Leather
    e.replaceInput(
      { input: "leather" },
        "leather",
        "#forge:leather"
    )

    // Slimeballs
    e.replaceInput(
      { input: "slime_ball",  not: [{id: "minecraft:magma_cream"}, {id: "minecraft:slime_block"}, {id: "autumnity:snail_goo_block"}] },
        "slime_ball",
        "#forge:slimeballs"
    )

    // Rose Gold
    e.replaceInput(
      { input: "rosegoldequipment:rose_gold_ingot" },
        "rosegoldequipment:rose_gold_ingot",
        "#forge:ingots/rose_gold"
    )

    e.replaceInput(
      { input: "rosegoldequipment:rose_gold_nugget" },
        "rosegoldequipment:rose_gold_nugget",
        "#forge:nuggets/rose_gold"
    )

})