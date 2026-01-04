// Changes things from Storage Drawers and fixes a few issues with the Extras add-on
ServerEvents.recipes(e => {

    // Make Compacting Drawers use the Stone tag
    e.remove({id: "storagedrawers:compacting_drawers_2"})
    e.remove({id: "storagedrawers:compacting_drawers_3"})

    // Full drawers
    e.shaped(
      "storagedrawers:compacting_drawers_3",
        [
          "SSS",
          "PDP",
          "SIS"
        ],
        {
          D: "#storagedrawers:full_drawers",
          I: "iron_ingot",
          P: "piston",
          S: "#forge:stone"
        }
    ).id("kubejs:compacting_drawer")

    e.shaped(
      "storagedrawers:compacting_drawers_2",
        [
          "PSP",
          "SDS",
          "SIS"
        ],
        {
          D: "#storagedrawers:full_drawers",
          I: "iron_ingot",
          P: "piston",
          S: "#forge:stone"
        }
    ).id("kubejs:simple_compacting_drawer")

    // Half drawer
    e.shaped(
      "storagedrawers:compacting_half_drawers_3",
        [
          "SSS",
          "PDP",
          "SIS"
        ],
        {
          D: "#storagedrawers:half_drawers",
          I: "iron_ingot",
          P: "piston",
          S: "#forge:stone"
        }
    ).id("kubejs:half_compacting_drawer")

    e.shaped(
      "storagedrawers:compacting_half_drawers_2",
        [
          "PSP",
          "SDS",
          "SIS"
        ],
        {
          D: "#storagedrawers:half_drawers",
          I: "iron_ingot",
          P: "piston",
          S: "#forge:stone"
        }
    ).id("kubejs:simple_half_compacting_drawer")

})



