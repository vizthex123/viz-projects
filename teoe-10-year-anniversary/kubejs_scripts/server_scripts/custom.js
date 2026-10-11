// Adds recipes for my KubeJS items
ServerEvents.recipes((e) => {

    // Bronze upgrade template
    e.shaped(
      "2x kubejs:bronze_upgrade",
        [
          "CBC",
          "BIB",
          "CBC"
        ],
        {
          B: "#forge:ingots/bronze",
          C: "#forge:ingots/copper",
          I: "#teoe10:binding"
        }
    ).id("kubejs:bronze_upgrade")

    // The Essence of Everything
    e.recipes.extendedcrafting.shapeless_table("kubejs:essence", ["#aether:gold_dungeon_loot", "twilightforest:steeleaf_ingot", "twilightforest:carminite", "twilightforest:fiery_ingot", "twilightforest:ironwood_ingot", "twilightforest:knightmetal_ingot", "botania:terrasteel_ingot", "thermal:upgrade_augment_3", "thermalendergy:vibrating_core", "numismaticoverhaul:gold_coin", ["translocators:item_translocator", "translocators:fluid_translocator"], "quark:matrix_enchanter", "ironchests:obsidian_chest", "minecraft:dragon_egg", "enderio:sentient_ender", "forestry:alveary_hygro", "tesseract:tesseract", "xycraft_machines:fabricator", "conveyor_belt_plus:splitter", "conveyor_belt_plus:ultimate_belt"]).id("kubejs:essence").tier(2);

});