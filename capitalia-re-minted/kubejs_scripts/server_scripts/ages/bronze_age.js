// Changes recipes for items in the Bronze Age
ServerEvents.recipes(e => {

    // Bronze Age Translocator alt recipe
    e.shaped(
     "translocators:item_translocator",
        [
          "ABA",
          "BPB",
          "ABA"
        ],
        {
          A: "#reminted:automation_agent",
          B: "#forge:ingots/bronze",
          P: "kubejs:loyalty_point"
        }
    ).id("kubejs:bronze_translocator")

    // Make the Miner's Backpack only require Bronze
    e.remove({id: "forestry:miner_bag"})
    e.shaped(
     "forestry:miner_bag",
        [
          "SWS",
          "BCB",
          "SWS"
        ],
        {
          B: "#forge:ingots/bronze",
          C: "#forge:chests/wooden",
          S: "#forge:string",
          W: "#minecraft:wool"
        }
    ).id("kubejs:miners_backpack")

    // Make the Shop require Bronze
    e.remove({id: "adminshop:shop"})
    e.shaped(
     "adminshop:shop",
        [
          " G ",
          "BEB",
          "BCB"
        ],
        {
          B: "#forge:ingots/bronze",
          C: "#forge:chests",
          E: "ender_pearl",
          G: "#forge:glass/silica",
        }
    ).id("kubejs:shop")

})