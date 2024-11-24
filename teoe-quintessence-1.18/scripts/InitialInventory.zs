# Adds starting items to the inventory

print("InitialInventory.zs loading...");

# mods.initialinventory.InvHandler.addStartingItem("money", <item:lightmanscurrency:coin_gold>*1);
mods.initialinventory.InvHandler.addStartingItem("tome", <item:eccentrictome:tome>.withTag({"eccentrictome:mods": {tconstruct: {"0": {id: "tconstruct:materials_and_you" as string, Count: 1 as byte}}, apotheosis: {"0": {id: "patchouli:guide_book" as string, tag: {"patchouli:book": "apotheosis:apoth_chronicle" as string}, Count: 1 as byte}}, ftbquests: {"0": {id: "ftbquests:book" as string, Count: 1 as byte}}}}));
mods.initialinventory.InvHandler.addStartingItem("food", <item:minecraft:bread>*4);
mods.initialinventory.InvHandler.addStartingItem("book", <item:ftbquests:book>);

print("InitialInventory.zs loaded");