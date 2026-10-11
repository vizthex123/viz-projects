// Changes the burn time of items
ItemEvents.modification(e => {

    // Wooden Paxel
    e.modify("paxelsfordummies:wooden_paxel", item => {
      item.burnTime = 400
    })

    // Upgrade Template
    e.modify("storagedrawers:upgrade_template", item => {
      item.burnTime = 200
    })

    // Wooden Gear
    e.modify("enderio:wood_gear", item => {
      item.burnTime = 100
    })

    // Leaf Litter
    e.modify("minecraft:leaf_litter", item => {
      item.burnTime = 50
    })

/*
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
*/
})