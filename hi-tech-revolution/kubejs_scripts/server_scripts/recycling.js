// Tags items for recycling
ServerEvents.tags("item", e => {

    //// Items now give Congealed Matter, and only give other items with necessary

    /// Reassembler recipes use 4,000 RF and take 10 seconds
    /// Might make it scale based on item type later

    /// Item recipes use 2,000 RF and take 5 seconds
    /// Tagged recipes use 4,000 RF and take 10 seconds

    //// Generic
    e.add("revolution:recyclable", ["#minecraft:trim_templates"])


    //// Rocky
    e.add("revolution:recyclable/rocky", ["#alexscaves:concrete", "#forge:cobblestone", "#forge:stone", "#forge:stone/basalt", "smooth_stone", "smooth_basalt", "polished_basalt", "furnace", "smoker", "stonecutter", "piston", "sticky_piston", "prismarine", "dark_prismarine", "sea_lantern", "repeater", "comparator", "dispenser", "dropper", "observer", "lever",

    "cb_microblock:stone_rod"])


    //// Metallic
    /// Enchanted Golden Apples have their own recipe due to their rarity
    e.add("revolution:recyclable/metallic", ["#forge:plates/copper", "#forge:plates/iron", "#forge:plates/gold", "#forge:plates/steel", "#forge:plates/tin", "#forge:plates/silver", "#forge:plates/nickel", "#forge:plates/bronze", "#forge:plates/constantan", "#forge:plates/invar", "#forge:plates/electrum", "#forge:plates/signalum", "#forge:plates/lumium", "#forge:plates/enderium", "#forge:plates/rose_gold", "#forge:plates/brass", "#forge:plates/zinc",

    "#forge:gears/copper", "#forge:gears/iron", "#forge:gears/gold", "#forge:gears/steel", "#forge:gears/tin", "#forge:gears/silver", "#forge:gears/nickel", "#forge:gears/bronze", "#forge:gears/constantan", "#forge:gears/invar", "#forge:gears/electrum", "#forge:gears/signalum", "#forge:gears/lumium", "#forge:gears/enderium", "#forge:gears/rose_gold", "#forge:gears/brass", "#forge:gears/zinc", "#forge:gears/dark_steel", "#forge:gears/energized", "#forge:gears/vibrant",

    "blast_furnace", "bucket", "brush", "lightning_rod", "spyglass", "iron_horse_armor", "golden_horse_armor", "hopper", "bell", "lantern", "soul_lantern", "tripwire_hook", "rail", "activator_rail", "detector_rail", "powered_rail", "clock", "compass", "recovery_compass", "golden_apple", "golden_carrot",

    "alexscaves:copper_valve",

    "galosphere:chandelier", "galosphere:golden_lichen_cordyceps", "galosphere:glow_flare",

    "merequester:requester",

    "mffs:battery",

    "prettypipes:pipe",

    "projectred_core:copper_coil",

    "projectred_expansion:battery",

    "railcraft:charge_meter",

    "#storagedrawers:keys",

    "#thermal:devices", "#thermal:machines", "thermal:potion_infuser", "thermal:potion_quiver", "thermal:fluid_reservoir", "thermal:fluid_cell_frame", "thermal:fluid_cell", "thermal:saw_blade", "thermal:watering_can", "thermal:drill_head", "thermal:potion_duration_augment", "thermal:potion_amplifier_augment",

    "thermalendergy:endergy_upgrade_1", "thermalendergy:endergy_upgrade_2", "thermalendergy:endergy_upgrade_3",

    "#systeams:boilers",

    "wa_ender_quarry:blank_module", "wa_ender_quarry:module_fortune_1",

    "xycraft_world:copper_torch"])

    /// Dense Metallic items (netherite, lead, and stellarium)
    e.add("revolution:recyclable/dense_metallic", ["#forge:plates/netherite", "#forge:gears/netherite",
    "#forge:plates/lead", "#forge:gears/lead",
    "#forge:storage_blocks/stellarium", "#forge:ingots/stellarium", "#forge:nuggets/stellarium", "#forge:plates/stellarium", "#forge:gears/stellarium",
    "netherite_upgrade_smithing_template"])

/*
    // Make metallic items magnetic
    e.add("alexscaves:ferromagnetic_items", 
    ["#revolution:recyclable/metallic", "#revolution:recyclable/dense_metallic"])
*/

    //// Gem ////
    e.add("revolution:recyclable/gem", ["#forge:plates/emerald", "#forge:plates/diamond", "#forge:gears/emerald", "#forge:gears/diamond", "enchanting_table", "diamond_horse_armor"])


    //// Organic ////
    e.add("revolution:recyclable/organic", ["#minecraft:logs", "#minecraft:planks", "#forge:chests/wooden", "#forge:books", "#revolution:bowls",

    "#blueprint:wooden_ladders",

    "fishing_rod",

    "armor_stand", "crafting_table", "lectern", "smithing_table", "campfire", "soul_campfire", "painting", "scaffolding", "target", "barrel", "composter", "cartography_table", "fletching_table", "grindstone", "torch", "soul_torch"
    ])

    e.add("revolution:recyclable/biomass", ["#minecraft:saplings", "#minecraft:leaves", "#minecraft:signs", "#minecraft:hanging_signs",
    "#forge:crops", "#forge:mushrooms", "#revolution:cacti", "#revolution:cave_plants",

    "bamboo", "big_dripleaf", "small_dripleaf", "kelp", "lily_pad", "moss_block", "moss_carpet", "melon", "melon_slice", "pumpkin", "carved_pumpkin", "jack_o_lantern", "sea_pickle", "stick", "sugar_cane", "vine",

    "alexscaves:archaic_vine", "alexscaves:licoroot_vine",

    "biomesoplenty:willow_vine",

    "ecologics:surface_moss",

    "yungscavebiomes:prickly_vines"
    ])

    // For items that use both mob drops and organic matter
    e.add("revolution:recyclable/organic_life", ["#minecraft:beds", "#blueprint:wooden_beehives", "loom", "name_tag"])

    //// Living ////
    e.add("revolution:recyclable/living", ["#minecraft:wool", "#minecraft:wool_carpets", "#minecraft:banners", 
    "#forge:foods/meat/raw", "#forge:foods/meat/cooked", "#forge:foods/fish/raw", "#forge:foods/fish/cooked", "#forge:heads",
    "#upgrade_aquatic:bedrolls",

    "fermented_spider_eye", "bundle", "conduit", "item_frame", "glowing_item_frame", "lead", "trident", "leather_horse_armor"])

    //// Hellish ////
    e.add("revolution:recyclable/hellish", ["beacon", "daylight_detector", "respawn_anchor"])

    //// Enderic ////
    e.add("revolution:recyclable/enderic", ["#revolution:shulker_boxes",
    "dragon_egg", "ender_chest", "end_crystal", "end_rod"])

    // Unify the last few items & tags so i can get this damn update out already ffs
    e.add("revolution:recyclable", 
    ["tnt", "#minecraft:terracotta", "#revolution:glazed_terracotta", "#revolution:recyclable/organic", "#revolution:recyclable/organic_life", "#revolution:recyclable/living", "#revolution:recyclable/hellish", "#revolution:recyclable/enderic"])

})



