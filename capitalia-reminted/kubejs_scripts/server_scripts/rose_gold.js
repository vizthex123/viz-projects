// Changes Rose Gold's recipes
ServerEvents.recipes(e => {

    // Removals
    e.remove({output: "rosegoldequipment:rose_gilded_mushroom"})
    const rose_gold_removal = [
        "rosegoldequipment:rose_gilded_beetroot",
        "rosegoldequipment:rosey_veggie_stew",
        "rosegoldequipment:raw_from_raw_single",
        "rosegoldequipment:raw_from_raw_double",
        "rosegoldequipment:raw_rose_gold_single",
        "rosegoldequipment:raw_rose_gold"
    ]

    rose_gold_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

    // Condense all the Rose Gilded mushrooms into a single recipe
    e.shapeless("rosegoldequipment:rose_gilded_mushroom", ["#reminted:mushrooms", "#forge:nuggets/rose_gold"]).id("kubejs:rose_gilded_mushroom")

    // Make the Rose Gilded Beetroot cheaper
    e.shapeless("rosegoldequipment:rose_gilded_beetroot", ["beetroot", "#forge:nuggets/rose_gold", "#forge:nuggets/rose_gold"]).id("kubejs:rose_gilded_beetroot")

    // Make the Rosey Veggie Stew cheaper
    e.shapeless("rosegoldequipment:rosey_beetroot_stew", ["#reminted:bowls", "rosegoldequipment:rose_gilded_beetroot", "rosegoldequipment:rose_gilded_beetroot", "rosegoldequipment:rose_gilded_mushroom"]).id("kubejs:rosey_veggie_stew")

    //// Upgrade copper equipment
    /// Tools
    // Sword
    e.smithing("rosegoldequipment:rose_golden_sword", "kubejs:rose_gold_template", "exlinecopperequipment:copper_sword", "gold_ingot")

    // Pickaxe
    e.smithing("rosegoldequipment:rose_golden_pickaxe", "kubejs:rose_gold_template", "exlinecopperequipment:copper_pickaxe", "gold_ingot")

    // Axe
    e.smithing("rosegoldequipment:rose_golden_axe", "kubejs:rose_gold_template", "exlinecopperequipment:copper_axe", "gold_ingot")

    // Shovel
    e.smithing("rosegoldequipment:rose_golden_shovel", "kubejs:rose_gold_template", "exlinecopperequipment:copper_shovel", "gold_ingot")

    // Hoe
    e.smithing("rosegoldequipment:rose_golden_hoe", "kubejs:rose_gold_template", "exlinecopperequipment:copper_hoe", "gold_ingot")



    //// Armour
    e.smithing("rosegoldequipment:rose_golden_helmet", "kubejs:rose_gold_template", "exlinecopperequipment:copper_helmet", "gold_ingot")
    e.smithing("rosegoldequipment:rose_golden_chestplate", "kubejs:rose_gold_template", "exlinecopperequipment:copper_chestplate", "gold_ingot")
    e.smithing("rosegoldequipment:rose_golden_leggings", "kubejs:rose_gold_template", "exlinecopperequipment:copper_leggings", "gold_ingot")
    e.smithing("rosegoldequipment:rose_golden_boots", "kubejs:rose_gold_template", "exlinecopperequipment:copper_boots", "gold_ingot")

})