// Adds and changes recipes for Ender IO's content
ServerEvents.recipes(e => {
    
    ////// SAG Mill
    //// Default RF cost: 2,000


    //// Ores

    // Aluminum
    e.recipes.enderio.sag_milling(["2x kubejs:aluminum_dust", Item.of("ae2:certus_quartz_dust").withChance(0.2), Item.of("cobblestone").withChance(0.15)], "#forge:ores/aluminum").energy(2400).id("kubejs:sag_mill_aluminium");
    //e.recipes.enderio.sag_milling(["kubejs:aluminum_dust", Item.of("ae2:certus_quartz_dust").withChance(0.2), Item.of("cobblestone").withChance(0.15)], "#forge:raw_materials/aluminum").energy(2400).id("kubejs:sag_mill_raw_aluminium");

    // Uranium
    e.recipes.enderio.sag_milling(["2x biggerreactors:uranium_dust", Item.of("2x biggerreactors:cyanite_dust").withChance(0.1), Item.of("cobblestone").withChance(0.15)], "#forge:ores/uranium").energy(2400).id("kubejs:sag_mill_uranium");

    // Zinc
    e.recipes.enderio.sag_milling(["2x kubejs:zinc_dust", Item.of("enderio:powdered_iron").withChance(0.25), Item.of("cobblestone").withChance(0.15)], "#forge:ores/aluminum").energy(2400).id("kubejs:sag_mill_zinc");
    //e.recipes.enderio.sag_milling(["kubejs:zinc_dust", Item.of("enderio:powdered_iron").withChance(0.25), Item.of("cobblestone").withChance(0.15)], "#forge:raw_materials/aluminum").energy(2400).id("kubejs:sag_mill_raw_zinc");



    //// Adds mod support to Sandstone recipes
    /// Slab RF rate and extra sand rate is half the regular one
    e.remove({id: "enderio:sag_milling/sandstone"})
    e.recipes.enderio.sag_milling(["2x sand", Item.of("2x sand").withChance(0.4)], "#revolution:sandstone").energy(2400).id("kubejs:sag_mill_sandstone");
    e.recipes.enderio.sag_milling(["2x red_sand", Item.of("2x red_sand").withChance(0.4)], "#revolution:red_sandstone").energy(2400).id("kubejs:sag_mill_red_sandstone");

    e.recipes.enderio.sag_milling(["sand", Item.of("sand").withChance(0.4)], "#revolution:sandstone_slab").energy(1200).id("kubejs:sag_mill_sandstone_slab");
    e.recipes.enderio.sag_milling(["red_sand", Item.of("red_sand").withChance(0.2)], "#revolution:red_sandstone_slab").energy(1200).id("kubejs:sag_mill_red_sandstone_slab");

    e.recipes.enderio.sag_milling(["2x biomesoplenty:black_sand", Item.of("2x biomesoplenty:black_sand").withChance(0.4)], "#revolution:black_sandstone").energy(2400).id("kubejs:sag_mill_black_sandstone");
    e.recipes.enderio.sag_milling(["biomesoplenty:black_sand", Item.of("biomesoplenty:black_sand").withChance(0.2)], "#revolution:black_sandstone_slab").energy(1200).id("kubejs:sag_mill_black_sandstone_slab");

    e.recipes.enderio.sag_milling(["2x biomesoplenty:white_sand", Item.of("2x biomesoplenty:white_sand").withChance(0.4)], "#revolution:white_sandstone").energy(2400).id("kubejs:sag_mill_white_sandstone");
    e.recipes.enderio.sag_milling(["biomesoplenty:white_sand", Item.of("biomesoplenty:white_sand").withChance(0.2)], "#revolution:white_sandstone_slab").energy(1200).id("kubejs:sag_mill_white_sandstone_slab");

    e.recipes.enderio.sag_milling(["2x biomesoplenty:orange_sand", Item.of("2x biomesoplenty:orange_sand").withChance(0.4)], "#revolution:orange_sandstone").energy(2400).id("kubejs:sag_mill_orange_sandstone");
    e.recipes.enderio.sag_milling(["biomesoplenty:orange_sand", Item.of("biomesoplenty:orange_sand").withChance(0.2)], "#revolution:orange_sandstone_slab").energy(1200).id("kubejs:sag_mill_orange_sandstone_slab");


    e.recipes.enderio.sag_milling(["2x yungscavebiomes:ancient_sand", Item.of("2x yungscavebiomes:ancient_sand").withChance(0.4)], "#revolution:ancient_sandstone").energy(2400).id("kubejs:sag_mill_ancient_sandstone");
    e.recipes.enderio.sag_milling(["yungscavebiomes:ancient_sand", Item.of("yungscavebiomes:ancient_sand_slab").withChance(0.2)], "#revolution:ancient_sandstone_slab").energy(1200).id("kubejs:sag_mill_ancient_sandstone_slab");



/*
    // Make Organic Black Dye use my carbon dust tag
    e.remove({id: "enderio:alloy_smelting/organic_black_dye"});
    e.remove({id: "enderio:alloy_smelting/organic_black_dye_double"});
    e.recipes.enderio.alloy_smelting("enderio:organic_black_dye", [Ingredient.of("#revolution:carbon_dust"), Ingredient.of("#forge:eggs")]).energy(1000).id("kubejs:organic_black_dye");
    e.recipes.enderio.alloy_smelting("2x enderio:organic_black_dye", [Ingredient.of("#revolution:carbon_dust", 2), "#forge:slimeballs"]).energy(1600).id("kubejs:organic_black_dye_slimeballs");
*/


});