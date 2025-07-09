// Adds tags to items exclusively used for Masterful Machinery recipe
ServerEvents.tags("item", e => {

    // Recyclable items are in recycling.js

    // Researchable items
    e.add("reminted:cobblestone", ["cobblestone", "mossy_cobblestone", "cobbled_deepslate", "biomemakeover:blighted_cobblestone", "upgrade_aquatic:kelpy_cobblestone"])

    e.add("reminted:rocks", ["calcite", "dripstone_block", "netherrack", "blackstone", "basalt", "#forge:cobblestone", "#forge:stone", "#forge:cobblestonestone/basalt", "#forge:stone/basalt", "#forge:stone/marble"])

    e.add("reminted:nether_rocks", ["netherrack", "blackstone", "basalt"])

    e.add("reminted:researchable", ["#reminted:automation_agent", "flint", "#forge:dusts/salt", "prismarine_shard", "prismarine_crystals", "nether_quartz", "#forge:gems/fluorite", "#forge:gems/amethyst", "#forge:gems/apatite", "#forge:raw_materials"])

    e.add("reminted:researchable/advanced", ["#reminted:researchable", "#reminted:rocks", "polished_basalt", "smooth_basalt"])

    e.add("reminted:researchable/organic", ["ink_sac", "glow_ink_sac", "kelp", "snowball", "#forge:dyes", "#forge:crops", "moss_carpet", "moss_block"])

    // These are used in a couple of recipes, but they're mainly for my multiblock machines
    e.add("reminted:basic_fuel_nuggets", ["#forge:nuggets/coal", "#forge:nuggets/charcoal"])
    e.add("reminted:basic_fuel", ["#minecraft:coals", "mekanism:enriched_carbon", "blaze_poweder"])
    e.add("reminted:basic_fuel_blocks", ["#forge:storage_blocks/coal", "#forge:storage_blocks/charcoal"])

    e.add("reminted:carbon", ["#minecraft:coals", "#forge:dusts/coal", "#forge:dusts/charcoal", "mekanism:enriched_carbon"])
    e.add("reminted:carbon_large", ["#forge:storage_blocks/coal", "#forge:storage_blocks/charcoal", "forestry:crated_coal", "forestry:crated_charcoal"])

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
          S: "#forge:stone"
        }
    ).id("kubejs:machine_core")


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
          "TTT",
          "C C",
          "PPP"
        ],
        {
          C: "forestry:circuit_board_basic",
          P: "projectred_core:plate",
          T: "forestry:electron_tube_copper"
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
          "STS",
          "SSS"
        ],
        {
          T: "#forge:ingots/tin",
          S: "#forge:stone",
          O: "smooth_stone"
        }
    ).id("kubejs:vent")

})