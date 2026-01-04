// Unifies ores smelting recipes
ServerEvents.tags("item", e => {

    // Add Forge tags to ore blocks that don't have them
    // I'm so tired of mod devs constantly forgetting this, man...
    e.add("forge:ores", ["alexscaves:radrock_uranium_ore",
    "ad_astra:deepslate_desh_ore", "ad_astra:deepslate_calorite_ore", "ad_astra:deepslate_calorite_ore", "ad_astra:deepslate_ice_shard_ore", "ad_astra:deepslate_ostrum_ore", "ad_astra:glacio_ice_shard_ore", "ad_astra:mars_ice_shard_ore", "ad_astra:mars_ostrum_ore", "ad_astra:moon_cheese_ore", "ad_astra:moon_desh_ore", "ad_astra:moon_ice_shard_ore",
    "upgrade_aquatic:embedded_ammonite"])

    e.add("forge:ores/coal", ["alexscaves:coprolith_coal_ore"])
    e.add("forge:ores/redstone", ["alexscaves:guanostone_redstone_ore"])

    e.add("forge:ores/uranium", ["alexscaves:radrock_uranium_ore"])

    e.add("deepresonance:resonant_ore", ["#forge:ores/resonating"])



    // Add a custom tag for use in smelting recipes
    // This is due to TE using the Forge tag, and I don't want to mess up the Raw Ore pulverizer recipes
	e.add("revolution:type/copper", ["#forge:dusts/copper", "#forge:raw_materials/copper", "#forge:ores/copper"])
    e.add("revolution:type/iron", ["#forge:dusts/iron", "#forge:raw_materials/iron", "#forge:ores/iron"])
    e.add("revolution:type/gold", ["#forge:dusts/gold", "#forge:raw_materials/gold", "#forge:ores/gold"])

    e.add("revolution:type/desh", ["ad_astra:raw_desh", "ad_astra:deepslate_desh_ore", "ad_astra:moon_desh_ore"])
    e.add("revolution:type/ostrum", ["ad_astra:raw_ostrum", "ad_astra:deepslate_ostrum_ore", "ad_astra:mars_ostrum_ore"])
    e.add("revolution:type/calorite", ["ad_astra:raw_calorite", "ad_astra:deepslate_calorite_ore", "ad_astra:venus_calorite_ore"])
    e.add("revolution:type/ice_shard", ["ad_astra:deepslate_ice_shard_ore", "ad_astra:glacio_ice_shard_ore", "ad_astra:mars_ice_shard_ore", "ad_astra:moon_ice_shard_ore"])

    e.add("revolution:type/graphite", ["#forge:dusts/graphite", "#minecraft:coals", "thermal:bitumen"])
    e.add("revolution:type/uranium", ["#forge:dusts/uranium", "#forge:raw_materials/uranium", "#forge:ores/uranium"])

    e.add("revolution:type/tin", ["#forge:dusts/tin", "#forge:raw_materials/tin", "#forge:ores/tin"])
    e.add("revolution:type/lead", ["#forge:dusts/lead", "#forge:raw_materials/lead", "#forge:ores/lead"])
    e.add("revolution:type/silver", ["#forge:dusts/silver", "#forge:raw_materials/silver", "#forge:ores/silver"])
    e.add("revolution:type/nickel", ["#forge:dusts/nickel", "#forge:raw_materials/nickel", "#forge:ores/nickel"])

    e.add("revolution:type/aluminum", ["#forge:dusts/aluminum", "#forge:raw_materials/aluminum", "#forge:ores/aluminum"])
    e.add("revolution:type/zinc", ["#forge:dusts/zinc", "#forge:raw_materials/zinc", "#forge:ores/zinc"])

})


