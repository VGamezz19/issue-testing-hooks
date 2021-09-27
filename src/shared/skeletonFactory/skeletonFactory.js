import { skeletonCondition } from './skeletonCondition';
import { skeletonSource } from './skeletonSource';
import { skeletonWorkOrder } from './skeletonWorkOrder';
import { objectHelper } from 'shared/helper';
import { skeletonMilestone } from './skeletonMilestone';
import { skeletonItem } from './skeletonItem';
import { skeletonRate } from './skeletonRate';
import { skeletonProcessDefinition } from './skeletonProcess';
import { skeletonItemRate } from './skeletonItemRate';
import { skeletonSupplierRate } from './skeletonSupplierRate';
import { skeletonSupplierItemRate } from './skeletonSupplierItemRate';
import { skeletonUser } from './skeletonUser';
import { skeletonRole } from './skeletonRole';
import { skeletonDocumentType } from './skeletonDocumentType';
import { skeletonCustomer } from './skeletonCustomer';
import { skeletonCustomerGroup } from './skeletonCustomerGroup';
import { skeletonProject } from './skeletonProject';
import { skeletonSupplier } from './skeletonSupplier';
import { skeletonBusinessLine } from './skeletonBusinessLine';
import { skeletonNotification } from './skeletonNotification';
import { skeletonSupplierDocumentType } from './skeletonSupplierDocumentType';

export const SKELETON_KEY = 'skeleton_loading';
export const SKELETON_KEY_NUMBER = 901901901901;
export const SKELETON_KEY_DATE = 'May 1,1890 11:20:00';

export function isSkeletonLoading(value) {
  if (objectHelper.isAnObject(value)) {
    return Object.keys(value).some(function (k) {
      return value[k] === SKELETON_KEY || value[k] === SKELETON_KEY_NUMBER || value[k] === SKELETON_KEY_DATE;
    });
  }

  return value === SKELETON_KEY || value === SKELETON_KEY_NUMBER || value === SKELETON_KEY_DATE;
}

const pagination = { page: 0, pageSize: 2147483647, total: 3, totalPages: 1 };

