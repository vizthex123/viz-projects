// Replaces items in recipes
onEvent("recipes", e => {

    //// Forge tags

    // Crafting tables
    e.replaceInput(
    { input: "crafting_table" },
        "crafting_table",
        "#forge:workbenches"
    )

    // Nether Quartz
    e.replaceInput(
    { input: "quartz" },
        "quartz",
        "#forge:gems/quartz"
    )


    //// Custom tags

    // Furnaces
    e.replaceInput(
    { input: "furnace" },
        "furnace",
        "#quintessence:furnace"
    )

    // Autumnity's Syrup
    e.replaceInput(
    { input: "autumnity:syrup_bottle", not: {id: "autumnity:maple_leaf_banner_pattern"} },
        "autumnity:syrup_bottle",
        "#quintessence:syrup"
    )

})