// Changes Rose Gold's recipes
ServerEvents.recipes(e => {

    // Condense all the Rose Gilded mushrooms into a single recipe
    e.remove({output: "rosegoldequipment:rose_gilded_mushroom"})
    e.shapeless("rosegoldequipment:rose_gilded_mushroom", ["#reminted:mushrooms", "#forge:nuggets/rose_gold"]).id("kubejs:rose_gilded_mushroom")

    // Make the Rose Gilded Beetroot cheaper
    e.remove({id: "rosegoldequipment:rose_gilded_beetroot"})
    e.shapeless("rosegoldequipment:rose_gilded_beetroot", ["beetroot", "#forge:nuggets/rose_gold", "#forge:nuggets/rose_gold"]).id("kubejs:rose_gilded_beetroot")

    // Make the Rosey Veggie Stew cheaper
    e.remove({id: "rosegoldequipment:rosey_veggie_stew"})
    e.shapeless("rosegoldequipment:rosey_beetroot_stew", ["#reminted:bowls", "rosegoldequipment:rose_gilded_beetroot", "rosegoldequipment:rose_gilded_beetroot", "rosegoldequipment:rose_gilded_mushroom"]).id("kubejs:rosey_veggie_stew")

    //// Upgrade copper equipment
    /// Tools
    // Sword
    e.smithing(    
    "rosegoldequipment:rose_golden_sword",                     // arg 1: output
    "kubejs:rose_gold_template", // arg 2: the smithing template
    "exlinecopperequipment:copper_pickaxe",                          // arg 3: the item to be upgraded
    "gold_ingot"                            // arg 4: the upgrade item
    )

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