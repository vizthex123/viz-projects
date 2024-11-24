// Fixes various recipes
onEvent("recipes", e => {

    // Make the Name Tag recipe more logical
    e.remove({id: "essentials:name_tag"})
    e.shaped(
      "name_tag",
        [
          "  S",
          " P ",
          "P  "
        ],
        {
          P: "paper",
          S: "#forge:string"
        }
    ).id("kubejs:name_tag")

    // Unify Golden Apple recipes
    e.remove({id: "minecraft:golden_apple"})
    e.remove({id: "food_enhancements:golden_apple_green"})
    e.shaped(
      "golden_apple",
        [
          "GGG",
          "GAG",
          "GGG"
        ],
        {
          A: ["apple", "food_enhancements:green_apple"],
          G: "#forge:ingots/gold"
        }
    ).id("kubejs:golden_apple")

    // Unify Trident recipes
    e.remove({id: "additionaladditions:trident"})
    e.remove({id: "bettertridents:trident"})
    e.remove({id: "upgrade_aquatic:trident"})
    e.shaped(
      "trident",
        [
          " TT",
          " PT",
          "P  "
        ],
        {
          P: "#forge:rods/prismarine",
          T: ["additionaladditions:trident_shard", "bettertridents:trident_fragment", "upgrade_aquatic:thrasher_tooth"]
        }
    ).id("kubejs:trident")

})