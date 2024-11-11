# Adds aspects to modded content that TC 4 missed

import mods.thaumcraft.Aspects;

print("aspects.zs loading...");

/*
https://ftbwiki.org/List_of_Aspects_(Thaumcraft_4)#Tier_1

seems like "set" and "add" are the same, but i guess the former is meant for changing default aspects?

mods.thaumcraft.Aspects.remove(<item>, "aspect 1");
mods.thaumcraft.Aspects.add(<item>, "aspect 1, aspect 2");
mods.thaumcraft.Aspects.set(<item>, "aspect 1");

mods.thaumcraft.Aspects.removeEntity(<item>, "aspect 1");
mods.thaumcraft.Aspects.addEntity(<item>, "aspect 1");
mods.thaumcraft.Aspects.setEntity(<item>, "aspect 1");
*/

// Fuel Pellet and Charcoal Block
// Might remove the pellet's again, but I can't increase Coal otherwise it becomes unbalanced
mods.thaumcraft.Aspects.add(<progressiveautomation:CoalPellet>, "ignis 1");
mods.thaumcraft.Aspects.add(<Mekanism:BasicBlock:3>, "potentia 18, ignis 18");

// Change Sugar Charcoal to better match its recipe
mods.thaumcraft.Aspects.set(<MineFactoryReloaded:sugarcharcoal>, "fames 1, potentia 1, ignis 1");
mods.thaumcraft.Aspects.set(<MineFactoryReloaded:brick:15>, "fames 9, potentia 9, ignis 9");

mods.thaumcraft.Aspects.add(<chisel:limestone>, "terra 1");
mods.thaumcraft.Aspects.add(<eng_toolbox:limestone>, "terra 1");
mods.thaumcraft.Aspects.add(<Magneticraft:limestone>, "terra 1");

print("aspects.zs loaded");