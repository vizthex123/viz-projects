// Manages tags used in this script
ServerEvents.tags("item", e => {

    // Fix TE rubber not having the tag
    e.add("forge:rubber", ["thermal:cured_rubber"])

    e.add("latexfix:cacti", ["cactus", "biomemakeover:barrel_cactus", "biomemakeover:saguaro_cactus", "biomemakeover:barrel_cactus_flowered", "natura:saguaro", "natura:saguaro_baby", "yungscavebiomes:prickly_peach_cactus"])
    e.add("latexfix:cave_plants", ["glow_lichen", "yungscavebiomes:frost_lily", "yungscavebiomes:prickly_peach"])
    e.add("latexfix:nether_plants", ["crimson_fungus", "warped_fungus", "crimson_roots", "warped_roots",

    "netherexp:blightwart", "netherexp:crimson_sprouts", "netherexp:blue_scale_fungus", "netherexp:red_scale_fungus", "netherexp:soul_swirls", "netherexp:soul_torchflower", "netherexp:weeping_helix", "netherexp:twisting_helix", "netherexp:weeping_ivy", "netherexp:twisting_ivy", "#netherexp:glowspores"])
    e.add("latexfix:vines", ["vine", "weeping_vines", "twisting_vines",
    "natura:thorn_vines",
    "deep_aether:yagroot_vine", "galosphere:lichen_vines",
    "yungscavebiomes:prickly_vines"])

    Ingredient.of("#minecraft:tall_flowers").itemIds.forEach(id => {
        if(id != "minecraft:sunflower")
        e.add("latexfix:tall_flowers", id)
    })
})

// Improves the latex & rubber recipes
ServerEvents.recipes(e => {

    // Makes recipes that require Rubber use tags
    e.replaceInput(
      { input: "thermal:cured_rubber" },
        "thermal:cured_rubber",
        "#forge:rubber"
    )

    //// Replace rubber recipes and add tag support
    /// Also the boost bucket -> rubber output so fluid math is easier
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
        V: "#latexfix:vines",
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
          C: "#latexfix:cacti",
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
          N: "#latexfix:nether_plants",
          W: "lava_bucket"
        }
    ).id("kubejs:rubber_nether_plants")

    e.shaped(
     "thermal:rubber",
        [
          "CCC",
          "CWC",
          "CCC"
        ],
        {
          C: "#latexfix:cave_plants",
          W: "water_bucket"
        }
    ).id("kubejs:rubber_cave_plants")



    //// Multiservo Press
    // Each unit of Rubber uses 250 mB of Latex
    e.remove({id: "thermal:machines/press/press_dandelion_to_latex"})
    e.remove({id: "thermal:machines/press/press_vine_to_latex"})

    e.recipes.thermal.press([Fluid.of("thermal:latex", 5)], ["leaf_litter"], 0.01).energy(200).id("kubejs:leaf_litter_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 25)], ["#forge:seeds"], 0.1).energy(400).id("kubejs:seeds_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 50)], ["#latexfix:vines"], 0.15).energy(400).id("kubejs:vines_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 100)], ["#latexfix:cacti"], 0.2).energy(400).id("kubejs:cacti_to_latex")

    e.recipes.thermal.press([Fluid.of("thermal:latex", 50)], ["#minecraft:small_flowers"], 0.1).energy(400).id("kubejs:small_flowers_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 100)], ["#latexfix:tall_flowers"], 0.15).energy(400).id("kubejs:tall_flowers_to_latex")

    e.recipes.thermal.press([Fluid.of("thermal:latex", 50)], ["#latexfix:cave_plants"], 0.25).energy(800).id("kubejs:cave_plants_to_latex")

    e.recipes.thermal.press([Fluid.of("thermal:latex", 250)], ["#latexfix:nether_plants"], 0.35).energy(1600).id("kubejs:nether_plants_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 75)], ["netherexp:cerebrage_seeds"], 0.2).energy(800).id("kubejs:cerebrage_seeds_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 375)], ["netherexp:igneous_reeds"], 0.5).energy(2000).id("kubejs:igneous_reeds_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 500)], ["netherexp:sorrowsquash"], 0.7).energy(2400).id("kubejs:sorrowsquash_to_latex")
    e.recipes.thermal.press([Fluid.of("thermal:latex", 450)], ["netherexp:carved_sorrowsquash"], 0.6).energy(2200).id("kubejs:carved_sorrowsquash_to_latex")

})