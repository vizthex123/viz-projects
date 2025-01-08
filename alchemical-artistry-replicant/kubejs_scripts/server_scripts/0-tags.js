// Adds tags to items
ServerEvents.tags("item", e => {

    // Removals
    e.remove("quark:stone_tool_materials", ["flint", "infested_stone", "infested_cobblestone", "infested_deepslate"])
    /*
    e.removeAll("cavesanddepths:glittering_fungus")
    e.removeAll("cavesanddepths:lichenfungusplaceable")
    */

    // Custom
    e.add("modpack:bowls", ["bowl", "ecologics:coconut_husk"])
    e.add("modpack:chalk_blocks", ["cavesanddepths:chalkstone", "regions_unexplored:chalk"])
    e.add("modpack:furnace", ["furnace", "quark:blackstone_furnace", "quark:deepslate_furnace"])
    e.add("modpack:furnace_stones", ["cobblestone", "mossy_cobblestone", "tuff"]) //"ad_astra:glacio_cobblestone", "ad_astra:mars_cobblestone", "ad_astra:mercury_cobblestone", "ad_astra:moon_cobblestone", "ad_astra:venus_cobblestone", "cavesanddepths:cobbled_slate", "cavesanddepths:mossy_cobblestone", "cavesanddepths:mossy_cobbled_deepslate", "upgrade_aquatic:kelpy_cobblestone"])
    /*
    e.add("modpack:pink_salt_blocks", ["galosphere:pink_salt", "galosphere:pastel_pink_salt", "galosphere:rose_pink_salt"])
    e.add("modpack:vines", ["vine", "weeping_vines", "twisting_vines", "alexscaves:archaic_vine", "outer_end:azure_vines", "regions_unexplored:kapok_vines"])
    //e.add("modpack:xychorized_crying_obsidian", ["xycraft_override:crying_obsidian_blue", "xycraft_override:crying_obsidian_green", "xycraft_override:crying_obsidian_red", "xycraft_override:crying_obsidian_dark", "xycraft_override:crying_obsidian_light"])
    */


    // Forge tags
    e.add("forge:eggs", ["#minecraft:eggs", "turtle_egg", "sniffer_egg", "enderzoology:owl_egg", "quark:egg_parrot_blue", "quark:egg_parrot_green", "quark:egg_parrot_grey", "quark:egg_parrot_red_blue", "quark:egg_parrot_yellow_blue"])
    e.add("forge:slimeballs", ["thermal:tar", "thermal:rosin", "thermal_extra:sticky_ball"])

    e.add("forge:nuggets/coal", ["minicoal:mini_coal", "minicoal:mini_charcoal"])

    e.add("forge:storage_blocks/raw_copper", ["quark:raw_copper_bricks"])
    e.add("forge:storage_blocks/raw_iron", ["quark:raw_iron_bricks"])
    e.add("forge:storage_blocks/raw_gold", ["quark:raw_gold_bricks"])

    e.add("forge:rods", ["cb_microblock:stone_rod"])
    e.add("forge:rods/wooden", ["cb_microblock:stone_rod"])


    // Mod tags
    e.add("ae2:all_quartz_dust", ["#forge:dusts/quartz"])

    // Fixes
    e.add("forge:ores", ["bloodmagic:dungeon_ore", "replication:deepslate_replica_ore"])

    // Removals
    e.remove("quark:stone_tool_materials", ["flint", "infested_stone", "infested_cobblestone", "infested_deepslate"])

})