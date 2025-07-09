// Changes things from the Thermal "Series"
// Still not used to that name...
ServerEvents.recipes(e => {

    ///// Pulverizer
    /// Default RF cost: 4,000

    // Fluix -> Dust
    e.recipes.thermal.pulverizer(["ae2:fluix_dust"], "#forge:gems/fluix", 2).energy(1600).id("kubejs:pulverize_fluix")

    // Certus Quartz -> Dust
    e.recipes.thermal.pulverizer(["ae2:certus_quartz_dust"], "#forge:gems/certus_quartz", 1).energy(1600).id("kubejs:pulverize_certus")

    // Seashells -> Bone Meal
    e.recipes.thermal.pulverizer(["3x bone_meal", Item.of("bone_meal").withChance(0.25)], "ecologics:seashell", 0.5).energy(1600).id("kubejs:pulverize_seashell")

    // Crying Obsidian -> Obsidian
    e.recipes.thermal.pulverizer(["obsidian", Item.of("3x lapis_lazuli").withChance(0.5)], "crying_obsidian", 4).id("kubejs:pulverize_crying_obsidian")





    ///// Induction Smelter
    /// Default RF Cost: 3,200
    /// When KubeJS reads inputs, they show up center -> left -> right in REI

    // Netherite
    e.recipes.thermal.smelter(["netherite_ingot"], ["4x gold_ingot", "4x netherite_scrap"]).energy(3200).id("kubejs:netherite_ingot")





    ///// Crystallizer
    //// Default RF cost: 20,000

    // Crystallize Certus Quartz Dust
    e.recipes.thermal.crystallizer(["ae2:certus_quartz_crystal"], [Fluid.of("water", 1000), "ae2:certus_quartz_dust"]).energy(3000).id("kubejs:crystallize_certus_dust")

    // Crystallize Ender Dust
    e.recipes.thermal.crystallizer(["ender_pearl"], [Fluid.of("water", 1000), "#forge:dusts/ender_pearl"]).energy(12000).id("kubejs:crystallize_ender_dust")





    ///// Multiservo Press
    //// Default RF cost: 2,400

    /// New Latex recipes
    // Each Rubber uses 250 mB of Latex
    e.remove({id: "thermal:machines/press/press_dandelion_to_latex"})
    e.remove({id: "thermal:machines/press/press_vine_to_latex"})

    e.recipes.thermal.press([Fluid.of("thermal:latex", 25)], ["#forge:seeds"], 0.1).energy(400).id("kubejs:seeds_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 50)], ["#reminted:vines"], 0.15).energy(400).id("kubejs:vines_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 100)], ["#reminted:cacti"], 0.2).energy(400).id("kubejs:cacti_to_latex")

    e.recipes.thermal.press([Fluid.of("thermal:latex", 50)], ["#minecraft:small_flowers"], 0.1).energy(400).id("kubejs:small_flowers_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 100)], ["#reminted:tall_flowers"], 0.15).energy(400).id("kubejs:tall_flowers_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 150)], ["sunflower"], 0.1).energy(400).id("kubejs:sunflower_to_latex")

    e.recipes.thermal.press([Fluid.of("thermal:latex", 50)], ["#reminted:cave_plants"], 0.25).energy(800).id("kubejs:cave_plants_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 250)], ["#reminted:nether_plants"], 0.35).energy(1600).id("kubejs:nether_plants_to_latex")

    // Salt -> Salt Block and vice versa
    e.recipes.thermal.press(["salt:salt_block"], ["9x salt:salt", "thermal:press_packing_die"], 0).energy(400).id("kubejs:pack_salt")
    e.recipes.thermal.press(["9x salt:salt"], ["salt:salt_block", "thermal:press_unpacking_die"], 0).energy(400).id("kubejs:unpack_salt")





    ///// Magma Crucible
    //// Default RF cost: 40,000

    // Icicle -> Water
    e.recipes.thermal.crucible([Fluid.of("water", 250)], "yungscavebiomes:icicle", 1).energy(2000).id("kubejs:melt_icicle")





    ///// Fractionating Still
    //// Default RF cost: 8,000

    // Refine Latex into Rubber
    e.recipes.thermal.refinery([Item.of("thermal:rubber"), Fluid.of("water", 250)], Fluid.of("thermal:latex", 250), 1).energy(1600).id("kubejs:refine_latex")





    //// Dynamos
    e.remove({id: "thermal:fuels/lapidary/lapidary_emerald"})
    e.remove({id: "thermal:fuels/lapidary/lapidary_amethyst"})
    e.remove({id: "thermal:fuels/lapidary/lapidary_prismarine"})

    // Lapidary
    e.recipes.thermal.lapidary_fuel("#forge:gems/apatite").energy(40000).id("kubejs:apatite_energy")
    e.recipes.thermal.lapidary_fuel("#reminted:corundum").energy(40000).id("kubejs:corundum_energy")

    e.recipes.thermal.lapidary_fuel("amethyst_shard").energy(80000).id("kubejs:amethyst_energy")
    e.recipes.thermal.lapidary_fuel("echo_shard").energy(250000).id("kubejs:echo_shard_energy")
    e.recipes.thermal.lapidary_fuel("emerald").energy(25000).id("kubejs:emerald_energy")
    e.recipes.thermal.lapidary_fuel("prismarine_crystals").energy(60000).id("kubejs:prismarine_energy")

    e.recipes.thermal.lapidary_fuel("alexscaves:occult_gem").energy(150000).id("kubejs:occult_gem_energy")
    e.recipes.thermal.lapidary_fuel("rftoolsbase:dimensionalshard").energy(250000).id("kubejs:dimshard_energy")
    e.recipes.thermal.lapidary_fuel("thermal:niter").energy(60000).id("kubejs:niter_energy")

    // Magmatic
    e.remove({id: "thermal:fuels/magmatic/magmatic_lava"})
    e.recipes.thermal.magmatic_fuel("lava").energy(10000).id("kubejs:lava_energy")

})