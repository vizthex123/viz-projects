// Changes things from the Thermal "Series"
// Still not used to that name...
ServerEvents.tags("item", e => {

    //// Alloying tags
    //e.add("reminted:alloying/tin", ["#forge:dusts/tin", "#forge:raw_materials/tin", "#forge:ingots/tin"])
    e.add("reminted:alloying/copper", ["#forge:dusts/tin", "#forge:raw_materials/tin", "copper_ingot"])
    e.add("reminted:alloying/gold", ["#forge:dusts/gold", "#forge:raw_materials/gold", "gold_ingot"])

})


ServerEvents.recipes(e => {

    ///// Pulverizer
    /// Default RF cost: 4,000

    // Plank version of Logs -> Sawdust
    e.recipes.thermal.pulverizer(["2x thermal:sawdust"], "#minecraft:planks", 0).energy(800).id("kubejs:pulverize_planks")

    // Ruby -> Dust
    e.recipes.thermal.pulverizer(["thermal:ruby_dust"], "#forge:gems/ruby", 3).energy(2000).id("kubejs:pulverize_ruby")

    // Fluix -> Dust
    e.recipes.thermal.pulverizer(["ae2:fluix_dust"], "#forge:gems/fluix", 2).energy(2000).id("kubejs:pulverize_fluix")

    // Sky Stone -> Dust
    e.recipes.thermal.pulverizer(["ae2:sky_dust"], "ae2:sky_stone_block", 0.5).energy(2000).id("kubejs:pulverize_sky_stone")

    // Certus Quartz -> Dust
    e.recipes.thermal.pulverizer(["ae2:certus_quartz_dust"], "#forge:gems/certus_quartz", 1).energy(2000).id("kubejs:pulverize_certus")

    // Shells -> Bone Meal
    e.recipes.thermal.pulverizer(["2x bone_meal", Item.of("bone_meal").withChance(0.25)], "#reminted:shells", 0.5).energy(1600).id("kubejs:pulverize_shell")

    // Calcite -> Bone Meal
    e.recipes.thermal.pulverizer(["4x bone_meal"], "calcite", 0.5).energy(3000).id("kubejs:pulverize_calcite")

    // Crying Obsidian -> Obsidian
    e.recipes.thermal.pulverizer(["obsidian", Item.of("3x lapis_lazuli").withChance(0.5)], "crying_obsidian", 4).id("kubejs:pulverize_crying_obsidian")



    /// Make some default recipes match their Rock Crusher version
    /// Each one gives 2 Powdered Stone and +10% to the secondary drop chances

    // Gravel
    e.remove({id: "thermal:machines/pulverizer/pulverizer_gravel"})
    e.recipes.thermal.pulverizer(["sand", Item.of("flint").withChance(0.2), "kubejs:powdered_stone"], "gravel", 0.5).energy(4000).id("kubejs:pulverize_gravel")

    // Cobblestone
    e.remove({id: "thermal:machines/pulverizer/pulverizer_cobblestone"})
    e.recipes.thermal.pulverizer(["gravel", Item.of("sand").withChance(0.2), Item.of("flint").withChance(0.1), "kubejs:powdered_stone"], "cobblestone", 0.75).energy(4000).id("kubejs:pulverize_cobblestone")

    // Fancy rocks
    e.remove({id: "thermal:machines/pulverizer/pulverizer_andesite"})
    e.remove({id: "thermal:machines/pulverizer/pulverizer_diorite"})
    e.remove({id: "thermal:machines/pulverizer/pulverizer_granite"})
    e.recipes.thermal.pulverizer(["2x kubejs:powdered_stone", Item.of("thermal:quartz_dust").withChance(0.35), Item.of("iron_nugget").withChance(0.25)], "andesite", 1).energy(4000).id("kubejs:pulverize_andesite")
    e.recipes.thermal.pulverizer(["2x kubejs:powdered_stone", Item.of("thermal:quartz_dust").withChance(0.35), Item.of("thermal:tin_nugget").withChance(0.25)], "diorite", 1).energy(4000).id("kubejs:pulverize_diorite")
    e.recipes.thermal.pulverizer(["2x kubejs:powdered_stone", Item.of("thermal:quartz_dust").withChance(0.35), Item.of("thermal:copper_nugget").withChance(0.25)], "granite", 1).energy(4000).id("kubejs:pulverize_granite")





    ///// Induction Smelter
    /// Default RF Cost: 3,200
    /// When KubeJS reads inputs, they show up center -> left -> right in REI

    // Netherite
    // Increases the RF cost
    e.remove({id: "thermal:machines/smelter/smelter_alloy_netherite"})
    e.recipes.thermal.smelter(["netherite_ingot"], ["4x #reminted:alloying/gold", "4x netherite_scrap"]).energy(6400).id("kubejs:alloy_netherite")

    // Rose Gold
    e.remove({id: "thermal:machines/smelter/smelter_alloy_rose_gold"})
    e.recipes.thermal.smelter(["2x thermal:rose_gold_ingot"], ["#reminted:alloying/gold", "3x #reminted:alloying/copper", ]).energy(3200).id("kubejs:alloy_rose_gold")
/*
    // Replacement Bronze recipe that uses my new tags
    e.remove({id: "thermal:machines/smelter/smelter_alloy_bronze"})
    e.recipes.thermal.smelter(["4x thermal:bronze_ingot"], ["#reminted:alloying/tin", "3x #reminted:alloying/copper", ]).energy(3200).id("kubejs:alloy_rose_gold")
*/
    // Red Alloy
    e.recipes.thermal.smelter(["projectred_core:red_ingot"], [["iron_ingot", "#forge:dusts/iron"], "8x redstone", ]).energy(3200).id("kubejs:red_alloy")

    // Electrotine Alloy
    e.recipes.thermal.smelter(["projectred_core:electrotine_ingot"], [["iron_ingot", "#forge:dusts/iron"], "8x #forge:dusts/electrotine", ]).energy(3200).id("kubejs:electrotine_alloy")





    ///// Centrifugal Separator
    /// Default RF cost: 4,000

    // Mud -> Clay & Dirt
    e.recipes.thermal.centrifuge([Item.of("2x clay_ball").withChance(0.75), Item.of("2x dirt").withChance(0.25), Fluid.of("minecraft:water", 250)], "mud", 1).energy(2000).id("kubejs:centrifuge_mud")





    ///// Crystalliser
    //// Default RF cost: 20,000

    // Crystallise Ender Dust
    e.recipes.thermal.crystallizer(["ender_pearl"], [Fluid.of("water", 1000), "#forge:dusts/ender_pearl"]).energy(12000).id("kubejs:crystallise_ender_dust")

    // Crystallise Certus Quartz Dust
    e.recipes.thermal.crystallizer(["ae2:certus_quartz_crystal"], [Fluid.of("water", 1000), "ae2:certus_quartz_dust"]).energy(4000).id("kubejs:crystallise_certus_dust")

    // Crystallise Ruby Dust
    e.recipes.thermal.crystallizer(["thermal:ruby"], [Fluid.of("water", 2000), "#forge:dusts/ruby"]).energy(8000).id("kubejs:crystallise_ruby_dust")





    ///// Pyrolyzer
    //// Default RF cost: 2,000

    // Coal Coke with Charcoal
    e.recipes.thermal.pyrolyzer([Item.of("thermal:coal_coke").withChance(0.5), Fluid.of("thermal:creosote", 500)], ["charcoal"]).energy(6000).id("kubejs:pyrolyze_charcoal")

    // Coal Coke with Fossil Fuel
    e.recipes.thermal.pyrolyzer(["thermal:coal_coke", Item.of("thermal:tar").withChance(0.5), Fluid.of("thermal:light_oil", 250)], ["netherexp:fossil_fuel"]).energy(4000).id("kubejs:pyrolyze_fossil_fuel")





    ///// Multiservo Press
    //// Default RF cost: 2,400

    /// New Latex recipes
    // Each Rubber uses 250 mB of Latex
    e.remove({id: "thermal:machines/press/press_dandelion_to_latex"})
    e.remove({id: "thermal:machines/press/press_vine_to_latex"})

    e.recipes.thermal.press([Fluid.of("thermal:latex", 25)], ["#forge:seeds"], 0.1).energy(400).id("kubejs:seeds_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 50)], ["#reminted:vines"], 0.15).energy(400).id("kubejs:vines_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 100)], ["#dyetagger:cacti"], 0.2).energy(400).id("kubejs:cacti_to_latex")

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

    // Ectoplasm -> Ectoplasm Fluid
    e.recipes.thermal.crucible([Fluid.of("netherexp:ectoplasm", 250)], "biomemakeover:ectoplasm", 2).energy(1600).id("kubejs:melt_ectoplasm")

    // Icicle -> Water
    e.recipes.thermal.crucible([Fluid.of("water", 250)], "yungscavebiomes:icicle", 1).energy(800).id("kubejs:melt_icicle")

    // Thin Ice -> Water
    e.recipes.thermal.crucible([Fluid.of("water", 500)], "ecologics:thin_ice", 1).energy(1000).id("kubejs:melt_thin_ice")





    ///// Fluid Encapsulator
    //// Default RF cost: 400
    //// Requires a fluid container or input item

    // Ectoplasm Fluid -> Ectoplasm
    e.recipes.thermal.bottler(["biomemakeover:ectoplasm"], [Fluid.of("netherexp:ectoplasm", 250)]).energy(2000).id("kubejs:solidify_ectoplasm")





    ///// Fractionating Still
    //// Default RF cost: 8,000

    // Refine Water into Gold Nuggets
    e.recipes.thermal.refinery([(Item.of("gold_nugget").withChance(0.01))], Fluid.of("water", 1000), 1).id("kubejs:refine_water")

    // Refine Ectoplasm into Soul Beads
    e.recipes.thermal.refinery([Item.of("quark:soul_bead").withChance(0.5)], Fluid.of("netherexp:ectoplasm", 250), 1).energy(2400).id("kubejs:refine_ectoplasm")

    // Refine Latex into Rubber
    e.recipes.thermal.refinery([Item.of("thermal:rubber"), Fluid.of("water", 250)], Fluid.of("thermal:latex", 250), 1).energy(1600).id("kubejs:refine_latex")





    ///// Blast Chiller
    //// Default RF cost: 4,000

    // Honey -> Honeycomb
    e.recipes.thermal.chiller(["honeycomb"], [Fluid.of("cofh_core:honey", 100), "forestry:honeydew"]).energy(2000).id("kubejs:honeycomb")
    e.recipes.thermal.chiller(["honeycomb"], [Fluid.of("forestry:honey", 100), "forestry:honeydew"]).energy(2000).id("kubejs:honeycomb_alt")





    //// Catalysts
    // Pulverizer
    e.recipes.thermal.pulverizer_catalyst("echo_shard").primaryMod(3.0).secondaryMod(3.0).energyMod(0.5).minChance(0.15).useChance(0.5).id("kubejs:echo_shard_catalyst")
    e.recipes.thermal.pulverizer_catalyst("#forge:dusts/diamond").primaryMod(2.0).secondaryMod(2.0).energyMod(1.5).minChance(0.75).useChance(0.25).id("kubejs:diamond_dust_catalyst")
    e.recipes.thermal.pulverizer_catalyst("#reminted:corundum").primaryMod(1.25).secondaryMod(1.0).energyMod(0.8).minChance(0.5).useChance(0.65).id("kubejs:corundum_catalyst")

    // Phytogenic Insolator
    e.recipes.thermal.insolator_catalyst("forestry:fertilizer_bio").primaryMod(1.5).secondaryMod(1.15).energyMod(0.5).minChance(0.25).useChance(0.5).id("kubejs:compost_catalyst")
    e.recipes.thermal.insolator_catalyst("forestry:fertilizer_compound").primaryMod(1.35).secondaryMod(1.25).energyMod(0.7).minChance(0.25).useChance(0.5).id("kubejs:fertilizer_catalyst")





    //// Dynamos
    e.remove({id: "thermal:fuels/lapidary/lapidary_emerald"})
    e.remove({id: "thermal:fuels/lapidary/lapidary_amethyst"})
    e.remove({id: "thermal:fuels/lapidary/lapidary_prismarine"})


    // Numismatic
    // $1 = 1,000 RF
    e.recipes.thermal.numismatic_fuel("essentiallycurrency:copper_coin").energy(1000).id("kubejs:copper_coin_energy")
    e.recipes.thermal.numismatic_fuel("essentiallycurrency:iron_coin").energy(5000).id("kubejs:iron_coin_energy")
    e.recipes.thermal.numismatic_fuel("essentiallycurrency:gold_coin").energy(10000).id("kubejs:gold_coin_energy")
    e.recipes.thermal.numismatic_fuel("essentiallycurrency:diamond_coin").energy(25000).id("kubejs:diamond_coin_energy")
    e.recipes.thermal.numismatic_fuel("essentiallycurrency:emerald_coin").energy(50000).id("kubejs:emerald_coin_energy")
    e.recipes.thermal.numismatic_fuel("essentiallycurrency:netherite_coin").energy(75000).id("kubejs:netherite_coin_energy")


    // Lapidary
    e.recipes.thermal.lapidary_fuel("#forge:gems/amber").energy(250000).id("kubejs:amber_energy")
    e.recipes.thermal.lapidary_fuel("#forge:gems/apatite").energy(40000).id("kubejs:apatite_energy")
    e.recipes.thermal.lapidary_fuel("#reminted:corundum").energy(40000).id("kubejs:corundum_energy")

    e.recipes.thermal.lapidary_fuel("emerald").energy(5000).id("kubejs:emerald_energy")
    e.recipes.thermal.lapidary_fuel("echo_shard").energy(250000).id("kubejs:echo_shard_energy")
    e.recipes.thermal.lapidary_fuel("amethyst_shard").energy(80000).id("kubejs:amethyst_energy")
    e.recipes.thermal.lapidary_fuel("prismarine_crystals").energy(60000).id("kubejs:prismarine_energy")

    e.recipes.thermal.lapidary_fuel("thermal:niter").energy(60000).id("kubejs:niter_energy")


    // Compression
    e.recipes.thermal.compression_fuel("thermal:crude_oil").energy(250000).id("kubejs:crude_oil_energy")
    e.recipes.thermal.compression_fuel("forestry:seed_oil").energy(120000).id("kubejs:seed_oil_energy")



    // Magmatic
    e.remove({id: "thermal:fuels/magmatic/magmatic_lava"})
    e.recipes.thermal.magmatic_fuel("lava").energy(20000).id("kubejs:lava_energy")





    //// Crafting recipes
    // Upgrade Forestry's Engines into a Stirling Dynamo
    e.shaped(
     "thermal:dynamo_stirling",
      [
        " C ",
        "IEI",
        "SRS"
      ],
      {
        C: "thermal:rf_coil",
        E: ["forestry:engine_biogas", "forestry:engine_peat"],
        I: "iron_ingot",
        R: "redstone",
        S: "smooth_stone"
      }
    ).id("kubejs:fueled_engine_upgrade")

    e.shaped(
     "thermal:dynamo_numismatic",
      [
        " C ",
        "IEI",
        "IDI"
      ],
      {
        C: "thermal:rf_coil",
        E: "forestry:engine_clockwork",
        I: "#forge:ingots/constantan",
        D: ["ae2:sky_dust", "projectred_core:electrotine_dust"]
      }
    ).id("kubejs:clockwork_engine_upgrade")


    /// Tier 2 and 3 Thermal Parallel upgrades
    e.shaped(
     "thermal_parallel:argument_parallel_2",
      [
        " G ",
        "PTP",
        " G "
      ],
      {
        G: "#forge:gears/lumium",
        P: "#forge:plates/constantan",
        T: "thermal_parallel:argument_parallel"
      }
    ).id("kubejs:parallel_augment_2")

    e.shaped(
     "thermal_parallel:argument_parallel_3",
      [
        " G ",
        "PTP",
        " G "
      ],
      {
        G: "#forge:gears/enderium",
        P: "#forge:plates/netherite",
        T: "thermal_parallel:argument_parallel_2"
      }
    ).id("kubejs:parallel_augment_3")


    /// Replace rubber recipes and add tag support
    // Also the boost bucket -> rubber output so fluid math is easier
    e.remove({id: "thermal:rubber_from_dandelion"})
    e.remove({id: "thermal:rubber_from_vine"})
    e.remove({id: "thermal:rubber_3"})

    e.shapeless("4x thermal:rubber", ["thermal:latex_bucket"]).id("kubejs:rubber_bucket")

    // Saplings
    e.shaped(
     "thermal:rubber",
      [
        "SSS",
        "SWS",
        "SSS"
      ],
      {
        S: "#minecraft:saplings",
        W: "water_bucket"
      }
    ).id("kubejs:rubber_saplings")

    e.shaped(
     "thermal:rubber",
      [
        "VVV",
        "VWV",
        "VVV"
      ],
      {
        V: "#reminted:vines",
        W: "water_bucket"
      }
    ).id("kubejs:rubber_vines")

    e.shaped(
     "thermal:rubber",
      [
        "FFF",
        "FWF",
        "FFF"
      ],
      {
        F: "#minecraft:small_flowers",
        W: "water_bucket"
      }
    ).id("kubejs:rubber_small_flowers")

    e.shaped(
     "2x thermal:rubber",
        [
          "FFF",
          "FWF",
          "FFF"
        ],
        {
          F: "#minecraft:tall_flowers",
          W: "water_bucket"
        }
    ).id("kubejs:rubber_tall_flowers")

    e.shaped(
     "2x thermal:rubber",
        [
          "CCC",
          "CWC",
          "CCC"
        ],
        {
          C: "#dyetagger:cacti",
          W: "water_bucket"
        }
    ).id("kubejs:rubber_cacti")

    e.shaped(
     "4x thermal:rubber",
        [
          "NNN",
          "NWN",
          "NNN"
        ],
        {
          N: "#reminted:nether_plants",
          W: "lava_bucket"
        }
    ).id("kubejs:rubber_nether_plants")

    e.shaped(
     "2x thermal:rubber",
        [
          "CCC",
          "CWC",
          "CCC"
        ],
        {
          C: "#reminted:cave_plants",
          W: "water_bucket"
        }
    ).id("kubejs:rubber_cave_plants")

})