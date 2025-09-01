// Removes various recipes for whatever reason
ServerEvents.recipes(e => {

    // Bountiful's decree
    e.remove({id: "bountiful:crafting/decree"})

    // Forestry's bronze recipe
    e.remove({id: "forestry:ingot_bronze_alloying"})

    // Functional Storage
    e.remove({id: "functionalstorage:oak_drawer_alternate_x1"})
    e.remove({id: "functionalstorage:oak_drawer_alternate_x2"})
    e.remove({id: "functionalstorage:oak_drawer_alternate_x4"})
    //e.remove({id: "functionalstorage:copper_upgrade"})
    e.remove({id: "functionalstorage:gold_upgrade"})
    e.remove({id: "functionalstorage:diamond_upgrade"})
    e.remove({id: "functionalstorage:netherite_upgrade"})
    //e.remove({id: "functionalstorage:iron_downgrade"})
    e.remove({id: "functionalstorage:ender_drawer"})
    e.remove({id: "functionalstorage:fluid_1"})
    e.remove({id: "functionalstorage:fluid_2"})
    e.remove({id: "functionalstorage:fluid_4"})

    // HammerLib
    e.remove("hammerlib:wrench")
    e.remove("hammerlib:gears/wooden")
    e.remove("hammerlib:gears/stone")
    e.remove("hammerlib:gears/copper")
    e.remove("hammerlib:gears/iron")
    e.remove("hammerlib:gears/gold")
    e.remove("hammerlib:gears/diamond")
    e.remove("hammerlib:gears/netherite")

    // Iron Chests content past the Iron tier
    e.remove({id: "ironchests:gold_chest"})
    e.remove({id: "ironchests:diamond_chest"})
    e.remove({id: "ironchests:crystal_chest"})
    e.remove({id: "ironchests:obsidian_chest"})
    e.remove({id: "ironchests:netherite_chest"})

    e.remove({id: "ironchests:gold_barrel"})
    e.remove({id: "ironchests:diamond_barrel"})
    e.remove({id: "ironchests:crystal_barrel"})
    e.remove({id: "ironchests:obsidian_barrel"})
    e.remove({id: "ironchests:netherite_barrel"})

    e.remove({id: "ironchests:gold_chest_upgrade"})
    e.remove({id: "ironchests:diamond_chest_upgrade"})
    e.remove({id: "ironchests:crystal_chest_upgrade"})
    e.remove({id: "ironchests:obsidian_chest_upgrade"})
    e.remove({id: "ironchests:netherite_upgrade"})

    // Personal Cloud Storage (moved to the various shops)
    e.remove({id: "personalcloudstorage:cloud_core"})
    e.remove({id: "personalcloudstorage:partition_node"})

    // Misc recipes
    e.remove({id: "minecraft:netherite_ingot"})
    e.remove({id: "projectred_core:red_iron_comp"})
    e.remove({id: "projectred_core:electrotine_iron_comp"})
    e.remove({id: "redstone_arsenal:materials/flux_gem"})
    e.remove({id: "rosegoldequipment:raw_rose_gold"})
    e.remove({id: "rosegoldequipment:raw_rose_gold_single"})

})