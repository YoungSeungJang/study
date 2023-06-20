import Memoization from 'Pages/Memoization/memoization';
import DependencyInjection from 'Pages/customHook';
import StateOptimize from 'Pages/stateOptimize/stateOptimize';

function App() {
	return (
		<div className="App">
			<StateOptimize />
			<hr />
			<Memoization />
			<hr />
			<div>customHook을 이용한 의존성 주입</div>
			<DependencyInjection />
		</div>
	);
}

export default App;