ServerEvents.tags("item", e => {

    //// Fix Storage Drawers Extras' missing tags
    /// I really hate how many devs overlook this, man...
    // 1x1
    e.add("storagedrawers:full_drawers", ["storagedrawersextra:biomesoplenty_fir_full_drawers_1", "storagedrawersextra:biomesoplenty_redwood_full_drawers_1", "storagedrawersextra:biomesoplenty_mahogany_full_drawers_1", "storagedrawersextra:biomesoplenty_jacaranda_full_drawers_1", "storagedrawersextra:biomesoplenty_palm_full_drawers_1", "storagedrawersextra:biomesoplenty_willow_full_drawers_1", "storagedrawersextra:biomesoplenty_dead_full_drawers_1", "storagedrawersextra:biomesoplenty_magic_full_drawers_1", "storagedrawersextra:biomesoplenty_umbran_full_drawers_1", "storagedrawersextra:biomesoplenty_hellbark_full_drawers_1"])

    e.add("storagedrawers:half_drawers", ["storagedrawersextra:biomesoplenty_fir_half_drawers_1", "storagedrawersextra:biomesoplenty_redwood_half_drawers_1", "storagedrawersextra:biomesoplenty_mahogany_half_drawers_1", "storagedrawersextra:biomesoplenty_jacaranda_half_drawers_1", "storagedrawersextra:biomesoplenty_palm_half_drawers_1", "storagedrawersextra:biomesoplenty_willow_half_drawers_1", "storagedrawersextra:biomesoplenty_dead_half_drawers_1", "storagedrawersextra:biomesoplenty_magic_half_drawers_1", "storagedrawersextra:biomesoplenty_umbran_half_drawers_1", "storagedrawersextra:biomesoplenty_hellbark_half_drawers_1"])

    // 1x2
    e.add("storagedrawers:full_drawers", ["storagedrawersextra:biomesoplenty_fir_full_drawers_2", "storagedrawersextra:biomesoplenty_redwood_full_drawers_2", "storagedrawersextra:biomesoplenty_mahogany_full_drawers_2", "storagedrawersextra:biomesoplenty_jacaranda_full_drawers_2", "storagedrawersextra:biomesoplenty_palm_full_drawers_2", "storagedrawersextra:biomesoplenty_willow_full_drawers_2", "storagedrawersextra:biomesoplenty_dead_full_drawers_2", "storagedrawersextra:biomesoplenty_magic_full_drawers_2", "storagedrawersextra:biomesoplenty_umbran_full_drawers_2", "storagedrawersextra:biomesoplenty_hellbark_full_drawers_2"])

    e.add("storagedrawers:half_drawers", ["storagedrawersextra:biomesoplenty_fir_half_drawers_2", "storagedrawersextra:biomesoplenty_redwood_half_drawers_2", "storagedrawersextra:biomesoplenty_mahogany_half_drawers_2", "storagedrawersextra:biomesoplenty_jacaranda_half_drawers_2", "storagedrawersextra:biomesoplenty_palm_half_drawers_2", "storagedrawersextra:biomesoplenty_willow_half_drawers_2", "storagedrawersextra:biomesoplenty_dead_half_drawers_2", "storagedrawersextra:biomesoplenty_magic_half_drawers_2", "storagedrawersextra:biomesoplenty_umbran_half_drawers_2", "storagedrawersextra:biomesoplenty_hellbark_half_drawers_2"])

    // 2x2
    e.add("storagedrawers:full_drawers", ["storagedrawersextra:biomesoplenty_fir_full_drawers_4", "storagedrawersextra:biomesoplenty_redwood_full_drawers_4", "storagedrawersextra:biomesoplenty_mahogany_full_drawers_4", "storagedrawersextra:biomesoplenty_jacaranda_full_drawers_4", "storagedrawersextra:biomesoplenty_palm_full_drawers_4", "storagedrawersextra:biomesoplenty_willow_full_drawers_4", "storagedrawersextra:biomesoplenty_dead_full_drawers_4", "storagedrawersextra:biomesoplenty_magic_full_drawers_4", "storagedrawersextra:biomesoplenty_umbran_full_drawers_4", "storagedrawersextra:biomesoplenty_hellbark_full_drawers_4"])

    e.add("storagedrawers:half_drawers", ["storagedrawersextra:biomesoplenty_fir_half_drawers_4", "storagedrawersextra:biomesoplenty_redwood_half_drawers_4", "storagedrawersextra:biomesoplenty_mahogany_half_drawers_4", "storagedrawersextra:biomesoplenty_jacaranda_half_drawers_4", "storagedrawersextra:biomesoplenty_palm_half_drawers_4", "storagedrawersextra:biomesoplenty_willow_half_drawers_4", "storagedrawersextra:biomesoplenty_dead_half_drawers_4", "storagedrawersextra:biomesoplenty_magic_half_drawers_4", "storagedrawersextra:biomesoplenty_umbran_half_drawers_4", "storagedrawersextra:biomesoplenty_hellbark_half_drawers_4"])

    // Trims    
    e.add("storagedrawers:trim", ["storagedrawersextra:biomesoplenty_fir_trim", "storagedrawersextra:biomesoplenty_redwood_trim", "storagedrawersextra:biomesoplenty_mahogany_trim", "storagedrawersextra:biomesoplenty_jacaranda_trim", "storagedrawersextra:biomesoplenty_palm_trim", "storagedrawersextra:biomesoplenty_willow_trim", "storagedrawersextra:biomesoplenty_dead_trim", "storagedrawersextra:biomesoplenty_magic_trim", "storagedrawersextra:biomesoplenty_umbran_trim", "storagedrawersextra:biomesoplenty_hellbark_trim"])

    e.add("minecraft:mineable/axe", ["storagedrawers:full_drawers", "storagedrawers:half_drawers", "storagedrawers:trim"])
 
    // Generic drawer tag for quests & recipes
    e.add("revolution:drawer", ["#storagedrawers:full_drawers", "#storagedrawers:half_drawers"])

})



