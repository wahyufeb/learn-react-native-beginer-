import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const submitLogin = async () => {
    console.log(username)
    console.log(password)
  }

	return (
		<View style={styles.container}>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Masukan Username"
					placeholderTextColor="#fff"
					onChangeText={(text) => setUsername(text)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Masukan Password"
					placeholderTextColor="#fff"
					secureTextEntry
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={() => submitLogin()}>
				<Text style={styles.loginText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
				<Text style={styles.signUpText}>Sign Up</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fefe',
		justifyContent: 'center',
		alignItems: 'center',
  },
	inputView: {
		width: '80%',
		backgroundColor: '#465881',
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20,
	},
	inputText: {
		height: 50,
		color: 'white',
	},
	loginBtn: {
		width: '80%',
		backgroundColor: '#fb5b5a',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 60,
		marginBottom: 10,
  },
  loginText: {
    color: '#fff'
  },
  signUpText: {
    marginTop: 20,
    color: '#000',
    fontWeight: '700'
  }
});

export default Login;
