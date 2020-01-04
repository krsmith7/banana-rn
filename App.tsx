import React, { useEffect, useState } from 'react';
import { View, YellowBox } from 'react-native';
import { Provider } from 'react-native-paper';
import * as Font from 'expo-font';
import NavigationService from '@util/NavigationService';
import Route from './src/routes/Route';
import styles from './App.styles';

YellowBox.ignoreWarnings([
	'Warning: componentWillReceiveProps has been renamed',
	'Warning: State updates from the useState() and useReducer() Hooks',
]);

export default function App() {
	const [ fontsLoaded, setFontsLoaded ] = useState(false);

	const loadFonts = async () => {
		await Font.loadAsync({
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
			'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
			'elegant-icons': require('./assets/fonts/ElegantIcons.ttf'),
		});
		setFontsLoaded(true);
	};

	useEffect(() => {
		loadFonts();
	}, []);


	return fontsLoaded && (
		<Provider>
			<View style={styles.container}>
				<Route ref={navRef => NavigationService.setTopLevelNavigator(navRef)} />
			</View>
		</Provider>
	);
}
