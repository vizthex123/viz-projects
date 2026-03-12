// Changes the burn time of items
ItemEvents.modification(e => {

    // Wooden Paxel
    e.modify("mekanismtools:wood_paxel", item => {
      item.burnTime = 400
    })


    // Peat
    e.modify("biomemakeover:peat", item => {
      item.burnTime = 1200
    })

    e.modify("biomemakeover:mossy_peat", item => {
      item.burnTime = 1200
    })

    e.modify("biomemakeover:dried_peat", item => {
      item.burnTime = 1600
    })


    // Bituminous Peat
    e.modify("forestry:bituminous_peat", item => {
      item.burnTime = 4000
    })

})