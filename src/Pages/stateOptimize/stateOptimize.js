import { useState } from 'react';
import CountOne from './components/CountOne';
import CountTwo from './components/CounterTwo';

const StateOptimize = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<CountOne count={count} />
			<CountTwo count={count} />
		</>
	);
};

export default StateOptimize;
