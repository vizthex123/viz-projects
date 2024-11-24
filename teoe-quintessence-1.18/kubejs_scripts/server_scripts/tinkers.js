// Changes recipes for Tinker's Construct
// I can't change melting recipes though, oof
onEvent("recipes", e => {

    // Make the Melter require the Arc Furnace
    e.remove({id: "tconstruct:smeltery/seared/melter"})
    e.shaped(
      "tconstruct:seared_melter",
        [
          "   ",
          "SAS",
          "SSS"
        ],
        {
          A: Item.of('custommachinery:custom_machine_item', '{machine:"quintessence:arc_furnace"}'),
          S: "tconstruct:seared_brick"
        }
    ).id("kubejs:seared_melter")

    // Cast Latex into a Block
    e.recipes.tconstruct.casting_basin("thermal:rubber_block", "thermal:latex", 2000).noCast().id("kubejs:rubber_block")

    //// Cast my custom fluids into blocks & ingots
    // Fiery
    e.recipes.tconstruct.casting_table("twilightforest:fiery_ingot", "kubejs:molten_fiery", 90).id("kubejs:fiery_ingot")
    e.recipes.tconstruct.casting_basin("twilightforest:fiery_block", "kubejs:molten_fiery", 810).noCast().id("kubejs:fiery_block")

})