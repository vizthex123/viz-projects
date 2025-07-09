// Changes recipes for items in the Iron Age
ServerEvents.recipes(e => {

    // Change the Seller's recipe
    e.remove({id: "adminshop:seller"})
    e.shaped(
     "adminshop:seller",
        [
          " H ",
          "IEI",
          "ICI"
        ],
        {
          I: "#forge:ingots/iron",
          C: "#forge:chests",
          E: "ender_pearl",
          H: "hopper"
        }
    ).id("kubejs:seller")

    //// Change the Buyer recipes
    // Tier 1
    e.remove({id: "adminshop:buyer_1"})
    e.remove({id: "adminshop:buyer_2"})
    e.remove({id: "adminshop:buyer_3"})

    e.shapeless("adminshop:buyer_1", ["adminshop:seller", "redstone_torch"]).id("kubejs:t1_buyer")

    // Tier 2
    e.shaped(
     "adminshop:buyer_2",
        [
          " R ",
          "IEI",
          "IBI"
        ],
        {
          B: "adminshop:buyer_1",
          I: "#forge:ingots/black_iron",
          R: "#forge:ingots/redstone_ingot",
          E: "ender_pearl",
        }
    ).id("kubejs:t2_buyer")

    // Tier 3
    e.shaped(
     "adminshop:buyer_3",
        [
          " D ",
          "SES",
          "SBS"
        ],
        {
          B: "adminshop:buyer_2",
          S: "#forge:ingots/steel",
          D: "#forge:nuggets/diamond",
          E: "ender_pearl",
        }
    ).id("kubejs:t3_buyer")

})