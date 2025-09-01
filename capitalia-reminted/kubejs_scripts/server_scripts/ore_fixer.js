// Unifies ores smelting recipes
ServerEvents.tags("item", e => {

    // Add Forge tags to ore blocks that don't have them
    // I'm so tired of mod devs constantly forgetting this, man...
    e.add("forge:gems", ["forestry:apatite"])

    e.add("forge:nuggets", ["#forge:nuggets/coal", "#forge:nuggets/charcoal", "rosegoldequipment:rose_gold_nugget"])
    e.add("forge:nuggets/coal", ["minicoal:mini_coal"])
    e.add("forge:nuggets/charcoal", ["minicoal:mini_charcoal"])

    e.add("forge:storage_blocks", ["rosegoldequipment:rose_gold_block"])

    e.add("forge:ingots/rose_gold", ["rosegoldequipment:rose_gold_ingot"])
    e.add("forge:nuggets/rose_gold", ["rosegoldequipment:rose_gold_nugget"])
    e.add("forge:raw_materials/rose_gold", ["rosegoldequipment:raw_rose_gold"])
    e.add("forge:storage_blocks/rose_gold", ["rosegoldequipment:rose_gold_block"])


    // Add a custom tag for use in smelting recipes
    // This is due to TE using the Forge tag, and I don't want to mess up the Raw Ore pulverizer recipes
	e.add("reminted:type/copper", ["#forge:dusts/copper", "#forge:raw_materials/copper", "#forge:ores/copper"])
    e.add("reminted:type/iron", ["#forge:dusts/iron", "#forge:raw_materials/iron", "#forge:ores/iron"])
    e.add("reminted:type/gold", ["#forge:dusts/gold", "#forge:raw_materials/gold", "#forge:ores/gold"])

    e.add("reminted:type/tin", ["#forge:dusts/tin", "#forge:raw_materials/tin", "#forge:ores/tin"])
    e.add("reminted:type/lead", ["#forge:dusts/lead", "#forge:raw_materials/lead", "#forge:ores/lead"])
    e.add("reminted:type/silver", ["#forge:dusts/silver", "#forge:raw_materials/silver", "#forge:ores/silver"])
    e.add("reminted:type/nickel", ["#forge:dusts/nickel", "#forge:raw_materials/nickel", "#forge:ores/nickel"])

    //e.add("reminted:type/osmium", ["#forge:dusts/osmium", "#forge:raw_materials/osmium", "#forge:ores/osmium"])
    e.add("reminted:type/uranium", ["#forge:dusts/uranium", "#forge:raw_materials/uranium", "#forge:ores/uranium"])
    e.add("reminted:type/graphite", ["#forge:dusts/graphite", "#minecraft:coals"])

})


