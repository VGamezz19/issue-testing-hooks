import { SKELETON_KEY, SKELETON_KEY_NUMBER, SKELETON_KEY_DATE } from './skeletonFactory';

function workOrder() {
  const womilestones = {
    completionDate: SKELETON_KEY_DATE,
    expectedCompletionDate: SKELETON_KEY_DATE,
    id: SKELETON_KEY,
    milestone: SKELETON_KEY,
    order: SKELETON_KEY_NUMBER,
    term: SKELETON_KEY_NUMBER
  };

  const workOrderMilestones = Array(5).fill(womilestones);

  return {
    id: SKELETON_KEY,
    reference: SKELETON_KEY,
    project: SKELETON_KEY,
    projectId: SKELETON_KEY,
    source: SKELETON_KEY,
    sourceId: SKELETON_KEY,
    processDefinitionId: SKELETON_KEY,
    milestones: workOrderMilestones,
    term: SKELETON_KEY,
    sourceTerm: SKELETON_KEY,
    sourceTermId: SKELETON_KEY,
    technicianId: SKELETON_KEY,
    technician: SKELETON_KEY,
    entryDate: SKELETON_KEY_DATE,
    finishDate: SKELETON_KEY_DATE,
    status: SKELETON_KEY_NUMBER,
    customerId: SKELETON_KEY,
    customer: SKELETON_KEY
  };
}

function status() {
  return {
    id: SKELETON_KEY_NUMBER,
    name: SKELETON_KEY
  };
}

// TODO: add more asset types
function assetRealEstate() {
  return {
    id: SKELETON_KEY_NUMBER,
    externalReference: SKELETON_KEY,
    assetId: SKELETON_KEY,
    building: SKELETON_KEY,
    city: SKELETON_KEY,
    cityId: SKELETON_KEY,
    district: SKELETON_KEY,
    doorNumber: SKELETON_KEY,
    floor: SKELETON_KEY,
    fullAddress: SKELETON_KEY,
    km: SKELETON_KEY,
    letter: SKELETON_KEY,
    staircase: SKELETON_KEY,
    street: SKELETON_KEY,
    streetNumber: SKELETON_KEY,
    type: SKELETON_KEY,
    urbanType: SKELETON_KEY,
    urbanTypeId: SKELETON_KEY,
    workOrderId: SKELETON_KEY,
    zipCode: SKELETON_KEY,
    zipCodeId: SKELETON_KEY
  };
}

function budgetItem() {
  return {
    id: SKELETON_KEY_NUMBER,
    assetReference: SKELETON_KEY,
    itemReference: SKELETON_KEY,
    itemDescription: SKELETON_KEY,
    unitCost: SKELETON_KEY_NUMBER,
    totalCost: SKELETON_KEY_NUMBER,
    unitSellingPrice: SKELETON_KEY_NUMBER,
    totalSellingPrice: SKELETON_KEY_NUMBER,
    awarded: SKELETON_KEY,
    quantity: SKELETON_KEY_NUMBER,
    quantityAwarded: SKELETON_KEY_NUMBER,
    totalCostAwarded: SKELETON_KEY_NUMBER,
    remarks: SKELETON_KEY
  };
}

function document() {
  return {
    id: SKELETON_KEY_NUMBER,
    documentType: SKELETON_KEY,
    status: SKELETON_KEY,
    expectedDate: SKELETON_KEY_DATE,
    realDate: SKELETON_KEY_DATE,
    remarks: SKELETON_KEY,
    document: SKELETON_KEY,
    documentName: SKELETON_KEY
  };
}

function historyItem() {
  return {
    id: SKELETON_KEY_NUMBER,
    entity: SKELETON_KEY_NUMBER,
    action: SKELETON_KEY_NUMBER,
    entryDate: SKELETON_KEY_DATE,
    userName: SKELETON_KEY,
    reference: SKELETON_KEY
  };
}

export const skeletonWorkOrder = {
  workOrder,
  status,
  assetRealEstate,
  budgetItem,
  document,
  historyItem
};
