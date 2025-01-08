// Fixes recipes for Xycraft by making them use tags and/or alternate inputs
ServerEvents.recipes(e => {

  ///// Condense all Aluminum Bricks into a single recipe
  /*
  e.remove({output: "xycraft_world:aluminum_bricks_cloud_blue"})
  e.remove({output: "xycraft_world:aluminum_bricks_cloud_green"})
  e.remove({output: "xycraft_world:aluminum_bricks_cloud_red"})
  e.remove({output: "xycraft_world:aluminum_bricks_cloud_dark"})
  e.remove({output: "xycraft_world:aluminum_bricks_cloud_light"})
  */
  e.shaped(
    "2x xycraft_world:aluminum_bricks_cloud_blue",
    [
      "GB",
      "BG"
    ],
    {
      B: ["xycraft_world:aluminum_bricks", "#forge:ingots/aluminum"],
      G: "#forge:gems/xychorium_blue"
    }
  ).id("kubejs:blue_aluminum_bricks")

  e.shaped(
    "2x xycraft_world:aluminum_bricks_cloud_green",
    [
      "GB",
      "BG"
    ],
    {
      B: ["xycraft_world:aluminum_bricks", "#forge:ingots/aluminum"],
      G: "#forge:gems/xychorium_green"
    }
  ).id("kubejs:green_aluminum_bricks")

  e.shaped(
    "2x xycraft_world:aluminum_bricks_cloud_red",
    [
      "GB",
      "BG"
    ],
    {
      B: ["xycraft_world:aluminum_bricks", "#forge:ingots/aluminum"],
      G: "#forge:gems/xychorium_red"
    }
  ).id("kubejs:red_aluminum_bricks")

  e.shaped(
    "2x xycraft_world:aluminum_bricks_cloud_dark",
    [
      "GB",
      "BG"
    ],
    {
      B: ["xycraft_world:aluminum_bricks", "#forge:ingots/aluminum"],
      G: "#forge:gems/xychorium_dark"
    }
  ).id("kubejs:dark_aluminum_bricks")

  e.shaped(
    "2x xycraft_world:aluminum_bricks_cloud_light",
    [
      "GB",
      "BG"
    ],
    {
      B: ["xycraft_world:aluminum_bricks", "#forge:ingots/aluminum"],
      G: "#forge:gems/xychorium_light"
    }
  ).id("kubejs:light_aluminum_bricks")

})