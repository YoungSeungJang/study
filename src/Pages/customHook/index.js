import CustomHook from './customHook';

const DependencyInjection = () => {
	const [debounce, setDebounceValue] = CustomHook(false);
	return (
		<div>
			<div>:)</div>
		</div>
	);
};

export default DependencyInjection;
