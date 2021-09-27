import { SKELETON_KEY, SKELETON_KEY_NUMBER } from './skeletonFactory';

export function skeletonSupplier() {
  return {
    id: SKELETON_KEY,
    fullName: SKELETON_KEY,
    name: SKELETON_KEY,
    firstSurname: SKELETON_KEY,
    secondSurname: SKELETON_KEY,
    documentIdType: SKELETON_KEY_NUMBER,
    documentIdValue: SKELETON_KEY
  };
}
