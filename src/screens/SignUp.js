import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const submitSignUp = async () => {
    const data = {
      nama_lengkap: fullname,
      email,
      nama_pengguna: username,
      password
    }
    console.log(data)
  }

	return (
		<View style={styles.container}>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Masukan Nama Lengkap"
					placeholderTextColor="gray"
					onChangeText={(text) => setFullName(text)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Masukan Email"
					placeholderTextColor="gray"
					onChangeText={(text) => setEmail(text)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Masukan Username"
					placeholderTextColor="gray"
					onChangeText={(text) => setUsername(text)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Masukan Password"
					placeholderTextColor="gray"
					secureTextEntry
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={() => submitSignUp()}>
				<Text style={styles.loginText}>Sign Up</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text style={styles.signUpText}>Login</Text>
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
		backgroundColor: '#fefefe',
		borderRadius: 10,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20,
	},
	inputText: {
		height: 50,
		color: 'gray',
	},
	loginBtn: {
		width: '80%',
		backgroundColor: '#fb5b5a',
		borderRadius: 10,
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

export default SignUp;
