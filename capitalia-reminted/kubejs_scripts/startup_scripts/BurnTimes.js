// Changes the burn time of items
ItemEvents.modification(e => {

    // Wooden Paxel
    e.modify("cl0uds_paxels:wooden_paxel", item => {
      item.burnTime = 400
    })

})