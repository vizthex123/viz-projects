// Changes the recipes for Simple Quarry's content
ServerEvents.recipes(e => {

    // Fueled Quarry
    e.remove({id: "squarry:fuel_quarry"})
    e.shaped(
      "squarry:fuel_quarry",
        [
          "SPS",
          "TFT",
          "SCS"
        ],
        {
          C: "#forge:ingots/copper",
          F: "#reminted:furnace",
          P: ["#reminted:bronze_pickaxe", "forestry:broken_bronze_pickaxe"],
          S: "smooth_stone",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:fuel_quarry")

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
          Q: "squarry:fuel_quarry"
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

})