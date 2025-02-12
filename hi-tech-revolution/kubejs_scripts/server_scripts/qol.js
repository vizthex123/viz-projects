// Adds Quality of Life recipes because I am a hopeless addict
ServerEvents.recipes(e => {

    // Wool -> String
    e.shapeless("2x string", ["#minecraft:wool", "flint", "flint"]).id("kubejs:wool_to_string")

    // Moss Carpet -> Surface Moss
    e.shapeless("6x ecologics:surface_moss", ["moss_carpet"]).id("kubejs:decraft_moss_carpet")

    // Cheaper Moss Paste
    e.remove({id: "quark:building/smelting/moss_paste"})
    e.smelting("quark:moss_paste", "ecologics:surface_moss", 0.1).id("kubejs:moss_paste")

    // Book recipe that uses my binding system
    e.remove({id: "minecraft:book"})
	e.shapeless("book", ["#revolution:paper", "#revolution:paper", "#revolution:paper", "#revolution:binding"]).id("kubejs:book")

    // Unify the Gunpowder recipes
    e.remove({id: "minecraft:gunpowder"})
    e.remove({id: "alexscaves:gunpowder_from_sulfur"})
    e.remove({id: "thermal:gunpowder_4"})
    e.shapeless("4x gunpowder", ["#minecraft:coals", ["thermal:niter", "thermal:niter_dust"], ["thermal:niter", "thermal:niter_dust"], ["#forge:gems/sulfur", "#forge:dusts/sulfur"]]).id("kubejs:gunpowder")
    e.shapeless("4x gunpowder", ["#minecraft:coals", ["thermal:niter", "thermal:niter_dust"], ["thermal:niter", "thermal:niter_dust"], "galosphere:pink_salt_shard", "galosphere:pink_salt_shard"]).id("kubejs:gunpowder_salt")

    // Hollow Logs -> Sticks
    e.shaped(
      "8x stick",
        [
          "H",
          "H"
        ],
        {
          H: "#quark:hollow_logs"
        }
    ).id("kubejs:hollow_sticks")

    // Hollow Logs -> Planks
    e.shapeless("2x acacia_planks", ["quark:hollow_acacia_log"]).id("kubejs:hollow_acacia_planks")
    e.shapeless("2x birch_planks", ["quark:hollow_birch_log"]).id("kubejs:hollow_birch_planks")
    e.shapeless("2x cherry_planks", ["quark:hollow_cherry_log"]).id("kubejs:hollow_cherry_planks")
    e.shapeless("2x dark_oak_planks", ["quark:hollow_dark_oak_log"]).id("kubejs:hollow_dark_oak_planks")
    e.shapeless("2x jungle_planks", ["quark:hollow_jungle_log"]).id("kubejs:hollow_jungle_planks")
    e.shapeless("2x mangrove_planks", ["quark:hollow_mangrove_log"]).id("kubejs:hollow_mangrove_planks")
    e.shapeless("2x oak_planks", ["quark:hollow_oak_log"]).id("kubejs:hollow_oak_planks")
    e.shapeless("2x spruce_planks", ["quark:hollow_spruce_log"]).id("kubejs:hollow_spruce_planks")

    e.shapeless("2x crimson_planks", ["quark:hollow_crimson_stem"]).id("kubejs:hollow_crimson_planks")
    e.shapeless("2x warped_planks", ["quark:hollow_warped_stem"]).id("kubejs:hollow_warped_planks")

    e.shapeless("2x quark:ancient_planks", ["quark:hollow_ancient_log"]).id("kubejs:hollow_ancient_planks")
    e.shapeless("2x quark:azalea_planks", ["quark:hollow_azalea_log"]).id("kubejs:hollow_azalea_planks")
    e.shapeless("2x quark:blossom_planks", ["quark:hollow_blossom_log"]).id("kubejs:hollow_trumpet_planks")

    // Hollow Logs -> Charcoal
    e.smelting("charcoal", "#revolution:burnable_hollow_logs", 0.12).id("kubejs:hollow_charcoal")

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

    // Cobwebs -> Webs
    e.shapeless("string", ["cobweb"]).id("kubejs:web_to_string")

    // Saplings -> Stick
    e.shapeless("stick", ["#minecraft:saplings"]).id("kubejs:sapling_to_stick")

    // Branches -> Sticks
    e.shapeless("2x stick", ["#revolution:stick_extraction"]).id("kubejs:stick_extraction")

    // Bark -> Sticks
    e.shapeless("3x stick", ["#forge:bark"]).id("kubejs:bark_to_sticks")

    //// Make Torches use my custom tags
    e.remove({id: "minecraft:torch"})
    e.shaped(
      "4x torch",
        [
          "F",
          "S"
        ],
        {
          F: "#revolution:torch_fuel",
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

    // Tar -> Torches
    e.shaped(
      "2x torch",
        [
          "F",
          "S"
        ],
        {
          F: "thermal:tar",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:tar_torch")

    // Mini (Char)coal -> Torches
    e.shaped(
      "torch",
        [
          "FF",
          "S "
        ],
        {
          F: ["#forge:nuggets/coal", "#forge:nuggets/charcoal"],
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:mini_torch")

})