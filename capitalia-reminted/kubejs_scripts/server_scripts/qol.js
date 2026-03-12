// Adds quality-of-life recipes cuz i'm addicted lol
ServerEvents.recipes(e => {

    // Cheaper Beetroot Soup
    e.remove({id: "minecraft:beetroot_soup"})
    e.shapeless("beetroot_soup", ["#reminted:bowls", "beetroot", "beetroot", "beetroot"]).id("kubejs:beetroot_soup")

    // Make Mushroom Stew use tags
    e.remove({id: "minecraft:mushroom_stew"})
    e.shapeless("mushroom_stew", ["#reminted:bowls", "#forge:mushrooms", "#forge:mushrooms"]).id("kubejs:mushroom_stew")

    // Make Rabbit Stew use tags
    e.remove({id: "minecraft:rabbit_stew"})
    e.shapeless("rabbit_stew", ["baked_potato", "cooked_rabbit", "#reminted:bowls", "carrot", "#forge:mushrooms"]).id("kubejs:rabbit_stew")


    // Saplings -> Stick
    e.shapeless("stick", ["#minecraft:saplings"]).id("kubejs:sapling_to_stick")

    // Glow Ink Sac -> Ink Sac
    e.shapeless("2x ink_sac", ["glow_ink_sac", "glow_ink_sac"]).id("kubejs:sacless")

    // Cobwebs -> Webs
    e.shapeless("string", ["cobweb"]).id("kubejs:web_to_string")

    // Wool -> String
    e.shapeless("2x string", ["#minecraft:wool", "flint", "flint"]).id("kubejs:wool_to_string")

    // Shells -> Bone Meal
    e.shapeless("bone_meal", ["#reminted:shells"]).id("kubejs:shellmeal")

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
    e.remove({id: "netherexp:torch_from_fossil_fuel"})
    e.shaped(
      "4x torch",
        [
          "F",
          "S"
        ],
        {
          F: "#reminted:torch_fuel",
          S: ["#forge:rods/wooden", "#forge:rods/stone"]
        }
    ).id("kubejs:torch")

    e.shaped(
      "5x torch",
        [
          "P",
          "S"
        ],
        {
          P: "forestry:peat",
          S: ["#forge:rods/wooden", "#forge:rods/stone"]
        }
    ).id("kubejs:peat_torch")

    e.shaped(
      "10x torch",
        [
          "P",
          "S"
        ],
        {
          P: "forestry:bituminous_peat",
          S: ["#forge:rods/wooden", "#forge:rods/stone"]
        }
    ).id("kubejs:bituminous_peat_torch")

    e.shaped(
      "torch",
        [
          "F",
          "F",
          "S"
        ],
        {
          F: "#reminted:mini_coal",
          S: ["#forge:rods/wooden", "#forge:rods/stone"]
        }
    ).id("kubejs:mini_torch")



    // Mud -> Peat
    e.shaped(
      "biomeswevegone:peat",
        [
          "BBB",
          "BMB",
          "BBB"
        ],
        {
          B: "kubejs:biomass",
          M: "#reminted:mudlike"
        }
    ).id("kubejs:peat")

    // Blast Dried Peat into Ingots
    e.blasting("forestry:peat", "biomemakeover:dried_peat", 0.25).id("kubejs:blast_dried_peat")

    // Standardise the Dried Peat recipe
    e.remove({type: "smelting", output: "biomemakeover:dried_peat"})
    e.smelting("biomemakeover:dried_peat", ["biomemakeover:peat", "biomemakeover:mossy_peat", "biomeswevegone:peat"], 0.15).id("kubejs:smelt_peat")



    //// Unify Mossy Block recipes
    // Cobblestone & Stone Bricks
    e.remove({id: "minecraft:mossy_cobblestone_from_vine"})
    e.remove({id: "minecraft:mossy_cobblestone_from_moss_block"})
    e.remove({id: "minecraft:mossy_stone_bricks_from_vine"})
    e.remove({id: "minecraft:mossy_stone_bricks_from_moss_block"})

    e.shapeless("mossy_cobblestone", ["cobblestone", "#reminted:mosslike"]).id("kubejs:mossy_cobblestone")
    e.shapeless("mossy_stone_bricks", ["stone_bricks", "#reminted:mosslike"]).id("kubejs:mossy_stone_bricks")

    // Moss Carpet -> Surface Moss
    e.shapeless("6x ecologics:surface_moss", ["moss_carpet"]).id("kubejs:decraft_moss_carpet")

    // Cheaper Moss Paste
    e.remove({id: "quark:building/smelting/moss_paste"})
    e.smelting("quark:moss_paste", "ecologics:surface_moss", 0.1).id("kubejs:moss_paste")

    // Craft Dried Peat with Biomes We've Gone variant
    e.remove({id: "biomemakeover:mossy_peat"})
    //e.remove({id: "biomemakeover:decoration/mossy_dried_peat_bricks/mossy_dried_peat_brick"})
    e.shapeless("biomemakeover:mossy_peat", ["biomemakeover:peat", "#reminted:mosslike"]).id("kubejs:mossy_peat")
    e.shapeless("biomemakeover:mossy_dried_peat_bricks", ["biomemakeover:dried_peat_bricks", "#reminted:mosslike"]).id("kubejs:mossy_dried_peat_bricks")

})