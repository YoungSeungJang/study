import { useMemo, useState } from 'react';

// 0.5초뒤 난수를 생성하는 함수
function doCalculation() {
	const now = performance.now();
	while (performance.now() - now < 500) {
		// do nothing for 500ms
	}

	return Math.random();
}

const Memoization = () => {
	const [value, setValue] = useState(0);
	// input에 값을 입력할 때마다 0.5초+@시간이 걸린다
	// const calculation = doCalculation();
	const calculation = useMemo(() => {
		doCalculation();
	}, []);

	return (
		<div>
			<input value={value} onChange={e => setValue(e.target.value)} />
			<h1>{`Calculation is ${calculation}`}</h1>
		</div>
	);
};

export default Memoization;
