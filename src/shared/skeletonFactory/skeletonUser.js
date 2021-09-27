import { SKELETON_KEY } from './skeletonFactory';

export function skeletonUser() {
  return {
    id: SKELETON_KEY,
    userName: SKELETON_KEY,
    password: SKELETON_KEY,
    alias: SKELETON_KEY,
    roles: [SKELETON_KEY, SKELETON_KEY, SKELETON_KEY, SKELETON_KEY]
  };
}
