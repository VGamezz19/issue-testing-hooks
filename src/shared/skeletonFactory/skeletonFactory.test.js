import { skeletonFactory, SKELETON_KEY } from './skeletonFactory';

describe('sksleton factory should', () => {
  it('create 6 work orders', () => {
    const skeletonContent = skeletonFactory.workOrders(6);

    expect(skeletonContent.items).toHaveLength(6);
    expect(skeletonContent.items[0].id).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].reference).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].project).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].source).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].sourceId).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].sourceTerm).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].sourceTermId).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].technicianId).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].technician).toBe(SKELETON_KEY);
  });

  it('create 6 sources', () => {
    const skeletonContent = skeletonFactory.sources(6);

    expect(skeletonContent.items).toHaveLength(6);
    expect(skeletonContent.items[0].id).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].project).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].projectId).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].processDefinition).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].processDefinitionId).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].name).toBe(SKELETON_KEY);
    expect(skeletonContent.items[0].terms[0].term).toBe(SKELETON_KEY);
  });
});
