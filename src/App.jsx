import AppRoutes from '@/routes';
import { AuthProvider, NotificationProvider, ThemeProvider, UserInfoProvider } from '@/common/context';
import { configureFakeBackend } from './common';

// For Saas import Saas.scss
import './assets/scss/Saas.scss';
import './pages/main/style/Root.css';

// For Modern demo import Modern.scss
// import './assets/scss/Modern.scss';

// For Creative demo import Creative.scss
// import './assets/scss/Creative.scss';

configureFakeBackend();

const App = () => {
	return (
		<ThemeProvider>
			<NotificationProvider>
				<AuthProvider>
					<UserInfoProvider>
						<AppRoutes />
					</UserInfoProvider>
				</AuthProvider>
			</NotificationProvider>
		</ThemeProvider>
	);
};

export default App;
