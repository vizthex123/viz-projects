// Unifies nugget, ingot, and gem crafting recipes
ServerEvents.recipes(e => {

    // Tin
    e.remove({id: "forestry:resource_storage_tin"})
    e.remove({id: "forestry:ingot_tin_from_resource_storage_tin"})
    e.remove({id: "projectred_exploration:tin_ingot_from_nineblock"})
    e.remove({id: "mekanism:processing/tin/ingot/from_nuggets"})
    e.remove({id: "mekanism:processing/tin/ingot/from_block"})
    e.remove({id: "thermal:storage/tin_ingot_from_nuggets"})
    e.remove({id: "thermal:storage/tin_ingot_from_block"})
    e.shaped(
     "thermal:tin_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/tin"
        }
    ).id("kubejs:tin_ingot")

    e.shaped(
     "thermal:tin_block",
        [
          "III",
          "III",
          "III"
        ],
        {
          I: "#forge:ingots/tin"
        }
    ).id("kubejs:tin_block")

    e.shapeless("9x thermal:tin_nugget", ["#forge:ingots/tin"]).id("kubejs:tin_ingot_decraft")

    e.shapeless("9x thermal:tin_ingot", ["#forge:storage_blocks/tin"]).id("kubejs:tin_block_decraft")


    // Lead
    e.remove({id: "mekanism:processing/lead/ingot/from_nuggets"})
    e.remove({id: "mekanism:processing/lead/ingot/from_block"})
    e.remove({id: "thermal:storage/lead_ingot_from_nuggets"})
    e.remove({id: "thermal:storage/lead_ingot_from_block"})
    e.shaped(
     "thermal:lead_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/lead"
        }
    ).id("kubejs:lead_ingot")

    e.shaped(
     "thermal:lead_block",
        [
          "III",
          "III",
          "III"
        ],
        {
          I: "#forge:ingots/lead"
        }
    ).id("kubejs:lead_block")

    e.shapeless("9x thermal:lead_nugget", ["#forge:ingots/lead"]).id("kubejs:lead_ingot_decraft")

    e.shapeless("9x thermal:lead_ingot", ["#forge:storage_blocks/lead"]).id("kubejs:lead_block_decraft")


    // Silver
    e.remove({id: "projectred_exploration:silver_block"})
    e.remove({id: "projectred_exploration:silver_ingot_from_nineblock"})
    e.remove({id: "thermal:storage/silver_ingot_from_nuggets"})
    e.remove({id: "thermal:storage/silver_nugget_from_ingot"})
    e.remove({id: "thermal:storage/silver_ingot_from_block"})
    e.remove({id: "thermal:storage/silver_block"})
    e.shaped(
     "thermal:silver_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/silver"
        }
    ).id("kubejs:silver_ingot")

    e.shaped(
     "thermal:silver_block",
        [
          "III",
          "III",
          "III"
        ],
        {
          I: "#forge:ingots/silver"
        }
    ).id("kubejs:silver_block")

    e.shapeless("9x thermal:silver_nugget", ["#forge:ingots/silver"]).id("kubejs:silver_ingot_decraft")
    e.shapeless("9x thermal:silver_ingot", ["#forge:storage_blocks/silver"]).id("kubejs:silver_block_decraft")

    // Uranium
    // Block recipe is tagged by default (pog)
    e.remove({id: "mekanism:processing/uranium/ingot/from_block"})
    e.remove({id: "mekanism:processing/uranium/ingot/from_nuggets"})
    e.remove({id: "mekanism:processing/uranium/storage_blocks/from_ingots"})
    e.shaped(
     "biggerreactors:uranium_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/uranium"
        }
    ).id("kubejs:uranium_ingot")

    // Steel
    e.remove({id: "mekanism:nuggets/steel"})
    e.remove({id: "thermal:storage/steel_nugget_from_ingot"})
    e.remove({id: "mekanism:processing/steel/ingot/from_nuggets"})
    e.remove({id: "thermal:storage/steel_ingot_from_nuggets"})
    e.remove({id: "mekanism:storage_blocks/steel"})
    e.remove({id: "thermal:storage/steel_block"})

    e.shaped(
     "thermal:steel_ingot",
        [
          "NNN",
          "NNN",
          "NNN"
        ],
        {
          N: "#forge:nuggets/steel"
        }
    ).id("kubejs:steel_ingot")

    e.shaped(
     "thermal:steel_block",
        [
          "III",
          "III",
          "III"
        ],
        {
          I: "#forge:ingots/steel"
        }
    ).id("kubejs:steel_block")

    e.shapeless("9x thermal:steel_nugget", ["#forge:ingots/steel"]).id("kubejs:steel_ingot_decraft")
    e.shapeless("9x thermal:steel_ingot", ["#forge:storage_blocks/steel"]).id("kubejs:steel_block_decraft")



    // Ruby Blocks
    e.remove({id: "projectred_exploration:ruby_block"})
    e.shaped(
     "thermal:ruby_block",
        [
          "GGG",
          "GGG",
          "GGG"
        ],
        {
          G: "#forge:gems/ruby"
        }
    ).id("kubejs:ruby_block")

    // Sapphire Blocks
    e.remove({id: "projectred_exploration:sapphire_block"})
    e.shaped(
     "thermal:sapphire_block",
        [
          "GGG",
          "GGG",
          "GGG"
        ],
        {
          G: "#forge:gems/sapphire"
        }
    ).id("kubejs:sapphire_block")

})