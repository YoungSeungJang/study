import StateOptimize from 'Pages/stateOptimize/stateOptimize';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <StateOptimize />,
	},
]);

export default router;
