// Adds custom blocks
onEvent("block.registry", e => {

    e.create("artificial_dragon_egg","falling")
        .material("dragon_egg")
        .defaultCutout()
        .transparent(true)
        .requiresTool(false)
        .blastResistance(8)
        .hardness(1);

})