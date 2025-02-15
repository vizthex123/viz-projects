// Fixes recipes I can't fix with replacer.js
ServerEvents.recipes(e => {

    // Decraft Unrefined Waste
    e.shapeless("9x alexscaves:toxic_paste", ["alexscaves:unrefined_waste"]).id("kubejs:decraft_unrefined_waste")

    // Prevent Bonded Leather from using tags
    // Damn thing isn't working when I use input replacements ffs
    e.remove({id: "quark:building/crafting/compressed/bonded_leather"})
    e.shaped(
      "quark:bonded_leather",
        [
          "LLL",
          "LLL",
          "LLL"
        ],
        {
          L: "leather"
        }
    ).id("kubejs:bonded_leather")

    // Make Iron Ladders match the recipes for the other types
    e.remove({id: "quark:building/crafting/iron_ladder"})
    e.shaped(
      "4x quark:iron_ladder",
        [
          "N N",
          "NIN",
          "N N"
        ],
        {
          I: "#forge:ingots/iron",
          N: "#forge:nuggets/iron"
        }
    ).id("kubejs:iron_ladder")

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
/*
    // Fix Bonded Leather using the leather tag
    e.remove({id: "quark:building/crafting/compressed/bonded_leather"})
    e.shaped(
      "quark:bonded_leather",
        [
          "LLL",
          "LLL",
          "LLL"
        ],
        {
          L: "leather"
        }
    ).id("kubejs:bonded_leather")
*/
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



    //// Unify Mossy Block recipes
    // Cobblestone
    e.remove({id: "minecraft:mossy_cobblestone_from_vine"})
    e.remove({id: "minecraft:mossy_cobblestone_from_moss_block"})
    e.remove({id: "biomesoplenty:mossy_cobblestone_from_willow_vine"})

    e.shapeless("mossy_cobblestone", ["cobblestone", "#revolution:mosslike"]).id("kubejs:mossy_cobblestone")

    // Bricks
    e.remove({id: "minecraft:mossy_stone_bricks_from_vine"})
    e.remove({id: "minecraft:mossy_stone_bricks_from_moss_block"})
    e.remove({id: "biomesoplenty:mossy_stone_bricks_from_willow_vine"})

    e.shapeless("mossy_stone_bricks", ["stone_bricks", "#revolution:mosslike"]).id("kubejs:mossy_stone_bricks")



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



    //// Fix Quark's non-wood chests being uncraftable
    //// Wooden ones are fixed in wood_fix.js
    e.shaped(
      "quark:prismarine_chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: ["prismarine", "prismarine_bricks"]
        }
    ).id("kubejs:prismarine_chest")

    e.shaped(
      "quark:nether_brick_chest",
        [
          "BBB",
          "B B",
          "BBB"
        ],
        {
          B: ["nether_bricks", "red_nether_bricks"]
        }
    ).id("kubejs:nether_brick_chest")

    e.shaped(
      "quark:purpur_chest",
        [
          "PPP",
          "P P",
          "PPP"
        ],
        {
          P: "purpur_block"
        }
    ).id("kubejs:purpur_chest")

    e.shapeless("quark:prismarine_trapped_chest", ["quark:prismarine_chest", "tripwire_hook"]).id("kubejs:trapped_prismarine_chest")
    e.shapeless("quark:nether_brick_trapped_chest", ["quark:nether_brick_chest", "tripwire_hook"]).id("kubejs:trapped_nether_brick_chest")
    e.shapeless("quark:purpur_trapped_chest", ["quark:purpur_chest", "tripwire_hook"]).id("kubejs:trapped_purpur_chest")

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
          S: ["smooth_stone", "smooth_basalt"]
        }
    ).id("kubejs:blast_furnace")

    // Minecart with Furnace (the most useless item lol)
    e.shaped(
      "furnace_minecart",
        [
          "F",
          "M"
        ],
        {
          F: "#revolution:furnace",
          M: "minecart"
        }
    ).id("kubejs:furnace_minecart")

    e.shaped(
      "furnace_minecart",
        [
          "IFI",
          "III"
        ],
        {
          F: "#revolution:furnace",
          I: "iron_ingot"
        }
    ).id("kubejs:furnace_minecart_direct")

})