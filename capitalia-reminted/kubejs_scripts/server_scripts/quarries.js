// Changes the recipes for both mods that adds quarries
ServerEvents.recipes(e => {

    //// Removals
    const quarry_removal = [
        "quickquarry:mechanical_breaker",
        "quickquarry:stone_quarry",
        "quickquarry:iron_quarry",
        "quickquarry:ender_quarry",
        "squarry:fuel_quarry",
        "squarry:powered_quarry",
        "squarry:upgrade_base",
        "squarry:upgrade_silk",
        "squarry:upgrade_filler",
        "squarry:upgrade_unification",
        "squarry:upgrade_auto_smelt",
        "squarry:upgrade_efficiency_1",
        "squarry:upgrade_efficiency_2",
        "squarry:upgrade_efficiency_3",
        "squarry:upgrade_fortune_1",
        "squarry:upgrade_fortune_2",
        "squarry:upgrade_fortune_3"
    ]

    quarry_removal.forEach(recipe => {
        e.remove({id: recipe})
    });



    //// Quick Quarry
    // Block Breaker
    e.shaped(
      "quickquarry:mechanical_breaker",
        [
          "CPC",
          "C C",
          "CCC",
        ],
        {
          C: "#forge:cobblestone",
          P: "#reminted:basic_pickaxe"
        }
    ).id("kubejs:mechanical_breaker")

    // Stone
    e.shaped(
      "quickquarry:stone_quarry",
        [
          "RSR",
          "SPS",
          "RSR"
        ],
        {
          P: "#reminted:basic_pickaxe",
          R: "#forge:rods/stone",
          S: "smooth_stone"
        }
    ).id("kubejs:stone_quarry")

    // Iron
    e.shaped(
      "quickquarry:iron_quarry",
        [
          "IPI",
          "IQI",
          "III"
        ],
        {
          I: "#forge:ingots/iron",
          P: "#reminted:iron_pickaxe",
          Q: "quickquarry:stone_quarry"
        }
    ).id("kubejs:iron_quarry")

    // Ender
    e.shaped(
      "quickquarry:ender_quarry",
        [
          "SES",
          "QPQ",
          "SSS"
        ],
        {
          E: "end_stone",
          E: "extendedcrafting:ender_ingot",
          P: "#reminted:iron_pickaxe",
          S: "smooth_stone",
          Q: "quickquarry:iron_quarry"
        }
    ).id("kubejs:ender_quarry")



    //// Simple Quarry
    // Fueled Quarry
    e.shaped(
      "squarry:fuel_quarry",
        [
          "SPS",
          "BFB",
          "SBS"
        ],
        {
          B: "#forge:ingots/bronze",
          F: "#reminted:furnace",
          P: "#reminted:bronze_pickaxe",
          S: "#forge:stone"
        }
    ).id("kubejs:fuel_quarry")

    e.shaped(
      "squarry:fuel_quarry",
        [
          " P ",
          "TQT",
          "SFS"
        ],
        {
          F: "#reminted:furnace",
          P: "#reminted:bronze_pickaxe",
          Q: "quickquarry:stone_quarry",
          S: "smooth_stone",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:stone_quarry_upgrade")

    // Powered Quarry
    e.shaped(
      "squarry:powered_quarry",
        [
          "IAI",
          "AQA",
          "IAI"
        ],
        {
          A: "#reminted:automation_agent",
          I: "#forge:ingots/iron",
          Q: ["squarry:fuel_quarry", "quickquarry:iron_quarry"]
        }
    ).id("kubejs:powered_quarry")


    //// Upgrades
    // Base
    e.shaped(
      "squarry:upgrade_base",
        [
          " B ",
          "BSB",
          " A "
        ],
        {
          A: "#reminted:automation_agent",
          B: "#forge:ingots/bronze",
          S: "smooth_stone"
        }
    ).id("kubejs:base_upgrade")

    // Silk Touch
    e.shaped(
      "squarry:upgrade_silk",
        [
          "ILI",
          "LUL",
          "ILI"
        ],
        {
          I: "gold_ingot",
          L: "#forge:dusts/lapis",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:silk_touch_upgrade")

    // Filler
    e.shaped(
      "squarry:upgrade_filler",
        [
          "GBG",
          "BUB",
          "GBG"
        ],
        {
          B: "bucket",
          G: "grass",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:filler_upgrade")

    // Auto-Smelt
    e.shaped(
      "squarry:upgrade_auto_smelt",
        [
          " L ",
          "OUO",
          " L "
        ],
        {
          L: "lava_bucket",
          O: "obsidian",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:auto_smelt_upgrade")

    // Unification
    e.shapeless("squarry:upgrade_unification", ["squarry:upgrade_base", "#forge:bookshelves", "extendedcrafting:ender_ingot"]).id("kubejs:unification_upgrade")


    /// Efficiency
    e.shaped(
      "squarry:upgrade_efficiency_1",
        [
          "IRI",
          "RUR",
          "IRI"
        ],
        {
          I: "iron_ingot",
          R: "redstone",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:efficiency_upgrade_1")

    e.shaped(
      "squarry:upgrade_efficiency_2",
        [
          "ISI",
          "SUS",
          "ISI"
        ],
        {
          I: "projectred_core:red_ingot",
          S: "ae2:sky_dust",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:efficiency_upgrade_2")

    e.shaped(
      "squarry:upgrade_efficiency_3",
        [
          "IRI",
          "RUR",
          "IRI"
        ],
        {
          I: "#forge:ingots/steel",
          R: "#forge:dusts/ruby",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:efficiency_upgrade_3")


    // Fortune upgrades
    e.shaped(
      "squarry:upgrade_fortune_1",
        [
          "IEI",
          "EUE",
          "IEI"
        ],
        {
          I: "#forge:ingots/rose_gold",
          E: "#forge:dusts/emerald",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:fortune_upgrade_1")

    e.shaped(
      "squarry:upgrade_fortune_2",
        [
          "ISI",
          "SUS",
          "ISI"
        ],
        {
          I: "#forge:ingots/steel",
          S: "#forge:dusts/sapphire",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:fortune_upgrade_2")

    e.shaped(
      "squarry:upgrade_fortune_3",
        [
          "IDI",
          "DUD",
          "IDI"
        ],
        {
          I: "projectred_core:electrotine_ingot",
          D: "#forge:dusts/diamond",
          U: "squarry:upgrade_base"
        }
    ).id("kubejs:fortune_upgrade_3")

})