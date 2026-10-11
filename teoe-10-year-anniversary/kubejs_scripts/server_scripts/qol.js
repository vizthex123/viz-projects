// Adds Quality of Life recipes because I am a hopeless addict
ServerEvents.recipes(e => {

    // Makes Golden Apples use any apple type
    e.remove({id: "minecraft:golden_apple"})
    e.shaped(
      "golden_apple",
        [
          "GGG",
          "GAG",
          "GGG"
        ],
        {
          A: "#teoe10:apples",
          G: "#forge:ingots/gold"
        }
    ).id("kubejs:golden_apple")

    // Sagurao cacti -> juice
    e.shapeless("2x natura:cactusjuice", ["natura:saguaro"]).id("kubejs:juicy_saguaro")

    // Reduce the cost of Beetroot Soup
    e.remove({type: "crafting_shapeless", output: "beetroot_soup"})
    e.shapeless("beetroot_soup", ["#teoe10:bowls", "beetroot", "beetroot", "beetroot", "beetroot"]).id("kubejs:beetroot_soup")

    // Pumpkin Pie with Carved Pumpkins
    e.shapeless("pumpkin_pie", ["carved_pumpkin", "carved_pumpkin", "carved_pumpkin", "#forge:eggs", "sugar"]).id("kubejs:carved_pumpkin_pie")

    // Seed from Carved Pumpkins
    // Only gives 1 since most of its guts are missing
    e.shapeless("pumpkin_seeds", ["carved_pumpkin"]).id("kubejs:carved_pumpkin_seeds")

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

    // Shells -> Bone Meal
    e.shapeless("bone_meal", ["#dyetagger:shells"]).id("kubejs:shellmeal")

    // Glow Ink Sac -> Ink Sac
    e.shapeless("2x ink_sac", ["glow_ink_sac", "glow_ink_sac"]).id("kubejs:sacless")

    // Cobwebs -> Webs
    e.shapeless("string", ["cobweb"]).id("kubejs:web_to_string")

    // Gravel -> Flint
    e.shapeless("flint", ["gravel", "gravel"]).id("kubejs:gravel_to_flint")

    // Wool -> String
    e.shapeless("2x string", ["#minecraft:wool", "flint", "flint"]).id("kubejs:wool_to_string")



    //// Make Torches use my custom tags
    e.remove({id: "minecraft:torch"})
    e.remove({id: "netherexp:torch_from_fossil_fuel"})
    e.remove({id: "twilightforest:berry_torch"})
    e.remove({id: "forestry:torch_from_wax"})

    // Mini (Char)coal -> Torches
    e.shaped(
      "torch",
        [
          "F",
          "F",
          "S"
        ],
        {
          F: "#teoe10:torch_fuel/poor",
          S: "#teoe10:torch_sticks"
        }
    ).id("kubejs:mini_torch")

    e.shaped(
      "2x torch",
        [
          "F",
          "S"
        ],
        {
          F: "#teoe10:torch_fuel/inefficient",
          S: "#teoe10:torch_sticks"
        }
    ).id("kubejs:inefficient_torch")

    e.shaped(
      "4x torch",
        [
          "F",
          "S"
        ],
        {
          F: "#teoe10:torch_fuel/standard",
          S: "#teoe10:torch_sticks"
        }
    ).id("kubejs:torch")

    e.shaped(
      "8x torch",
        [
          "F",
          "S"
        ],
        {
          F: "#teoe10:torch_fuel/efficient",
          S: "#teoe10:torch_sticks"
        }
    ).id("kubejs:coke_torch")

    e.shaped(
      "5x torch",
        [
          "T",
          "S"
        ],
        {
          T: "twilightforest:torchberries",
          S: "#teoe10:torch_sticks"
        }
    ).id("kubejs:berry_torch")

    e.shaped(
      "3x torch",
        [
          "B",
          "B",
          "S"
        ],
        {
          B: "forestry:beeswax",
          S: "#teoe10:torch_sticks"
        }
    ).id("kubejs:wax_torch")



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
  //  e.remove({id: "biomesoplenty:mossy_cobblestone_from_willow_vine"})

    e.shapeless("mossy_cobblestone", ["cobblestone", "#teoe10:mosslike"]).id("kubejs:mossy_cobblestone")

    e.remove({id: "minecraft:mossy_stone_bricks_from_vine"})
    e.remove({id: "minecraft:mossy_stone_bricks_from_moss_block"})
 //   e.remove({id: "biomesoplenty:mossy_stone_bricks_from_willow_vine"})

    e.shapeless("mossy_stone_bricks", ["stone_bricks", "#teoe10:mosslike"]).id("kubejs:mossy_stone_bricks")

    // Dried Peat
    e.shapeless("biomemakeover:mossy_peat", ["biomemakeover:peat", "#teoe10:mosslike"]).id("kubejs:mossy_peat")
    e.shapeless("biomemakeover:mossy_dried_peat_bricks", ["biomemakeover:dried_peat_bricks", "#teoe10:mosslike"]).id("kubejs:mossy_dried_peat_bricks")
/*
    // Moss Carpet -> Surface Moss
    e.shapeless("6x ecologics:surface_moss", ["moss_carpet"]).id("kubejs:decraft_moss_carpet")
*/
})