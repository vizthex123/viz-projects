// Changes the burn time of items
ItemEvents.modification(e => {

    // Wooden Paxel
    e.modify("mekanismtools:wood_paxel", item => {
      item.burnTime = 400
    })

})