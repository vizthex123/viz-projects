// Fixes recipes I can't fix with replacer.js
ServerEvents.recipes(e => {

    // Fix Copper Bucket & Can conflict
    e.remove({id: "tconstruct:smeltery/copper_can"})
    e.shaped(
      "4x tconstruct:copper_can",
        [
          " C ",
          "C C",
          " C ",
        ],
        {
          C: "copper_ingot"
        }
    ).id("kubejs:copper_cans")

    // Craft regular resonanting ores so you can use the variants in the mod's Smelter
    e.shapeless("deepresonance:resonating_ore_stone", ["#deepresonance:resonant_ore"]).id("kubejs:resonant_ore_conversion")

    // Decraft Sulfur
    e.shapeless("9x railcraft:sulfur_dust", ["alexscaves:sulfur"]).id("kubejs:decraft_sulfur")

    // Decraft Unrefined Waste
    e.shapeless("9x alexscaves:toxic_paste", ["alexscaves:unrefined_waste"]).id("kubejs:decraft_unrefined_waste")

    // Fix Copper Button conflict
    e.remove({id: "more_useful_copper:copper_button"})
    e.shapeless("more_useful_copper:copper_button", ["copper_block", "#minecraft:stone_buttons"]).id("kubejs:copper_button")

    // Make Thermal's Ruby & Sapphire Blocks the default
    e.remove({id: "projectred_exploration:ruby_block"})
    e.remove({id: "projectred_exploration:sapphire_block"})
    e.shaped(
      "thermal:ruby_block",
        [
          "RRR",
          "RRR",
          "RRR"
        ],
        {
          R: "#forge:gems/ruby"
        }
    ).id("kubejs:ruby_block")

    e.shaped(
      "thermal:sapphire_block",
        [
          "SSS",
          "SSS",
          "SSS"
        ],
        {
          S: "#forge:gems/sapphire"
        }
    ).id("kubejs:sapphire_block")

    // Make Steel Compound require a Blast Furnace
    e.remove({id: "mffs:steel_ingot"})
    e.blasting("mffs:steel_ingot", "mffs:steel_compound", 1).id("kubejs:blast_steel_compound")

    // Condense Certus Quartz decrafting into a single recipe
    e.remove({type: "crafting_shapeless", output: "ae2:certus_quartz_crystal"})
    e.shapeless("4x ae2:certus_quartz_crystal", [["ae2:quartz_block", "ae2:smooth_quartz_block", "ae2:cut_quartz_block", "ae2:quartz_bricks", "ae2:chiseled_quartz_block", "ae2:quartz_pillar"]]).id("kubejs:decraft_certus")

    // Name Tag recipe
	// Based on the one from Essentials
    e.shaped(
      "name_tag",
        [
          "  S",
          " P ",
          "P  "
        ],
        {
          P: "paper",
          S: "#forge:string"
        }
    ).id("kubejs:name_tag")

    // Unify Trident recipes
    e.remove({id: "bettertridents:trident"})
    e.remove({id: "upgrade_aquatic:trident"})
    e.shaped(
      "trident",
        [
          " TT",
          " PT",
          "P  "
        ],
        {
          P: "#forge:rods/prismarine",
          T: ["bettertridents:trident_fragment", "upgrade_aquatic:thrasher_tooth"]
        }
    ).id("kubejs:trident")



    // Makes Pistons use the Cobblestone Tag
    e.remove({id: "minecraft:piston"})
    e.shaped(
      "piston",
        [
          "PPP",
          "CIC",
          "CRC"
        ],
        {
          C: "#forge:cobblestone",
          P: "#minecraft:planks",
          I: "iron_ingot",
          R: "redstone"
        }
    ).id("kubejs:piston")

    //// Make Ad Astra's ladder recipes match Woodworks'
    e.remove({id: "ad_astra:aeronos_ladder"})
    e.remove({id: "ad_astra:stropher_ladder"})
    e.shaped(
      "4x ad_astra:aeronos_ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "ad_astra:aeronos_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:aeronos_ladder")

    e.shaped(
      "4x ad_astra:strophar_ladder",
        [
          "S S",
          "SPS",
          "S S"
        ],
        {
          P: "ad_astra:strophar_planks",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:strophar_ladder")



    ///// Furnace upgrades with tags
    /// Makes them use my custom tag
    // Furnace
    e.remove({output: "furnace"})
    e.remove({output: "smoker"})
    e.remove({output: "blast_furnace"})
    e.remove({output: "furnace_minecart"})

    e.shaped(
      "furnace",
        [
          "FFF",
          "F F",
          "FFF"
        ],
        {
          F: "#revolution:furnace_cobblestone"
        }
    ).id("kubejs:furnace")

    // Smoker
    e.shaped(
      "smoker",
        [
          " L ",
          "LFL",
          " L ",
        ],
        {
          F: "#revolution:furnace",
          L: "#minecraft:logs"
        }
    ).id("kubejs:smoker")

    // Blast Furnace
    e.shaped(
      "blast_furnace",
        [
          "III",
          "IFI",
          "SSS"
        ],
        {
          F: "#revolution:furnace",
          I: "iron_ingot",
          S: "#revolution:blast_furnace_smooth_stone"
        }
    ).id("kubejs:blast_furnace")

    // Remove duplicate copper nugget recipes
    e.remove({id: "tconstruct:common/materials/copper_nugget_from_ingot"})
    e.remove({id: "more_useful_copper:copper_nugget"})

    // Fix the Copper Chain recipe
    e.remove({id: "more_useful_copper:copper_chain"})
    e.shaped(
      "more_useful_copper:copper_chain",
        [
          "N",
          "N",
          "N",
        ],
        {
          N: "#forge:nuggets/copper"
        }
    ).id("kubejs:copper_chain")

})