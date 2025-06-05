// Adds tags to items used in Masterful Machinery
ServerEvents.tags("item", e => {

    //// Recipe tags
    // Used to make Circuitry
    e.add("revolution:processors", ["ae2:logic_processor", "ae2:calculation_processor", "ae2:engineering_processor", "laserio:logic_chip"])

})



// Adds recipes to blocks from Masterful Machinery
ServerEvents.recipes(e => {

    // Machine Core
    e.shaped(
     "mm:machine_core",
        [
          "ISI",
          "SMS",
          "ISI"
        ],
        {
          I: "iron_ingot",
          M: ["rftoolsbase:machine_frame", "deepresonance:machine_frame", "xycraft_machines:machine_base"],
          S: ["smooth_stone", "smooth_basalt", "ae2:smooth_sky_stone_block"]
        }
    ).id("kubejs:machine_core")
    /*
    // Coin Minter Core
    e.shaped(
     "mm:minter_core",
        [
          "CCC",
          "CAC",
          "CCC"
        ],
        {
          A: "#forge:ingots/aluminum",
          C: "#coinsje:coin_like"
        }
    ).id("kubejs:minter_core")

    // Transmutation Core
    e.shaped(
     "mm:transmutation_core",
        [
          "CCC",
          "CGC",
          "CCC"
        ],
        {
          C: "copper_ingot",
          G: "mm:gearbox"
        }
    ).id("kubejs:transmutation_core")

    // Extraction Core
    e.shaped(
     "mm:extraction_core",
        [
          "CCC",
          "CEC",
          "CCC"
        ],
        {
          C: "copper_ingot",
          E: ["thermal:device_hive_extractor", "thermal:device_tree_extractor", "thermal:device_rock_gen", "xycraft_machines:extractor"]
        }
    ).id("kubejs:extraction_core")
*/


    // Energy inputs & outputs
    e.shaped(
     "mm:energy_input",
        [
          "GRG",
          "R R",
          "GRG"
        ],
        {
          G: "gold_ingot",
          R: "redstone"
        }
    ).id("kubejs:energy_input")
    e.shapeless("mm:energy_output", ["mm:energy_input"]).id("kubejs:energy_output")
    e.shapeless("mm:energy_input", ["mm:energy_output"]).id("kubejs:energy_input_conversion")


    //// Item inputs & outputs
/*
    // Tiny
    e.shapeless("mm:item_tiny_input", ["#forge:chests/wooden", "#revolution:input_stones", "#revolution:input_stones"]).id("kubejs:tiny_item_input")

    e.shapeless("mm:item_tiny_output", ["mm:item_tiny_input"]).id("kubejs:tiny_item_output")
    e.shapeless("mm:item_tiny_input", ["mm:item_tiny_output"]).id("kubejs:tiny_item_output_conversion")
*/
    // Small
    e.shaped(
     "mm:item_small_input",
        [
          " I ",
          "ICI",
          " I "
        ],
        {
          C: "#forge:chests/wooden",
          I: ["#forge:ingots/aluminum", "#forge:ingots/tin"]
        }
    ).id("kubejs:small_item_input")
    e.shapeless("mm:item_small_output", ["mm:item_small_input"]).id("kubejs:small_output")
    e.shapeless("mm:item_small_input", ["mm:item_small_output"]).id("kubejs:small_input_conversion")
/*
    e.shapeless("mm:item_small_input", [["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"]]).id("kubejs:tiny_item_upgrade")
    e.shapeless("3x mm:item_tiny_input", [["mm:item_small_input", "mm:item_small_output"], "flint"]).id("kubejs:small_item_downgrade")
*/
    // Standard
    e.shaped(
     "mm:item_input",
        [
          "III",
          "IHI",
          "III"
        ],
        {
          H: "hopper",
          I: "#forge:ingots/constantan"
        }
    ).id("kubejs:item_input")
    e.shapeless("mm:item_output", ["mm:item_input"]).id("kubejs:item_output")
    e.shapeless("mm:item_input", ["mm:item_output"]).id("kubejs:item_input_conversion")
    // e.shapeless("mm:item_input", [["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"], ["mm:item_tiny_input", "mm:item_tiny_output"]]).id("kubejs:tiny_item_upgrade_to_standard")
    e.shapeless("mm:item_input", [["mm:item_small_input", "mm:item_small_output"], ["mm:item_small_input", "mm:item_small_output"], ["mm:item_small_input", "mm:item_small_output"]]).id("kubejs:small_item_upgrade_to_standard")
    e.shapeless("3x mm:item_small_input", [["mm:item_input", "mm:item_output"], "flint"]).id("kubejs:standard_item_downgrade")
/*
    // Large
    e.shaped(
     "mm:item_large_input",
        [
          "GIG",
          "IHI",
          "GIG"
        ],
        {
          G: ["nether_quartz", "prismarine_shard", "#ae2:all_certus_quartz"],
          H: "hopper_minecart",
          I: "#forge:ingots/steel"
        }
    ).id("kubejs:large_item_input")
    e.shapeless("mm:item_large_output", ["mm:item_large_input"]).id("kubejs:large_item_output")
    e.shapeless("mm:item_large_input", ["mm:item_large_output"]).id("kubejs:large_item_output_conversion")
    // e.shapeless("mm:item_large_input", [["mm:item_input", "mm:item_output"], ["mm:item_input", "mm:item_output"], ["mm:item_small_input", "mm:item_small_output"], ["mm:item_small_input", "mm:item_small_output"], ["mm:item_tiny_input", "mm:item_tiny_output"]]).id("kubejs:standard_item_upgrade")
    e.shapeless("8x mm:item_small_input", [["mm:item_large_input", "mm:item_large_output"], "flint"]).id("kubejs:large_item_downgrade") // You do lose 1 slot, but oh well
*/

    // Fluid inputs & outputs
    e.shaped(
     "mm:fluid_input",
        [
          " I ",
          "ICI",
          " I "
        ],
        {
          C: "bucket",
          I: "#forge:ingots/bronze"
        }
    ).id("kubejs:fluid_input")
    e.shapeless("mm:fluid_output", ["mm:fluid_input"]).id("kubejs:fluid_output")
    e.shapeless("mm:fluid_input", ["mm:fluid_output"]).id("kubejs:fluid_input_conversion")



    // Circuitry
    e.shaped(
     "mm:circuitry",
        [
          "RXR",
          "XCX",
          "RXR"
        ],
        {
          C: "#revolution:processors",
          R: "redstone",
          X: "xycraft_world:xychorium_gem_green"
        }
    ).id("kubejs:circuitry")

    // Gearbox
    e.shaped(
     "mm:gearbox",
        [
          " I ",
          "IGI",
          " I "
        ],
        {
          G: "#forge:gears",
          I: "iron_ingot"
        }
    ).id("kubejs:gearbox")

    // Vent
    e.shaped(
     "mm:vent",
        [
          " S ",
          "SGS",
          " S "
        ],
        {
          G: "quark:grate",
          S: "#forge:ingots/steel"
        }
    ).id("kubejs:vent")

})