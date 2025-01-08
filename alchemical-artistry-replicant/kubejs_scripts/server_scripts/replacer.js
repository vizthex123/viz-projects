// Replaces items in recipes since re-doing them all is annoying
ServerEvents.recipes(e => {

  e.replaceInput(
    { input: "egg" },
      "egg",
      "#forge:eggs"
  )

  e.replaceInput(
    { input: "furnace" },
      "furnace",
      "#modpack:furnace"
  )

  e.replaceInput(
    { input: "slime_ball",  not: {id: "minecraft:slime_block", id: "minecraft:magma_cream"} },
      "slime_ball",
      "#forge:slimeballs"
  )

  e.replaceInput(
    { input: "stick", not: {id: "quark:building/crafting/compressed/stick_block"} },
      "stick",
      "#forge:rods/wooden"
  )

  e.replaceInput(
    { input: "ae2:certus_quartz_dust" },
      "ae2:certus_quartz_dust",
      "#ae2:all_quartz_dust"
  )


  e.replaceInput(
    { input: "honey_bottle" },
      "honey_bottle",
      ["honey_bottle", "thermal:syrup_bottle"]
  )
    
})