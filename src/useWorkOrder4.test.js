import { renderHook, act } from '@testing-library/react-hooks';
import { useWorkOrder } from './useWorkOrder';
import { SKELETON_KEY } from 'shared';
import { workOrders } from 'services';

jest.mock('services');

const ID = '2';

const data = { id: ID, reference: 'ref' };

function mockWorkOrderServiceGetById() {
	const copyDaya = { ...data };

	workOrders.getById.mockResolvedValue({ data: copyDaya });
}

function mockWorkOrderServiceUpdate() {
	workOrders.update.mockResolvedValue({ ID });

	return ID;
}

function mockWorkOrderServiceCreate() {
	workOrders.update.mockResolvedValue({ ID });

	return ID;
}

describe('useWorkOrder should', () => {
	it('initialize as empty when not id', () => {
		const { result } = renderHook(() => useWorkOrder());

		expect(result.current.workOrder).toMatchObject({});
	});

	it('retrieve an existing workOrder on getData when id', async () => {
		mockWorkOrderServiceGetById();

		const { result, waitForNextUpdate } = renderHook(() => useWorkOrder(ID));

		expect(result.current.workOrder.reference).toBe(SKELETON_KEY);

		await waitForNextUpdate();

		expect(workOrders.getById).toBeCalled();

		expect(result.current.workOrder.reference).toBe(data.reference);
	});

	it('update workOrder as expected', async () => {
		const { result } = renderHook(() => useWorkOrder(ID));

		const updatedWorkOrder = { id: ID, reference: 'ref2' };

		mockWorkOrderServiceUpdate();

		act(() => {
			result.current.updateWorkOrder(updatedWorkOrder);
		});

		expect(workOrders.update).toBeCalled();

		expect(result.current.workOrder.reference).toBe(updatedWorkOrder.reference);
	});

	it('create workOrder as expected', () => {
		const { result } = renderHook(() => useWorkOrder());

		const createdWorkOrder = { reference: 'ref2' };

		mockWorkOrderServiceCreate();

		act(() => {
			result.current.createWorkOrder(createdWorkOrder);
		});

		expect(workOrders.create).toBeCalled();

		expect(result.current.workOrder.reference).toBe(createdWorkOrder.reference);
	});
});
