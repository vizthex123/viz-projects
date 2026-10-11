// Changes things from the Thermal "Series"
// Still not used to that name...
ServerEvents.recipes(e => {

    ///// Recipes
    // Induction Smelter upgrade
    e.remove({id: "thermal:machine_smelter"})
    e.shaped(
      "thermal:machine_smelter",
        [
          " F ",
          "SMS",
          "ICI"
        ],
        {
          C: "thermal:rf_coil",
          F: ["blast_furnace", "forestry:smelter"],
          I: "#forge:gears/invar",
          M: "thermal:machine_frame",
          S: "#forge:sand"
        }
    ).id("kubejs:induction_smelter")



    ///// Pulverizer
    /// Default RF cost: 4,000

    // Plank version of Logs -> Sawdust
    e.recipes.thermal.pulverizer(["2x thermal:sawdust"], "#minecraft:planks", 0).energy(800).id("kubejs:pulverize_planks")

    // Cinnabar & Sulfur -> Their Crystal versions
    e.recipes.thermal.pulverizer([Item.of("thermal:cinnabar").withChance(0.5)], "cinnabar", 2).id("kubejs:pulverize_cinnabar")
    e.recipes.thermal.pulverizer(["sulfur", "2x thermal:sulfur_dust", Item.of("thermal:sulfur_dust").withChance(0.5)], "sulfur", 1).energy(2000).id("kubejs:pulverize_sulfur")
    e.recipes.thermal.pulverizer(["thermal:sulfur_dust"], "sulfur_spike", 0.25).energy(1000).id("kubejs:pulverize_sulfur_spike")

    // Ruby -> Dust
    e.recipes.thermal.pulverizer(["thermal:ruby_dust"], "#forge:gems/ruby", 3).energy(2000).id("kubejs:pulverize_ruby")

    // Fluix -> Dust
    e.recipes.thermal.pulverizer(["ae2:fluix_dust"], "#forge:gems/fluix", 2).energy(2000).id("kubejs:pulverize_fluix")

    // Sky Stone -> Dust
    e.recipes.thermal.pulverizer(["ae2:sky_dust"], "ae2:sky_stone_block", 0.5).energy(2000).id("kubejs:pulverize_sky_stone")

    // Certus Quartz -> Dust
    e.recipes.thermal.pulverizer(["ae2:certus_quartz_dust"], "#forge:gems/certus_quartz", 1).energy(2000).id("kubejs:pulverize_certus")
/*
    // Shells -> Bone Meal
    e.recipes.thermal.pulverizer(["2x bone_meal", Item.of("bone_meal").withChance(0.25)], "#reminted:shells", 0.5).energy(1600).id("kubejs:pulverize_shell")
*/
    // Calcite -> Bone Meal
    e.recipes.thermal.pulverizer(["4x bone_meal"], "calcite", 0.5).energy(3000).id("kubejs:pulverize_calcite")

    // Crying Obsidian -> Obsidian
    e.recipes.thermal.pulverizer(["obsidian", Item.of("3x lapis_lazuli").withChance(0.5)], "crying_obsidian", 4).id("kubejs:pulverize_crying_obsidian")

    /// Pulverize all types of Corundum
    // Basic colours
    e.recipes.thermal.pulverizer(["2x quark:red_corundum_cluster"], ["quark:red_corundum", "quark:waxed_red_corundum"], 0.5).energy(2000).id("kubejs:pulverize_red_corundum")
    e.recipes.thermal.pulverizer(["2x quark:blue_corundum_cluster"], ["quark:blue_corundum", "quark:waxed_blue_corundum"], 0.5).energy(2000).id("kubejs:pulverize_blue_corundum")
    e.recipes.thermal.pulverizer(["2x quark:yellow_corundum_cluster"], ["quark:yellow_corundum", "quark:waxed_yellow_corundum"], 0.5).energy(2000).id("kubejs:pulverize_yellow_corundum")
    e.recipes.thermal.pulverizer(["2x quark:white_corundum_cluster"], ["quark:white_corundum", "quark:waxed_white_corundum"], 0.5).energy(2000).id("kubejs:pulverize_white_corundum")
    e.recipes.thermal.pulverizer(["2x quark:black_corundum_cluster"], ["quark:black_corundum", "quark:waxed_black_corundum"], 0.5).energy(2000).id("kubejs:pulverize_black_corundum")

    // Compound colours
    e.recipes.thermal.pulverizer(["2x quark:orange_corundum_cluster", Item.of("red_corundum_cluster").withChance(0.25), Item.of("yellow_corundum_cluster").withChance(0.25)], ["quark:orange_corundum", "quark:waxed_orange_corundum"], 0.5).energy(2000).id("kubejs:pulverize_orange_corundum")
    e.recipes.thermal.pulverizer(["2x quark:green_corundum_cluster", Item.of("blue_corundum_cluster").withChance(0.25), Item.of("yellow_corundum_cluster").withChance(0.25)], ["quark:green_corundum", "quark:waxed_green_corundum"], 0.5).energy(2000).id("kubejs:pulverize_green_corundum")
    e.recipes.thermal.pulverizer(["2x quark:indigo_corundum_cluster", Item.of("blue_corundum_cluster").withChance(0.25), Item.of("violet_corundum_cluster").withChance(0.25)], ["quark:indigo_corundum", "quark:waxed_indigo_corundum"], 0.5).energy(2000).id("kubejs:pulverize_indigo_corundum")
    e.recipes.thermal.pulverizer(["2x quark:violet_corundum_cluster", Item.of("blue_corundum_cluster").withChance(0.15), Item.of("redcorundum_cluster").withChance(0.15)], ["quark:violet_corundum", "quark:waxed_violet_corundum"], 0.5).energy(2000).id("kubejs:pulverize_violet_corundum")





    ///// Induction Smelter
    /// Default RF Cost: 3,200
    /// When KubeJS reads inputs from left-to-right, they show up center -> left -> right in REI

    // Forestry's Silicon
    e.recipes.thermal.smelter(["forestry:silicon"], ["3x quartz", "#forge:coal_coke"]).id("kubejs:silicon")





    ///// Magma Crucible
    //// Default RF cost: 40,000

    // Icicle -> Water
    e.recipes.thermal.crucible([Fluid.of("water", 250)], "yungscavebiomes:icicle", 1).energy(800).id("kubejs:melt_icicle")

    // Ectoplasm -> Ectoplasm Fluid
    e.recipes.thermal.crucible([Fluid.of("netherexp:ectoplasm", 250)], "biomemakeover:ectoplasm", 1).energy(1600).id("kubejs:melt_ectoplasm")





    ///// Fractionating Still
    //// Default RF cost: 8,000

    // Refine Ectoplasm Fluid into Ectoplasm
    e.recipes.thermal.refinery(["biomemakeover:ectoplasm"], [Fluid.of("netherexp:ectoplasm", 250)]).energy(2000).id("kubejs:solidify_ectoplasm")

    // Refine Latex into Rubber
    e.recipes.thermal.refinery([Item.of("thermal:rubber"), Fluid.of("water", 250)], Fluid.of("thermal:latex", 250), 1).energy(1600).id("kubejs:refine_latex")

    // Refine XyCraft's Resin into Resin Balls
    e.recipes.thermal.refinery([Item.of("xycraft_machines:resin_ball").withChance(0.5), Fluid.of("thermal:tree_oil", 125)], Fluid.of("xycraft_machines:resin", 250), 0.2).energy(4000).id("kubejs:refine_resin")





    ///// Crystallizer
    //// Default RF cost: 20,000

    // Crystallize Certus Quartz Dust
    e.recipes.thermal.crystallizer(["ae2:certus_quartz_crystal"], [Fluid.of("water", 1000), "ae2:certus_quartz_dust"]).energy(3000).id("kubejs:crystallize_certus_dust")

    // Crystallize Ender Dust
    e.recipes.thermal.crystallizer(["ender_pearl"], [Fluid.of("lava", 1000), "#forge:dusts/ender_pearl"]).energy(12000).id("kubejs:crystallize_ender_dust")





    ///// Misc stuff
    //// Catalysts
    // Pulverizer
    e.recipes.thermal.pulverizer_catalyst("echo_shard").primaryMod(3.0).secondaryMod(3.0).energyMod(0.5).minChance(0.15).useChance(0.5).id("kubejs:echo_shard_catalyst")
    e.recipes.thermal.pulverizer_catalyst("#forge:dusts/diamond").primaryMod(1.5).secondaryMod(1.5).energyMod(1.25).minChance(0.35).useChance(0.25).id("kubejs:diamond_dust_catalyst")
    e.recipes.thermal.pulverizer_catalyst("#teoe10:corundum").primaryMod(1.25).secondaryMod(1.0).energyMod(0.8).minChance(0.5).useChance(0.65).id("kubejs:corundum_catalyst")



    //// Dynamos
    e.remove({id: "thermal:fuels/lapidary/lapidary_emerald"})
    e.remove({id: "thermal:fuels/lapidary/lapidary_amethyst"})
    e.remove({id: "thermal:fuels/lapidary/lapidary_prismarine"})

    // Lapidary
    e.recipes.thermal.lapidary_fuel("#forge:gems/amber").energy(75000).id("kubejs:amber_energy")
    e.recipes.thermal.lapidary_fuel("#forge:gems/apatite").energy(40000).id("kubejs:apatite_energy")
    e.recipes.thermal.lapidary_fuel("#forge:gems/peridot").energy(130000).id("kubejs:peridot_energy")
    e.recipes.thermal.lapidary_fuel("#forge:gems/xychorium").energy(50000).id("kubejs:xychorium_energy")
    e.recipes.thermal.lapidary_fuel("#teoe10:corundum").energy(40000).id("kubejs:corundum_energy")

    e.recipes.thermal.lapidary_fuel("emerald").energy(20000).id("kubejs:emerald_energy")
    e.recipes.thermal.lapidary_fuel("echo_shard").energy(250000).id("kubejs:echo_shard_energy")
    e.recipes.thermal.lapidary_fuel("amethyst_shard").energy(80000).id("kubejs:amethyst_energy")
    e.recipes.thermal.lapidary_fuel("prismarine_crystals").energy(60000).id("kubejs:prismarine_energy")

    e.recipes.thermal.lapidary_fuel("qor:certus_quartz_crystal").energy(3000).id("kubejs:certus_sliver_energy")
    e.recipes.thermal.lapidary_fuel("ae2:certus_quartz_crystal").energy(30000).id("kubejs:certus_energy")
    e.recipes.thermal.lapidary_fuel("ae2:charged_certus_quartz_crystal").energy(50000).id("kubejs:charged_certus_energy")
    e.recipes.thermal.lapidary_fuel("ae2:fluix_crystal").energy(60000).id("kubejs:fluix_energy")

    e.recipes.thermal.lapidary_fuel("thermal:niter").energy(60000).id("kubejs:niter_energy")

    // Numismatic
    e.recipes.thermal.numismatic_fuel("numismaticoverhaul:copper_coin").energy(1000).id("kubejs:copper_coin_energy")
    e.recipes.thermal.numismatic_fuel("numismaticoverhaul:silver_coin").energy(10000).id("kubejs:silver_coin_energy")
    e.recipes.thermal.numismatic_fuel("numismaticoverhaul:gold_coin").energy(100000).id("kubejs:gold_coin_energy")

    // Magmatic
    e.remove({id: "thermal:fuels/magmatic/magmatic_lava"})
    e.recipes.thermal.magmatic_fuel("lava").energy(10000).id("kubejs:lava_energy")

})