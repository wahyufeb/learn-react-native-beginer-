import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const HomeItem = ({name, image, address}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:image}} style={styles.thumbnail} />
      <View style={styles.rightBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  )
}

export default HomeItem;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor:'#F5FCFF',
    borderWidth: 1,
    borderColor: 'purple'
  },
  thumbnail: {
    width:53,
    height: 81,
  },
  rightBox: {
    flex: 1
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  address: {
    textAlign: 'center'
  }
});

