// Removes various recipes for whatever reason
ServerEvents.recipes(e => {

    // Remove recipes for items with progression changes
    // I found this fancy method in the 1.21 direwolf20 pack and it's quite nice
    const progression_removal = [
        "forestry:ingot_bronze_alloying",
        "personalcloudstorage:cloud_core",
        "personalcloudstorage:partition_node",
        "portality:generator"
    ]

    progression_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


    // Remove a few unnecessary Functional Storage recipes
    const functional_storage_removal = [
        "functionalstorage:oak_drawer_alternate_x1",
        "functionalstorage:oak_drawer_alternate_x2",
        "functionalstorage:oak_drawer_alternate_x4",
        "functionalstorage:fluid_1",
        "functionalstorage:fluid_2",
        "functionalstorage:fluid_4",
        "functionalstorage:ender_drawer",
        "functionalstorage:gold_upgrade",
        "functionalstorage:diamond_upgrade",
        "functionalstorage:netherite_upgrade"
    ]

    functional_storage_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


/*
    // HammerLib
    const hammerlib_removal = [
        "hammerlib:wrench",
        "hammerlib:gears/wooden",
        "hammerlib:gears/stone",
        "hammerlib:gears/copper",
        "hammerlib:gears/iron",
        "hammerlib:gears/gold",
        "hammerlib:gears/diamond",
        "hammerlib:gears/netherite"
    ]

    hammerlib_removal.forEach(recipe => {
        e.remove({id: recipe})
    });
*/


    // Iron Chests content past the Iron tier
    const iron_chests_removal = [
        "ironchests:gold_chest",
        "ironchests:diamond_chest",
        "ironchests:crystal_chest",
        "ironchests:obsidian_chest",
        "ironchests:netherite_chest",
        "ironchests:gold_barrel",
        "ironchests:diamond_barrel",
        "ironchests:crystal_barrel",
        "ironchests:obsidian_barrel",
        "ironchests:netherite_barrel",
        "ironchests:gold_chest_upgrade",
        "ironchests:diamond_chest_upgrade",
        "ironchests:crystal_chest_upgrade",
        "ironchests:obsidian_chest_upgrade",
        "ironchests:netherite_upgrade"
    ]

    iron_chests_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


    // Remove extranous charcoal blocks recipes
    const charcoal_removal = [
        "forestry:charcoal",
        "mekanism:storage_blocks/charcoal",
        "quark:building/crafting/compressed/charcoal_block"
    ]

    charcoal_removal.forEach(recipe => {
        e.remove({id: recipe})
    });


    // Remove misc recipes
    const misc_removal = [
        "minecraft:netherite_ingot",
        "bountiful:crafting/decree",
        "exlinecopperequipment:copper_nugget_recipe",
        "projectred_core:red_iron_comp",
        "projectred_core:electrotine_iron_comp",
        "redstone_arsenal:materials/flux_gem"
    ]

    misc_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

})