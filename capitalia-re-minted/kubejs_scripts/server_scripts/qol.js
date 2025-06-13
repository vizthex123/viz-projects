// Adds quality-of-life recipes cuz i'm addicted lol
ServerEvents.recipes(e => {

    // Cheaper Beetroot Soup
    e.remove({id: "minecraft:beetroot_soup"})
    e.shapeless("beetroot_soup", ["bowl", "beetroot", "beetroot", "beetroot"]).id("kubejs:beetroot_soup")

    // Glow Ink Sac -> Ink Sac
    e.shapeless("2x ink_sac", ["glow_ink_sac", "glow_ink_sac"]).id("kubejs:sacless")

    // Wool -> String
    e.shapeless("2x string", ["#minecraft:wool", "flint"]).id("kubejs:wool_to_string")

    // Saplings -> Sticks
    e.shapeless("stick", ["#minecraft:saplings"]).id("kubejs:sapling_to_stick")

    // Cobwebs -> String
    e.shapeless("string", ["cobweb"]).id("kubejs:web_to_string")

    // Gravel -> Flint
    e.shapeless("flint", ["#forge:gravel", "#forge:gravel", "#forge:gravel", "#forge:gravel"]).id("kubejs:gravel_to_flint")

    // Add a recipe for the Bundle
    e.shaped(
      "bundle",
        [
          "S",
          "L"
        ],
        {
          L: "#forge:leather",
          S: "#forge:string"
        }
    ).id("kubejs:bundle")

    // Make Chains cheaper
    e.remove({id: "minecraft:chain"})
    e.shaped(
      "chain",
        [
          "I",
          "I",
          "I"
        ],
        {
          I: "#forge:nuggets/iron"
        }
    ).id("kubejs:chain")

    // Craftable Chainmail Armour
    e.shaped(
      "chainmail_helmet",
        [
          "CCC",
          "C C"
        ],
        {
          C: "chain"
        }
    ).id("kubejs:chainmail_helmet")

    e.shaped(
      "chainmail_chestplate",
        [
          "C C",
          "CCC",
          "CCC"
        ],
        {
          C: "chain"
        }
    ).id("kubejs:chainmail_chestplate")

    e.shaped(
      "chainmail_leggings",
        [
          "CCC",
          "C C",
          "C C"
        ],
        {
          C: "chain"
        }
    ).id("kubejs:chainmail_leggings")

    e.shaped(
      "chainmail_boots",
        [
          "C C",
          "C C"
        ],
        {
          C: "chain"
        }
    ).id("kubejs:chainmail_boots")

    // Make Torches with various materials
    e.remove({id: "minecraft:torch"})
    e.shaped(
      "4x torch",
        [
          "F",
          "S"
        ],
        {
          F: ["coal", "charcoal"],
          S: ["#forge:rods/wooden", "#forge:rods/stone"]
        }
    ).id("kubejs:torch")

    e.shaped(
      "torch",
        [
          "F",
          "F",
          "S"
        ],
        {
          F: ["minicoal:mini_coal", "minicoal:mini_charcoal"],
          S: ["#forge:rods/wooden", "#forge:rods/stone"]
        }
    ).id("kubejs:mini_torch")

    //// Unify Mossy Block recipes
    // Cobblestone & Stone Bricks
    e.remove({id: "minecraft:mossy_cobblestone_from_vine"})
    e.remove({id: "minecraft:mossy_cobblestone_from_moss_block"})
    e.remove({id: "minecraft:mossy_stone_bricks_from_vine"})
    e.remove({id: "minecraft:mossy_stone_bricks_from_moss_block"})

    e.shapeless("mossy_cobblestone", ["cobblestone", "#reminted:mosslike"]).id("kubejs:mossy_cobblestone")
    e.shapeless("mossy_stone_bricks", ["stone_bricks", "#reminted:mosslike"]).id("kubejs:mossy_stone_bricks")

    // Dried Peat
    e.shapeless("biomemakeover:mossy_peat", ["biomemakeover:peat", "#reminted:mosslike"]).id("kubejs:mossy_peat")
    e.shapeless("biomemakeover:mossy_dried_peat_bricks", ["biomemakeover:dried_peat_bricks", "#reminted:mosslike"]).id("kubejs:mossy_dried_peat_bricks")

    // Moss Carpet -> Surface Moss
    e.shapeless("6x ecologics:surface_moss", ["moss_carpet"]).id("kubejs:decraft_moss_carpet")

    // Cheaper Moss Paste
    e.remove({id: "quark:building/smelting/moss_paste"})
    e.smelting("quark:moss_paste", "ecologics:surface_moss", 0.1).id("kubejs:moss_paste")

})