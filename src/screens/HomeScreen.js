import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View style={styles.home}>
			<Text>Home Screen</Text>
			<View style={styles.buttons}>
				<Button title="GO Home List" onPress={() => navigation.navigate('HomeList')}>
					Go to About
				</Button>
				<Button title="GO to About" onPress={() => navigation.navigate('About')}>
					Go to About
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	home: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'lightblue'
	},
	buttons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
});

export default HomeScreen;
