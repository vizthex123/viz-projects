# Adds starting items to the inventory

print("InitialInventory.zs loading...");

# mods.initialinventory.InvHandler.addStartingItem("money", <item:lightmanscurrency:coin_gold>*1);
mods.initialinventory.InvHandler.addStartingItem("tome", <item:akashictome:tome>);
mods.initialinventory.InvHandler.addStartingItem("food", <item:minecraft:bread>*4);
mods.initialinventory.InvHandler.addStartingItem("book", <item:ftbquests:book>);

print("InitialInventory.zs loaded");