import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { stringHelper } from 'shared/helper';

export function useHandleRequest() {
	const [errorInfo, setErrorInfo] = useState({ message: '', detail: '' });
	const { t } = useTranslation();

	const request = useCallback(
		async (requestCallback, trowError = true) => {
			try {
				return await requestCallback();
			} catch (error) {
				let errorMsg;
				if (error?.response?.data) {
					errorMsg = JSON.parse(
						error.response
							? error.response.data
								? error.response.data
								: error.message
							: error.message
					);
				} else {
					errorMsg = { message: error.message, detail: '' };
				}

				const errorDetail = errorMsg.detail
					? stringHelper.normalizeQuotes(errorMsg.detail)
					: '';

				setErrorInfo({
					message: t(stringHelper.normalizeQuotes(errorMsg.message)),
					detail: errorDetail,
				});

				if (trowError) {
					throw new Error(errorMsg.message);
				}
			}
		},
		[t]
	);

	return { request, errorInfo, setErrorInfo };
}
