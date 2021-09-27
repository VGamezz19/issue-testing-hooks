import { SKELETON_KEY, SKELETON_KEY_NUMBER } from './skeletonFactory';

function skeletonItemRates() {
  return {
    id: SKELETON_KEY,
    itemId: SKELETON_KEY,
    rateId: SKELETON_KEY,
    sellingPrice: SKELETON_KEY_NUMBER,
    costPrice: SKELETON_KEY_NUMBER,
    costPercent: SKELETON_KEY_NUMBER,
    reference: SKELETON_KEY,
    description: SKELETON_KEY,
    measure: SKELETON_KEY
  };
}

function _skeletonItemRate() {
  return {
    id: SKELETON_KEY,
    itemId: SKELETON_KEY,
    rateId: SKELETON_KEY,
    sellingPrice: SKELETON_KEY_NUMBER,
    costPrice: SKELETON_KEY_NUMBER,
    costPercent: SKELETON_KEY_NUMBER,
    reference: SKELETON_KEY,
    description: SKELETON_KEY,
    measure: SKELETON_KEY
  };
}

export const skeletonItemRate = {
  itemRates: skeletonItemRates,
  itemRate: _skeletonItemRate
};
