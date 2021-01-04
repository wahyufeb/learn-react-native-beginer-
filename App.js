import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import HomeListScreen from './src/screens/HomeListScreen';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="About" component={AboutScreen} />
				<Stack.Screen name="HomeList" component={HomeListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
