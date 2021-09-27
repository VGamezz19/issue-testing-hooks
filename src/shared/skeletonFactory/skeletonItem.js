import { SKELETON_KEY, SKELETON_KEY_NUMBER } from './skeletonFactory';

function skeletonCategory() {
  return {
    name: SKELETON_KEY,
    id: SKELETON_KEY
  };
}

function skeletonMeasure() {
  return {
    name: SKELETON_KEY,
    id: SKELETON_KEY_NUMBER
  };
}

function _skeletonItem() {
  return {
    id: SKELETON_KEY,
    reference: SKELETON_KEY,
    description: SKELETON_KEY,
    itemCategoryId: SKELETON_KEY,
    measure: SKELETON_KEY_NUMBER,
    itemCategory: SKELETON_KEY
  };
}

export const skeletonItem = {
  category: skeletonCategory,
  measure: skeletonMeasure,
  item: _skeletonItem
};
