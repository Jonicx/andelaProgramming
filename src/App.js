import axios from 'axios';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './App/store';
import { AUTHENTICATED } from './domain/auth/AuthType';

const App = () => {
	const token = localStorage.token;

	axios.defaults.headers.post['Content-Type'] =
		'application/x-www-form-urlencoded';

	if (token) {
		store.dispatch({
			type: AUTHENTICATED,
			auth: true,
			loading: false,
			failed: false,
		});

		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	}

	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
};

export default App;
