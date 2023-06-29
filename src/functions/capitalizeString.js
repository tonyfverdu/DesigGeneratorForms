export default function capitalizeString(parString) {
  let resultString = ""
  if (typeof parString === "string") {
    const allToLower = parString.toLowerCase()
    resultString = allToLower.charAt(0).toUpperCase() + allToLower.slice(1)
  } else {
    console.log('Error:  The argument of the function "capitalizeString" must be an string value !! ')
    resultString = null
  }
  return resultString
}
