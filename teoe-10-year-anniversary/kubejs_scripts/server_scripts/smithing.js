// Adds smithing table recipes
ServerEvents.recipes(e => {

    /// Upgrade Copper equipment into Bronze
    // Armour
    e.smithing(
        "faktocraft:bronze_helmet",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_armor_helmet",
        "#forge:ingots/tin"
    )

    e.smithing(
        "faktocraft:bronze_chestplate",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_armor_chestplate",
        "#forge:ingots/tin"
    )

    e.smithing(
        "faktocraft:bronze_leggings",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_armor_leggings",
        "#forge:ingots/tin"
    )

    e.smithing(
        "faktocraft:bronze_boots",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_armor_boots",
        "#forge:ingots/tin"
    )



    /// Tools
    e.smithing(
        "faktocraft:bronze_sword",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_sword",
        "#forge:ingots/tin"
    )

    e.smithing(
        "faktocraft:bronze_pickaxe",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_pickaxe",
        "#forge:ingots/tin"
    )

    e.smithing(
        "faktocraft:bronze_shovel",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_shovel",
        "#forge:ingots/tin"
    )

    e.smithing(
        "faktocraft:bronze_axe",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_axe",
        "#forge:ingots/tin"
    )

    e.smithing(
        "faktocraft:bronze_hoe",
        "kubejs:bronze_upgrade",
        "leafscopperbackport:copper_hoe",
        "#forge:ingots/tin"
    )

})