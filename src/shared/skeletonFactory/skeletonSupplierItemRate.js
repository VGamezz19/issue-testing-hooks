import { SKELETON_KEY, SKELETON_KEY_NUMBER } from './skeletonFactory';

function skeletonSupplierItemRates() {
  return {
    id: SKELETON_KEY,
    itemRate: SKELETON_KEY,
    description: SKELETON_KEY,
    measure: SKELETON_KEY,
    sellingPrice: SKELETON_KEY_NUMBER,
    costPrice: SKELETON_KEY_NUMBER,
    costPercent: SKELETON_KEY_NUMBER
  };
}

function _skeletonSupplierItemRate() {
  return {
    id: SKELETON_KEY,
    itemRate: SKELETON_KEY,
    description: SKELETON_KEY,
    measure: SKELETON_KEY,
    sellingPrice: SKELETON_KEY_NUMBER,
    costPrice: SKELETON_KEY_NUMBER,
    costPercent: SKELETON_KEY_NUMBER
  };
}

export const skeletonSupplierItemRate = {
  supplierItemRates: skeletonSupplierItemRates,
  supplierItemRate: _skeletonSupplierItemRate
};
