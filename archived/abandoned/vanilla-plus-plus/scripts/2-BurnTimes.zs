# Adds burn times to various items
#priority 12
print("2-BurnTimes.zs loading...");

/*
<item>.burnTime = 200;

200 = 1 item smelted
*/

<item:minecraft:fire_charge>.burnTime = 600;
<item:minecraft:magma_block>.burnTime = 800;
<item:minecraft:dried_kelp_block>.burnTime = 4000;

<item:ecologics:coconut_husk>.burnTime = 150;

<item:kubejs:biomass>.burnTime = 600;

print("2-BurnTimes.zs loaded");