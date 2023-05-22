import {
	BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CssBaseline } from '@mui/material';

import Login from './pages/login';

const theme = createTheme({
	palette: {
		primary: {
			main: '#e8f5e9', //lighter green
			dark: '#1b5e20', //darker green
			light: '#e8f5e9' //lightest green for poppers
		},
		secondary: {
			main: '#616161',
			dark: '#37474f', //darker color for font
		},
	},
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					borderRadius: '5px'
				},
			},
		}
	}
});

const styles = {
	'@global': {
		'html, body, #root': {
			width: '100%',
			maxWidth: '100vw',
			height: 'auto',
			minHeight: '100vh',
			// overflowX: 'hidden',
			padding: 0,
			margin: 0,
			backgroundColor: 'white',
		},
	},
};

const App = () => {
	return (
    <ThemeProvider theme={theme}>
							<CssBaseline />

			<Router
				basename="/"
			>
        <Routes location="/">
							<Route index path="/" element={<Login />} />
        </Routes>
			</Router>
      </ThemeProvider>
	)
};

export default App;