// Unify all the recipes
// Priority: Thermal, Forestry, Bigger Reactors, Project Red, Mekanism
ServerEvents.recipes(e => {

    ///// Fix ores having a bajillion smelting recipes
    ///// XP gain for Dust Smelting is 50% of ore smelting XP

    ///// Vanilla /////
    e.remove({type: "smelting", output: "copper_ingot"})
    e.remove({type: "smelting", output: "iron_ingot"})
    e.remove({type: "smelting", output: "gold_ingot"})
    e.remove({type: "smelting", output: "diamond"})

    e.remove({type: "blasting", output: "copper_ingot"})
    e.remove({type: "blasting", output: "iron_ingot"})
    e.remove({type: "blasting", output: "gold_ingot"})
    e.remove({type: "blasting", output: "diamond"})



    // Copper
    e.smelting("copper_ingot", "#reminted:type/copper", 0.5).id("kubejs:smelt_copper")
    e.blasting("copper_ingot", "#reminted:type/copper", 0.5).id("kubejs:blast_copper")

    // Iron
    e.smelting("iron_ingot", "#reminted:type/iron", 0.7).id("kubejs:smelt_iron")
    e.blasting("iron_ingot", "#reminted:type/iron", 0.7).id("kubejs:blast_iron")

    // Gold
    e.smelting("gold_ingot", "#reminted:type/gold", 1.5).id("kubejs:smelt_gold")
    e.blasting("gold_ingot", "#reminted:type/gold", 1.5).id("kubejs:blast_gold")



    ///// Ores no sane person would smelt but I'll fix them anyway to be consistent
    e.remove({type: "smelting", output: "coal"})
    e.remove({type: "smelting", output: "lapis_lazuli"})
    e.remove({type: "smelting", output: "redstone"})
    e.remove({type: "smelting", output: "diamond"})
    e.remove({type: "smelting", output: "emerald"})
    e.remove({type: "smelting", output: "quartz"})

    e.remove({type: "blasting", output: "coal"})
    e.remove({type: "blasting", output: "lapis_lazuli"})
    e.remove({type: "blasting", output: "redstone"})
    e.remove({type: "blasting", output: "diamond"})
    e.remove({type: "blasting", output: "emerald"})
    e.remove({type: "blasting", output: "quartz"})



    // Coal
    e.smelting("coal", "#forge:ores/coal", 0.25).id("kubejs:smelt_coal")
    e.blasting("coal", "#forge:ores/coal", 0.25).id("kubejs:blast_coal")

    // Lapis
    e.smelting("lapis_lazuli", "#forge:ores/lapis", 0.5).id("kubejs:smelt_lapis")
    e.blasting("lapis_lazuli", "#forge:ores/lapis", 0.5).id("kubejs:blast_lapis")

    // Redstone
    e.smelting("redstone", "#forge:ores/redstone", 1).id("kubejs:smelt_redstone")
    e.blasting("redstone", "#forge:ores/redstone", 1).id("kubejs:blast_redstone")

    // Diamond
    e.smelting("diamond", "#forge:ores/diamond", 2).id("kubejs:smelt_diamond")
    e.blasting("diamond", "#forge:ores/diamond", 2).id("kubejs:blast_diamond")

    // Emerald
    e.smelting("emerald", "#forge:ores/emerald", 2).id("kubejs:smelt_emerald")
    e.blasting("emerald", "#forge:ores/emerald", 2).id("kubejs:blast_emerald")

    // Nether Quartz
    e.smelting("quartz", "#forge:ores/quartz", 1).id("kubejs:smelt_nether_quartz")
    e.blasting("quartz", "#forge:ores/quartz", 1).id("kubejs:blast_nether_quartz")





    ///// Bigger Reactors /////
    e.remove({type: "smelting", output: "biggerreactors:graphite_ingot"})
    e.remove({type: "smelting", output: "biggerreactors:uranium_ingot"})

    e.remove({type: "blasting", output: "biggerreactors:graphite_ingot"})
    e.remove({type: "blasting", output: "biggerreactors:uranium_ingot"})

    // Graphite
    e.smelting("biggerreactors:graphite_ingot", "#reminted:type/graphite", 1).id("kubejs:smelt_graphite")
    e.blasting("biggerreactors:graphite_ingot", "#reminted:type/graphite", 1).id("kubejs:blast_graphite")

    // Uranium
    e.smelting("biggerreactors:uranium_ingot", "#reminted:type/uranium", 4).id("kubejs:smelt_uranium")
    e.blasting("biggerreactors:uranium_ingot", "#reminted:type/uranium", 4).id("kubejs:blast_uranium")





    ///// Forestry /////
    e.remove({type: "smelting", output: "forestry:ingot_tin"})
    e.remove({type: "blasting", output: "forestry:ingot_tin"})

    e.remove({type: "smelting", output: "forestry:apatite"})
    e.remove({type: "blasting", output: "forestry:apatite"})






    ///// Project Red /////
    e.remove({type: "smelting", output: "projectred_exploration:tin_ingot"})
    e.remove({type: "smelting", output: "projectred_exploration:silver_ingot"})

    e.remove({type: "blasting", output: "projectred_exploration:tin_ingot"})
    e.remove({type: "blasting", output: "projectred_exploration:silver_ingot"})

    e.remove({type: "smelting", output: "projectred_core:ruby"})
    e.remove({type: "smelting", output: "projectred_core:peridot"})
    e.remove({type: "smelting", output: "projectred_core:sapphire"})
    
    e.remove({type: "blasting", output: "projectred_core:ruby"})
    e.remove({type: "blasting", output: "projectred_core:peridot"})
    e.remove({type: "blasting", output: "projectred_core:sapphire"})


    // Ruby
    e.smelting("projectred_core:ruby", "#forge:ores/ruby", 1).id("kubejs:smelt_ruby")
    e.blasting("projectred_core:ruby", "#forge:ores/ruby", 1).id("kubejs:blast_ruby")

    // Peridot
    e.smelting("projectred_core:peridot", "#forge:ores/peridot", 1).id("kubejs:smelt_peridot")
    e.blasting("projectred_core:peridot", "#forge:ores/peridot", 1).id("kubejs:blast_peridot")

    // Sapphire
    e.smelting("projectred_core:sapphire", "#forge:ores/sapphire", 1).id("kubejs:smelt_sapphire")
    e.blasting("projectred_core:sapphire", "#forge:ores/sapphire", 1).id("kubejs:blast_sapphire")
/*
    // Silver
    e.smelting("projectred_exploration:silver_ingot", "#reminted:type/silver", 1).id("kubejs:smelt_silver")
    e.blasting("projectred_exploration:silver_ingot", "#reminted:type/silver", 1).id("kubejs:blast_silver")
*/



/*  might add this to the pack later
    ///// Railcraft /////
    e.remove({type: "smelting", output: "railcraft:tin_ingot"})
    e.remove({type: "smelting", output: "railcraft:lead_ingot"})
    e.remove({type: "smelting", output: "railcraft:silver_ingot"})

    e.remove({type: "blasting", output: "railcraft:tin_ingot"})
    e.remove({type: "blasting", output: "railcraft:lead_ingot"})
    e.remove({type: "blasting", output: "railcraft:silver_ingot"})
    e.remove({type: "blasting", output: "railcraft:nickel_ingot"})
    e.remove({type: "blasting", output: "railcraft:zinc_ingot"})

    // Zinc
    e.smelting("railcraft:zinc_ingot", "#reminted:type/zinc", 1).id("kubejs:smelt_zinc")
    e.blasting("railcraft:zinc_ingot", "#reminted:type/zinc", 1).id("kubejs:blast_zinc")
*/




    ///// Thermal Series /////
    e.remove({type: "smelting", output: "thermal:tin_ingot"})
    e.remove({type: "smelting", output: "thermal:lead_ingot"})
    e.remove({type: "smelting", output: "thermal:silver_ingot"})
    e.remove({type: "smelting", output: "thermal:nickel_ingot"})

    e.remove({type: "blasting", output: "thermal:tin_ingot"})
    e.remove({type: "blasting", output: "thermal:lead_ingot"})
    e.remove({type: "blasting", output: "thermal:silver_ingot"})
    e.remove({type: "blasting", output: "thermal:nickel_ingot"})

    e.remove({type: "smelting", output: "thermal:niter"})
    e.remove({type: "smelting", output: "thermal:sulfur"})
    e.remove({type: "smelting", output: "thermal:cinnabar"})

    e.remove({type: "blasting", output: "thermal:niter"})
    e.remove({type: "blasting", output: "thermal:sulfur"})
    e.remove({type: "blasting", output: "thermal:cinnabar"})

    // Tin
    e.smelting("thermal:tin_ingot", "#reminted:type/tin", 1).id("kubejs:smelt_tin")
    e.blasting("thermal:tin_ingot", "#reminted:type/tin", 1).id("kubejs:blast_tin")

    // Lead
    e.smelting("thermal:lead_ingot", "#reminted:type/lead", 2).id("kubejs:smelt_lead")
    e.blasting("thermal:lead_ingot", "#reminted:type/lead", 2).id("kubejs:blast_lead")

    // Silver
    e.smelting("thermal:silver_ingot", "#reminted:type/silver", 2).id("kubejs:smelt_silver")
    e.blasting("thermal:silver_ingot", "#reminted:type/silver", 2).id("kubejs:blast_silver")

    // Nickel
    e.smelting("thermal:nickel_ingot", "#reminted:type/nickel", 2).id("kubejs:smelt_nickel")
    e.blasting("thermal:nickel_ingot", "#reminted:type/nickel", 2).id("kubejs:blast_nickel")

    // Sulfur
    e.smelting("thermal:sulfur", "#forge:ores/sulfur", 0.5).id("kubejs:smelt_sulfur")
    e.blasting("thermal:sulfur", "#forge:ores/sulfur", 0.5).id("kubejs:blast_sulfur")

    // Niter
    e.smelting("thermal:niter", "#forge:ores/niter", 0.5).id("kubejs:smelt_niter")
    e.blasting("thermal:niter", "#forge:ores/niter", 0.5).id("kubejs:blast_niter")

    // Cinnabar
    e.smelting("thermal:cinnabar", "#forge:ores/cinnabar", 0.5).id("kubejs:smelt_cinnabar")
    e.blasting("thermal:cinnabar", "#forge:ores/cinnabar", 0.5).id("kubejs:blast_cinnabar")

})