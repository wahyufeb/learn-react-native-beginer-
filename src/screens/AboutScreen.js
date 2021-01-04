import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
	return (
		<View style={styles.about}>
			<View style={styles.topView}>
        <Image style={styles.imageBanner} source={require('../../assets/photo.jpg')} />
      </View>
			<View style={styles.bottomView}/>
		</View>
	);
};

const styles = StyleSheet.create({
	about: {
    flex: 1,
    flexDirection: 'column'
	},
	topView: {
		flex: 2,
		backgroundColor: 'red',
	},
	bottomView: {
		flex: 2,
		backgroundColor: 'purple',
  },
  imageBanner: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});

export default AboutScreen;
