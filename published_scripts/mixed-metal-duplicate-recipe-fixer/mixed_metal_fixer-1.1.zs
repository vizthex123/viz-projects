# Fixes the Mixed Metal Ingot recipes from Tech Reborn
# Script by vizthex
# https://www.curseforge.com/members/vizthex/projects
# Version 1.1

import crafttweaker.api.tag.MCTag;

print("mixed_metal_fixer.zs loading...");

val middle = <tag:items:mixfix:ingots/middle>;
val bottom = <tag:items:mixfix:ingots/bottom>;

middle.add(<tag:items:c:ingots/brass>);
middle.add(<tag:items:c:ingots/bronze>);
bottom.add(<tag:items:c:ingots/tin>);
bottom.add(<tag:items:c:ingots/zinc>);


val middle_ingot = <tag:items:mixfix:mixed_metal_middle>;
val bottom_ingot = <tag:items:mixfix:mixed_metal_bottom>;
val mixed_metal = <item:techreborn:mixed_metal_ingot>;

val aluminum = <tag:items:c:ingots/aluminum>;
val invar = <tag:items:c:ingots/invar>;
val nickel = <tag:items:c:ingots/nickel>;
val refined_iron = <tag:items:c:ingots/refined_iron>;
val titanium = <tag:items:c:ingots/titanium>;
val tungsten = <tag:items:c:ingots/tungsten>;
val tungstensteel = <tag:items:c:ingots/tungstensteel>;

craftingTable.remove(mixed_metal);

craftingTable.addShaped("mixed_metal_refined_iron", mixed_metal*2,
    [[refined_iron, refined_iron, refined_iron],
    [middle_ingot, middle_ingot, middle_ingot],
    [bottom_ingot, bottom_ingot, bottom_ingot]]);

craftingTable.addShaped("mixed_metal_nickel", mixed_metal*3,
    [[nickel, nickel, nickel],
    [middle_ingot, middle_ingot, middle_ingot],
    [bottom_ingot, bottom_ingot, bottom_ingot]]);

craftingTable.addShaped("mixed_metal_aluminum_nickel", mixed_metal*4,
    [[nickel, nickel, nickel],
    [middle_ingot, middle_ingot, middle_ingot],
    [aluminum, aluminum, aluminum]]);

craftingTable.addShaped("mixed_metal_invar", mixed_metal*4,
    [[invar, invar, invar],
    [middle_ingot, middle_ingot, middle_ingot],
    [bottom_ingot, bottom_ingot, bottom_ingot]]);

craftingTable.addShaped("mixed_metal_aluminum_invar", mixed_metal*5,
    [[invar, invar, invar],
    [middle_ingot, middle_ingot, middle_ingot],
    [aluminum, aluminum, aluminum]]);

craftingTable.addShaped("mixed_metal_titanium", mixed_metal*5,
    [[titanium, titanium, titanium],
    [middle_ingot, middle_ingot, middle_ingot],
    [bottom_ingot, bottom_ingot, bottom_ingot]]);

craftingTable.addShaped("mixed_metal_titanium_aluminum", mixed_metal*6,
    [[titanium, titanium, titanium],
    [middle_ingot, middle_ingot, middle_ingot],
    [aluminum, aluminum, aluminum]]);

craftingTable.addShaped("mixed_metal_tungsten", mixed_metal*5,
    [[tungsten, tungsten, tungsten],
    [middle_ingot, middle_ingot, middle_ingot],
    [bottom_ingot, bottom_ingot, bottom_ingot]]);

craftingTable.addShaped("mixed_metal_tungsten_aluminum", mixed_metal*6,
    [[tungsten, tungsten, tungsten],
    [middle_ingot, middle_ingot, middle_ingot],
    [aluminum, aluminum, aluminum]]);

craftingTable.addShaped("mixed_metal_tungstensteel", mixed_metal*8,
    [[tungstensteel, tungstensteel, tungstensteel],
    [middle_ingot, middle_ingot, middle_ingot],
    [bottom_ingot, bottom_ingot, bottom_ingot]]);

craftingTable.addShaped("mixed_metal_tungstensteel_aluminum", mixed_metal*9,
    [[tungstensteel, tungstensteel, tungstensteel],
    [middle_ingot, middle_ingot, middle_ingot],
    [aluminum, aluminum, aluminum]]);

print("mixed_metal_fixer.zs loaded");