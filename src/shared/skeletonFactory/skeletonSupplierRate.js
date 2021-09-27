import { SKELETON_KEY } from './skeletonFactory';

function skeletonSupplierRates() {
  return {
    id: SKELETON_KEY,
    name: SKELETON_KEY,
    rate: SKELETON_KEY,
    project: SKELETON_KEY,
    suppliers: SKELETON_KEY,
    supplierNames: SKELETON_KEY
  };
}

function _skeletonSupplierRate() {
  return {
    id: SKELETON_KEY,
    name: SKELETON_KEY,
    rateId: SKELETON_KEY,
    suppliers: [{ id: SKELETON_KEY, name: SKELETON_KEY }]
  };
}

export const skeletonSupplierRate = {
  supplierRates: skeletonSupplierRates,
  supplierRate: _skeletonSupplierRate
};
