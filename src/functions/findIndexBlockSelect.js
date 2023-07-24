export default function findIndexBlockSelect(parArrayBlocks, parBlockSelect, parIndexBlockSelect, parSetIndexBlockSelect) {
  if (Array.isArray(parArrayBlocks)) {
    parSetIndexBlockSelect(parArrayBlocks.findIndex(block => block.id_Block === parBlockSelect.id_Block))
    if (parIndexBlockSelect <= -1) {
      console.error(`Error:  There is not the elements in the array of the function "findIndexBlockSelect"`)
      parSetIndexBlockSelect(null)
    }
  } else {
    console.error('Error:  The argument of the function "findIndexBlockSelect" must be an array!!')
    parSetIndexBlockSelect(null)
  }
  return parIndexBlockSelect;
}