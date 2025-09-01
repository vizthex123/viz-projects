// Adds custom items
StartupEvents.registry("item", e => {

    // Research system
    // Planned to be a more refined version of the one Capitalia had
    // I wish research table mods existed on this version :'c
    e.create("research_catalyst")
    e.create("research_point")

    e.create("data_stone_broken").displayName("Broken Stone Data Chunk")
    e.create("data_stone").displayName("Stone Data Chunk")
    e.create("data_bronze").displayName("Bronze Data Plate")
    e.create("data_iron").displayName("Iron Data Disc")
    e.create("data_industrial").displayName("Industrial Data Chip")
    e.create("data_information").displayName("Information Data Pad")
    e.create("data_atomic").displayName("Atomic Data Model")

    // Prestige system
    // I need to improve it in Inward Expansion as well... and make it useful here lol
    e.create("prestige_pittance")
    e.create("prestige_chit")
    e.create("prestige_scrip")

    // Loyalty points    
    e.create("loyalty_point")
    e.create("loyalty_point_counterfeit").displayName("Loyalty Point?")

    // Leather variants
    // Imported from Inward Expansion
    e.create("pig_hide").tag("forge:leather")
    e.create("sheepskin").tag("forge:leather")

    // Recycling 3.0
    e.create("biomass").tag("reminted:researchable/clump")
    e.create("meaty_clump").tag("reminted:researchable/clump")
    e.create("scrap").tag("reminted:scrap")
    e.create("scrap_dense").displayName("Dense Scrap") // This is from Recycling 3.1
    e.create("congealed_matter").tag("reminted:scrap") // This is from Recycling 4.0. Figured I'd give it a test drive.
    e.create("disc_residue")
    e.create("powdered_stone")

    // Misc
    e.create("glue").tag("reminted:adhesive")
    e.create("glue_residue")
    e.create("empty_vial")
    e.create("lubricating_elixir").tag("reminted:automation_agent")
    e.create("rose_gold_template").tag("forestry:backpack/allow/adventurer")
    e.create("slot_machine")
    e.create("golden_trophy")
    e.create("platinum_trophy")

})