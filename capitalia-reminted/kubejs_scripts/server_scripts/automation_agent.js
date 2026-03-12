// Changes some recipes to use my Automation Agent tag
// Also the lubricant-only ones so I don't have to hunt them down
ServerEvents.recipes(e => {

    // Craft gears before the Iron Age
    // Removes the default recipes cuz of the TE conflict
    e.remove({id: "forestry:gear_tin"})
    e.remove({id: "forestry:gear_copper"})
    e.remove({id: "forestry:gear_bronze"})
    e.shaped(
     "forestry:gear_tin",
        [
          "III",
          "ILI",
          "III"
        ],
        {
          I: "#forge:ingots/tin",
          L: "kubejs:lubricant"
        }
    ).id("kubejs:lubed_tin_gear")

    e.shaped(
     "forestry:gear_copper",
        [
          "III",
          "ILI",
          "III"
        ],
        {
          I: "#forge:ingots/copper",
          L: "kubejs:lubricant"
        }
    ).id("kubejs:lubed_copper_gear")

    e.shaped(
     "forestry:gear_bronze",
        [
          "III",
          "ILI",
          "III"
        ],
        {
          I: "#forge:ingots/bronze",
          L: "kubejs:lubricant"
        }
    ).id("kubejs:lubed_bronze_gear")


    // Dollies with glue & lube
    e.shaped(
      "ironchests:iron_dolly",
        [
          "I  ",
          "IL ",
          "GII"
        ],
        {
          G: "kubejs:glue",
          L: "kubejs:lubricant",
          I: "iron_ingot"
        }
    ).id("kubejs:lubed_up_dolly")

    e.shaped(
      "ironchests:diamond_dolly",
        [
          "D  ",
          "DL ",
          "GDD"
        ],
        {
          D: "diamond",
          G: "kubejs:glue",
          L: "kubejs:lubricant"
        }
    ).id("kubejs:lubed_up_diamond_dolly")

    // Piston
    e.remove({id: "minecraft:piston"})
    e.shaped(
        "piston",
        [
          "PPP",
          "CIC",
          "CAC"
        ],
        {
          A: "#reminted:automation_agent",
          C: "#forge:cobblestone",
          I: "iron_ingot",
          P: "#minecraft:planks"
        }
    ).id("kubejs:lubed_up_piston")

    // Droppers & Dispensers
    e.remove({id: "minecraft:dropper"})
    e.remove({id: "minecraft:dispenser"})
    e.shaped(
        "dropper",
        [
          "CCC",
          "C C",
          "CAC" // I spent hours learning KubeJS to make that one song
        ],
        {
          A: "#reminted:automation_agent",
          C: "#forge:cobblestone"
        }
    ).id("kubejs:lubed_up_dropper")

    e.shaped(
        "dispenser",
        [
          "CCC",
          "CBC",
          "CAC"
        ],
        {
          A: "#reminted:automation_agent",
          B: "bow",
          C: "#forge:cobblestone"
        }
    ).id("kubejs:lubed_up_dispenser")

})