// Adds all of my custom blood recipes
ServerEvents.recipes(e => {

    ///// Magma Crucible
    //// Default RF cost: 40,000

    // Rabbit Foot
    e.recipes.thermal.crucible([Fluid.of("kubejs:blood", 125)], "rabbit_foot", 0.75).energy(1000).id("kubejs:melt_rabbit_foot")

    // Spider Eye
    e.recipes.thermal.crucible([Fluid.of("kubejs:blood", 125)], "spider_eye", 0.5).energy(1000).id("kubejs:melt_spider_eye")

    // Raw Meat
    e.recipes.thermal.crucible([Fluid.of("kubejs:blood", 500)], "#forge:foods/meat/raw", 2).energy(4000).id("kubejs:melt_raw_meat")

    // Rotten Flesh
    // Worth 250 mB, with Flesh Blocks being worth 1,000 (due to the 4:1 ratio)
    e.recipes.thermal.crucible([Fluid.of("kubejs:blood", 250)], "rotten_flesh", 1).energy(2000).id("kubejs:melt_rotten_flesh")
    e.recipes.thermal.crucible([Fluid.of("kubejs:blood", 250)], "netherexp:wraithing_flesh", 1.5).energy(1800).id("kubejs:melt_wraithing_flesh")





    ///// Fluid Encapsulator
    //// Default RF cost: 400
    //// Requires a fluid container or input item

    // Rotten Flesh -> Leather replacement
    // 2:1 ratio instead of 4:1
    e.remove({id: "thermal:machines/furnace/furnace_rotten_flesh_to_leather"})
    e.recipes.thermal.bottler(["leather"], [Fluid.of("kubejs:blood", 500), "#reminted:cleaning_agent"]).energy(1200).id("kubejs:clean_leather")





    ///// Fractionating Still
    //// Default RF cost: 8,000

    // Refine Blood into Iron Nuggets
    e.recipes.thermal.refinery([(Item.of("iron_nugget").withChance(0.1)), Fluid.of("water", 1000)], Fluid.of("kubejs:blood", 1000), 1).energy(3200).id("kubejs:refine_blood")

})