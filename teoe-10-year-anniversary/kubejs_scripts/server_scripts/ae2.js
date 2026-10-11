// Manages recipes for AE2
ServerEvents.recipes((e) => {

    // Upggrade the Energy Acceptor into a Controller
    e.shaped(
        "ae2:controller",
        [
          "XDX",
          "SES",
          "XFX"
        ],
        {
          E: "ae2:energy_acceptor",
          D: "#forge:gems/diamond",
          F: "ae2:fluix_block",
          S: "ae2:smooth_sky_stone_block",
          X: "#forge:gems/xychorium"
        }
    ).id("kubejs:acceptor_upgrade")



    // Remove the default cable recipes since QoL recipes doesn't do so
    const cable_removal = [
        "ae2:network/cables/glass_white",
        "ae2:network/cables/glass_orange",
        "ae2:network/cables/glass_magenta",
        "ae2:network/cables/glass_light_blue",
        "ae2:network/cables/glass_yellow",
        "ae2:network/cables/glass_lime",
        "ae2:network/cables/glass_pink",
        "ae2:network/cables/glass_gray",
        "ae2:network/cables/glass_light_gray",
        "ae2:network/cables/glass_cyan",
        "ae2:network/cables/glass_purple",
        "ae2:network/cables/glass_blue",
        "ae2:network/cables/glass_brown",
        "ae2:network/cables/glass_green",
        "ae2:network/cables/glass_red",
        "ae2:network/cables/glass_black",
        "ae2:network/cables/covered_white",
        "ae2:network/cables/covered_orange",
        "ae2:network/cables/covered_magenta",
        "ae2:network/cables/covered_light_blue",
        "ae2:network/cables/covered_yellow",
        "ae2:network/cables/covered_lime",
        "ae2:network/cables/covered_pink",
        "ae2:network/cables/covered_gray",
        "ae2:network/cables/covered_light_gray",
        "ae2:network/cables/covered_cyan",
        "ae2:network/cables/covered_purple",
        "ae2:network/cables/covered_blue",
        "ae2:network/cables/covered_brown",
        "ae2:network/cables/covered_green",
        "ae2:network/cables/covered_red",
        "ae2:network/cables/covered_black",
        "ae2:network/cables/smart_white",
        "ae2:network/cables/smart_orange",
        "ae2:network/cables/smart_magenta",
        "ae2:network/cables/smart_light_blue",
        "ae2:network/cables/smart_yellow",
        "ae2:network/cables/smart_lime",
        "ae2:network/cables/smart_pink",
        "ae2:network/cables/smart_gray",
        "ae2:network/cables/smart_light_gray",
        "ae2:network/cables/smart_cyan",
        "ae2:network/cables/smart_purple",
        "ae2:network/cables/smart_blue",
        "ae2:network/cables/smart_brown",
        "ae2:network/cables/smart_green",
        "ae2:network/cables/smart_red",
        "ae2:network/cables/smart_black",
        "ae2:network/cables/dense_covered_white",
        "ae2:network/cables/dense_covered_orange",
        "ae2:network/cables/dense_covered_magenta",
        "ae2:network/cables/dense_covered_light_blue",
        "ae2:network/cables/dense_covered_yellow",
        "ae2:network/cables/dense_covered_lime",
        "ae2:network/cables/dense_covered_pink",
        "ae2:network/cables/dense_covered_gray",
        "ae2:network/cables/dense_covered_light_gray",
        "ae2:network/cables/dense_covered_cyan",
        "ae2:network/cables/dense_covered_purple",
        "ae2:network/cables/dense_covered_blue",
        "ae2:network/cables/dense_covered_brown",
        "ae2:network/cables/dense_covered_green",
        "ae2:network/cables/dense_covered_red",
        "ae2:network/cables/dense_covered_black",
        "ae2:network/cables/dense_smart_white",
        "ae2:network/cables/dense_smart_orange",
        "ae2:network/cables/dense_smart_magenta",
        "ae2:network/cables/dense_smart_light_blue",
        "ae2:network/cables/dense_smart_yellow",
        "ae2:network/cables/dense_smart_lime",
        "ae2:network/cables/dense_smart_pink",
        "ae2:network/cables/dense_smart_gray",
        "ae2:network/cables/dense_smart_light_gray",
        "ae2:network/cables/dense_smart_cyan",
        "ae2:network/cables/dense_smart_purple",
        "ae2:network/cables/dense_smart_blue",
        "ae2:network/cables/dense_smart_brown",
        "ae2:network/cables/dense_smart_green",
        "ae2:network/cables/dense_smart_red",
        "ae2:network/cables/dense_smart_black"
    ]

    cable_removal.forEach(recipe => {
        e.remove({id: recipe})
    });

})