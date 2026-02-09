// Adds Quality of Life recipes because I am a hopeless addict
ServerEvents.recipes(e => {

    // Convert Woodworks chests into regular ones
    e.shapeless("chest", ["#revolution:revertable_chests", "flint"]).id("kubejs:revert_chest")

    // Book recipe that uses my tagged system
    e.remove({id: "minecraft:book"})
	e.shapeless("book", ["#revolution:paper", "#revolution:paper", "#revolution:paper", "#revolution:binding"]).id("kubejs:book")

    // Reduce the cost of Beetroot Soup
    e.remove({type: "crafting_shapeless", output: "beetroot_soup"})
    e.shapeless("beetroot_soup", ["#revolution:bowls", "beetroot", "beetroot", "beetroot", "beetroot"]).id("kubejs:beetroot_soup")

    // Pumpkin Pie with Carved Pumpkins
    e.shapeless("pumpkin_pie", ["carved_pumpkin", "carved_pumpkin", "carved_pumpkin", "#forge:eggs", "sugar"]).id("kubejs:carved_pumpkin_pie")

    // Seed from Carved Pumpkins
    // Only gives 1 since most of its guts are missing]).id("kubejs:carved_pumpkin_seeds")
    e.shapeless("pumpkin_seeds", ["carved_pumpkin"])

    // Lead anvil
    e.shaped(
      "anvil",
        [
          " S ",
          " L ",
          "LLL"
        ],
        {
          L: "#forge:ingots/lead",
          S: "#forge:storage_blocks/lead"
        }
    ).id("kubejs:lead_anvil")
/*
    // Cheaper chains
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
*/
    // Cheaper Wooden Hoppers since they're a bit useless
    e.remove({id: "woodenhopper:wooden_hopper"})
    e.shaped(
     "woodenhopper:wooden_hopper",
        [
          "P P",
          "P P",
          " P "
        ],
        {
          P: "#minecraft:planks"
        }
    ).id("kubejs:wooden_hopper")

    // Upgrade Wooden Hoppers
    e.shaped(
      "hopper",
        [
          "IHI",
          "IHI",
          " I ",
        ],
        {
          I: "iron_ingot",
          H: "woodenhopper:wooden_hopper"
        }
    ).id("kubejs:wooden_hopper_upgrade")

    // Saplings -> Stick
    e.shapeless("stick", ["#minecraft:saplings"]).id("kubejs:sapling_to_stick")

    // Branches -> Sticks
    e.shapeless("2x stick", ["#revolution:stick_materials"]).id("kubejs:stick_extraction")

    // Bark -> Sticks
    e.shapeless("3x stick", ["#forge:bark"]).id("kubejs:bark_to_sticks")

    // Glow Ink Sac -> Ink Sac
    e.shapeless("2x ink_sac", ["glow_ink_sac", "glow_ink_sac"]).id("kubejs:sacless")

    // Cobwebs -> Webs
    e.shapeless("string", ["cobweb"]).id("kubejs:web_to_string")

    // Wool -> String
    e.shapeless("2x string", ["#minecraft:wool", "flint", "flint"]).id("kubejs:wool_to_string")

    // Shells -> Bone Meal
    e.shapeless("bone_meal", ["#revolution:shells"]).id("kubejs:shellmeal")



    //// Make Torches use my custom tags
    e.remove({id: "minecraft:torch"})
    e.remove({id: "netherexp:torch_from_fossil_fuel"})
    e.shaped(
      "2x torch",
        [
          "F",
          "S"
        ],
        {
          F: ["glow_lichen", "thermal:tar"],
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:inefficient_torch")

    e.shaped(
      "4x torch",
        [
          "F",
          "S"
        ],
        {
          F: ["#minecraft:coals", "thermal:bitumen"],
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:torch")

    e.shaped(
      "8x torch",
        [
          "F",
          "S"
        ],
        {
          F: "thermal:coal_coke",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:coke_torch")

    // Mini (Char)coal -> Torches
    e.shaped(
      "torch",
        [
          "F",
          "F",
          "S"
        ],
        {
          F: ["minicoal:mini_coal", "minicoal:mini_charcoal"],
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:mini_torch")



    // Unify the Gunpowder recipes
    e.remove({id: "minecraft:gunpowder"})
    e.remove({id: "alexscaves:gunpowder_from_sulfur"})
    e.remove({id: "thermal:gunpowder_4"})
    e.shapeless("4x gunpowder", ["#minecraft:coals", ["thermal:niter", "thermal:niter_dust"], ["thermal:niter", "thermal:niter_dust"], ["#forge:gems/sulfur", "#forge:dusts/sulfur"]]).id("kubejs:gunpowder")
    e.shapeless("4x gunpowder", ["#minecraft:coals", ["thermal:niter", "thermal:niter_dust"], ["thermal:niter", "thermal:niter_dust"], "galosphere:pink_salt_shard", "galosphere:pink_salt_shard"]).id("kubejs:gunpowder_salt")


    //// Unify Mossy Block recipes
    // Cobblestone & Stone Bricks
    e.remove({id: "minecraft:mossy_cobblestone_from_vine"})
    e.remove({id: "minecraft:mossy_cobblestone_from_moss_block"})
    e.remove({id: "biomesoplenty:mossy_cobblestone_from_willow_vine"})

    e.shapeless("mossy_cobblestone", ["cobblestone", "#revolution:mosslike"]).id("kubejs:mossy_cobblestone")

    e.remove({id: "minecraft:mossy_stone_bricks_from_vine"})
    e.remove({id: "minecraft:mossy_stone_bricks_from_moss_block"})
    e.remove({id: "biomesoplenty:mossy_stone_bricks_from_willow_vine"})

    e.shapeless("mossy_stone_bricks", ["stone_bricks", "#revolution:mosslike"]).id("kubejs:mossy_stone_bricks")

    // Dried Peat
    e.shapeless("biomemakeover:mossy_peat", ["biomemakeover:peat", "#revolution:mosslike"]).id("kubejs:mossy_peat")
    e.shapeless("biomemakeover:mossy_dried_peat_bricks", ["biomemakeover:dried_peat_bricks", "#revolution:mosslike"]).id("kubejs:mossy_dried_peat_bricks")

    // Moss Carpet -> Surface Moss
    e.shapeless("6x ecologics:surface_moss", ["moss_carpet"]).id("kubejs:decraft_moss_carpet")

})