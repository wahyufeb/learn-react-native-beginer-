import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import HomeItem from '../components/HomeItem';

const HomeListScreen = () => {
	return (
			<ScrollView horizontal={false} directionalLockEnabled={true}>
        <Text>Scroll me</Text>
        <HomeItem name="Wahyu" image="http://hmp.me/ol5" address="Jakarta" />
        <HomeItem name="Diana" image="http://hmp.me/ol5" address="Bandung" />
        <HomeItem name="Rachel" image="http://hmp.me/ol5" address="Semarang" />
        <HomeItem name="Dina" image="http://hmp.me/ol5" address="Surabaya" />
        <HomeItem name="Risma" image="http://hmp.me/ol5" address="Nganjuk" />
        <HomeItem name="Dinda" image="http://hmp.me/ol5" address="Malang" />
        <HomeItem name="Primly" image="http://hmp.me/ol5" address="Sidoarjo" />
        <HomeItem name="Johan" image="http://hmp.me/ol5" address="lamongan" />
        <HomeItem name="Frendi" image="http://hmp.me/ol5" address="Magelang" />
        <HomeItem name="Priska" image="http://hmp.me/ol5" address="Makasar" />
        <HomeItem name="Puimek" image="http://hmp.me/ol5" address="Phuket" />
        <HomeItem name="Alex" image="http://hmp.me/ol5" address="Banjarmasin" />
			</ScrollView>
	);
};

export default HomeListScreen;
