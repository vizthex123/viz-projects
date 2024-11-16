# Guidelines

1) Recipe heat & time copies the primary material. Seems like there's no standard for melting times (it's probably made automatically lol), so I can just add a few seconds whenever

2) Molten amounts are equal to the total material cost (e.g. a Multi-Piston gives an extra ingot because of the Piston used to craft it), and are rounded down in the event of a decimal divison. Output order is determined by amount, and goes alpabetically if there's a tie.

3) Byproducts are calculated from left -> right, top -> bottom of the crafting grid - the first item found is the primary output

4) Byproduct exception: If one material is used in a greater than 1:1 ratio, it becomes the primary material (e.g. using a Copper Block and Iron Plate with the Plate being on top of the Block)

<br />

## Quintessence-only changes

1) Melting gives modded fluids (e.g. Redstone gives you Destablized Redstone) at a 50% rate (125 mB per Redstone instead of 250)

2) Modded content moves to their own folder, being `modname/material` cuz I hate clicking a bunch (honestly might start doing that in the main pack)