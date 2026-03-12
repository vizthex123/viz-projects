# Main changes

Increased the amount of time tips stay on-screen<br />
Updated the in-game title to reflect the grammatical change<br />
Changed the amount of starting money to $25 so that a line from a quest's description is now accurate

Updated Stoneborn - Modded Compatibility<br />
Added my [Name Fixer](https://curseforge.com/minecraft/texture-packs/name-fixer) resource pack
- Swapped out the existing one for a custom Renamer pack

Imported v1.1 of my [Team Abnormals Recipe Fixer](https://www.curseforge.com/minecraft/data-packs/team-abnormals-recipe-fixer) data pack<br />
Imported v3.0.3 of [Extra Data Models](https://www.curseforge.com/minecraft/data-packs/extra-data-models)

Changed the structure design of the Advanced Alloyer, Advanced Laboratory, and Shredder<br />
Added an alternate recipe for the Machine Core<br />
Changed the recipe for Circuitry

<br />

### Research improvements

- Added a few more accepted items to the Writing Desk
- Basic Research now has a 25% chance to give an extra (was 50%)
- Advanced Research now has a 50% chance to give an extra (was 25%)
- Tweaked the Broken Stone Data Chunk recipe to use a new `adhesive` tag and output 2 chunks with a 50% chance of getting 2 more (was 4 chunks)
- Added several new research recipes (mainly for points, but also a few for the various data discs)
- Bronze Data Plates and Atomic Data Models now only require 1 of the previous data type to enforce consistentcy across all tiers
- Changed the crafting reagent for the Atomic Data Model since Mekanism was removed (also increased its sell value to match)
- Renamed the `basic_fuel` tag to `research_fuel` (updated the nuggets and blocks one as well, and added more items to all of them)
- Renamed the `researchable/organic` tag to `researchable/biomass` and greatly expanded upon the list
- Fixed some research recipes using the wrong item/RF amounts


<br /> <br />

--------------------------------------------------
# Bugfixes

Fixed Redstone Aresenal not being staged<br />
Fixed Project Red's axes not working with Falling Trees

Fixed the Cobblestone and Planks challenges not using tags<br />
Fixed the Prestiege Pittance crafting into Chits instead of Scrip<br />
Fixed the Advanced Technology Sale Permission permit not being localized

Fixed status effects being on the right side of the inventory instead of the left<br />
Fixed a softlock caused by Vents not being properly staged


<br /> <br />

--------------------------------------------------
# Balance changes

Reduced the durabiilty of Rose Gold equipment<br />
Reduced the durabiilty of Project Red's equipment<br />
Slightly buffed the droprates of Sheep and Pig leather variants<br />
Enabled the Copper Upgrade and Iron Downgrade from Functional Storage


<br /> <br />

--------------------------------------------------
# Bounty changes

Changed some backend stuff for bounty rewards to make things easier to manage


<br /> <br />

--------------------------------------------------
# Economy changes

Emeralds are now buyable<br />
Golden Foods are now sellable<br />
Changed Coal to Charcoal and increased the price to 3 (was 2.50)<br />

Increased the sell price of prestige and loyalty points to better match teir intended values<br />
Increased the sell price of Copper, Bronze, and Constantan<br />
Reduced the price of Cobblestone, Sand, and Paper


<br /> <br />

--------------------------------------------------
# Recipe changes

Task Screens now use a Hopper instead of a Book in the middle<br />
Biome Makeover's peat can now be smelted into Forestry's peat<br />
Tweaked the list of stones that can be smelted into Smooth Stone<br />
Converting Loyalty Points to Presitge Chits now requires 100 (was 250)<br />
Added recipes to make Crafting Tables, Chests, and Barrels from woods without variants<br />
Standardized Peat recipes from all 3 mods that add it

Changed the pulverizer recipe for seashells to use the new `shells` tag<br />
Added a new `rocks/end` tag, replacing the Rock Crusher's recipe for End Stone<br />
Swapped 1 Fluix for 1 Charged Certus Quartz in the Energy Acceptor upgrade recipe<br />
The Advanced Alloyer recipe for Bronze now requires 4 Coal Nuggets (was 1 Coal)<br />
The Basic Alloyer recipe for Bronze now requires 1 Coal (was 2)<br />
Added a recipe to upgrade Forestry's Engines into a Stirling Dynamo


<br /> <br />

--------------------------------------------------
# Quest changes

Made all detour quests optional<br />
Fixed the company name missing in the intro quests<br />
Destaged Iron Nuggets since they're a quest reward<br />
Challenges now reward coin tiers corresponding to their internal difficulty
- Also added 2 new challenges

Added quests for Quick Quarry<br />
Renamed the LaserIO quest "Thinking With Lasers"<br />
Moved Basic Powergen to the bronze age and changed the unlock requirement<br />
Made Backpack'd III use an OR filter of the other backpacks (excludes bee and tree one)
- Increased loyalty reward to 3
- Swapped its name with #2 (mining) and changed its location.


<br /> <br />

--------------------------------------------------
# Misc changes

Updated all of my REI groups<br />
Updated a few bounty objectives with some stuff I'd missed

Moved Moss Blocks and Carpets to the Forester's Backpack<br />
Changed Salt and Sulfur Dusts to be dye ingredients instead of having the tag<br />
Changed the block requirements for the Advanced Alloyer and Advanced Laboratory<br />
Renamed the `oily_item` tag to `biomass/oily` (and added a recipe uses it to make glue)

Added slot count tooltips to Pretty Pipes' filter modules<br />
Added a recycling tooltip to the Writing Desk and Soiled Tome<br />
Disabled sorting buttons on non-inventory UIs
- This was done to prevent weird rendering bugs. You can re-enable it in InvTweaks Refoxed's config if you want to.


<br /> <br />

--------------------------------------------------
# Mod changes

## Additions

Copper Equipment<br />
Rose Gold Equipment<br />

Dis-Enchanting Table<br />
Durability Tooltip<br />
Fuel Goes Here<br />

Polymorphic Energistics<br />
Quick Quarry

FTB Ranks<br />
FTB Chunks<br />
FTB Chunks - Modded Support<br />

<br />

## Removals

FTB Essentials

<br />

## Updates

AdminShop Overhauled<br />
Applied Energistics 2<br />
Balm<br />
Building Gadgets<br />
Crafting Tweaks<br />
Cucumber Library<br />
Default Options<br />
Durability Tooltip<br />
Entity Culling<br />
Extended Crafting<br />
FTB Library<br />
FTB Quests<br />
FancyMenu<br />
Forestry: Community Edition<br />
Fusion<br />
GeckoLib<br />
GuideME<br />
Inventory Tweaks - ReFoxed<br />
Jade<br />
LaserIO Unofficial Extended Life<br />
Masterful Machinery<br />
ModernFix<br />
Oh The Biomes We've Gone<br />
Project Red (all modules)<br />
Puzzles Lib<br />
Snow Under Trees