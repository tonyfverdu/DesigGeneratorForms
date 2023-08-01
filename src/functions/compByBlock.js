
export default function compByBlock(parBlock) {
  let arrayCompByBlock = []
  if (Array.isArray(parBlock.columns)) {
    const arrayCompByBlock = parBlock.columns.map(col => col.components.map(comp => comp))
  } else {
    console.log('Error: parBlock.columns in the function "compByBlock" must be an array!!')
  }

  return arrayCompByBlock;
}
