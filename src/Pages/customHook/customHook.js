import { useEffect, useState } from 'react';
const CustomHook = (value, delay = 500) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		// 마운트
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		// 언마운트
		return () => clearTimeout(handler);
	}, [value]);

	return [debounceValue, setDebounceValue];
};

export default CustomHook;
