class WorkOrders {
	getById(id) {
		return new Promise((resolve) => resolve(id));
	}

	get(paging, sorting, filters) {
		return new Promise((resolve) => resolve());
	}

	getEvents(id, milestoneId) {
		return new Promise((resolve) => resolve());
	}

	sendEvent(id, message, processInstanceId) {
		return new Promise((resolve) => resolve());
	}

	create(workOrder) {
		return new Promise((resolve) => resolve());
	}

	delete(id) {
		return new Promise((resolve) => resolve());
	}

	update(id, workOrder) {
		return new Promise((resolve) => resolve());
	}

	getDocumentById(workOrderId, id) {
		return new Promise((resolve) => resolve());
	}

	createDocument(workOrderId, document) {
		return new Promise((resolve) => resolve());
	}

	updateDocument(workOrderId, id, document) {
		return new Promise((resolve) => resolve());
	}

	deleteDocument(workOrderId, id) {
		return new Promise((resolve) => resolve());
	}

	getMilestoneFormDataFromWorkOrder(workOrderId, milestoneId) {
		return new Promise((resolve) => resolve());
	}

	getBPMNFormData(workOrderId, milestoneId, processInstanceId, executionId) {
		return new Promise((resolve) => resolve());
	}

	updateBPMNFormData(workOrderId, milestoneId, formData) {
		return new Promise((resolve) => resolve());
	}

	updateBPMNFormDataComplete(workOrderId, milestoneId, formData) {
		return new Promise((resolve) => resolve());
	}

	getBPMN(workOrderId, milestoneId, processInstanceId) {
		return new Promise((resolve) => resolve());
	}

	addWorkOrderFollower(id, userId) {
		return new Promise((resolve) => resolve());
	}

	removeWorkOrderFollower(id, userId) {
		return new Promise((resolve) => resolve());
	}
}

export const workOrders = new WorkOrders();
