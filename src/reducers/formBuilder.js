import {ACTIONS} from "../constants/contants";
import {createElement, createOption, reorder} from "../utils/FormUtils";
import fpMap from "lodash/fp/map"
import filter from "lodash/fp/filter"
import curry from "lodash/fp/curry"
import cond from "lodash/fp/cond"

const isEqualid_Element = (id_Element, item) => item.id_Element === id_Element
const isDifferentid_Element = (id_Element, item) => item.id_Element !== id_Element

const getElement = (key, value, id_Element, item) =>{
  if(item.id_Element === id_Element){
    item[key] = value;
  }
  return item;
}

const getReorder = (id_Element, action, item) => {
    if(item.id_Element === id_Element){
      item.formElementValues = reorder(
        item.formElementValues,
        action.result.source.index,
        action.result.destination.index
      );
    }
    return item;
}

const curryGetElement = curry(getElement)
const curryGetReorder = curry(getReorder)
const curryIsEqualid_Element = curry(isEqualid_Element)
const curryIsDifferentid_Element = curry(isDifferentid_Element)

function formBuilder(state, action) {
  switch (action.type) {
    case ACTIONS.DRAG_END:
      if (!action.result.destination) {
        return state;
      }else {
        const items = reorder(
          state.items,
          action.result.source.index,
          action.result.destination.index
        );
        return {...state, items}
      }
    case ACTIONS.OPTION_DRAG_END:
      if (!action.result.destination) {
        return state;
      }else {
        const {result: {type: id_Element}} = action;
        const items = fpMap(curryGetReorder(id_Element, action))(state.items)
        return {...state, items}
      }
    case ACTIONS.CHANGE_VALUE:
      if (!(action.key  && action.id_Element)) {
        return state;
      }else {
        const {key, value, id_Element} = action;
        const items = fpMap(curryGetElement(key, value, id_Element))(state.items)
        return {...state, items}
      }
    case ACTIONS.ADD_ELEMENT:
      if(action.elementType) {
        const {elementType} = action;
        return {...state, items: [...state.items, createElement(state.items.length, elementType)]}
      }
      return state;
    case ACTIONS.REM_ELEMENT:
      if(action.id_Element) {
        return {...state, items: filter(curryIsDifferentid_Element(action.id_Element))(state.items)}
      }
      return state;
    case ACTIONS.ADD_OPTION:
      if(action.id_Element) {
        const {id_Element, value} = action;
        const result = Array.from(state.items);

        const addOption = cond([
          [curryIsEqualid_Element(id_Element), (item)=> ({...item, formElementValues: [...item.formElementValues, createOption(item.formElementValues.length, value)]})],
          [curryIsDifferentid_Element(id_Element), (item)=> item]
        ])

        const items =  fpMap(addOption)(result)
        return {...state, items}
      }
      return state;
    case ACTIONS.CHANGE_EDIT_MODE:
      if(action.id_Element) {
        return {...state, editMode:{...state.editMode, [action.id_Element] : !state.editMode[action.id_Element]}}
      }
      return state;
    default:
      throw new Error();
  }
}

export default formBuilder
