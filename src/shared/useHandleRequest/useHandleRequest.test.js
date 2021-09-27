import { renderHook, act } from '@testing-library/react-hooks';
import { useHandleRequest } from './useHandleRequest';
import { workOrders } from 'services';

jest.mock('services');

const UPDATE_ERROR_MESSAGE = 'Error on Update';

function mockWorkOrderServiceUpdateError() {
	workOrders.update.mockImplementation(() => {
		throw { message: UPDATE_ERROR_MESSAGE };
	});
}

function mockWorkOrderServiceUpdateErrorData() {
	workOrders.update.mockImplementation(() => {
		throw {
			response: { data: JSON.stringify({ message: UPDATE_ERROR_MESSAGE }) },
		};
	});
}

describe('useHandleRequest should', () => {
	it('shows message when request error', async () => {
		mockWorkOrderServiceUpdateError();
		const { result, waitForNextUpdate } = renderHook(() => useHandleRequest());

		result.current.request(async () => await workOrders.update({}), false);

		await waitForNextUpdate();

		expect(result.current.errorInfo.message).toEqual(UPDATE_ERROR_MESSAGE);
	});

	it('shows data message when request error', async () => {
		mockWorkOrderServiceUpdateErrorData();
		const { result, waitForNextUpdate } = renderHook(() => useHandleRequest());

		result.current.request(async () => await workOrders.update({}), false);

		await waitForNextUpdate();

		expect(result.current.errorInfo.message).toEqual(UPDATE_ERROR_MESSAGE);
	});
});