// Priority: Thermal, Forestry, Bigger Reactors, Project Red, Railcraft, XyCraft
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

    e.remove({type: "enderio:alloy_smelting", output: "copper_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "iron_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "gold_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "diamond"})


    // Copper
    e.smelting("copper_ingot", "#revolution:type/copper", 0.5).id("kubejs:smelt_copper")
    e.blasting("copper_ingot", "#revolution:type/copper", 0.5).id("kubejs:blast_copper")

    e.recipes.enderio.alloy_smelting("copper_ingot", "#revolution:type/copper").smelting().energy(1500).id("kubejs:alloy_smelt_copper");

    // Iron
    e.smelting("iron_ingot", "#revolution:type/iron", 0.7).id("kubejs:smelt_iron")
    e.blasting("iron_ingot", "#revolution:type/iron", 0.7).id("kubejs:blast_iron")

    e.recipes.enderio.alloy_smelting("iron_ingot", "#revolution:type/iron").smelting().energy(1500).id("kubejs:alloy_smelt_iron");

    // Gold
    e.smelting("gold_ingot", "#revolution:type/gold", 1.5).id("kubejs:smelt_gold")
    e.blasting("gold_ingot", "#revolution:type/gold", 1.5).id("kubejs:blast_gold")

    e.recipes.enderio.alloy_smelting("gold_ingot", "#revolution:type/gold").smelting().energy(1500).id("kubejs:alloy_smelt_gold");


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

    e.remove({type: "enderio:alloy_smelting", output: "coal"})
    e.remove({type: "enderio:alloy_smelting", output: "lapis_lazuli"})
    e.remove({type: "enderio:alloy_smelting", output: "redstone"})
    e.remove({type: "enderio:alloy_smelting", output: "diamond"})
    e.remove({type: "enderio:alloy_smelting", output: "emerald"})
    e.remove({type: "enderio:alloy_smelting", output: "quartz"})


    // Coal
    e.smelting("coal", "#forge:ores/coal", 0.25).id("kubejs:smelt_coal")
    e.blasting("coal", "#forge:ores/coal", 0.25).id("kubejs:blast_coal")

    e.recipes.enderio.alloy_smelting("coal", "#forge:ores/coal").smelting().energy(1500).id("kubejs:alloy_smelt_coal");

    // Lapis
    e.smelting("lapis_lazuli", "#forge:ores/lapis", 0.5).id("kubejs:smelt_lapis")
    e.blasting("lapis_lazuli", "#forge:ores/lapis", 0.5).id("kubejs:blast_lapis")

    e.recipes.enderio.alloy_smelting("lapis_lazuli", "#forge:ores/lapis").smelting().energy(1500).id("kubejs:alloy_smelt_lapis");

    // Redstone
    e.smelting("redstone", "#forge:ores/redstone", 1).id("kubejs:smelt_redstone")
    e.blasting("redstone", "#forge:ores/redstone", 1).id("kubejs:blast_redstone")

    e.recipes.enderio.alloy_smelting("redstone", "#forge:ores/redstone").smelting().energy(1500).id("kubejs:alloy_smelt_redstone");

    // Diamond
    e.smelting("diamond", "#forge:ores/diamond", 2).id("kubejs:smelt_diamond")
    e.blasting("diamond", "#forge:ores/diamond", 2).id("kubejs:blast_diamond")

    e.recipes.enderio.alloy_smelting("diamond", "#forge:ores/diamond").smelting().energy(1500).id("kubejs:alloy_smelt_diamond");

    // Emerald
    e.smelting("emerald", "#forge:ores/emerald", 2).id("kubejs:smelt_emerald")
    e.blasting("emerald", "#forge:ores/emerald", 2).id("kubejs:blast_emerald")

    e.recipes.enderio.alloy_smelting("emerald", "#forge:ores/emerald").smelting().energy(1500).id("kubejs:alloy_smelt_emerald");

    // Nether Quartz
    e.smelting("quartz", "#forge:ores/quartz", 1).id("kubejs:smelt_nether_quartz")
    e.blasting("quartz", "#forge:ores/quartz", 1).id("kubejs:blast_nether_quartz")

    e.recipes.enderio.alloy_smelting("quartz", "#forge:ores/quartz").smelting().energy(1500).id("kubejs:alloy_smelt_quartz");





    ///// Ad Astra /////
    e.remove({type: "smelting", output: "ad_astra:desh_ingot"})
    e.remove({type: "smelting", output: "ad_astra:ostrum_ingot"})
    e.remove({type: "smelting", output: "ad_astra:calorite_ingot"})
    e.remove({type: "smelting", output: "ad_astra:ice_shard"})

    e.remove({type: "blasting", output: "ad_astra:desh_ingot"})
    e.remove({type: "blasting", output: "ad_astra:ostrum_ingot"})
    e.remove({type: "blasting", output: "ad_astra:calorite_ingot"})
    e.remove({type: "blasting", output: "ad_astra:ice_shard"})

    e.remove({type: "enderio:alloy_smelting", output: "ad_astra:desh_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "ad_astra:ostrum_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "ad_astra:calorite_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "ad_astra:ice_shard"})


    // Desh
    e.smelting("ad_astra:desh_ingot", "#revolution:type/desh", 2).id("kubejs:smelt_desh")
    e.blasting("ad_astra:desh_ingot", "#revolution:type/desh", 2).id("kubejs:blast_desh")

    e.recipes.enderio.alloy_smelting("ad_astra:desh_ingot", "#revolution:type/desh").smelting().energy(1500).id("kubejs:alloy_smelt_desh");

    // Ostrum
    e.smelting("ad_astra:ostrum_ingot", "#revolution:type/ostrum", 3).id("kubejs:smelt_ostrum")
    e.blasting("ad_astra:ostrum_ingot", "#revolution:type/ostrum", 3).id("kubejs:blast_ostrum")

    e.recipes.enderio.alloy_smelting("ad_astra:ostrum_ingot", "#revolution:type/ostrum").smelting().energy(1500).id("kubejs:alloy_smelt_ostrum");

    // Calorite
    e.smelting("ad_astra:calorite_ingot", "#revolution:type/calorite", 4).id("kubejs:smelt_calorite")
    e.blasting("ad_astra:calorite_ingot", "#revolution:type/calorite", 4).id("kubejs:blast_calorite")

    e.recipes.enderio.alloy_smelting("ad_astra:calorite_ingot", "#revolution:type/calorite").smelting().energy(1500).id("kubejs:alloy_smelt_calorite");

    // Ice Shard
    e.smelting("ad_astra:ice_shard", "#revolution:type/ice_shard", 2).id("kubejs:smelt_ice_shard")
    e.blasting("ad_astra:ice_shard", "#revolution:type/ice_shard", 2).id("kubejs:blast_ice_shard")

    e.recipes.enderio.alloy_smelting("ad_astra:ice_shard", "#revolution:type/ice_shard").smelting().energy(1500).id("kubejs:alloy_smelt_ice_shard");





    ///// Bigger Reactors /////
    e.remove({type: "smelting", output: "alexscaves:uranium"})
    e.remove({type: "smelting", output: "biggerreactors:uranium_ingot"})
    e.remove({type: "smelting", output: "biggerreactors:smelting/graphite_dust"})
    e.remove({type: "smelting", output: "biggerreactors:smelting/graphite_ingot"})

    e.remove({type: "blasting", output: "alexscaves:uranium"})
    e.remove({type: "blasting", output: "biggerreactors:uranium_ingot"})
    e.remove({type: "blasting", output: "biggerreactors:blasting/graphite_dust"})
    e.remove({type: "blasting", output: "biggerreactors:blasting/graphite_ingot"})

    e.remove({type: "enderio:alloy_smelting", output: "alexscaves:uranium"})
    e.remove({type: "enderio:alloy_smelting", output: "biggerreactors:uranium_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "biggerreactors:graphite_ingot"})

    // Graphite
    e.smelting("biggerreactors:graphite_ingot", "#revolution:type/graphite", 1).id("kubejs:smelt_graphite")
    e.blasting("biggerreactors:graphite_ingot", "#revolution:type/graphite", 1).id("kubejs:blast_graphite")

    e.recipes.enderio.alloy_smelting("biggerreactors:graphite_ingot", "#revolution:type/graphite").smelting().energy(1500).id("kubejs:alloy_smelt_graphite");

    // Uranium
    e.smelting("biggerreactors:uranium_ingot", "#revolution:type/uranium", 4).id("kubejs:smelt_uranium")
    e.blasting("biggerreactors:uranium_ingot", "#revolution:type/uranium", 4).id("kubejs:blast_uranium")

    e.recipes.enderio.alloy_smelting("biggerreactors:uranium_ingot", "#revolution:type/uranium").smelting().energy(1500).id("kubejs:alloy_smelt_uranium");



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

    e.remove({type: "enderio:alloy_smelting", output: "projectred_exploration:tin_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "projectred_exploration:silver_ingot"})

    e.remove({type: "enderio:alloy_smelting", output: "projectred_exploration:ruby"})
    e.remove({type: "enderio:alloy_smelting", output: "projectred_exploration:peridot"})
    e.remove({type: "enderio:alloy_smelting", output: "projectred_exploration:sapphire"})


    // Ruby
    e.smelting("projectred_core:ruby", "#forge:ores/ruby", 1).id("kubejs:smelt_ruby")
    e.blasting("projectred_core:ruby", "#forge:ores/ruby", 1).id("kubejs:blast_ruby")

    e.recipes.enderio.alloy_smelting("projectred_core:ruby", "#forge:ores/ruby").smelting().energy(1500).id("kubejs:alloy_smelt_ruby");

    // Peridot
    e.smelting("projectred_core:peridot", "#forge:ores/peridot", 1).id("kubejs:smelt_peridot")
    e.blasting("projectred_core:peridot", "#forge:ores/peridot", 1).id("kubejs:blast_peridot")

    e.recipes.enderio.alloy_smelting("projectred_core:peridot", "#forge:ores/peridot").smelting().energy(1500).id("kubejs:alloy_smelt_peridot");

    // Sapphire
    e.smelting("projectred_core:sapphire", "#forge:ores/sapphire", 1).id("kubejs:smelt_sapphire")
    e.blasting("projectred_core:sapphire", "#forge:ores/sapphire", 1).id("kubejs:blast_sapphire")

    e.recipes.enderio.alloy_smelting("projectred_core:sapphire", "#forge:ores/sapphire").smelting().energy(1500).id("kubejs:alloy_smelt_sapphire");





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

    e.remove({type: "enderio:alloy_smelting", output: "projectred_exploration:ruby"})


    // Tin
    e.smelting("thermal:tin_ingot", "#revolution:type/tin", 1).id("kubejs:smelt_tin")
    e.blasting("thermal:tin_ingot", "#revolution:type/tin", 1).id("kubejs:blast_tin")

    e.recipes.enderio.alloy_smelting("thermal:tin_ingot", "#revolution:type/tin").smelting().energy(1500).id("kubejs:alloy_smelt_tin");

    // Lead
    e.smelting("thermal:lead_ingot", "#revolution:type/lead", 2).id("kubejs:smelt_lead")
    e.blasting("thermal:lead_ingot", "#revolution:type/lead", 2).id("kubejs:blast_lead")

    e.recipes.enderio.alloy_smelting("thermal:lead_ingot", "#revolution:type/lead").smelting().energy(1500).id("kubejs:alloy_smelt_lead");

    // Silver
    e.remove({type: "smelting", output: "galosphere:silver_ingot"})
    e.remove({type: "blasting", output: "galosphere:silver_ingot"})

    e.smelting("thermal:silver_ingot", "#revolution:type/silver", 2).id("kubejs:smelt_silver")
    e.blasting("thermal:silver_ingot", "#revolution:type/silver", 2).id("kubejs:blast_silver")

    e.recipes.enderio.alloy_smelting("thermal:silver_ingot", "#revolution:type/silver").smelting().energy(1500).id("kubejs:alloy_smelt_silver");

    // Nickel
    e.smelting("thermal:nickel_ingot", "#revolution:type/nickel", 2).id("kubejs:smelt_nickel")
    e.blasting("thermal:nickel_ingot", "#revolution:type/nickel", 2).id("kubejs:blast_nickel")

    e.recipes.enderio.alloy_smelting("thermal:nickel_ingot", "#revolution:type/nickel").smelting().energy(1500).id("kubejs:alloy_smelt_nickel");

    // Sulfur
    e.smelting("thermal:sulfur", "#forge:ores/sulfur", 0.5).id("kubejs:smelt_sulfur")
    e.blasting("thermal:sulfur", "#forge:ores/sulfur", 0.5).id("kubejs:blast_sulfur")

    e.recipes.enderio.alloy_smelting("thermal:sulfur", "#forge:ores/sulfur").smelting().energy(1500).id("kubejs:alloy_smelt_sulfur");

    // Niter
    e.smelting("thermal:niter", "#forge:ores/niter", 0.5).id("kubejs:smelt_niter")
    e.blasting("thermal:niter", "#forge:ores/niter", 0.5).id("kubejs:blast_niter")

    e.recipes.enderio.alloy_smelting("thermal:niter", "#forge:ores/niter").smelting().energy(1500).id("kubejs:alloy_smelt_niter");

    // Cinnabar
    e.smelting("thermal:cinnabar", "#forge:ores/cinnabar", 0.5).id("kubejs:smelt_cinnabar")
    e.blasting("thermal:cinnabar", "#forge:ores/cinnabar", 0.5).id("kubejs:blast_cinnabar")

    e.recipes.enderio.alloy_smelting("thermal:cinnabar", "#forge:ores/cinnabar").smelting().energy(1500).id("kubejs:alloy_smelt_cinnabar");





    ///// Railcraft /////
    e.remove({type: "smelting", output: "railcraft:tin_ingot"})
    e.remove({type: "smelting", output: "railcraft:lead_ingot"})
    e.remove({type: "smelting", output: "railcraft:silver_ingot"})
   // e.remove({type: "smelting", output: "railcraft:nickel_ingot"})

    e.remove({type: "blasting", output: "railcraft:tin_ingot"})
    e.remove({type: "blasting", output: "railcraft:lead_ingot"})
    e.remove({type: "blasting", output: "railcraft:silver_ingot"})
    e.remove({type: "blasting", output: "railcraft:nickel_ingot"})
    e.remove({type: "blasting", output: "railcraft:zinc_ingot"})

    e.remove({type: "enderio:alloy_smelting", output: "railcraft:tin_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "railcraft:lead_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "railcraft:silver_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "railcraft:nickel_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "railcraft:zinc_ingot"})


    // Zinc
    e.smelting("railcraft:zinc_ingot", "#revolution:type/zinc", 1).id("kubejs:smelt_zinc")
    e.blasting("railcraft:zinc_ingot", "#revolution:type/zinc", 1).id("kubejs:blast_zinc")





    ///// XyCraft /////
    // Aluminum
    e.remove({type: "smelting", output: "xycraft_world:aluminum_ingot"})
    e.remove({type: "blasting", output: "xycraft_world:aluminum_ingot"})
    e.remove({type: "enderio:alloy_smelting", output: "xycraft_world:aluminum_ingot"})

    e.smelting("xycraft_world:aluminum_ingot", "#revolution:type/aluminum", 0.5).id("kubejs:smelt_aluminium")
    e.blasting("xycraft_world:aluminum_ingot", "#revolution:type/aluminum", 0.5).id("kubejs:blast_aluminium")

    e.recipes.enderio.alloy_smelting("xycraft_world:aluminum_ingot", "#revolution:type/aluminum").smelting().energy(1500).id("kubejs:alloy_smelt_aluminium");

})