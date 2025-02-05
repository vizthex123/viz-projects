// Adds recipes for recycling 3.0 (or maybe it's 2.0? I dunno lol)
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