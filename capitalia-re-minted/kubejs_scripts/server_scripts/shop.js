// Hopefully adds sellable items to AdminShop
// I might downgrade cuz I didn't really mind the csv format. It's defintely less annoying than this lol.
ServerEvents.recipes(e => {

//// This complicated code chunk function abomination whatever the fucking hell it's called was taken from the new docs for the mod: https://github.com/AmmoniumX/AdminShop/wiki/Adding-Buy-or-Sell-Recipes-(KubeJS)

let sellCounter = 0
function sellItem(item, count, price, permit) {
    let recipe = {
        "type": "adminshop:item_selling",
        "price": price,
        "input": {
            "item": {
                "item": item,
                "count": count
            },
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:sell_${sellCounter++}`)
}

function sellItemNBT(item, count, price, nbt, permit) {
    let recipe = {
        "type": "adminshop:item_selling",
        "price": price,
        "input": {
            "item": {
                "item": item,
                "count": count,
                "nbt": nbt
            },
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:sell_${sellCounter++}`)
}

function sellTag(tag, count, price, permit) {
    let recipe = {
        "type": "adminshop:item_selling",
        "price": price,
        "input": {
            "tag": {
                "tag": tag,
                "count": count
            },
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:sell_${sellCounter++}`)
}

let buyCounter = 0
function buyItem(item, count, price, permit) {
    let recipe = {
        "type": "adminshop:item_buying",
        "price": price,
        "result": {
            "item": item,
            "count": count
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:buy_${buyCounter++}`)
}

function buyItemNBT(item, count, price, nbt, permit) {
    let recipe = {
        "type": "adminshop:item_buying",
        "price": price,
        "result": {
            "item": item,
            "count": count,
            "nbt": nbt
        }
    }
    if (permit !== undefined && permit !== null && permit !== "") {
        recipe["permit"] = permit
    }
    e.custom(recipe).id(`yourmodpack:buy_${buyCounter++}`)
}

//// Remove the default buy & sell orders
    e.remove({id: "adminshop:example_buy_item"})
    e.remove({id: "adminshop:example_sell_item"})
    e.remove({id: "adminshop:example_permits"})
    e.remove({id: "adminshop:example_buy_fluid"})
    e.remove({id: "adminshop:example_sell_fluid"})
    e.remove({id: "adminshop:example_buy_nbt"})
    e.remove({id: "adminshop:example_sell_nbt"})
    e.remove({id: "adminshop:example_sell_item_tag"})



//// THE ACTUAL SHOP IS DOWN HERE!
//// God, i fucking hate how this is a thousand lines long just to do one damn thing ffs
/// Number order is count, price (in cents), NBT, permit
/// Bounties pay a bit more than the shop since they require more work and are randomised

// Permits:
// advanced_research
// advanced_technology
// industrial_trading
// me_expert

// Coins
buyItem("essentiallycurrency:copper_coin", 1, 100)
buyItem("essentiallycurrency:iron_coin", 1, 500)
buyItem("essentiallycurrency:gold_coin", 1, 1000)
buyItem("essentiallycurrency:diamond_coin", 1, 2500)
buyItem("essentiallycurrency:emerald_coin", 1, 5000)
buyItem("essentiallycurrency:netherite_coin", 1, 7500)

sellItem("essentiallycurrency:copper_coin", 1, 100)
sellItem("essentiallycurrency:iron_coin", 1, 500)
sellItem("essentiallycurrency:gold_coin", 1, 1000)
sellItem("essentiallycurrency:diamond_coin", 1, 2500)
sellItem("essentiallycurrency:emerald_coin", 1, 5000)
sellItem("essentiallycurrency:netherite_coin", 1, 7500)



//// Buying ////
/// Purchasing items costs 5x their sell price, and gives one tier below the sale (e.g. you get dust instead of an ingot)
// Basics
buyItem("coal", 1, 500)
buyItem("mekanism:dust_iron", 1, 2500)
buyItem("ae2:certus_quartz_dust", 1, 10000, "me_expert")
buyItem("sand", 1, 150)
buyItem("string", 1, 125)
buyItem("paper", 1, 75)
buyItem("ink_sac", 1, 250)



//// Selling ////
/// Currencies
sellItem("emerald", 1, 500)
sellItem("kubejs:loyalty_point", 1, 8)
sellItem("kubejs:prestige_pittance", 1, 1)
sellItem("kubejs:prestige_chit", 1, 20)
sellItem("kubejs:prestige_scrip", 1, 100)

/// Research
sellItem("kubejs:research_point", 1, 100)
sellItem("kubejs:data_stone", 1, 500)
sellItem("kubejs:data_bronze", 1, 2500)
sellItem("kubejs:data_iron", 1, 5000)
sellItem("kubejs:data_industrial", 1, 10000, "advanced_research")
sellItem("kubejs:data_information", 1, 25000, "advanced_research")
sellItem("kubejs:data_atomic", 1, 75000, "advanced_research")



/// Materials
// Raw
sellItem("copper_ingot", 2, 150)
sellTag("forge:ingots/tin", 1, 350)
sellItem("iron_ingot", 1, 500)
sellTag("forge:ingots/nickel", 1, 750)
sellItem("gold_ingot", 1, 1000)
sellTag("forge:ingots/lead", 1, 1500)
sellTag("forge:ingots/silver", 1, 1500)
sellTag("forge:ingots/osmium", 1, 1250)
sellItem("netherite_ingot", 1, 15000, "industrial_trading")

sellItem("redstone", 1, 1000)
sellItem("projectred_core:electrotine_dust", 1, 1500, "industrial_trading")
sellItem("diamond", 1, 10000, "industrial_trading")
sellItem("obsidian", 1, 3000, "industrial_trading")


// Alloys
sellTag("forge:ingots/bronze", 1, 600)
sellTag("forge:ingots/steel", 1, 2500, "industrial_trading")
sellTag("forge:ingots/constantan", 1, 1000, "industrial_trading")
sellTag("forge:ingots/electrum", 1, 3000, "industrial_trading")
sellTag("forge:ingots/invar", 1, 2000, "industrial_trading")
sellTag("forge:ingots/lumium", 1, 3500, "industrial_trading")
sellTag("forge:ingots/signalum", 1, 3500, "industrial_trading")
sellTag("forge:ingots/enderium", 1, 5000, "industrial_trading")

sellItem("projectred_core:red_ingot", 1, 9000)
sellItem("projectred_core:electrotine_ingot", 1, 14000, "industrial_trading")
sellItem("mekanism:alloy_infused", 1, 2000)
sellItem("mekanism:alloy_reinforced", 1, 13500, "industrial_trading")
sellItem("mekanism:alloy_atomic", 1, 27500, "industrial_trading")


/// Industrial Applications
// Processors
sellItem("laserio:logic_chip", 1, 500)
sellItem("ae2:calculation_processor", 1, 3500, "me_expert")
sellItem("ae2:logic_processor", 1, 5000, "me_expert")
sellItem("ae2:engineering_processor", 1, 10000, "me_expert")


// Smelting
sellItem("furnace", 1, 200)
sellItem("quark:deepslate_furnace", 1, 400)
sellItem("quark:blackstone_furnace", 1, 650)
sellItem("smoker", 1, 325)
sellItem("blast_furnace", 1, 2850)
sellItem("mekanism:energized_smelter", 1, 25000, "industrial_trading")


// Auto-crafting
sellItem("quark:crafter", 1, 1750)
sellItem("craftingautomat:autocrafter", 1, 4000)
sellItem("mekanism:formulaic_assemblicator", 1, 30000, "industrial_trading")
sellItem("thermal:machine_crafter", 1, 30000, "industrial_trading")


// Wireless item management
sellItem("mekanism:quantum_entangloporter", 1, 50000, "advanced_technology")


// Misc
sellItem("quark:ravager_hide", 1, 10000)

})