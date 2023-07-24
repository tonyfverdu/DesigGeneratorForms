// import formJSON_prueba_01 from "../Data/JSONFormPrueba_01";
// const block = formJSON_prueba_01.blocks[0]

export default function compByBlock(parBlock) {
  const arrayCompByBlock = parBlock.columns.map(col => col.components.map(comp => comp))
  return arrayCompByBlock;
}

// console.log("// ******************************************* //")
// console.log("block:  ", block)
// compByBlock(block) 
// console.log("// ******************************************* //")