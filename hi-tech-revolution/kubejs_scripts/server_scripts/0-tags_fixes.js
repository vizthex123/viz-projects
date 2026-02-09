// Fixes missing tags on various items, blocks, and fluids
ServerEvents.tags("item", e => {

    e.add("boats", ["outer_end:azure_boat", "outer_end:azure_chest_boat"])
    e.add("chest_boats", ["outer_end:azure_chest_boat"])

    e.add("buttons", ["more_useful_copper:copper_button"])

    e.add("fence_gates", ["outer_end:azure_fence_gate"])
    e.add("wooden_fences", ["outer_end:azure_fence"])
        e.add("forge:fence_gates", ["#minecraft:fence_gates", "outer_end:azure_fence_gate"])
        e.add("forge:fence_gates/wooden", ["outer_end:azure_fence_gate"])

    e.add("stairs", ["outer_end:azure_stairs"])
    e.add("wooden_stairs", ["outer_end:azure_stairs"])

    e.add("rails", ["alexscaves:magnetic_levitation_rail"])

    e.add("signs", ["outer_end:azure_sign"])
    e.add("hanging_signs", ["outer_end:azure_hanging_sign"])



    e.add("forge:barrels", ["alexscaves:metal_barrel", "alexscaves:rusty_barrel", "alexscaves:gingerbarrel"])
    e.add("forge:barrels/metal", ["alexscaves:metal_barrel", "alexscaves:rusty_barrel"])
    e.add("forge:barrels/gingerbread", ["alexscaves:gingerbarrel"])

    e.add("forge:chests", ["ae2:sky_stone_chest", "ae2:smooth_sky_stone_chest", "outer_end:azure_chest", "outer_end:azure_trapped_chest"])
    e.add("forge:chests/wooden", ["outer_end:azure_chest", "outer_end:azure_trapped_chest"])


    e.add("forge:stone/basalt", ["basalt", "alexscaves:flood_basalt", "bygonenether:withered_basalt"])
    e.add("forge:cobblestone/basalt", ["projectred_exploration:basalt_cobble"])

    e.add("forge:sand", ["#minecraft:sand", "yungscavebiomes:ancient_sand"])

    e.add("forge:tools/steel", ["railcraft:steel_sword", "railcraft:steel_pickaxe", "railcraft:steel_axe", "railcraft:steel_hoe", "railcraft:steel_shovel", "railcraft:steel_shears", "railcraft:steel_crowbar", "railcraft:steel_spike_maul"])

    e.add("ad_astra:venus_sandstone", ["ad_astra:venus_sandstone"])



    /// Crops
    e.add("forge:crops", ["glow_berries", "sweet_berries", "pitcher_pod", "torchflower_seeds", "outer_end:azure_berries", "phantasm:pream_berry", "oceanfront:beach_plum", "upgrade_aquatic:mulberry"])

    e.add("forge:crops/azureberry", ["outer_end:azure_berries"])
    e.add("forge:crops/plum", ["oceanfront:beach_plum"])
    e.add("forge:crops/preamberry", ["phantasm:pream_berry"])
    e.add("forge:crops/mulberry", ["upgrade_aquatic:mulberry"])

})