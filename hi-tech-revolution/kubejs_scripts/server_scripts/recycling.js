// Tags items for recycling
ServerEvents.tags("item", e => {

    // crops + saplings etc. -> biomass (4:1 ratio)
    // logs are gonna be separate since they've got more biomass
    // nether biomass has its own recipe with a 4:1 ratio (gives 1 organic and 1 hellish)

    /* Matter types:

    Organic
    Living
    Earthen
    Rocky
    Metallic
    Crystalline
    Hellish
    Enderic
    */

    //// Scrap yields are based on material content, similar to my scrap system
    /// Unlike that system though, the majority rules to simplify recipes and development
    /// Equal ratios just give both types (or more, if needed)
    /// Each recipe gives 3 of the item (hybrids give 2 of each)

    /// Item recipes use 2,000 RF and take 5 seconds
    /// Tagged recipes use 4,000 RF and take 10 seconds

    // Reassembler recipes use 4,000 RF and take 10 seconds
    // Might make it scale based on item type later

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

    "quark:moss_paste",

    "yungscavebiomes:prickly_vines"
    ])


    // For items that use both mob drops and organic matter
    e.add("revolution:recyclable/organic_life", ["#minecraft:beds", "#blueprint:wooden_beehives", "loom", "name_tag"])

    // For items that use both organic and metallic matter
    //e.add("revolution:recyclable/organic_metal", [])





    //// Living ////
    e.add("revolution:recyclable/living", ["#minecraft:wool", "#minecraft:wool_carpets", "#minecraft:banners", 
    "#forge:foods/meat/raw", "#forge:foods/meat/cooked", "#forge:foods/fish/raw", "#forge:foods/fish/cooked", "#forge:heads",
    "#upgrade_aquatic:bedrolls",

    "fermented_spider_eye", "bundle", "conduit", "item_frame", "glowing_item_frame", "lead", "trident", "leather_horse_armor"
    ])

    //// Rocky ////
    e.add("revolution:recyclable/rocky", ["#revolution:furnaces",
    "#alexscaves:concrete",

    "smoker", "stonecutter", "piston", "sticky_piston", "prismarine", "dark_prismarine", "sea_lantern", "repeater", "comparator", "dispenser", "dropper", "observer", "lever",

    "cb_microblock:stone_rod"])


    // For items that use stone and metallic items
    e.add("revolution:recyclable/rocky_metal", ["blast_furnace"])

    // For items that use both stone and nether materials
    // e.add("revolution:recyclable/rocky_hell", [])



    //// Earthen ////
    e.add("revolution:recyclable/earthen", ["#minecraft:terracotta", "#revolution:glazed_terracotta"])

    // For items that use mob drops and earth-like (dirt, sand, etc.) materials
    e.add("revolution:recyclable/earthen_life", ["tnt"])

    // For items that use mob drops and earth-like (dirt, sand, etc.) materials
    e.add("revolution:recyclable/earthen_metal", ["#forge:nuggets/stellarium", "#forge:ingots/stellarium", "#forge:storage_blocks/stellarium", "#forge:gears/stellarium", "#forge:plates/stellarium", "#forge:coins/stellarium"])





    //// Metallic ////
    // Enchanted Golden Apples have their own recipe due to their rarity
    e.add("revolution:recyclable/metallic", ["#forge:plates/copper", "#forge:plates/iron", "#forge:plates/gold", "#forge:plates/netherite", "#forge:plates/steel", "#forge:plates/tin", "#forge:plates/lead", "#forge:plates/silver", "#forge:plates/nickel", "#forge:plates/bronze", "#forge:plates/constantan", "#forge:plates/invar", "#forge:plates/electrum", "#forge:plates/signalum", "#forge:plates/lumium", "#forge:plates/enderium", "#forge:plates/rose_gold", "#forge:plates/brass", "#forge:plates/zinc",

    "#forge:gears/copper", "#forge:gears/iron", "#forge:gears/gold", "#forge:gears/netherite", "#forge:gears/steel", "#forge:gears/tin", "#forge:gears/lead", "#forge:gears/silver", "#forge:gears/nickel", "#forge:gears/bronze", "#forge:gears/constantan", "#forge:gears/invar", "#forge:gears/electrum", "#forge:gears/signalum", "#forge:gears/lumium", "#forge:gears/enderium", "#forge:gears/rose_gold", "#forge:gears/brass", "#forge:gears/zinc", "#forge:gears/dark_steel", "#forge:gears/energized",

    "bucket", "brush", "lightning_rod", "spyglass", "iron_horse_armor", "golden_horse_armor", "hopper", "bell", "lantern", "soul_lantern", "tripwire_hook", "rail", "activator_rail", "detector_rail", "powered_rail", "clock", "compass", "recovery_compass", "golden_apple", "golden_carrot",

    "alexscaves:copper_valve",

    "functionalstorage:copper_upgrade",

    "galosphere:chandelier", "galosphere:golden_lichen_cordyceps", "galosphere:glow_flare",

    "merequester:requester",

    "mffs:battery",

    "prettypipes:pipe",

    "projectred_core:copper_coil",

    "projectred_expansion:battery",

    "quark:pipe", "quark:encased_pipe",

    "railcraft:charge_meter",

    "#thermal:devices", "#thermal:machines", "thermal:potion_infuser", "thermal:potion_quiver", "thermal:fluid_reservoir", "thermal:fluid_cell_frame", "thermal:fluid_cell", "thermal:saw_blade", "thermal:watering_can", "thermal:drill_head", "thermal:potion_duration_augment", "thermal:potion_amplifier_augment",

    "thermalendergy:endergy_upgrade_1", "thermalendergy:endergy_upgrade_2", "thermalendergy:endergy_upgrade_3",

    "#systeams:boilers",

    "wa_ender_quarry:blank_module", "wa_ender_quarry:module_fortune_1",

    "xycraft_world:copper_torch"])

