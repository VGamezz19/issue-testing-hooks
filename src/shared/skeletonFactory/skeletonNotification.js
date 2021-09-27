import { SKELETON_KEY, SKELETON_KEY_DATE } from './skeletonFactory';

export function skeletonNotification() {
  return {
    id: SKELETON_KEY,
    name: SKELETON_KEY,
    description: SKELETON_KEY,
    creationDate: SKELETON_KEY_DATE,
    isViewed: SKELETON_KEY
  };
}
