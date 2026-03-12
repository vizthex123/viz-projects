// Handles tags & recipes related to the pack's research system
ServerEvents.tags("item", e => {

    // Writing utensils for the Writing Desk
    e.add("reminted:writing_utensil", ["feather", "ink_sac", "glow_ink_sac", "writable_book", "brush"])

    // Primitive research
    // Used for a custom recycling recipe
    e.add("reminted:primitive_research", ["ftbquests:book", "researchlab:soiled_tome", "researchlab:writing_desk"])


    //// Research tags
    e.add("reminted:researchable", ["#reminted:automation_agent", "#forge:dusts/salt", "#forge:dusts/sulfur", "flint", "prismarine_shard", "prismarine_crystals", "nether_quartz", "#forge:gems/amethyst", "#forge:gems/apatite", "#forge:gems/amber", "#forge:gems/cinnabar", "#forge:gems/niter", "#forge:gems/sulfur", "#forge:raw_materials"])

    e.add("reminted:researchable/advanced", ["#reminted:researchable", "#reminted:researchable/snowlike", "#reminted:rocks", "polished_basalt", "smooth_basalt", "#reminted:all_terracotta"])

    e.add("reminted:researchable/biomass", ["#reminted:biomass", "quark:moss_paste"])

    e.add("reminted:researchable/biomass/meaty", ["#forge:foods/meat/raw", "forge:raw_fishes"])

    e.add("reminted:researchable/snowlike", ["snowball", "yungscavebiomes:icicle", "thermal:blizz_powder"])

    e.add("reminted:researchable/exotic", ["phantom_membrane", "shulker_shell", "dragon_breath", "quark:dragon_scale", "enderzoology:confusing_powder", "enderzoology:ender_fragment", "enderzoology:withering_dust", "quark:ravager_hide", "quark:soul_bead", "upgrade_aquatic:thrasher_tooth"])

    e.add("reminted:calcium", ["#reminted:shells", "bone_block", "netherexp:wither_bone_block", "calcite"])


    // Rocks for basic research and rock crushing
    e.add("reminted:rocks", ["dripstone_block", "#forge:cobblestone", "#forge:stone", "#forge:cobblestonestone/basalt", "#forge:stone/basalt", "#forge:stone/marble", "biomeswevegone:red_rock", "biomeswevegone:rocky_stone", "reminted:rocks/nether", "reminted:rocks/end"])

    e.add("reminted:rocks/nether", ["netherrack", "blackstone", "polished_blackstone", "netherexp:polished_blackstone_pillar", "basalt", "polished_basalt", "smooth_basalt", "netherexp:polished_basalt_bricks"])

    e.add("reminted:rocks/end", ["end_stone", "quark:myalite"])


    // Research fuels
    e.add("reminted:research_fuel/small", ["#forge:nuggets/coal", "#forge:nuggets/charcoal", "#forge:dusts/sulfur", "blaze_powder", "magma_cream"])
    e.add("reminted:research_fuel", ["#minecraft:coals", "#forge:gems/niter", "#forge:gems/sulfur", "fire_charge", "magma_cream", "magma_block"])
    e.add("reminted:research_fuel/large", ["#forge:storage_blocks/coal", "#forge:storage_blocks/charcoal", "magma_block"])

})



ServerEvents.recipes(e => {

    // Research Catalyst
    e.shaped(
     "2x kubejs:research_catalyst",
        [
          " C ",
          "GCG",
          " G "
        ],
        {
          C: "clay_ball",
          G: "#forge:glass/silica"
        }
    ).id("kubejs:research_catalyst_basic")

    e.shaped(
     "4x kubejs:research_catalyst",
        [
          " B ",
          "GAG",
          " G "
        ],
        {
          A: "#reminted:automation_agent",
          B: ["stone_button", "kubejs:powdered_stone"],
          G: "#forge:glass/silica"
        }
    ).id("kubejs:research_catalyst")



    // Writing Desks
    e.remove({id: "researchlab:writing_desk_dynamic"})
    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:0,wood_type:"oak"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "#reminted:variantless_fences",
          P: "#reminted:variantless_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:0,wood_type:"oak"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "oak_fence",
          P: "oak_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:oak_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:5,wood_dark_oak:"dark_oak"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "dark_oak_fence",
          P: "dark_oak_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:dark_oak_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:1,wood_spruce:"spruce"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "spruce_fence",
          P: "spruce_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:spruce_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:2,wood_birch:"birch"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "birch_fence",
          P: "birch_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:birch_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:3,wood_jungle:"jungle"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "jungle_fence",
          P: "jungle_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:jungle_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:4,wood_acacia:"acacia"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "acacia_fence",
          P: "acacia_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:acacia_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:6,wood_mangrove:"mangrove"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "mangrove_fence",
          P: "mangrove_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:mangrove_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:7,wood_cherry:"cherry"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "cherry_fence",
          P: "cherry_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:cherry_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:8,wood_bamboo:"bamboo"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "bamboo_fence",
          P: "bamboo_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:bamboo_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:9,wood_crimson:"crimson"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "crimson_fence",
          P: "crimson_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:crimson_writing_desk")

    e.shaped(
     Item.of("researchlab:writing_desk", '{CustomModelData:10,wood_warped:"warped"}'),
        [
          "PIP",
          "PCP",
          "F F"
        ],
        {
          C: "#forge:workbench",
          F: "warped_fence",
          P: "warped_planks",
          I: "#reminted:writing_utensil"
        }
    ).id("kubejs:warped_writing_desk")

})