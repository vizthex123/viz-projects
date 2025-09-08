// Adds tags to items exclusively used for Masterful Machinery recipe
ServerEvents.tags("item", e => {

    //// Recyclable items are in recycling.js

    // Rocks for basic research and rock crushing
    e.add("reminted:rocks", ["calcite", "dripstone_block", "netherrack", "blackstone", "basalt", "#forge:cobblestone", "#forge:stone", "#forge:cobblestonestone/basalt", "#forge:stone/basalt", "#forge:stone/marble"])

    e.add("reminted:rocks/nether", ["netherrack", "blackstone", "basalt"])

    e.add("reminted:rocks/end", ["end_stone", "quark:myalite"])


    // Research tags
    e.add("reminted:researchable", ["#reminted:automation_agent", "#forge:dusts/salt", "flint", "prismarine_shard", "prismarine_crystals", "nether_quartz", "#forge:gems/amethyst", "#forge:gems/apatite", "#forge:gems/cinnabar", "#forge:gems/apatite", "#forge:gems/niter", "#forge:raw_materials"])

    e.add("reminted:researchable/advanced", ["#reminted:researchable", "#reminted:rocks", "polished_basalt", "smooth_basalt", "snowball"])

    e.add("reminted:researchable/biomass", ["#reminted:biomass", "quark:moss_paste"])

    e.add("reminted:researchable/biomass/meaty", ["#forge:foods/meat/raw", "forge:raw_fishes"])

    e.add("reminted:researchable/exotic", ["phantom_membrane", "shulker_shell", "dragon_breath", "quark:dragon_scale", "enderzoology:confusing_powder", "enderzoology:ender_fragment", "enderzoology:withering_dust", "quark:ravager_hide", "quark:soul_bead", "upgrade_aquatic:thrasher_tooth"])

    e.add("reminted:calcium", ["#reminted:shells", "bone_block", "calcite"])


    // These are used in a couple of recipes, but they're mainly for my multiblock machines
    e.add("reminted:research_fuel/small", ["#forge:nuggets/coal", "#forge:nuggets/charcoal", "blaze_powder", "magma_cream"])
    e.add("reminted:research_fuel", ["#minecraft:coals", "#forge:gems/sulfur", "#forge:gems/niter", "fire_charge", "magma_cream", "magma_block"])
    e.add("reminted:research_fuel/large", ["#forge:storage_blocks/coal", "#forge:storage_blocks/charcoal", "magma_block"])

    e.add("reminted:carbon", ["#minecraft:coals", "#forge:dusts/coal", "#forge:dusts/charcoal", "#forge:dusts/graphite"])
    e.add("reminted:carbon/large", ["forestry:crated_coal", "forestry:crated_charcoal", "#forge:storage_blocks/coal", "#forge:storage_blocks/charcoal", "#forge:storage_blocks/graphite", "magma_block"])



    //// Misc tags
    // Advanced Alloyer Bronze crafting Tin and Copper tags
    e.add("reminted:tin", ["#forge:ingots/tin", "#forge:raw_materials/tin"])
    e.add("reminted:copper", ["#forge:ingots/copper", "#forge:raw_materials/copper"])


    // Ports for quests
    e.add("reminted:input_port", ["mm:item_small_input", "mm:item_input"])
    e.add("reminted:output_port", ["mm:item_small_output", "mm:item_output"])

})



//// Adds recipes to blocks from Masterful Machinery
ServerEvents.recipes(e => {

    /// Cores
    // Lab Core
    e.shaped(
     "mm:lab_core",
        [
          " S ",
          "SRS",
          " S "
        ],
        {
          R: "kubejs:research_point",
          S: "smooth_stone"
        }
    ).id("kubejs:lab_core")

    // Machine Core
    e.shaped(
     "mm:machine_core",
        [
          "CCC",
          "STS",
          "STS"
        ],
        {
          C: "#forge:ingots/copper",
          T: "#forge:ingots/tin",
          S: "smooth_stone"
        }
    ).id("kubejs:machine_core")

    e.shaped(
     "mm:machine_core",
        [
          " B ",
          "BSB",
          " B "
        ],
        {
          B: "#forge:ingots/bronze",
          S: "#forge:stone"
        }
    ).id("kubejs:machine_core_bronze")



    /// I/O Ports
    // Small input & output
    e.shaped(
     "mm:item_small_input",
        [
          "CCC",
          "CHC",
          "CCC"
        ],
        {
          C: "#forge:cobblestone",
          H: "woodenhopper:wooden_hopper"
        }
    ).id("kubejs:small_item_input")

    e.shapeless("mm:item_small_output", ["mm:item_small_input"]).id("kubejs:small_item_output")
    e.shapeless("mm:item_small_input", ["mm:item_small_output"]).id("kubejs:small_item_input_restore")

    // Standard input & output
    e.shaped(
     "mm:item_input",
        [
          " I ",
          "IHI",
          " I "
        ],
        {
          I: "#forge:ingots/iron",
          H: ["brickhopper:brick_hopper", "mm:item_small_input"]
        }
    ).id("kubejs:item_input")

    e.shapeless("mm:item_output", ["mm:item_input"]).id("kubejs:item_output")
    e.shapeless("mm:item_input", ["mm:item_output"]).id("kubejs:item_input_restore")

    // Energy input & output
    e.shaped(
     "mm:energy_input",
        [
          "CBC",
          "BRB",
          "CBC"
        ],
        {
          B: "#forge:ingots/bronze",
          C: "#forge:ingots/copper",
          R: ["redstone_block", "projectred_exploration:electrotine_block"]
        }
    ).id("kubejs:energy_input")

    e.shapeless("mm:energy_output", ["mm:energy_input"]).id("kubejs:energy_output")
    e.shapeless("mm:energy_input", ["mm:energy_output"]).id("kubejs:energy_input_restore")


    /// Extra Blocks
    // Circuitry
    e.shaped(
     "mm:circuitry",
        [
          " T ",
          "TCT",
          "PFP"
        ],
        {
          C: "forestry:circuit_board_enhanced",
          F: "thermal:rf_coil",
          P: "projectred_core:plate",
          T: "forestry:electron_tube_gold"
        }
    ).id("kubejs:circuitry")

    // Gearbox
    e.shaped(
     "mm:gearbox",
        [
          " S ",
          "SGS",
          " S "
        ],
        {
          G: "#forge:gears",
          S: "smooth_stone"
        }
    ).id("kubejs:gearbox")

    // Vent
    e.shaped(
     "mm:vent",
        [
          "OOO",
          "TCT",
          "SSS"
        ],
        {
          C: "#forge:ingots/copper",
          T: "#forge:ingots/tin",
          O: "#forge:stone",
          S: "smooth_stone"
        }
    ).id("kubejs:vent")

})