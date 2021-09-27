import { SKELETON_KEY, SKELETON_KEY_NUMBER, SKELETON_KEY_DATE } from './skeletonFactory';

function skeletonSupplierRates() {
  return {
    id: SKELETON_KEY,
    supplier: SKELETON_KEY,
    project: SKELETON_KEY,
    rate: SKELETON_KEY
  };
}

function _skeletonRate() {
  return {
    id: SKELETON_KEY,
    name: SKELETON_KEY,
    projectId: SKELETON_KEY,
    project: SKELETON_KEY,
    validSince: SKELETON_KEY_DATE,
    validTo: SKELETON_KEY_DATE,
    itemsRate: [
      {
        id: SKELETON_KEY,
        itemId: SKELETON_KEY,
        rateId: SKELETON_KEY,
        sellingPrice: SKELETON_KEY_NUMBER,
        costPrice: SKELETON_KEY_NUMBER,
        costPercent: SKELETON_KEY_NUMBER,
        reference: SKELETON_KEY,
        description: SKELETON_KEY
      },
      {
        id: SKELETON_KEY,
        itemId: SKELETON_KEY,
        rateId: SKELETON_KEY,
        sellingPrice: SKELETON_KEY_NUMBER,
        costPrice: SKELETON_KEY_NUMBER,
        costPercent: SKELETON_KEY_NUMBER,
        reference: SKELETON_KEY,
        description: SKELETON_KEY
      },
      {
        id: SKELETON_KEY,
        itemId: SKELETON_KEY,
        rateId: SKELETON_KEY,
        sellingPrice: SKELETON_KEY_NUMBER,
        costPrice: SKELETON_KEY_NUMBER,
        costPercent: SKELETON_KEY_NUMBER,
        reference: SKELETON_KEY,
        description: SKELETON_KEY
      },
      {
        id: SKELETON_KEY,
        itemId: SKELETON_KEY,
        rateId: SKELETON_KEY,
        sellingPrice: SKELETON_KEY_NUMBER,
        costPrice: SKELETON_KEY_NUMBER,
        costPercent: SKELETON_KEY_NUMBER,
        reference: SKELETON_KEY,
        description: SKELETON_KEY
      },
      {
        id: SKELETON_KEY,
        itemId: SKELETON_KEY,
        rateId: SKELETON_KEY,
        sellingPrice: SKELETON_KEY_NUMBER,
        costPrice: SKELETON_KEY_NUMBER,
        costPercent: SKELETON_KEY_NUMBER,
        reference: SKELETON_KEY,
        description: SKELETON_KEY
      }
    ]
  };
}

export const skeletonRate = {
  supplier: skeletonSupplierRates,
  rate: _skeletonRate
};
