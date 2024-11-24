// Adds custom fluids
onEvent("fluid.registry", e => {

    e.create("molten_ironwood")
      .displayName("Molten Ironwood")
      .thinTexture(0x6E6750)
      .bucketColor(0x6E6750)
      .noBlock()

    e.create("molten_steeleaf")
      .displayName("Molten Steeleaf")
      .thinTexture(0x345E23)
      .bucketColor(0x345E23)
      .noBlock()

})