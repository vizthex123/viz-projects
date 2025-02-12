// Tags items for recycling
ServerEvents.tags("item", e => {

    // crops + saplings etc. -> biomass (4:1 ratio)
    // logs are gonna be separate since they've got more biomass

    e.add("revolution:stone_tools", ["stone_sword", "stone_pickaxe", "stone_axe", "stone_shovel", "stone_hoe"])

    e.add("revolution:biomass", ["#revolution:cacti", "#revolution:cave_plants", "#revolution:nether_plants", "#forge:crops", "#forge:mushrooms", "#minecraft:saplings", "#minecraft:leaves",
    "kelp", "lily_pad", "sea_pickle", "sugar_cane", "bamboo", "stick",
    "ecologics:surface_moss",
    "quark:moss_paste"])

})



// Adds recipes for recycling 3.0
// This version uses generic scrap types (e.g. all metal is now a scrap heap instead of each type of metal), and supports vastly more items due to it
ServerEvents.recipes(e => {

    //// Organic
    // Sawdust
    // Might add tags to both or something instead. I dunno yet.
    e.shapeless("thermal:sawdust", ["kubejs:organic_refuse"]).id("kubejs:organic_to_sawdust")

    // Slimeball
    e.shaped(
        "slime_ball",
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