export const skeletonFactory = {
  workOrders: function workOrders(num = 10) {
    const _workOrder = skeletonWorkOrder.workOrder();
    return { ...pagination, items: Array(num).fill(_workOrder) };
  },
  workOrder: function workOrder() {
    return skeletonWorkOrder.workOrder();
  },
  sources: function sources(num = 10) {
    const source = skeletonSource();
    return { ...pagination, items: Array(num).fill(source) };
  },
  source: function source() {
    return skeletonSource();
  },
  milestone: function milestone() {
    return skeletonMilestone();
  },
  currentMilestone: function currentMilestone() {
    return {
      expectedCompletionDate: SKELETON_KEY_DATE,
      id: SKELETON_KEY,
      milestone: SKELETON_KEY,
      term: SKELETON_KEY_NUMBER,
      workOrderReference: SKELETON_KEY,
      workOrderId: SKELETON_KEY,
      role: SKELETON_KEY
    };
  },
  currentMilestones: function currentMilestones(num = 10) {
    const currentMilestone = {
      expectedCompletionDate: SKELETON_KEY_DATE,
      id: SKELETON_KEY,
      milestone: SKELETON_KEY,
      term: SKELETON_KEY_NUMBER,
      workOrderReference: SKELETON_KEY,
      workOrderId: SKELETON_KEY,
      role: SKELETON_KEY
    };

    return { ...pagination, items: Array(num).fill(currentMilestone) };
  },
  condition: function condition() {
    return skeletonCondition();
  },
  conditions: function sources(num = 10) {
    const condition = skeletonCondition();
    return Array(num).fill(condition);
  },
  workOrderStatus: function workOrderStatus() {
    return skeletonWorkOrder.status;
  },
  workOrderStatuses: function workOrderStatuses(num = 10) {
    const statuses = skeletonWorkOrder.status();
    return Array(num).fill(statuses);
  },
  itemCategory: function category() {
    return skeletonItem.category();
  },
  itemCategories: function categories(num = 10) {
    const categories = skeletonItem.category();
    return { ...pagination, items: Array(num).fill(categories) };
  },
  item: function item() {
    return skeletonItem.item();
  },
  items: function items(num = 10) {
    const item = skeletonItem.item();
    return { ...pagination, items: Array(num).fill(item) };
  },
  rate: function rate() {
    return skeletonRate.rate();
  },
  rates: function rates(num = 10) {
    const rates = skeletonRate.rate();
    return { ...pagination, items: Array(num).fill(rates) };
  },
  supplierRate: function supplierRate() {
    return skeletonSupplierRate.supplierRate();
  },
  supplierRates: function supplierRates(num = 10) {
    const supplierRate = skeletonSupplierRate.supplierRates();
    return { ...pagination, items: Array(num).fill(supplierRate) };
  },
  processDefinitions: function processDefinitions(num = 10) {
    const processDefinition = skeletonProcessDefinition();
    return { ...pagination, items: Array(num).fill(processDefinition) };
  },
  processDefinition: function processDefinition() {
    return skeletonProcessDefinition();
  },
  // TODO: add more asset types

  assetRealEstate: function asset() {
    return skeletonWorkOrder.assetRealEstate();
  },
  assetRealEstates: function assets(num = 10) {
    const assets = skeletonWorkOrder.assetRealEstate();
    return { ...pagination, items: Array(num).fill(assets) };
  },
  budgetItem: function budgetItem() {
    return skeletonWorkOrder.budgetItem();
  },
  budgetItems: function budgetItems(num = 10) {
    const budgetItems = skeletonWorkOrder.budgetItem();
    return { ...pagination, items: Array(num).fill(budgetItems) };
  },
  document: function document() {
    return skeletonWorkOrder.document();
  },
  documents: function documents(num = 10) {
    const documents = skeletonWorkOrder.document();
    return { ...pagination, items: Array(num).fill(documents) };
  },
  historyItem: function historyItem() {
    return skeletonWorkOrder.historyItem();
  },
  historyItems: function historyItems(num = 10) {
    const historyItems = skeletonWorkOrder.historyItem();
    return { ...pagination, items: Array(num).fill(historyItems) };
  },
  itemRates: function itemRates(num = 10) {
    const itemRate = skeletonItemRate.itemRate();
    return { ...pagination, items: Array(num).fill(itemRate) };
  },
  itemRate: function itemRate() {
    return skeletonItemRate.itemRate();
  },
  supplierItemRates: function supplierItemRates(num = 10) {
    const supplierItemRate = skeletonSupplierItemRate.supplierItemRate();
    return { ...pagination, items: Array(num).fill(supplierItemRate) };
  },
  supplierItemRate: function supplierItemRate() {
    return skeletonSupplierItemRate.supplierItemRate();
  },
  users: function users(num = 10) {
    const user = skeletonUser();
    return { ...pagination, items: Array(num).fill(user) };
  },
  user: function user() {
    return skeletonUser();
  },
  roles: function roles(num = 10) {
    const role = skeletonRole();
    return { ...pagination, items: Array(num).fill(role) };
  },
  role: function role() {
    return skeletonRole();
  },
  documentTypes: function documentTypes(num = 10) {
    const documentType = skeletonDocumentType();
    return { ...pagination, items: Array(num).fill(documentType) };
  },
  documentType: function documentType() {
    return skeletonDocumentType();
  },
  customers: function customers(num = 10) {
    const customer = skeletonCustomer();
    return { ...pagination, items: Array(num).fill(customer) };
  },
  customer: function customer() {
    return skeletonCustomer();
  },
  customerGroups: function customerGroups(num = 10) {
    const group = skeletonCustomerGroup();
    return { ...pagination, items: Array(num).fill(group) };
  },
  customerGroup: function customerGroup() {
    return skeletonCustomerGroup();
  },
  projects: function projects(num = 10) {
    const project = skeletonProject();
    return { ...pagination, items: Array(num).fill(project) };
  },
  project: function project() {
    return skeletonProject();
  },
  suppliers: function suppliers(num = 10) {
    const supplier = skeletonSupplier();
    return { ...pagination, items: Array(num).fill(supplier) };
  },
  supplier: function supplier() {
    return skeletonSupplier();
  },
  businessLines: function businessLines(num = 10) {
    const businessLine = skeletonBusinessLine();
    return { ...pagination, items: Array(num).fill(businessLine) };
  },
  businessLine: function businessLine() {
    return skeletonBusinessLine();
  },
  itemMeasure: function itemMeasure() {
    return skeletonItem.measure();
  },
  itemMeasures: function itemMeasures(num = 10) {
    const measures = skeletonItem.measure();
    return Array(num).fill(measures);
  },
  notification: function notification() {
    return skeletonNotification();
  },
  notifications: function notifications(num = 10) {
    const notifications = skeletonNotification();
    return Array(num).fill(notifications);
  },
  supplierDocumentTypes: function supplierDocumentTypes(num = 10) {
    const supplierDocumentType = skeletonSupplierDocumentType();
    return { ...pagination, items: Array(num).fill(supplierDocumentType) };
  },
  supplierDocumentType: function supplierDocumentType() {
    return skeletonSupplierDocumentType();
  }
};
