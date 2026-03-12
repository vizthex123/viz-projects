// Adds custom fluids
StartupEvents.registry("fluid", e => {

    // Blood
    e.create("blood")
      .displayName("Blood")
      .thickTexture(0x880808)
      .bucketColor(0x880808)
      .tag("classicpipes:thick")

    // Atomic Reorganisation Slurry
    e.create("transmutation_slurry")
      .displayName("Atomic Reorganisation Slurry")
      .thinTexture(0x702963)
      .bucketColor(0x702963)
      .tag("classicpipes:thin")

})