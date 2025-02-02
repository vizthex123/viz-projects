// Changes recipes using Create
onEvent("recipes", e => {

    // Make Netherite Ingots require Mechanical Crafting
    e.remove({id: "minecraft:netherite_ingot"})
    e.recipes.create.mechanical_crafting("netherite_ingot", [
    "GSG",
    "S S",
    "GSG",
    ],
    {
      G: "#forge:ingots/gold",
      S: "#forge:ingots/netherite_scrap"
    })

    // Make Pendorite Ingots require Mechanical Crafting
    e.remove({id: "byg:pendorite_ingot"})
    e.recipes.create.mechanical_crafting("byg:pendorite_ingot", [
    "SES",
    "D D",
    "SES",
    ],
    {
      D: "#forge:gems/diamond",
      E: "#tcintegrations:emeraldite_shards",
      S: "byg:pendorite_scraps"
    })

})