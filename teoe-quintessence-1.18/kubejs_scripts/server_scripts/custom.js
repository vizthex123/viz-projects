// Adds recipes for my KubeJS items
onEvent("recipes", e => {

    // Twilight Portal Catalyst
    e.shaped(
      "kubejs:portal_catalyst",
        [
          "MDM"
        ],
        {
          D: "#forge:gems/diamond",
          M: "#forge:ingots/manasteel"
        }
    ).id("kubejs:portal_catalyst")



    // Iridium Fuel Cell
    e.recipes.create.mechanical_crafting("kubejs:iridium_fuel_cell", [
          " L ",
          "LIL",
          " L "
        ],
        {
          I: "kubejs:iridium_chunks",
          L: "#forge:plates/lead"
        }
    ).id("kubejs:iridium_fuel_cell")



    // Blast Crushed Ores
    // Recipes are in create.js
    e.blasting("byg:pendorite_scraps", "kubejs:crushed_pendorite", 4).id("kubejs:blast_crushed_pendorite")
    e.blasting("ob_core:platinum_ingot", "kubejs:crushed_platinum", 1.5).id("kubejs:blast_crushed_platinum")
    e.blasting("tconstruct:cobalt_ingot", "kubejs:crushed_cobalt", 2).id("kubejs:blast_crushed_cobalt")

    e.recipes.thermal.furnace("byg:pendorite_scraps", "kubejs:crushed_pendorite").id("kubejs:redstone_crushed_pendorite").energy(2000)
    e.recipes.thermal.furnace("ob_core:platinum_ingot", "kubejs:crushed_platinum").id("kubejs:redstone_crushed_platinum").energy(2000)
    e.recipes.thermal.furnace("tconstruct:cobalt_ingot", "kubejs:crushed_cobalt").id("kubejs:redstone_crushed_cobalt").energy(2000)



    // Quicklime
    e.blasting("kubejs:quicklime", "#quintessence:calcium_carbonate", 1).id("kubejs:blast_calcium_carbonate")
    e.blasting("kubejs:quicklime", "minecraft:nautilus_shell", 0.25).id("kubejs:blast_nautilus_shell")
    /*
    e.blasting("kubejs:quicklime", "#forge:limestone", 1).id("kubejs:blast_limestone")
    e.blasting("kubejs:quicklime", "byg:travertine", 1).id("kubejs:blast_travertine")
    */
    e.recipes.create.mechanical_crafting("thermal:compost", [
          "QC"
        ],
        {
          C: "kubejs:compressed_sawdust",
          Q: "kubejs:quicklime",
        }
    ).id("kubejs:compost_quicklime")

    e.recipes.create.mechanical_crafting("6x paper", [
          "QQQ"
        ],
        {
          Q: "kubejs:quicklime"
        }
    ).id("kubejs:paper_quicklime")

    // Induction Smelt Quicklime to make Steel
    e.recipes.thermal.smelter([Item.of("thermal:steel_ingot").withChance(0.15)], [["iron_ingot", "thermal:iron_dust"], "#create:stone_types/limestone", "8x kubejs:quicklime"]).energy(6400).id("kubejs:induction_smelt_quicklime")

    // Clean Spent Filters
    e.recipes.thermal.smelter([Item.of("deepresonance:filter_material").withChance(0.5)], ["deepresonance:spent_filter_material", "kubejs:quicklime"]).energy(6000).id("kubejs:clean_filter")

})