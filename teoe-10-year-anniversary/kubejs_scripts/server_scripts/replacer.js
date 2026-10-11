// Replaces items in recipes since re-doing them all is annoying
ServerEvents.recipes(e => {

    // Chests
    e.replaceInput(
      { input: "chest" },
        "chest",
        "#forge:chests/wooden"
    )

    // Bowls
    e.replaceInput(
      { input: "bowl" },
        "bowl",
        "#teoe10:bowls"
    )

    e.replaceInput(
      { input: "natura:bloodwood_bowl" },
        "natura:bloodwood_bowl",
        "#teoe10:bowls"
    )

    e.replaceInput(
      { input: "natura:darkwood_bowl" },
        "natura:darkwood_bowl",
        "#teoe10:bowls"
    )

    e.replaceInput(
      { input: "natura:fusewood_bowl" },
        "natura:fusewood_bowl",
        "#teoe10:bowls"
    )

    e.replaceInput(
      { input: "natura:ghostwood_bowl" },
        "natura:ghostwood_bowl",
        "#teoe10:bowls"
    )

    // Natura's blue dye
    e.replaceInput(
      { input: "natura:blue_dye" },
        "natura:blue_dye",
        "#forge:dyes/blue"
    )

})