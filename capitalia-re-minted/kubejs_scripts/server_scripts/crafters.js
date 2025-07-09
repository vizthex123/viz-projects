// Enforces a certain autocrafter progression
// Order:
// Stone Age - Quark
// Iron Age - Crafting Automat
// Industrial Age - Project Red
ServerEvents.recipes(e => {

    // Quark
    e.remove({id: "quark:automation/crafting/crafter"})
    e.shaped(
     "quark:crafter",
        [
          "BBB",
          "BWB",
          "SDS"
        ],
        {
          B: "#forge:ingots/bronze",
          D: "dropper",
          S: "#reminted:automation_agent",
          W: "#forge:workbench"
        }
    ).id("kubejs:crafter")

    // Crafting Automat
    e.remove({id: "craftingautomat:autocrafter"})
    e.shaped(
     "craftingautomat:autocrafter",
        [
          "LLL",
          "ICI",
          "IBI"
        ],
        {
          B: "#forge:barrels/wooden",
          C: "quark:crafter",
          I: "#forge:ingots/iron",
          L: "#forge:gems/lapis"
        }
    ).id("kubejs:crafting_automat")

    // Thermal autocraft
    e.shaped(
     "thermal:machine_crafter",
        [
          " H ",
          "CAC",
          "TFT"
        ],
        {
          A: "craftingautomat:autocrafter",
          C: "copper_ingot",
          F: "thermal:rf_coil",
          H: "#forge:chests/wooden",
          T: "#forge:gears/tin"
        }
    ).id("kubejs:autocrafter_upgrade")

})