
# Hides items from NEI (mostly technical blocks, and a couple removed items)

import mods.nei.NEI;

print("NEI.zs loading...");

# Disabled & technical items
/*
NEI.hide(<minecraft:portal>);
NEI.hide(<minecraft:end_portal>);
NEI.hide(<minecraft:end_portal_frame>);
NEI.hide(<minecraft:mob_spawner:*>);
NEI.hide(<minecraft:monster_egg:*>);
*/

NEI.hide(<ae2stuff:Encoder>);
NEI.hide(<aether:aetherPortal>);
NEI.hide(<aether:mobSpawner>);
NEI.hide(<compacter:Cobbler>);
// NEI.hide(<cookingforblockheads:toast>);
NEI.hide(<extrae:emcengine>);
NEI.hide(<extrae:rfcollector>);
NEI.hide(<Aroma1997Core:wrench>);
NEI.hide(<Aroma1997sDimension:aromicPortal>);
NEI.hide(<AWWayofTime:demonPortalMain>);
NEI.hide(<AWWayofTime:efficiencyRune>);
NEI.hide(<DraconicEvolution:customSpawner>);
NEI.hide(<GraviSuite:BlockRelocatorPortal>);
NEI.hide(<IronChest:BlockIronChest:8>);
NEI.hide(<IronChest:obsidianNetheriteUpgrade>);
NEI.hide(<Thaumcraft:blockEldritchNothing>);
NEI.hide(<Thaumcraft:blockPortalEldritch>);
NEI.hide(<TwilightForest:tile.TFBossSpawner>);
NEI.hide(<TwilightForest:tile.TFPortal>);
NEI.hide(<TwilightForest:tile.TFUncraftingTable>);
NEI.hide(<rftools:invisibleShieldBlock>);
NEI.hide(<rftools:noTickInvisibleShieldBlock>);
NEI.hide(<rftools:solidShieldBlock>);
NEI.hide(<rftools:noTickolidShieldBlock>);
NEI.hide(<runicdungeons:tile.corridorKeyhole>);
NEI.hide(<runicdungeons:tile.spikeTrap>);
NEI.hide(<runicdungeons:tile.runicPortal>);
NEI.hide(<runicdungeons:tile.runicKeyhole>);
NEI.hide(<runicdungeons:tile.runeSpawner>);
NEI.hide(<runicdungeons:tile.runicCircle>);
NEI.hide(<runicdungeons:tile.runicCircleSmall>);
NEI.hide(<runicdungeons:tile.runicCircleLarge>);
NEI.hide(<runicdungeons:tile.runicLamp>);
NEI.hide(<runicdungeons:tile.runicPillar>);
NEI.hide(<runicdungeons:tile.rottingSlab>);
NEI.hide(<runicdungeons:tile.rottingLadder>);



# Items with no textures (I assume they're all technical?)

NEI.hide(<Aroma1997Core:wrenched>);
NEI.hide(<AWWayofTime:blockMimic>);
NEI.hide(<AWWayofTime:blockSchemSaver>);
NEI.hide(<AWWayofTime:bloodLight>);
NEI.hide(<AWWayofTime:spectralContainer>);
NEI.hide(<Botania:manaFlame>);
NEI.hide(<Botania:gaiaHeadBlock>);
NEI.hide(<BuildCraft|Core:list>);
NEI.hide(<BuildCraft|Robotics:redstone_board>.withTag({id: "logisticspipes:boardRobotRouter"}));
NEI.hide(<LogisticsPipes:logisticsPipeBlock>);
NEI.hide(<LogisticsPipes:item.itemModule:14>);
NEI.hide(<LogisticsPipes:item.itemModule:15>);
NEI.hide(<LogisticsPipes:item.itemUpgrade:44>);
NEI.hide(<rftools:proxyBlock>);



# Debug tools

NEI.hide(<BigReactors:BRDebugTool>);
NEI.hide(<BuildCraft|Core:debugger>);
NEI.hide(<IC2:itemDebug>);
NEI.hide(<MCFrames:mcframes.motor>);
NEI.hide(<MineFactoryReloaded:rednet.meter>);
NEI.hide(<PowerConverters3:debugItem>);
NEI.hide(<ProjRed|Core:projectred.core.wiredebugger>);
NEI.hide(<ThermalExpansion:meter>);
NEI.hide(<gendustry:HiveSpawnDebugger>);



# TEoE mod

NEI.hide(<ModName:essence_helmet>);
NEI.hide(<ModName:essence_chestplate>);
NEI.hide(<ModName:essence_leggings>);
NEI.hide(<ModName:essence_boots>);

/*
NEI.hide(<appliedenergistics2:item.ItemFacade:*>);
NEI.hide(<BuildCraft|Transport:pipeFacade:*>);
NEI.hide(<ExtraUtilities:microblocks:*>);
NEI.hide(<ForgeMicroblock:microblock>);
NEI.hide(<ForgeMicroblock:microblock:1>);
NEI.hide(<ForgeMicroblock:microblock:2>);
*/

print("NEI.zs loaded");