import { SKELETON_KEY, SKELETON_KEY_DATE } from './skeletonFactory';

export function skeletonProject() {
  return {
    id: SKELETON_KEY,
    name: SKELETON_KEY,
    abbreviation: SKELETON_KEY,
    customerGroup: SKELETON_KEY,
    businessLine: SKELETON_KEY,
    startDate: SKELETON_KEY_DATE,
    endDate: SKELETON_KEY_DATE,
    remarks: SKELETON_KEY,
    isActive: SKELETON_KEY
  };
}
