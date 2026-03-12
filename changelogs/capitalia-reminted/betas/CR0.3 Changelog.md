# Main changes

Added a few more loading screen tips<br />
Fixed the modpack name in the FTB Quests UI<br />
Deleted the "Foundations" quest group since it's a bit pointless<br />
Changed the registry name for Lubricant
- I did add a temporary recipe to convert the old item into the new one, which will be removed in the next update
- Also changed its texture

<br />

Starting money is now $0, as intended<br />
Added a reminder to enable cheats so quests work properly<br />
Renamed the Basic Generator to Prototype Generator<br />
Tweaked the structure layout for several machines (just move the blocks to their new locations and that should fix it)<br />

<br />

Localised a few bounty entries that I missed last time<br />
Disabled FTB Chunks and Ranks since they're only useful for servers
- Also disabled the default keybinds

<br />

Added Fluid and Large Item ports<br />
Changed the outline colours for Energy, Fluid, and Item ports (i was also going to add unique textures for each item tier, but i don't think i can do so lol)<br />
Updated my internal guidelines for both Alloyer machines
- Renamed the Advanced Alloyer to "Improved Alloyer"
- Removed fuel requirements on the Improved Alloyer since it uses RF, but it only accepts raw items instead of ingots (same applies to the Basic Alloyer)
- Removed the Bronze Block recipe to adhere to this new standard

<br />

Tweaked a lot of research stuff
- Moved everything to its own script file in the vague hope that a proper research mod releases on this version
- Tweaked the Broken Stone Data recipe to just be a flat 50% cheaper version of Stone Data Chunks
- Changed the fuel tags to be `research_fuel`
- Moved existing head recipes to a new Reprocessor machine, and added custom ones to convert each head into various data disks (also added a Shredder recipe for the Elder Eye)
- Added Wither Skeleton Skull recipe

<br />

Re-added Mekanism (also added Additions, Covers, and the AE2 add-on)
- I figured people might wanna use it over TE, but for now it's soft-disabled with the `mekanism` game stage
- Cl0ud's Paxels has been removed since Mekanism Tools is in the pack again

<br />

Imported my Sawdust system from my other modpacks<br />
Updated the pack's fork of Extra Data Models datapack to include coin drops (also updated it to v3.11 of the datapack)<br />
Added Dye Recipe Unifier and TeamAbnormals Recipe Fixer

<br />

Updated Extra Data Models Trivia<br />
Updated Stoneborn - Modded Compatibility<br />
Updated Vertical Nuggets

<br />

Removed Stoneborn: Missing Mods since it's no longer necessary


<br /> <br />

--------------------------------------------------
# Bugfixes

Fixed the Industrial Trading permit not working<br />
Fixed Forestry's bees, bee hives, and decorative blocks being staged behind the Bronze Age (discovered by Damon Fyrian on the discord)
- Also destaged several basic items I missed in previous updates


<br /> <br />

--------------------------------------------------
# Balance changes

The Advanced Laboratory can now process all of the Basic Laboratory's recipes (with Stone and Bronze data being replaced by a more efficient Iron Data Disc recipe<br />
Limited Masterful Machinery Reload's Energy Ports to 80/t I/O (was 2,000)<br />
Reduced Lapis Armour's protection by 2 (full set now gives 8 instead of 10 - equal to Leather Armour)<br />
Rebalanced Cladded Armour's durability and protection
- Changed the Smithing Template duplication recipe to use Copper instead of Iron, and expanded the list of catalyst items
- Reduced durability to be double that of each Leather Armour piece
- Now has the `freeze_immune_wearables` tag

<br />

Nerfed the damage of several axes I missed<br />
Rebalanced Rose Gold armour again (also buffed tool durability by 5 - it's now 240)<br />
Reduced the durability of Traveller's Boots (now 250, was 429) and swapped out the Refined Obsidian for Steel<br />
Adjusted the damage & durability of both sets of bronze tools
- Changed the recipe for Forestry's bronze tools to use copper & tin instead of bronze, and reduced their durability to 185
- To better enforce the progression, I also rebalanced copper equipment (now has 150 durability instead of 190)

<br />

Buffed Rose Gold durability to 350 (was 260)<br />
Buffed Osmium damage to 6 (matches Iron) and slightly buffed its mining speed (now 5 instead of 4). Reduced durability to 275 and protection to 14.


<br /> <br />

--------------------------------------------------
# Economy changes

Added some basic coin drops to test the system<br />
Greatly improved bounties:
- Added two new decrees: Miner and Zoologist
- Adjusted the objective pool for the Numismatist, removed copper coins as a reward, and added Seashells and Nautilus Shells as a reward
- Added a recipe to clear board NBT data, allowing you to re-roll the decree by replacing it
- Tweaked the values & rarities of a ton of items (also swapped Project Red Silver to Thermal Series)
- Renamed the Exotic Investigator decree to Fantobiologist

<br />

Flint can now be sold for 50¢<br />
Coal & Charcoal can now be sold for 25¢<br />
Fossil Fuel can now be sold for 75¢<br />
Leather can now be sold for $1.50<br />
Fluix Crystals can now be sold for $20

<br />

Fixed incorrect purchase prices on a few items<br />
Removed Charcoal and Cobblestone from the shop's purchase menu<br />
Increased the sell values of Soul Beads<br />
Increased the sell values of Information and Atomic research<br />
Added sell values to my recycling items:
- Powdered Stone: 1¢
- Congealed Matter: 50¢
- Shredded Hide: 75¢
- Scrap: $1

<br />

Redstone can now be purchased if you have an Industrial Trading Permit (also increased its sell price)<br />
Buffed the Industrial Data Chip's sell value to $125 (was 100)<br />
Glowstone Dust can now be sold for $17.50<br />
Osmium Ingots can now be sold for $20<br />
Rose Gold Ingots can now be sold for $30


<br /> <br />

--------------------------------------------------
# Quest changes

Fixed a softlock on the Smeltability quest<br />
Destaged Fluxducts and added a few as quest rewards<br />
Renamed "Steam Powered Giraffe" to "Dynamic Power" and made a separate quest for Thermal Systeams' content<br />
Updated all of the custom multiblock quests with their current costs (and swapped out the quest icons)<br />
Doubled the cost of Bountiful Labour, and added a random basic decree (gemologist, miner, and numismatist) as a reward

<br />

Added quests to make the Fueled and Powered Quarry<br />
Updated Alloyed Mining to accept either Bronze Pickaxe<br />
Made the Lubricant purchase quest repeatable and added one for Glue<br />
Added Unbreaking I to the pickaxe rewarded from Primitive Auto-Mining
- Added Unbreaking II to the one from Improved Auto-Mining
- Added Unbreaking III to the one from Endearing Auto-Mining


<br /> <br />

--------------------------------------------------
# Recipe changes

Added a recipe to pulverize Calcite into Bone Meal<br />
Added a recipe to pulverizer Sky Stone into Sky Stone Dust<br />
Reduced the amount of Bone Meal Shells give to 2 (was 3)<br />
Changed the Dried Peat -> Peat recipe to Blasting (was Smelting)<br />
The Clockwork Engine can now be upgraded into a Numismatic Dynamo

<br />

Moved the Sculken Comb's recipe to the Squeezer (was Centrifuge)<br />
Replaced all the upgrade recipes for Simple Quarry so they fit better into the pack's progression<br />
Changed the Advanced Alloyer's Red and Electrotine ingot recipes to output the Ingots instead of the Compound<br />
Changed the Dolly Lubricant recipe to also require Glue (and added one for the Diamond Dolly)

<br />

Adjusted all of the Rock Crusher recipes<br />
Enabled my Dense Scrap -> Netherite Ingot recipe<br />
The Automation Agent recipe for the Research Catalyst now requires a Stone Button or Powdered Stone (was a Stone Rod)<br />
Replaced the Stone Rod Empty Vial recipe with one that uses Glass Panes and Powdered Stone<br />
Added a Magma Crucible recipe to melt Thin Ice into Water<br />
Imported my sawmill script from Hi-Tech Revolution

<br />

Added a recipe to decraft Prestige Scrip into Chits<br />
Added a recipe to convert Surface Moss into Biomass<br />
Added Pyrolyzer recipes for Charcoal and Fossil Fuel<br />
Changed Glue Residue to use any item with the `reminted:oily` tag instead of `forge:slimeballs` (since the point of Glue is that it's a slimeball alternative)<br />
Reduced the cost of the Rose Gold Smithing Template

<br />

Updated my recycling recipes
- Swapped Paxels for their Mekanism Tools version
- Added a recipe to make Diamonds from Congealed Matter
- Added Copper to the shreddable tag and removed its default recipes
- Removed a few extra Iron and Gold Nugget smelting recipes I missed
- Added a new tag and recipe to recycle gem equipment (e.g. diamond gear). It's still WIP, but it's got diamond gear and a few things from Project Red.

<br />

Seed Oil can now be burned in a Compression Dynamo<br />
Added the Sawdust Clump (500 RF) and Lubricant (2,000 RF) to the Prototype Generator<br />
Imported the Transmutator from Hi-Tech Revolution<br />
- Moved the Ravager Hide -> Leather recipe to the Transmutator

<br />

Added recipes to make Copper and Tin dust<br />
Buffed a couple of Basic Alloyer Bronze recipes<br />
Added a Bronze recipe for Masterful Machinery Reload's Vent<br />
Adjusted the RF costs for the Improved Alloyer's Bronze recipes, and added one that uses Ingots<br />
Did minor tweaks to a bunch of recipes & tags I don't feel like listing lol<br />
Removed Bronze from the Energy Input Port recipe

<br />

Added Masterful Machinery Reload's blocks to the recycling tags<br />
Moved the Stone Quarry recycling to the Rock Crusher and removed its Congealed Matter output<br />
Moved the Powdered Stone -> Cobblestone recipe to the Quantum Compressor<br />
Added more Powdered Stone -> Stonelike Block recipes<br />
Adjusted the RF costs of all the prestige and recycling recipes<br />
Added a recipe to refine Water into Gold Nuggets (1% chance)

<br />

Added several Reprocessor recipes (one of which is rotten flesh/blood -> raw beef)<br />
Changed the Calcium research recipe to require 6 items (was 4) and 4 small fuel (was 2)<br />
Added a Terracotta research recipe (similar to the rocks recipe, but it's faster and has a chance to a bonus point)<br />
Added a few rocks I missed to the `reminted:rocks` tag (and digger's backpack)

<br />

Fixed the Rose Gold Sword smithing recipe requiring a Copper Pickaxe<br />
Fixed the Improved Alloyer recipe for Rose Gold being in the Basic Alloyer<br />
Updated the Peat recipe for Bronze to use my custom material tags (and made it craft faster)<br />
Added recipes to make Functional Storage's drawers with variantless planks<br />
Added Rock Crusher recipes for Andesite, Diorite, Granite, Gravel, Sand, and Dirt<br />
Added a Reprocessor recipe for Magma and Icicles<br />
Peat can now be used to make Torches

<br />

Added a recipe to melt Raw Meat into Blood (500 mB)<br />
Tweaked my Rose Gold recipes to adhere to my new standards (also removed the few default ones)<br />
Destaged Flint & Steel so you can access Forestry's log piles earlier<br />
Buffed the Diamond Dust Pulverizer Catalyst


<br /> <br />

--------------------------------------------------
# Misc changes

Updated my custom REI collapsible entries<br />
Added an REI info tab for the Cladding Upgrade Smithing Template<br />
Added the Quest Book to the `reminted:primitive_research` tag<br />
Added Sky Stone Dust to the `reminted:automation_agent` tag<br />
Added the `forestry:backpack/allow/adventurer` tag to many of my custom items that you can get from bounties (and many more items suggested by Damon Fyrian on the discord server)

<br />

Added Raw Ore Blocks to the Miner's Backpack<br />
Added sub-names to some of my KubeJS scripts (does nothing for end users, but I might as well note it here lol)<br />
Moved Extended Crafting's REI tabs to between Hostile Neural Networks and the Thermal Series
- Also moved Forestry's bees & mutations to be just before Gendustry (so they're the final Forestry tabs)

<br />

Added Terracotta to the Digger's Backpack<br />
Added research recipes that use the `reminted:mudlike` tag<br />
Increased the maximum height and width of the Stone Quarry to 4 (2x2 square)<br />
Removed the end-only blocks from the Ender Quarry's recipe

<br />

Adjusted the burn time for peat blocks<br />
Fixed the `reminted:basic_pickaxe` tag not loading in<br />
Disabled Mekanism's REI tabs since the mod is soft-disabled

<br />

Added Amber to the Lapidary Dynamo<br />
Added coins to the Numismatic Dynamo (can't believe it took this long lol)<br />
Added Crude Oil to the Compression Dynamo and (almost) tripled the output of Seed Oil<br />
Added Induction Smelter recipes for Red and Electrotine alloys

<br />

Disabled the Low-Efficiency Generator & hid it from REI<br />
Updated the Industrial Data Chip and Information Data Disk textures<br />
Icicles and Blizz Powder can now be researched (same recipe as Snowballs, which now uses the `reminted:snowlike` tag)<br />
Added an Advanced Laboratory recipe for the Iron Data Disk (skips the Stone and Bronze ones so you can directly craft it)<br />


<br /> <br />

--------------------------------------------------
# Mod changes

Updated Forge

<br />

## Additions

Accelerated Decay<br />
CucumberJS<br />
Delete Worlds To Trash<br />
Flat Bedrock (how did i forget this when making the pack omg)<br />
Jaden's Nether Expansion<br />
JourneyMap Integration (disabled by default)<br />
Leathered Boots<br />
Loot Integrations<br />
Ranged Pumps<br />
Resource Pack Overrides<br />
Thermal Parallel<br />
Thermal Systeams<br />
Transprotwo

<br />

## Replacements

Clean Swing Through Grass with Cut Through<br />
Masterful Machinery with Masterful Machinery Reload<br />
Panda's Falling Trees with Enhanced Falling Trees<br />
Pretty Pipes (and Fluids) with Classic Pipes
- Swapped out the Pretty Pipes quests I made with the Classic Pipes quests from Hi-Tech Revolution (and tweaked them a bit to fit this pack)

<br />

## Updates

All The Wood We've Got<br />
Applied Energistics 2<br />
Applied Energistics 2 Wireless Terminals<br />
Artemis' Laboratory Blocks<br />
Astrological<br />
BadOptimizations<br />
Balm<br />
Bookshelf<br />
Collective<br />
Crafting Tweaks<br />
Cucumber Library<br />
Cupboard<br />
Decursio Stages<br />
Eccentric Tome<br />
Ecologics<br />
Enchantment Descriptions<br />
Energy Meter<br />
Entity Culling<br />
FTB Library<br />
FTB Quests<br />
FTB Teams<br />
FancyMenu<br />
FastSuite<br />
Forestry: Community Edition<br />
Fusion<br />
GeckoLib<br />
Gendustry: Community Edition<br />
GuideME<br />
Hopo Better Ruined Portals<br />
Kotlin for Forge<br />
LootJS<br />
Mobtimizations<br />
ModernFix<br />
Oh The Biomes We've Gone<br />
Oh The Trees You'll Grow<br />
Open Loader<br />
Patchouli<br />
Research Lab<br />
Rose Gold Equipment<br />
Tips<br />
Traveler's Boots<br />
Zeta