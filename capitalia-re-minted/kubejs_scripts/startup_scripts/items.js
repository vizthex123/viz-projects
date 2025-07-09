// Adds custom items
StartupEvents.registry("item", e => {

    // Research system
    // Planned to be a more refined version of the one Capitalia had
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

    // Leather variants
    // Imported from Inward Expansion
    e.create("pig_hide").tag("forge:leather")
    e.create("sheepskin").tag("forge:leather")

    // Misc
    e.create("powdered_stone")
    e.create("scrap")
    e.create("scrap_dense").displayName("Dense Scrap")
    e.create("empty_vial")
    e.create("lubricating_elixir").tag("reminted:automation_agent")
    e.create("loyalty_point")
    e.create("loyalty_point_counterfeit").displayName("Loyalty Point?")
    e.create("slot_machine")
    e.create("golden_trophy")
    e.create("platinum_trophy")

})