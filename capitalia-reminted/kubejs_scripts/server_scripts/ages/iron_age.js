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
    ).id("kubejs:ages/iron/seller")

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
    ).id("kubejs:ages/iron/t2_buyer")

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
    ).id("kubejs:ages/iron/t3_buyer")


    // Upgrade Translocators into a Transprotwo (and change the recipe for the other two)
    e.remove({id: "transprotwo:dispatcher"})
    e.remove({id: "transprotwo:fluid_dispatcher"})
    e.remove({id: "transprotwo:power_dispatcher"})
    e.shaped(
     "2x transprotwo:dispatcher",
        [
          "TIT",
          "IEI",
          "AIA"
        ],
        {
          A: "#reminted:automation_agent",
          E: "ender_pearl",
          I: "iron_ingot",
          T: "translocators:item_translocator"
        }
    ).id("kubejs:ages/iron/dispatcher")

    e.shaped(
     "2x transprotwo:fluid_dispatcher",
        [
          "TIT",
          "IEI",
          "AIA"
        ],
        {
          A: "#reminted:automation_agent",
          E: "ender_pearl",
          I: "#forge:ingots/bronze",
          T: "translocators:fluid_translocator"
        }
    ).id("kubejs:ages/iron/fluid_dispatcher")

    e.shaped(
     "2x transprotwo:power_dispatcher",
        [
          "DID",
          "IEI",
          "AIA"
        ],
        {
          A: "#reminted:automation_agent",
          D: ["transprotwo:dispatcher", "transprotwo:fluid_dispatcher"],
          E: "ender_pearl",
          I: "#forge:ingots/electrum"
        }
    ).id("kubejs:ages/iron/power_dispatcher")

})