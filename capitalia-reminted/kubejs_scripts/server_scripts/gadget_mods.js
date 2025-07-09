// Changes gadget mod recipes
ServerEvents.recipes(e => {

    //// Building Gadgets
    // Building
    e.remove({id: "buildinggadgets2:gadget_building"})
    e.shaped(
      "buildinggadgets2:gadget_building",
        [
          "IBI",
          "AFA",
          "IAI"
        ],
        {
          A: "#reminted:automation_agent",
          B: "forestry:builder_bag",
          F: "thermal:flux_capacitor",
          I: "iron_ingot"
        }
    ).id("kubejs:building_gadget")

    // Exchanging
    e.remove({id: "buildinggadgets2:gadget_exchanging"})
    e.shaped(
      "buildinggadgets2:gadget_exchanging",
        [
          "IBI",
          "AFA",
          "ISI"
        ],
        {
          A: "#reminted:automation_agent",
          B: "forestry:builder_bag",
          F: "thermal:flux_capacitor",
          I: "iron_ingot",
          I: "#reminted:equipment_gem"
        }
    ).id("kubejs:exchanging_gadget")

    // Copy-Paste
    e.remove({id: "buildinggadgets2:gadget_copy_paste"})
    e.shaped(
      "buildinggadgets2:gadget_copy_paste",
        [
          "IAI",
          "AFA",
          "IAI"
        ],
        {
          A: "#reminted:automation_agent",
          F: "thermal:flux_capacitor"
        }
    ).id("kubejs:copy_paste_gadget")

    // Cut-Paste
    e.remove({id: "buildinggadgets2:gadget_cut_paste"})
    e.shaped(
      "buildinggadgets2:gadget_cut_paste",
        [
          " A ",
          "IGI",
          " I "
        ],
        {
          A: "#reminted:automation_agent",
          G: "buildinggadgets2:gadget_copy_paste",
          I: "iron_ingot"
        }
    ).id("kubejs:cut_paste_gadget")





    //// Charging Gadgets
    e.remove({id: "charginggadgets:charging_station"})
    e.shaped(
      "charginggadgets:charging_station",
        [
          "IAI",
          "AGA",
          "IAI"
        ],
        {
          A: "#reminted:automation_agent",
          G: "#forge:gears/bronze",
          I: "iron_ingot"
        }
    ).id("kubejs:charging_station")


/*
    //// Mining Gadgets
    e.remove({id: "charginggadgets:charging_station"})
    e.shaped(
      "charginggadgets:charging_station",
        [
          "IAI",
          "AGA",
          "IAI"
        ],
        {
          A: "#reminted:automation_agent",
          G: "#forge:gears/bronze",
          I: "iron_ingot"
        }
    ).id("kubejs:charging_station")
*/
})