// Adds recipes for recycling 4.0
// This version uses Congealed Matter + a few other items because i'm lazy lol
ServerEvents.recipes(e => {

    // Removals
    // Found this in the 1.21 direwolf20 pack, so let's hope it works here lol
    // Bit annoying how you have to write it backwards, though...
    const recipes_to_remove = [
        "minecraft:iron_nugget_from_smelting",
        "minecraft:iron_nugget_from_blasting",
        "minecraft:gold_nugget_from_smelting",
        "minecraft:gold_nugget_from_blasting",
        "enderio:smelting/minecraft/iron_nugget_from_smelting",
        "enderio:smelting/minecraft/gold_nugget_from_smelting"
    ]

    recipes_to_remove.forEach(recipe => {
        e.remove({id: recipe})
    });

    //// Powdered Stone
    // Cobblestone
    // Takes twice as much Powdered Stone as the Assembler recipe
    e.shaped(
        "cobblestone",
        [
          "SSS",
          "SGS",
          "SSS"
        ],
        {
          G: "kubejs:glue",
          S: "kubejs:powdered_stone"
        }
    ).id("kubejs:cobblestone")



    //// Congealed Matter

    // Sawdust
    // Might add tags to both or something instead. I dunno yet.
    e.shapeless("thermal:sawdust", ["kubejs:congealed_matter"]).id("kubejs:sawdust")

    // Organic Refuse
    e.shaped(
        "kubejs:organic_refuse",
        [
          "SSS",
          "MMM",
          "SSS",
        ],
        {
          M: "kubejs:congealed_matter",
          S: "#forge:seeds"
        }
    ).id("kubejs:organic_refuse")
/*
    // Slimeball
    e.shaped(
        "2x slime_ball",
        [
          " O ",
          "OMO",
          " O "
        ],
        {
          O: "kubejs:organic_refuse",
          M: "kubejs:congealed_matter"
        }
    ).id("kubejs:organic_to_slimeball")
*/
    // Parchment
    e.shaped(
        "kubejs:parchment",
        [
          "MMM"
        ],
        {
          M: "kubejs:congealed_matter"
        }
    ).id("kubejs:parchment")

})