export default function findIndexBlockSelect(parArrayBlocks, parBlockSelect) {
  if (!Array.isArray(parArrayBlocks)) {
    throw new Error('Error: The argument of the function "findIndexBlockSelect" must be an array!!');
  }

  const newIndexBlockSelect = parArrayBlocks.findIndex(block => block.id_Block === parBlockSelect.id_Block);
  if (newIndexBlockSelect === -1) {
    throw new Error('Error: There are no elements in the array of the function "findIndexBlockSelect"');
  }

  return newIndexBlockSelect;
}