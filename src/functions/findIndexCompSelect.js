export default function findIndexCompSelect(parArrayComps, parCompSelect, parIndexCompSelect, parSetIndexCompSelect) {
  if (Array.isArray(parArrayComps)) {
    parSetIndexCompSelect(parArrayComps.findIndex(comp => comp.id_Element === parCompSelect.id_Element))
    if (parIndexCompSelect <= -1) {
      console.error(`Error:  There is not the elements in the array of the function "findIndexBlockSelect"`)
      parSetIndexCompSelect(null)
    }
  } else {
    console.error('Error:  The argument of the function "findIndexBlockSelect" must be an array!!')
    parSetIndexCompSelect(null)
  }
  return parIndexCompSelect;
}