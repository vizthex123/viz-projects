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
/*
    // Certus Quartz
    e.replaceInput(
      { input: "slime_ball" },
        "slime_ball",
        "#reminted:quartz_dust"
    )
*/
})