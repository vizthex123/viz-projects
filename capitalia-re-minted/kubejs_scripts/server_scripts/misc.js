// Changes miscellaneous recipes
ServerEvents.recipes(e => {

    // Mud -> Peat
    e.shapeless("biomeswevegone:peat", ["mud", "#reminted:biomass", "#reminted:biomass", "#reminted:biomass"]).id("kubejs:peat")
    e.shapeless("biomeswevegone:peat", [["packed_mud", "muddy_mangrove_roots"], "#reminted:biomass", "#reminted:biomass"]).id("kubejs:packed_peat")

    // Peat -> Peat
    e.smelting("forestry:peat", "biomeswevegone:peat", 0.5).id("kubejs:smelt_peat")

    // Salt -> Salt (for salted food)
    e.shapeless("salt:salt", ["#forge:dusts/salt"]).id("kubejs:salty_salt")

    // Change the salt mod's gunpowder recipe
    e.remove({id: "salt:gunpowder"})
    e.shapeless("gunpowder", ["#forge:dusts/salt", "#forge:dusts/salt", "coal"]).id("kubejs:salted_gunpowder")

    // Make Slimeballs from Moss Paste
    e.shaped(
      "slime_ball",
        [
          "MMM",
          "MFM",
          "MMM"
        ],
        {
          F: ["alexscaves:fertilizer", "thermal:phytogrow"],
          M: "quark:moss_paste"
        }
    ).id("kubejs:slimeball_with_moss_paste")

    // Matrix Enchanting Table
    e.shaped(
      "quark:matrix_enchanter",
        [
          " B ",
          "STS", // Slay the Spire reference? (real)
          "SCS"
        ],
        {
          B: "book",
          C: "forestry:circuit_board_intricate",
          S: "#forge:ingots/steel",
          T: "enchanting_table"
        }
    ).id("kubejs:matrix_enchanting_table")

    // Change the Bounty Board recipe
    e.remove({id: "bountiful:crafting/bountyboard"})
    e.shaped(
     "bountiful:bountyboard",
        [
          "PPP",
          "AQA",
          "PPP"
        ],
        {
          A: "paper",
          P: "#minecraft:planks",
          Q: "nether_quartz"
        }
    ).id("kubejs:bounty_board")

    // New Tempad recipe
    e.remove({id: "tempad:tempad"})
    e.shaped(
      "tempad:tempad",
        [
          "EEE",
          "TFY",
          "EEE"
        ],
        {
          E: "thermal:enderium_ingot",
          F: "thermal:flux_capacitor",
          T: "travelanchors:travel_anchor",
          Y: "ender_eye"
        }
    ).id("kubejs:tempad")

    // Change the recipe for Travel Anchors to be more tech-y
    e.remove({id: "travelanchors:travel_anchor"})
    e.remove({id: "travelanchors:travel_staff"})
    e.shaped(
     "travelanchors:travel_anchor",
        [
          "DED",
          "ESE",
          "DED"
        ],
        {
          D: "ae2:sky_dust",
          E: "extendedcrafting:ender_ingot",
          S: "mekanism:steel_casing"
        }
    ).id("kubejs:travel_anchor")

    e.shaped(
     "travelanchors:travel_staff",
        [
          "  E",
          " S ",
          "S  "
        ],
        {
          E: "ender_pearl",
          S: "#forge:ingots/steel"
        }
    ).id("kubejs:travel_staff")


    //// Scannable's items
    // Scanner
    e.remove({id: "scannable:scanner"})
    e.shaped(
     "scannable:scanner",
        [
          " C ",
          "SES",
          "SGS"
        ],
        {
          C: "forestry:circuit_board_refined",
          E: ["thermal:rf_potato", "thermal:flux_capacitor"],
          G: "#reminted:equipment_gem",
          S: "#forge:ingots/steel"
        }
    ).id("kubejs:scanner")

    // Chest module
    e.remove({id: "scannable:chest_module"})
    e.shapeless("scannable:chest_module", ["scannable:blank_module", "#forge:chests"]).id("kubejs:chest_module")


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
          L: "kubejs:lubricating_elixir"
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
          L: "kubejs:lubricating_elixir"
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
          L: "kubejs:lubricating_elixir"
        }
    ).id("kubejs:lubed_bronze_gear")

    // Wiring Desk
    e.remove({id: "researchlab:writing_desk"})
    e.shaped(
     "researchlab:writing_desk",
        [
          "PWP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "#forge:fences/wooden",
          P: "#minecraft:planks",
          W: "#reminted:writing_utensil"
        }
    ).id("kubejs:writing_desk")

    // Dirt Chest
    e.shaped(
     "ironchests:dirt_chest",
        [
          "DDD",
          "DCD",
          "DDD"
        ],
        {
          C: "#forge:chests/wooden",
          D: "#minecraft:dirt"
        }
    ).id("kubejs:dirt_chest")

    // Traveler's Boots
    e.remove({id: "travelersboots:travelers_boots"})
    e.shaped(
     "travelersboots:travelers_boots",
        [
          "P P",
          "OWO", // What's this?!
          "R R"
        ],
        {
          P: "#forge:gems/peridot",
          O: "mekanism:ingot_refined_obsidian",
          R: "extendedcrafting:redstone_ingot",
          W: "wooledboots:wooled_leather_boots"
        }
    ).id("kubejs:travellers_boots")

    // Cheaper Wooden Hoppers since they're a bit useless
    e.remove({id: "woodenhopper:wooden_hopper"})
    e.shaped(
     "woodenhopper:wooden_hopper",
        [
          "P P",
          "P P",
          " P "
        ],
        {
          P: "#minecraft:planks"
        }
    ).id("kubejs:wooden_hopper")

    // Technically cheaper Brick Hoppers
    // Might change this later
    e.remove({id: "brickhopper:brick_hopper"})
    e.shaped(
     "brickhopper:brick_hopper",
        [
          "B B",
          "BRB",
          " B "
        ],
        {
          B: "#forge:ingots/brick",
          R: "#forge:barrels/wooden"
        }
    ).id("kubejs:brick_hopper")

    // Upgrade Wooden and Brick Hoppers
    e.shaped(
      "brickhopper:brick_hopper",
        [
          "BWB",
          "BWB",
          " B "
        ],
        {
          B: "brick",
          W: "woodenhopper:wooden_hopper"
        }
    ).id("kubejs:wooden_hopper_to_brick")

    e.shaped(
      "hopper",
        [
          "IHI",
          "IHI",
          " I ",
        ],
        {
          I: "iron_ingot",
          H: "brickhopper:brick_hopper"
        }
    ).id("kubejs:basic_hopper_to_iron")

    // Make Smooth Stone work with other types of Stone
    e.remove({id: "minecraft:smooth_stone"})
    e.smelting("smooth_stone", "#reminted:stonelike", 0.1).id("kubejs:smooth_stone")

})