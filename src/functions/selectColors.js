function selectColor(parColor) {
  let colorSelect = ""

  if (typeOf(parColor) === "string") {
    switch (parColor) {
      case "white":
        colorSelect = "rgb(246, 240, 240)"
      case "yellow":
        colorSelect = "rgb(252, 248, 2)"
        break
      case "orange":
        colorSelect = "rgb(248, 164, 8)"
        break
      case "red":
        colorSelect = "rgba(207, 35, 35, 0.9)"
        break
      case "greenHell":
        colorSelect = "rgb(103, 255, 2)"
        break;
      case "greenDark":
        colorSelect = "rgb(1, 63, 22)"
        break;
      case "blueHell":
        colorSelect = "rgb(100, 250, 255)"
        break
      case "blueDark":
        colorSelect = "rgb(5, 29, 253)"
        break
      case "lila":
        colorSelect = "#ac2bac"
        break
      case "grey":
        colorSelect = "rgb(140, 140, 140)"
        break
      case "black":
        colorSelect = "rgb(13, 13, 13)"
        break

      default:
        break;
    }
  } else {
    console.error('Error:  The argument of the function "selectColor" must be a string !!')
    colorSelect = null
  }
  return colorSelect;
}

export default selectColor;

