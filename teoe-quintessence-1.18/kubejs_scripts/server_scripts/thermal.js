// Adds recipes to Thermal Expansion
// The CT script is already spammed and super unorganized lol
onEvent("recipes", e => {

    // Craft Syrup into Sugar
    e.shapeless("2x sugar", ["#quintessence:syrup", "#quintessence:syrup"]).id("kubejs:sugar_from_syrup")

    // Make Latex Buckets give 2 Rubber so the block casting recipe is more evener
    e.remove({id: "thermal:rubber_3"})
    e.shapeless("2x thermal:rubber", ["thermal:latex_bucket"]).id("kubejs:rubber_from_bucket")


    // Melt down Create's XP nuggets into Thermal XP
    e.recipes.thermal.crucible(Fluid.of("cofh_core:experience", 60), "create:experience_nugget").energy(20000).id("kubejs:crucible_xp_nugget")

    // Melt down Fiery Blood/Tears into Fiery Essence
    e.recipes.thermal.crucible(Fluid.of("twilightforest:fiery_essence", 125), "twilightforest:fiery_blood").energy(10000).id("kubejs:crucible_fiery_blood")
    e.recipes.thermal.crucible(Fluid.of("twilightforest:fiery_essence", 250), "twilightforest:fiery_tears").energy(10000).id("kubejs:crucible_fiery_tears")


    // Crystalize Ender Dust into Ender Pearls
    e.recipes.thermal.crystallizer(["ender_pearl"], [Fluid.of("water", 1000), "#forge:dusts/ender_pearl"]).energy(10000).id("kubejs:crystallize_certus_dust")


    // Add Centrifuge recipes for modded Syrups
    e.recipes.thermal.centrifuge(["glass_bottle", Fluid.of("thermal:syrup", 125)], "autumnity:syrup_bottle").energy(200).id("kubejs:centrifuge_syrup_bottle")
    e.recipes.thermal.centrifuge(["glass_bottle", Fluid.of("thermal:syrup", 200)], "malum:holy_syrup").energy(600).id("kubejs:centrifuge_holy_syrup_bottle")
    e.recipes.thermal.centrifuge(["glass_bottle", Fluid.of("thermal:syrup", 200)], "malum:unholy_syrup").energy(600).id("kubejs:centrifuge_unholy_syrup_bottle")


    // Refine Honey into Sugar
    e.recipes.thermal.refinery(["2x sugar", Item.of("sugar").withChance(0.5)], Fluid.of("#forge:honey", 250)).energy(4000).id("kubejs:refine_honey")

    // Refine Syrup into Sugar
    e.recipes.thermal.refinery(["sugar", Item.of("sugar").withChance(0.5)], Fluid.of("thermal:syrup", 250)).energy(4000).id("kubejs:refine_syrup")


    // Fill the Glowstone Elevation Unit
    e.recipes.thermal.bottler("simplyjetpacks:unit_glowstone", [Fluid.of("thermal:glowstone", 4000), "simplyjetpacks:unit_glowstone_empty"]).energy(8000).id("kubejs:fill_glowstone_unit")

})