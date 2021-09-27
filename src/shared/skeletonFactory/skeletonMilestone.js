import { SKELETON_KEY, SKELETON_KEY_NUMBER } from './skeletonFactory';

export function skeletonMilestone() {
  return {
    condition: SKELETON_KEY_NUMBER,
    milestone: SKELETON_KEY,
    workOrderRelatedStatus: SKELETON_KEY_NUMBER,
    terms: [
      { term: SKELETON_KEY, hours: SKELETON_KEY },
      { term: SKELETON_KEY, hours: SKELETON_KEY },
      { term: SKELETON_KEY, hours: SKELETON_KEY },
      { term: SKELETON_KEY, hours: SKELETON_KEY }
    ],
    documentTypes: [
      { documentType: SKELETON_KEY, documentTypeId: SKELETON_KEY, days: SKELETON_KEY },
      { documentType: SKELETON_KEY, documentTypeId: SKELETON_KEY, days: SKELETON_KEY },
      { documentType: SKELETON_KEY, documentTypeId: SKELETON_KEY, days: SKELETON_KEY },
      { documentType: SKELETON_KEY, documentTypeId: SKELETON_KEY, days: SKELETON_KEY }
    ],
    itemRates: [
      { reference: SKELETON_KEY, itemRateId: SKELETON_KEY },
      { reference: SKELETON_KEY, itemRateId: SKELETON_KEY },
      { reference: SKELETON_KEY, itemRateId: SKELETON_KEY },
      { reference: SKELETON_KEY, itemRateId: SKELETON_KEY },
      { reference: SKELETON_KEY, itemRateId: SKELETON_KEY }
    ]
  };
}