ServerEvents.tags("block", e => {

    //// Fix Storage Drawers Extras' missing block tags
    /// I really hate how many devs overlook this, man...
    // 1x1
    e.add("storagedrawers:full_drawers", ["storagedrawersextra:biomesoplenty_fir_full_drawers_1", "storagedrawersextra:biomesoplenty_redwood_full_drawers_1", "storagedrawersextra:biomesoplenty_mahogany_full_drawers_1", "storagedrawersextra:biomesoplenty_jacaranda_full_drawers_1", "storagedrawersextra:biomesoplenty_palm_full_drawers_1", "storagedrawersextra:biomesoplenty_willow_full_drawers_1", "storagedrawersextra:biomesoplenty_dead_full_drawers_1", "storagedrawersextra:biomesoplenty_magic_full_drawers_1", "storagedrawersextra:biomesoplenty_umbran_full_drawers_1", "storagedrawersextra:biomesoplenty_hellbark_full_drawers_1"])

    e.add("storagedrawers:half_drawers", ["storagedrawersextra:biomesoplenty_fir_half_drawers_1", "storagedrawersextra:biomesoplenty_redwood_half_drawers_1", "storagedrawersextra:biomesoplenty_mahogany_half_drawers_1", "storagedrawersextra:biomesoplenty_jacaranda_half_drawers_1", "storagedrawersextra:biomesoplenty_palm_half_drawers_1", "storagedrawersextra:biomesoplenty_willow_half_drawers_1", "storagedrawersextra:biomesoplenty_dead_half_drawers_1", "storagedrawersextra:biomesoplenty_magic_half_drawers_1", "storagedrawersextra:biomesoplenty_umbran_half_drawers_1", "storagedrawersextra:biomesoplenty_hellbark_half_drawers_1"])

    // 1x2
    e.add("storagedrawers:full_drawers", ["storagedrawersextra:biomesoplenty_fir_full_drawers_2", "storagedrawersextra:biomesoplenty_redwood_full_drawers_2", "storagedrawersextra:biomesoplenty_mahogany_full_drawers_2", "storagedrawersextra:biomesoplenty_jacaranda_full_drawers_2", "storagedrawersextra:biomesoplenty_palm_full_drawers_2", "storagedrawersextra:biomesoplenty_willow_full_drawers_2", "storagedrawersextra:biomesoplenty_dead_full_drawers_2", "storagedrawersextra:biomesoplenty_magic_full_drawers_2", "storagedrawersextra:biomesoplenty_umbran_full_drawers_2", "storagedrawersextra:biomesoplenty_hellbark_full_drawers_2"])

    e.add("storagedrawers:half_drawers", ["storagedrawersextra:biomesoplenty_fir_half_drawers_2", "storagedrawersextra:biomesoplenty_redwood_half_drawers_2", "storagedrawersextra:biomesoplenty_mahogany_half_drawers_2", "storagedrawersextra:biomesoplenty_jacaranda_half_drawers_2", "storagedrawersextra:biomesoplenty_palm_half_drawers_2", "storagedrawersextra:biomesoplenty_willow_half_drawers_2", "storagedrawersextra:biomesoplenty_dead_half_drawers_2", "storagedrawersextra:biomesoplenty_magic_half_drawers_2", "storagedrawersextra:biomesoplenty_umbran_half_drawers_2", "storagedrawersextra:biomesoplenty_hellbark_half_drawers_2"])

    // 2x2
    e.add("storagedrawers:full_drawers", ["storagedrawersextra:biomesoplenty_fir_full_drawers_4", "storagedrawersextra:biomesoplenty_redwood_full_drawers_4", "storagedrawersextra:biomesoplenty_mahogany_full_drawers_4", "storagedrawersextra:biomesoplenty_jacaranda_full_drawers_4", "storagedrawersextra:biomesoplenty_palm_full_drawers_4", "storagedrawersextra:biomesoplenty_willow_full_drawers_4", "storagedrawersextra:biomesoplenty_dead_full_drawers_4", "storagedrawersextra:biomesoplenty_magic_full_drawers_4", "storagedrawersextra:biomesoplenty_umbran_full_drawers_4", "storagedrawersextra:biomesoplenty_hellbark_full_drawers_4"])

    e.add("storagedrawers:half_drawers", ["storagedrawersextra:biomesoplenty_fir_half_drawers_4", "storagedrawersextra:biomesoplenty_redwood_half_drawers_4", "storagedrawersextra:biomesoplenty_mahogany_half_drawers_4", "storagedrawersextra:biomesoplenty_jacaranda_half_drawers_4", "storagedrawersextra:biomesoplenty_palm_half_drawers_4", "storagedrawersextra:biomesoplenty_willow_half_drawers_4", "storagedrawersextra:biomesoplenty_dead_half_drawers_4", "storagedrawersextra:biomesoplenty_magic_half_drawers_4", "storagedrawersextra:biomesoplenty_umbran_half_drawers_4", "storagedrawersextra:biomesoplenty_hellbark_half_drawers_4"])

    // Trims    
    e.add("storagedrawers:trim", ["storagedrawersextra:biomesoplenty_fir_trim", "storagedrawersextra:biomesoplenty_redwood_trim", "storagedrawersextra:biomesoplenty_mahogany_trim", "storagedrawersextra:biomesoplenty_jacaranda_trim", "storagedrawersextra:biomesoplenty_palm_trim", "storagedrawersextra:biomesoplenty_willow_trim", "storagedrawersextra:biomesoplenty_dead_trim", "storagedrawersextra:biomesoplenty_magic_trim", "storagedrawersextra:biomesoplenty_umbran_trim", "storagedrawersextra:biomesoplenty_hellbark_trim"])

    e.add("minecraft:mineable/axe", ["storagedrawers:full_drawers", "storagedrawers:half_drawers", "storagedrawers:trim"])

})