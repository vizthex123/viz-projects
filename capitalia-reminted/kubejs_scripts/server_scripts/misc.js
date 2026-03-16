// Changes miscellaneous recipes
ServerEvents.recipes(e => {

    // Tag label alt recipe
    e.shapeless("classicpipes:tag_label", ["laserio:filter_tag", "#forge:paper", "#forge:nuggets/diamond"]).id("kubejs:tag_label")

    // Salt -> Salt (for salted food)
    e.shapeless("salt:salt", ["#forge:dusts/salt"]).id("kubejs:salty_salt")

    // Change the salt mod's gunpowder recipe
    e.remove({id: "salt:gunpowder"})
    e.shapeless("gunpowder", ["#forge:dusts/salt", "#forge:dusts/salt", "coal"]).id("kubejs:salted_gunpowder")

    // Cheaper Cladded Armour Smithing Template
    e.remove({id: "biomemakeover:cladding_armor_upgrade_smithing_template"})
    e.shaped(
      "2x biomemakeover:cladding_upgrade_smithing_template",
        [
          "CTC",
          "CSC",
          "CCC"
        ],
        {
          C: "#forge:ingots/copper",
          S: "#reminted:cladding_duplication",
          T: "biomemakeover:cladding_upgrade_smithing_template"
        }
    ).id("kubejs:cladding_smithing_template")

    // Make the Task Screen use a Brick Hopper instead of a Book
    // Also fixes their recipe conflicts
    e.remove({id: "ftbquests:screen_1"})
    e.remove({id: "ftbquests:screen_3"})
    e.remove({id: "ftbquests:screen_5"})
    e.remove({id: "ftbquests:screen_7"})
    e.shaped(
      "ftbquests:screen_1",
        [
          "CCC",
          "CHC",
          "CCC"
        ],
        {
          C: "#forge:stone",
          H: "brickhopper:brick_hopper"
        }
    ).id("kubejs:task_screen")

    e.shapeless("ftbquests:screen_3", ["ftbquests:screen_1", "ftbquests:screen_1", "ftbquests:screen_1"]).id("kubejs:task_screen_3")
    e.shapeless("ftbquests:screen_5", ["ftbquests:screen_3", "ftbquests:screen_1", "ftbquests:screen_1"]).id("kubejs:task_screen_5")
    e.shapeless("ftbquests:screen_7", ["ftbquests:screen_5", "ftbquests:screen_1", "ftbquests:screen_1"]).id("kubejs:task_screen_7")

    // Changed the Ranged Pump recipe
    e.remove({id: "rangedpumps:pump"})
    e.shaped(
      "rangedpumps:pump",
        [
          "ODO",
          "BQB",
          "OLO"
        ],
        {
          B: "bucket",
          D: "#forge:dusts/diamond",
          O: "obsidian",
          L: "kubejs:lubricant",
          Q: "squarry:powered_quarry"
        }
    ).id("kubejs:pump")



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
          "AGA",
          "PPP"
        ],
        {
          A: "#forge:paper",
          G: "essentiallycurrency:gold_coin",
          P: "#minecraft:planks"
        }
    ).id("kubejs:bounty_board")
    e.shapeless("bountiful:bountyboard", ["bountiful:bountyboard", "kubejs:loyalty_point"]).id("kubejs:reset_bounty_board")

    // Convert Stone Rods into Sticks
    e.shapeless("2x stick", ["#forge:rods/stone", "kubejs:loyalty_point"]).id("kubejs:stone_sticks")


    /// Make Forestry's bronze tools cheaper
    e.remove({id: "forestry:bronze_sword"})
    e.remove({id: "forestry:bronze_pickaxe"})
    e.remove({id: "forestry:bronze_axe"})
    e.remove({id: "forestry:bronze_shovel"})
    e.remove({id: "forestry:bronze_hoe"})
    e.shaped(
      "forestry:bronze_sword",
        [
          " T ",
          "ACA",
          " S "
        ],
        {
          A: "#reminted:adhesive",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_sword")

    e.shaped(
      "forestry:bronze_pickaxe",
        [
          "CAC", // I learned KubeJS to remake that one video
          "TST",
          " S "
        ],
        {
          A: "#reminted:adhesive",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_pickaxe")

    e.shaped(
      "forestry:bronze_axe",
        [
          "TCA",
          "CS ",
          " S "
        ],
        {
          A: "#reminted:adhesive",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_axe")

    e.shaped(
      "forestry:bronze_shovel",
        [
          "CAT", // loaf!
          " S ",
          " S "
        ],
        {
          A: "#reminted:adhesive",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_shovel")

    e.shaped(
      "forestry:bronze_hoe",
        [
          "CTA",
          " S ",
          " S "
        ],
        {
          A: "#reminted:adhesive",
          C: "#forge:ingots/copper",
          S: "#forge:rods/wooden",
          T: "#forge:ingots/tin"
        }
    ).id("kubejs:survivalist_hoe")


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
          G: "#reminted:equipment_gems",
          S: "#forge:ingots/steel"
        }
    ).id("kubejs:scanner")

    // Chest module
    e.remove({id: "scannable:chest_module"})
    e.shapeless("scannable:chest_module", ["scannable:blank_module", "#forge:chests"]).id("kubejs:chest_module")

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
          O: "#forge:ingots/steel",
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
          " I "
        ],
        {
          I: "iron_ingot",
          H: "brickhopper:brick_hopper"
        }
    ).id("kubejs:basic_hopper_upgrade")

    // Mossy Cobblestone -> Mossy Stone
    e.smelting("biomeswevegone:mossy_stone", "mossy_cobblestone", 0.2).id("kubejs:smelt_mossy_cobblestone")

    // Make Smooth Stone work with other types of Stone
    e.remove({id: "minecraft:smooth_stone"})
    e.smelting("smooth_stone", "#reminted:stonelike", 0.1).id("kubejs:smooth_stone")
    e.blasting("smooth_stone", "#reminted:stonelike/tough", 0.1).id("kubejs:blast_smooth_stone")

})