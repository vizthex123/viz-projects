// Adds recipes that use Extended Crafting"s blocks
ServerEvents.recipes(e => {

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
          S: "thermal:machine_frame"
        }
    ).id("kubejs:quantum_compressor")

    //// Mob drop cores
    // Animal
    e.recipes.extendedcrafting.shaped_table(
     "kubejs:animal_core",
        [
          "LMPBI",
          "HRRRA",
          " RER ",
          "TRRRO",
          "WCFGS"
        ],
        {
          A: ["rabbit", "cooked_rabbit"],
          B: ["beef", "cooked_beef"],
          C: "#reminted:crab_meat",
          E: "extendedcrafting:ender_ingot",
          F: ["#forge:foods/fish/raw", "#forge:foods/fish/cooked"],
          G: ["netherexp:hogham", "netherexp:cooked_hogham"],
          H: ["chicken", "cooked_chicken"],
          I: "rabbit_hide",
          L: "#forge:leather",
          M: ["mutton", "cooked_mutton"],
          O: ["biomemakeover:raw_toad", "biomemakeover:cooked_toad"],
          P: ["porkchop", "cooked_porkchop"],
          R: "kubejs:research_point",
          S: "#researchlab:ink_sacs",
          T: ["autumnity:turkey", "autumnity:cooked_turkey"],
          W: "#forge:wool"
        }).id("kubejs:animal_core");

})