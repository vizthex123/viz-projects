// Changes various recipes
onEvent("recipes", e => {

    // Make LC Tech's Tanks require a Trading Core (and adds tag support)
    e.remove({id: "lctech:iron_tank"})
    e.remove({id: "lctech:gold_tank"})
    e.remove({id: "lctech:diamond_tank"})

    e.shaped(
      "lctech:iron_tank",
        [
          "MGM",
          "GTG",
          "MGM"
        ],
        {
          G: "#forge:glass/colorless",
          M: "#forge:ingots/iron",
          T: "lightmanscurrency:trading_core"
        }
    ).id("kubejs:iron_tank")

    e.shaped(
      "lctech:gold_tank",
        [
          "MGM",
          "GTG",
          "MGM"
        ],
        {
          G: "#forge:glass/colorless",
          M: "#forge:ingots/gold",
          T: "lightmanscurrency:trading_core"
        }
    ).id("kubejs:gold_tank")

    e.shaped(
      "lctech:diamond_tank",
        [
          "MGM",
          "GTG",
          "MGM"
        ],
        {
          G: "#forge:glass/colorless",
          M: "#forge:gems/diamond",
          T: "lightmanscurrency:trading_core"
        }
    ).id("kubejs:diamond_tank")

})