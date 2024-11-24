// Adds more uses for Syrup
onEvent("recipes", e => {

    // Honey Apple
    e.shapeless("buzzier_bees:honey_apple", ["apple", "#quintessence:syrup", "#quintessence:syrup"]).id("kubejs:honey_apple")

    // Honey Bread
    e.shapeless("buzzier_bees:honey_bread", ["bread", "#quintessence:syrup", "#quintessence:syrup"]).id("kubejs:honey_bread")

    // Honey Glazed Porkchop
    e.shapeless("buzzier_bees:glazed_porkchop", ["cooked_porkchop", "#quintessence:syrup", "#quintessence:syrup"]).id("kubejs:honey_glazed_porkchop")

    // Honey Lamp
    e.shapeless("buzzier_bees:honey_lamp", ["end_rod", "#quintessence:syrup", "#quintessence:syrup", "#forge:nuggets/gold"]).id("kubejs:honey_lamp")



    // Honey Toast
    e.shapeless("food_enhancements:honey_toast", ["food_enhancements:toast", "#quintessence:syrup", "#quintessence:syrup"]).id("kubejs:honey_toast")

    // Honeyed Wheat
    e.shapeless("2x food_enhancements:honeyed_wheat", ["wheat", "wheat", "#quintessence:syrup", "#quintessence:syrup"]).id("kubejs:honey_toast")

    // Honey Roasted Chicken
    e.shapeless("food_enhancements:honey_roasted_chicken", ["cooked_chicken", "#quintessence:syrup", "#quintessence:syrup", "#minecraft:leaves"]).id("kubejs:honey_roasted_chicken")

    // Jelly
    e.shapeless("food_enhancements:jelly", ["sugar", "food_enhancements:gelatin", "food_enhancements:gelatin", "#quintessence:syrup", "#quintessence:syrup"]).id("kubejs:jelly")



    // Spring Salad
    e.shapeless("thermal:spring_salad", ["thermal:corn", "thermal:green_bean", "thermal:radish", "thermal:strawberry", "thermal:spinach", "#quintessence:syrup", "#quintessence:syrup", "bowl"]).id("kubejs:spring_salad")

    // Spice Cake
    e.shaped(
      "thermal:spice_cake",
        [
          "MRM",
          "SES",
          "WRW"
        ],
        {
          E: "#quintessence:egg",
          M: "milk_bucket",
          R: "thermal:sadiroot",
          S: "#quintessence:syrup",
          W: "wheat"
        }
    ).id("kubejs:syrup_spice_cake")

})