// Adds tags to items exclusively used for Masterful Machinery recipes
ServerEvents.tags("item", e => {

    //// Recyclable items are in recycling.js

    // Maple Logs
    e.add("reminted:maple_logs", ["#abnormalsfixer:maple_logs", "#biomeswevegone:maple_logs"])
    e.add("reminted:maple_planks", ["autumnity:maple_planks", "forestry:maple_planks", "biomeswevegone:maple_planks"])
    e.add("reminted:maple_slabs", ["autumnity:maple_slab", "forestry:maple_slab", "biomeswevegone:maple_slab"])

    // Carbon
    e.add("reminted:carbon", ["#minecraft:coals", "#forge:dusts/coal", "#forge:dusts/charcoal", "#forge:dusts/graphite"])
    e.add("reminted:carbon/large", ["forestry:crated_coal", "forestry:crated_charcoal", "#forge:storage_blocks/coal", "#forge:storage_blocks/charcoal", "#forge:storage_blocks/graphite"])

    // Coral
    e.add("reminted:all_coral", ["#upgrade_aquatic:brain_corals", "#upgrade_aquatic:bubble_corals", "#upgrade_aquatic:fire_corals", "#upgrade_aquatic:horn_corals", "#upgrade_aquatic:tube_corals", "#upgrade_aquatic:acan_corals", "#upgrade_aquatic:branch_corals", "#upgrade_aquatic:chrome_corals", "#upgrade_aquatic:finger_corals", "#upgrade_aquatic:moss_corals", "#upgrade_aquatic:petal_corals", "#upgrade_aquatic:pillow_corals", "#upgrade_aquatic:rock_corals", "#upgrade_aquatic:silk_corals", "#upgrade_aquatic:star_corals", "#dyetagger:dead_corals"])
    e.add("reminted:all_prismarine_coral", ["#upgrade_aquatic:prismarine_corals", "#upgrade_aquatic:elder_prismarine_corals"])


    // Improved Alloyer alloy crafting tags
    e.add("reminted:tin", ["#forge:dusts/tin", "#forge:raw_materials/tin"])
    e.add("reminted:copper", ["#forge:dusts/copper", "#forge:raw_materials/copper"])
    e.add("reminted:gold", ["#forge:dusts/gold", "#forge:raw_materials/gold"])


    // Mini Coal
    e.add("reminted:mini_coal", ["minicoal:mini_coal", "minicoal:mini_charcoal"])


    // Ports for quests
    e.add("reminted:input_port", ["mm:item_small_input", "mm:item_input", "mm:item_large_input"])
    e.add("reminted:output_port", ["mm:item_small_output", "mm:item_output", "mm:item_large_output"])

})



// Adds recipes to blocks from Masterful Machinery
// Machine recipes are handled by the datapack
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

    // Transmutation Core
    e.shaped(
     "mm:transmutation_core",
        [
          " C ",
          "CLC",
          " C "
        ],
        {
          C: "copper_ingot",
          L: "mm:lab_core"
        }
    ).id("kubejs:transmutation_core")



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

    // Large input & output
    e.shaped(
     "mm:item_large_input",
        [
          "SIS",
          "SHS",
          "SIS"
        ],
        {
          S: "#forge:ingots/steel",
          H: "hopper",
          I: "mm:item_input"
        }
    ).id("kubejs:large_item_input")

    e.shapeless("mm:item_large_output", ["mm:item_large_input"]).id("kubejs:large_item_output")
    e.shapeless("mm:item_large_input", ["mm:item_large_output"]).id("kubejs:large_item_input_restore")


    // Fluid input & output
    e.shaped(
     "mm:fluid_input",
        [
          "CCC",
          "CHC",
          "CCC"
        ],
        {
          C: "copper_ingot",
          H: "brickhopper:brick_hopper"
        }
    ).id("kubejs:fluid_input")

    e.shapeless("mm:fluid_output", ["mm:fluid_input"]).id("kubejs:fluid_output")
    e.shapeless("mm:fluid_input", ["mm:fluid_output"]).id("kubejs:fluid_input_restore")


    // Energy input & output
    e.shaped(
     "mm:energy_input",
        [
          "CCC",
          "CRC",
          "CCC"
        ],
        {
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
          "CTC",
          "SSS"
        ],
        {
          C: "#forge:ingots/copper",
          T: "#forge:ingots/tin",
          O: "#forge:stone",
          S: "smooth_stone"
        }
    ).id("kubejs:vent")

    e.shaped(
     "mm:vent",
        [
          "SSS",
          "SBS",
          "SSS"
        ],
        {
          B: "#forge:ingots/bronze",
          S: "#forge:stone"
        }
    ).id("kubejs:vent_bronze")

})