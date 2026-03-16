// Adds custom items
StartupEvents.registry("item", e => {

    // Research system
    // Planned to be a more refined version of the one Capitalia had
    // I wish research table mods existed on this version :'c
    e.create("research_catalyst")
    e.create("research_point")

    e.create("data_stone_broken").displayName("Broken Stone Data Chunk")
    e.create("data_stone").tag("reminted:basic_data").displayName("Stone Data Chunk")
    e.create("data_bronze").tag("reminted:basic_data").displayName("Bronze Data Plate")
    e.create("data_iron").displayName("Iron Data Disc")
    e.create("data_industrial").displayName("Industrial Data Chip")
    e.create("data_information").displayName("Information Data Disk")
    e.create("data_atomic").displayName("Atomic Data Model")

    // Prestige system
    // I need to improve it in Inward Expansion as well... and make it useful here lol
    e.create("prestige_pittance").tag("forestry:backpack/allow/adventurer")
    e.create("prestige_chit").tag("forestry:backpack/allow/adventurer")
    e.create("prestige_scrip").tag("forestry:backpack/allow/adventurer")

    // Loyalty points    
    e.create("loyalty_point").tag("forestry:backpack/allow/adventurer")
    e.create("loyalty_point_counterfeit").displayName("Loyalty Point?").tag("forestry:backpack/allow/adventurer")

    // Leather variants
    // Imported from Inward Expansion
    e.create("pig_hide").tag("forge:leather")
    e.create("sheepskin").tag("forge:leather")

    // Recycling 4.0
    e.create("biomass").tag("reminted:researchable/clump")
    e.create("meaty_clump").tag("reminted:researchable/clump")
    e.create("scrap")
    e.create("scrap_dense").displayName("Dense Scrap") // This is from Recycling 3.1
    e.create("congealed_matter") // This is from Recycling 4.0. Figured I'd give it a test drive.
    e.create("disc_residue")
    e.create("powdered_stone")
    e.create("shredded_hide")

    // Sawdust    
    e.create("parchment").tag("forge:paper")
    e.create("sawdust_clump")
    e.create("compressed_sawdust")
    e.create("mdf").displayName("MDF Board").tag("minecraft:planks")

    // Mob drop cores
    e.create("animal_core")
    e.create("arthropod_core")
    e.create("illager_core")
    e.create("undead_core")

    // Misc
    e.create("quicklime").tag("reminted:cleaning_agent")
    e.create("glue").tag("reminted:adhesive")
    e.create("glue_residue")
    e.create("empty_vial")
    e.create("lubricant").tag("reminted:automation_agent").tag("forestry:backpack/allow/adventurer")
    e.create("rose_gold_template").tag("reminted:shreddable").tag("forestry:backpack/allow/adventurer")
    e.create("golden_trophy")
    e.create("platinum_trophy")

    e.create("lubricating_elixir")

    e.create("recycling_icon")
    e.create("slot_machine")

})