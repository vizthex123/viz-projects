// Changes the recipes for mods that adds quarries
ServerEvents.recipes(e => {

    //// Simple Quarry
    // Fueled Quarry
    e.remove({id: "squarry:fuel_quarry"})
    e.shaped(
      "squarry:fuel_quarry",
        [
          "SPS",
          "CFC",
          "STS"
        ],
        {
          C: "#forge:ingots/copper",
          F: "#reminted:furnace",
          P: "#reminted:bronze_pickaxe",
          S: "smooth_stone",
          T: "#forge:ingots/tin"
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
          P: "forestry:bronze_pickaxe",
          Q: "quickquarry:stone_quarry",
          S: "smooth_stone",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:stone_quarry_upgrade")

    // Powered Quarry
    e.remove({id: "squarry:powered_quarry"})
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
    e.remove({id: "squarry:upgrade_base"})
    e.remove({id: "squarry:upgrade_filler"})

    // Base Upgrade
    e.shaped(
      "squarry:upgrade_base",
        [
          " B ",
          "BSB",
          " B "
        ],
        {
          B: "#forge:ingots/bronze",
          S: "smooth_stone"
        }
    ).id("kubejs:base_upgrade")

    // Filler Upgrade
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



    //// Quick Quarry
    // Block Breaker
    e.remove({id: "quickquarry:mechanical_breaker"})
    e.shaped(
      "quickquarry:mechanical_breaker",
        [
          "CPC",
          "C C",
          "CCC",
        ],
        {
          C: "#forge:cobblestone",
          P: "#reminted:iron_pickaxe"
        }
    ).id("kubejs:mechanical_breaker")

    // Stone
    e.remove({id: "quickquarry:stone_quarry"})
    e.shaped(
      "quickquarry:stone_quarry",
        [
          "RSR",
          "SPS",
          "RSR"
        ],
        {
          P: "stone_pickaxe",
          R: "#forge:rods/stone",
          S: "smooth_stone"
        }
    ).id("kubejs:stone_quarry")

    // Iron
    e.remove({id: "quickquarry:iron_quarry"})
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
    e.remove({id: "quickquarry:ender_quarry"})
    e.shaped(
      "quickquarry:ender_quarry",
        [
          "EME",
          "QIQ",
          "EEE"
        ],
        {
          E: "end_stone",
          I: "extendedcrafting:ender_ingot",
          M: "quark:myalite",
          Q: "quickquarry:iron_quarry"
        }
    ).id("kubejs:ender_quarry")

})