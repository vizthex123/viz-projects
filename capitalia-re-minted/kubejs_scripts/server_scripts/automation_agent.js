// Changes some recipes to use my Automation Agent tag
ServerEvents.recipes(e => {

    // Dolly with lube
    e.shaped(
      "ironchests:iron_dolly",
        [
          "I  ",
          "IL ",
          "LII"
        ],
        {
          L: "kubejs:lubricating_elixir",
          I: "iron_ingot"
        }
    ).id("kubejs:lubed_up_dolly")

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
    ).id("kubejs:dropper")

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
    ).id("kubejs:dispenser")

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
    ).id("kubejs:piston")

    // Quantum Compressor
    e.remove({id: "extendedcrafting:compressor"})
    e.shaped(
     "extendedcrafting:compressor",
        [
          "IGI",
          "BSB",
          "IBI"
        ],
        {
          B: "#forge:ingots/bronze",
          G: "#forge:glass/silica",
          I: "extendedcrafting:black_iron_ingot",
          S: "mekanism:steel_casing"
        }
    ).id("kubejs:quantum_compressor")

})