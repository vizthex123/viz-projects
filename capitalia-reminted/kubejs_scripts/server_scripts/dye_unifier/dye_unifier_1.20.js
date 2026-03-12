// Makes dye recipes use the tags from the datapack
// Only wet & dry items require smelting (like in vanilla)
ServerEvents.recipes(e => {

    // Removals
    e.remove({type: "crafting_shapeless", output: "white_dye"})
    e.remove({type: "crafting_shapeless", output: "orange_dye"})
    e.remove({type: "crafting_shapeless", output: "magenta_dye"})
    e.remove({type: "crafting_shapeless", output: "light_blue_dye"})
    e.remove({type: "crafting_shapeless", output: "yellow_dye"})
    e.remove({type: "crafting_shapeless", output: "lime_dye"})
    e.remove({type: "smelting", output: "lime_dye"})
    e.remove({type: "crafting_shapeless", output: "pink_dye"})
    e.remove({type: "crafting_shapeless", output: "gray_dye"})
    e.remove({type: "crafting_shapeless", output: "light_gray_dye"})
    e.remove({type: "crafting_shapeless", output: "cyan_dye"})
    e.remove({type: "crafting_shapeless", output: "purple_dye"})
    e.remove({type: "crafting_shapeless", output: "blue_dye"})
    e.remove({type: "crafting_shapeless", output: "brown_dye"})
    e.remove({type: "crafting_shapeless", output: "green_dye"})
    e.remove({type: "smelting", output: "green_dye"})
    e.remove({type: "crafting_shapeless", output: "red_dye"})
    e.remove({type: "crafting_shapeless", output: "black_dye"})

    // White
    e.shapeless("white_dye", ["#dyetagger:dye_materials/white"]).id("dyeunifier:white_dye")
    e.shapeless("2x white_dye", ["#dyetagger:dye_materials/white_double"]).id("dyeunifier:white_dye_double")
    e.smelting("white_dye", ["#dyetagger:dye_materials/white_smeltables"], 1).id("dyeunifier:white_dye_smelting")

    // Orange
    e.shapeless("orange_dye", ["#dyetagger:dye_materials/orange"]).id("dyeunifier:orange_dye")
    e.shapeless("2x orange_dye", ["#dyetagger:dye_materials/orange_double"]).id("dyeunifier:orange_dye_double")
    e.shapeless("2x orange_dye", ["#forge:dyes/yellow", "#forge:dyes/red"]).id("dyeunifier:orange_dye_combine")
    e.smelting("orange_dye", ["#dyetagger:dye_materials/orange_smeltables"], 1).id("dyeunifier:orange_dye_smelting")

    // Magenta
    e.shapeless("magenta_dye", ["#dyetagger:dye_materials/magenta"]).id("dyeunifier:magenta_dye")
    e.shapeless("2x magenta_dye", ["#dyetagger:dye_materials/magenta_double"]).id("dyeunifier:magenta_dye_double")
    e.shapeless("2x magenta_dye", ["#forge:dyes/purple", "#forge:dyes/pink"]).id("dyeunifier:magenta_dye_combine")
    e.shapeless("3x magenta_dye", ["#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/pink"]).id("dyeunifier:magenta_dye_triple_combine")
    e.shapeless("4x magenta_dye", ["#forge:dyes/red", "#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/white"]).id("dyeunifier:magenta_dye_quadruple_combine")
    e.smelting("magenta_dye", ["#dyetagger:dye_materials/magenta_smeltables"], 1).id("dyeunifier:magenta_dye_smelting")

    // Light Blue
    e.shapeless("light_blue_dye", ["#dyetagger:dye_materials/light_blue"]).id("dyeunifier:light_blue_dye")
	//e.shapeless("2x light_blue_dye", ["#dyetagger:dye_materials/light_blue_double"]).id("dyeunifier:light_blue_dye_double")
    e.shapeless("2x light_blue_dye", ["#forge:dyes/white", "#forge:dyes/blue"]).id("dyeunifier:light_blue_dye_combine")
    e.smelting("light_blue_dye", "#dyetagger:dye_materials/light_blue_smeltables", 1).id("dyeunifier:light_blue_smelting")

    // Yellow
    e.shapeless("yellow_dye", ["#dyetagger:dye_materials/yellow"]).id("dyeunifier:yellow_dye")
    e.shapeless("2x yellow_dye", ["#dyetagger:dye_materials/yellow_double"]).id("dyeunifier:yellow_dye_double")
	//e.shapeless("3x yellow_dye", ["#dyetagger:dye_materials/yellow_triple"]).id("dyeunifier:yellow_dye_triple")
    e.smelting("yellow_dye", "#dyetagger:dye_materials/yellow_smeltables", 1).id("dyeunifier:yellow_dye_smelting")

    // Lime
    e.shapeless("lime_dye", ["#dyetagger:dye_materials/lime"]).id("dyeunifier:lime_dye")
	//e.shapeless("2x lime_dye", ["#dyetagger:dye_materials/lime_double"]).id("dyeunifier:lime_dye_double")
    e.smelting("lime_dye", "#dyetagger:dye_materials/lime_smeltables", 1).id("dyeunifier:lime_dye_smelting")

    // Pink
    e.shapeless("pink_dye", ["#dyetagger:dye_materials/pink"]).id("dyeunifier:pink_dye")
    e.shapeless("2x pink_dye", ["#dyetagger:dye_materials/pink_double"]).id("dyeunifier:pink_dye_double")
    e.shapeless("2x pink_dye", ["#forge:dyes/white", "#forge:dyes/red"]).id("dyeunifier:pink_dye_combine")
    e.smelting("pink_dye", "#dyetagger:dye_materials/pink_smeltables", 1).id("dyeunifier:pink_dye_smelting")

    // Grey
    e.shapeless("gray_dye", ["#dyetagger:dye_materials/gray"]).id("dyeunifier:grey_dye")
    e.shapeless("gray_dye", ["#forge:dyes/white", "#forge:dyes/black"]).id("dyeunifier:grey_dye_combine")
    e.smelting("gray_dye", "#dyetagger:dye_materials/gray_smeltables", 1).id("dyeunifier:grey_dye_smelting")

    // Light Grey
    e.shapeless("light_gray_dye", ["#dyetagger:dye_materials/light_gray"]).id("dyeunifier:light_gray_dye")
    e.shapeless("2x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/gray"]).id("dyeunifier:light_gray_dye_combine")
    e.shapeless("3x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/white", "#forge:dyes/black"]).id("dyeunifier:light_grey_dye_triple_combine")

    // Cyan
    e.shapeless("cyan_dye", ["#dyetagger:dye_materials/cyan"]).id("dyeunifier:cyan_dye")
    e.shapeless("2x cyan_dye", ["#dyetagger:dye_materials/cyan_double"]).id("dyeunifier:cyan_dye_double")
    e.shapeless("2x cyan_dye", ["#forge:dyes/green", "#forge:dyes/blue"]).id("dyeunifier:cyan_dye_combine")
    e.smelting("cyan_dye", "#dyetagger:dye_materials/cyan_smeltables", 1).id("dyeunifier:cyan_dye_smelting")

    // Purple
    e.shapeless("purple_dye", ["#dyetagger:dye_materials/purple"]).id("dyeunifier:purple_dye")
    e.shapeless("2x purple_dye", ["#dyetagger:dye_materials/purple_double"]).id("dyeunifier:purple_dye_double")
    e.shapeless("2x purple_dye", ["#forge:dyes/red", "#forge:dyes/blue"]).id("dyeunifier:purple_dye_combine")
    e.smelting("purple_dye", "#dyetagger:dye_materials/purple_smeltables", 1).id("dyeunifier:purple_dye_smelting")

    // Blue
    e.shapeless("blue_dye", ["#dyetagger:dye_materials/blue"]).id("dyeunifier:blue_dye")
    e.shapeless("2x blue_dye", ["#dyetagger:dye_materials/blue_double"]).id("dyeunifier:blue_dye_double")
    e.shapeless("blue_dye", ["#forge:dyes/black", "#forge:dyes/light_blue"]).id("dyeunifier:blue_dye_combine")
    e.smelting("blue_dye", "#dyetagger:dye_materials/blue_smeltables", 1).id("dyeunifier:blue_dye_smelting")

    // Brown
    e.shapeless("brown_dye", ["#dyetagger:dye_materials/brown"]).id("dyeunifier:brown_dye")
    e.shapeless("2x brown_dye", ["#dyetagger:dye_materials/brown_double"]).id("dyeunifier:brown_dye_double")
    e.smelting("brown_dye", "#dyetagger:dye_materials/brown_smeltables", 1).id("dyeunifier:brown_dye_smelting")

    // Green
    e.shapeless("green_dye", ["#dyetagger:dye_materials/green"]).id("dyeunifier:green_dye")
    e.shapeless("2x green_dye", ["#dyetagger:dye_materials/green_double"]).id("dyeunifier:green_dye_double")
    e.smelting("green_dye", "#dyetagger:dye_materials/green_smeltables", 1).id("dyeunifier:green_dye_smelting")
    e.smelting("green_dye", "scute", 2).id("dyeunifier:scute_green")

    // Red
    e.shapeless("red_dye", ["#dyetagger:dye_materials/red"]).id("dyeunifier:red_dye")
    e.shapeless("2x red_dye", ["#dyetagger:dye_materials/red_double"]).id("dyeunifier:red_dye_double")
    e.shapeless("red_dye", ["melon_slice", "melon_slice"]).id("dyeunifier:red_dye_melon_slices")
    e.smelting("red_dye", "#dyetagger:dye_materials/red_smeltables", 1).id("dyeunifier:red_dye_smelting")

    // Black
    e.shapeless("black_dye", ["#dyetagger:dye_materials/black"]).id("dyeunifier:black_dye")
    e.shapeless("2x black_dye", ["#dyetagger:dye_materials/black_double"]).id("dyeunifier:black_dye_double")
    e.smelting("black_dye", "#dyetagger:dye_materials/black_smeltables", 1).id("dyeunifier:black_dye_smelting")

})