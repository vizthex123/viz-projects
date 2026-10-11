// Adds custom items
StartupEvents.registry("item", e => {

    // Items
    e.create("bronze_upgrade").displayName("Smithing Template").tooltip("Bronze Upgrade")/*.tooltip("Applies to: Copper Equipment").tooltip("Ingredient: Tin Ingot")*/
    e.create("essence").displayName("The Essence of Everything")

})