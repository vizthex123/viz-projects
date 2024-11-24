// Adds tags to items
// Exclusively used for recycling & melting recipes (to avoid spamming the main script)
onEvent("item.tags", e => {

    //// Coinification
    e.add("quintessence:scepters", ["twilightforest:twilight_scepter", "twilightforest:lifedrain_scepter", "twilightforest:zombie_scepter", "twilightforest:fortification_scepter"])
    e.add("quintessence:snow_queen_bows", ["twilightforest:seeker_bow", "twilightforest:triple_bow"])

    // Spellstones
    e.add("quintessence:spellstones", ["enigmaticlegacy:angel_blessing", "enigmaticlegacy:enigmatic_item", "enigmaticlegacy:eye_of_nebula", "enigmaticlegacy:golem_heart", "enigmaticlegacy:magma_heart", "enigmaticlegacy:ocean_stone", "enigmaticlegacy:void_pearl"])

    // Used for tooltips (and JEI filtering)
    e.add("quintessence:coinable", ["#quintessence:scepters", "#quintessence:snow_queen_bows", "#quintessence:spellstones", "conjurer_illager:throwable_ball", "conjurer_illager:throwing_card"])





    //// Shredding

    // Arrows
    e.add("quintessence:arrows", ["#minecraft:arrows"])
    e.remove("quintessence:arrows", ["spectral_arrow", "apotheosis:broadhead_arrow", "apotheosis:explosive_arrow", "apotheosis:obsidian_arrow", "apotheosis:iron_mining_arrow", "apotheosis:diamond_mining_arrow"])

    /* can't get this working, oof
    Ingredient.of("#minecraft:arrows").itemIds.forEach(id => {
        if(id != "minecraft:spectral_arrow" && id != "apotheosis:broadhead_arrow" && id != "apotheosis:explosive_arrow" && id != "apotheosis:obsidian_arrow" && id != "apotheosis:iron_mining_arrow" && id != "apotheosis:diamond_mining_arrow")
        e.add("quintessence:arrows", id)
    })
    */

    // Books
    e.add("quintessence:books", ["book", "writable_book", "written_book"])

    // Hats
    e.add("quintessence:hats", ["conjurer_illager:conjurer_hat", "quark:forgotten_hat", "reliquary:witch_hat"])

    // Maps
    e.add("quintessence:maps", ["map", "filled_map", "twilightforest:magic_map", "twilightforest:filled_magic_map", "twilightforest:maze_map", "twilightforest:filled_maze_map"])
    e.add("quintessence:maps/ore", ["twilightforest:ore_map", "twilightforest:filled_ore_map"])

    // Trading Terminals
    e.add("quintessence:trading_terminal", ["lightmanscurrency:terminal", "lightmanscurrency:portable_terminal"])
    e.add("quintessence:gem_trading_terminal", ["lightmanscurrency:gem_terminal", "lightmanscurrency:portable_gem_terminal"])



    //// Melting only
    /// Imported from my mod compat datapack

    // Auction Stands
    // Used for recycling and melting recipes
    e.add("quintessence:auction_stands", ["lightmanscurrency:auction_stand_acacia", "lightmanscurrency:auction_stand_birch", "lightmanscurrency:auction_stand_crimson", "lightmanscurrency:auction_stand_dark_oak", "lightmanscurrency:auction_stand_jungle", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_oak", "lightmanscurrency:auction_stand_spruce", "lightmanscurrency:auction_stand_warped",

    "lightmanscurrency:auction_stand_byg_aspen", "lightmanscurrency:auction_stand_byg_baobab", "lightmanscurrency:auction_stand_byg_blue_enchanted", "lightmanscurrency:auction_stand_byg_green_enchanted", "lightmanscurrency:auction_stand_byg_bulbis", "lightmanscurrency:auction_stand_byg_cherry", "lightmanscurrency:auction_stand_byg_cika", "lightmanscurrency:auction_stand_byg_cypress", "lightmanscurrency:auction_stand_byg_ebony", "lightmanscurrency:auction_stand_byg_embur", "lightmanscurrency:auction_stand_byg_ether", "lightmanscurrency:auction_stand_byg_fir", "lightmanscurrency:auction_stand_byg_fungal_imparius", "lightmanscurrency:auction_stand_byg_holly", "lightmanscurrency:auction_stand_byg_imbued_nightshade", "lightmanscurrency:auction_stand_byg_imparius", "lightmanscurrency:auction_stand_byg_jacaranda", "lightmanscurrency:auction_stand_byg_lament", "lightmanscurrency:auction_stand_byg_mahogany", "lightmanscurrency:auction_stand_byg_mangrove", "lightmanscurrency:auction_stand_byg_maple", "lightmanscurrency:auction_stand_byg_nightshade", "lightmanscurrency:auction_stand_byg_palm", "lightmanscurrency:auction_stand_byg_palo_verde", "lightmanscurrency:auction_stand_byg_pine", "lightmanscurrency:auction_stand_byg_rainbow_eucalyptus", "lightmanscurrency:auction_stand_byg_redwood", "lightmanscurrency:auction_stand_byg_skyris", "lightmanscurrency:auction_stand_byg_sythian", "lightmanscurrency:auction_stand_byg_willow", "lightmanscurrency:auction_stand_byg_witch_hazel", "lightmanscurrency:auction_stand_byg_withering_oak", "lightmanscurrency:auction_stand_byg_zelkova"])

    // Cage Lamps
    e.add("quintessence:cage_lamps/brass", ["createdeco:blue_brass_lamp", "createdeco:green_brass_lamp", "createdeco:red_brass_lamp", "createdeco:yellow_brass_lamp"])
    e.add("quintessence:cage_lamps/copper", ["createdeco:blue_copper_lamp", "createdeco:green_copper_lamp", "createdeco:red_copper_lamp", "createdeco:yellow_copper_lamp"])
    e.add("quintessence:cage_lamps/gold", ["createdeco:blue_gold_lamp", "createdeco:green_gold_lamp", "createdeco:red_gold_lamp", "createdeco:yellow_gold_lamp"])
	e.add("quintessence:cage_lamps/iron", ["createdeco:blue_iron_lamp", "createdeco:green_iron_lamp", "createdeco:red_iron_lamp", "createdeco:yellow_iron_lamp"])
	e.add("quintessence:cage_lamps/cast_iron", ["createdeco:blue_cast_iron_lamp", "createdeco:green_cast_iron_lamp", "createdeco:red_cast_iron_lamp", "createdeco:yellow_cast_iron_lamp"])
	e.add("quintessence:cage_lamps/netherite", ["createdeco:blue_netherite_lamp", "createdeco:green_netherite_lamp", "createdeco:red_netherite_lamp", "createdeco:yellow_netherite_lamp"])
	e.add("quintessence:cage_lamps/zinc", ["createdeco:blue_zinc_lamp", "createdeco:green_zinc_lamp", "createdeco:red_zinc_lamp", "createdeco:yellow_zinc_lamp"])

    // Connectors
	e.add("quintessence:connectors", ["xnet:connector_blue", "xnet:connector_green", "xnet:connector_yellow", "xnet:connector_red"])

    // Decals
	e.add("quintessence:decals", ["createdeco:white_decal",	"createdeco:orange_decal",	"createdeco:magenta_decal", "createdeco:light_blue_decal", "createdeco:yellow_decal", "createdeco:lime_decal", "createdeco:pink_decal", "createdeco:gray_decal", "createdeco:light_gray_decal",	"createdeco:cyan_decal", "createdeco:purple_decal", "createdeco:blue_decal", "createdeco:brown_decal", "createdeco:green_decal", "createdeco:red_decal", "createdeco:black_decal"])

    // Framed Glass & Panes
	e.add("quintessence:framed_glass", ["quark:framed_glass", "quark:white_framed_glass", "quark:orange_framed_glass", "quark:magenta_framed_glass", "quark:light_blue_framed_glass", "quark:yellow_framed_glass", "quark:lime_framed_glass", "quark:pink_framed_glass", "quark:gray_framed_glass",	"quark:light_gray_framed_glass", "quark:cyan_framed_glass", "quark:purple_framed_glass", "quark:blue_framed_glass", "quark:brown_framed_glass", "quark:green_framed_glass", "quark:red_framed_glass", "quark:black_framed_glass"])

	e.add("quintessence:framed_glass_panes", ["quark:framed_glass_pane", "quark:white_framed_glass_pane", "quark:orange_framed_glass_pane", "quark:magenta_framed_glass_pane", "quark:light_blue_framed_glass_pane", "quark:yellow_framed_glass_pane", "quark:lime_framed_glass_pane", "quark:pink_framed_glass_pane", "quark:gray_framed_glass_pane",	"quark:light_gray_framed_glass_pane", "quark:cyan_framed_glass_pane", "quark:purple_framed_glass_pane", "quark:blue_framed_glass_pane", "quark:brown_framed_glass_pane", "quark:green_framed_glass_pane", "quark:red_framed_glass_pane", "quark:black_framed_glass"])

    // Tablets
    e.add("quintessence:tablets", ["rftoolsbase:tablet", "rftoolsbase:tablet_filled"])

    // Trading Core Only
	e.add("quintessence:trading_core_only", ["#lightmanscurrency:traders/card_display", "#lightmanscurrency:traders/shelf", "#lightmanscurrency:traders/shelf_2x2", "#lightmanscurrency:traders/special/bookshelf"])

    // Windows & Panes
    e.add("quintessence:windows", ["create:oak_window", "create:spruce_window", "create:birch_window", "create:jungle_window", "create:acacia_window", "create:dark_oak_window", "create:crimson_window", "create:warped_window"])

    e.add("quintessence:window_panes", ["create:tiled_glass_pane", "create:framed_glass_pane", "create:horizontal_framed_glass_pane", "create:vertical_framed_glass_pane",
    "create:oak_window_pane", "create:spruce_window_pane", "create:birch_window_pane", "create:jungle_window_pane", "create:acacia_window_pane", "create:dark_oak_window_pane", "create:crimson_window_pane", "create:warped_window_pane"])

})