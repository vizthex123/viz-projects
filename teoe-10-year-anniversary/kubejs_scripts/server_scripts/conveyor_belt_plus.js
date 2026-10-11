// Changes recipes for Conveyor Belts Plus
ServerEvents.recipes(e => {

    // Basic
    e.remove({id: "conveyor_belt_plus:belt_item"})
    e.remove({id: "conveyor_belt_plus:belt_item_alt"})
    e.shaped(
      "2x conveyor_belt_plus:belt",
        [
          "CIC"
        ],
        {
          C: "#forge:ingots/copper",
          I: "#forge:rods/iron"
        }
    ).id("kubejs:belt")

    e.shaped(
      "conveyor_belt_plus:belt",
        [
          "KSK",
          "KIK",
          "KSK"
        ],
        {
          K: "dried_kelp",
          I: "#forge:rods/iron",
          S: "#forge:rods/wooden"
        }
    ).id("kubejs:kelp_belt")

})