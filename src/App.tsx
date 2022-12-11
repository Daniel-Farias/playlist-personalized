import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from './styles/global';
import { Home } from './pages/Home';
import { InfoProvider } from './Contexts/Info';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<InfoProvider>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</InfoProvider>
		</Router>
	);
};

export default App;