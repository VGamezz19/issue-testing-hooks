import { SKELETON_KEY } from './skeletonFactory';

export function skeletonCustomer() {
  return {
    id: SKELETON_KEY,
    fullName: SKELETON_KEY,
    name: SKELETON_KEY,
    firstSurname: SKELETON_KEY,
    secondSurname: SKELETON_KEY,
    customerGroup: SKELETON_KEY,
    documentIdType: SKELETON_KEY,
    documentIdValue: SKELETON_KEY
  };
}