//, "thermal:", "thermal:", "thermal:", "thermal:", "thermal:", "thermal:", "thermal:", "thermal:", "thermal:", "thermal:",

    // Metallic Ender
    e.add("revolution:recyclable/metallic_ender", ["#forge:gears/vibrant"])

    //// Crystalline ////
    e.add("revolution:recyclable/crystalline", ["#forge:plates/emerald", "enchanting_table", "diamond_horse_armor"])



    //// Hellish ////
    e.add("revolution:recyclable/hellish", ["beacon", "daylight_detector", "respawn_anchor"])



    //// Enderic ////
    e.add("revolution:recyclable/enderic", ["#revolution:shulker_boxes",
    "dragon_egg", "ender_chest", "end_crystal", "end_rod"])


    // Make metallic items magnetic
    e.add("alexscaves:ferromagnetic_items", 
    ["#revolution:recyclable/metallic", "#revolution:recyclable/metallic_ender", "#revolution:recyclable/organic_metal", "#revolution:recyclable/rocky_metal"])

})



// Adds recipes for recycling 3.0
// This version uses generic scrap types (e.g. all metal is now a scrap heap instead of each type of metal), and supports vastly more items due to it
ServerEvents.recipes(e => {

    //// Organic
    // Sawdust
    // Might add tags to both or something instead. I dunno yet.
    e.shapeless("thermal:sawdust", ["kubejs:organic_refuse"]).id("kubejs:organic_to_sawdust")

    // Parchment
    e.shaped(
        "3x kubejs:parchment",
        [
          "OOO"
        ],
        {
          O: "kubejs:organic_refuse"
        }
    ).id("kubejs:parchment")

    // Slimeball
    // Uses Organic instead of the machines' combo of both, but technically requires a Slimeball to craft
    e.shaped(
        "2x slime_ball",
        [
          " O ",
          "OGO",
          " O "
        ],
        {
          G: "kubejs:glue",
          O: "kubejs:organic_refuse"
        }
    ).id("kubejs:organic_to_slimeball")

})