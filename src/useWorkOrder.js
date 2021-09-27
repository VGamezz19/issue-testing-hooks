import { useState, useEffect, useCallback } from 'react';
import { workOrders } from 'services';
import { skeletonFactory, useHandleRequest } from 'shared';

const workOrderDummy = skeletonFactory.workOrder();

export function useWorkOrder(id) {
	const [workOrderData, setWorkOrderData] = useState(id ? workOrderDummy : {});
	const { request, errorInfo, setErrorInfo } = useHandleRequest();

	useEffect(() => {
		async function getData() {
			await request(async () => {
				const response = await workOrders.getById(id);

				if (response) {
					setWorkOrderData(response.data || []);
				}
			}, false);
		}

		id && getData();
	}, [request, id]);

	const updateWorkOrder = useCallback(
		async (workOrder) => {
			await request(async () => {
				setWorkOrderData(workOrder);
				await workOrders.update(id, workOrder);
			});
		},
		[request, id]
	);

	const createWorkOrder = useCallback(
		async (workOrder) => {
			await request(async () => {
				setWorkOrderData(workOrder);
				await workOrders.create(workOrder);
			});
		},
		[request]
	);

	return {
		workOrder: workOrderData,
		errorInfo,
		setErrorInfo,
		setWorkOrderData,
		createWorkOrder,
		updateWorkOrder,
	};
}
