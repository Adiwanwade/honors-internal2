import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ViewPager from 'react-native-viewpager';
export default function HomeScreen() {
  const products = [
    { id: '1', name: 'AIR LEGGING SPORT', price: 'Rp200.000', image: 'https://yourlink.com/legging.png', category: 'Apparel' },
    { id: '2', name: 'AERO SPORT INFINITY MAX', price: 'Rp450.000', image: 'https://yourlink.com/infinity.png', category: 'Footwear' },
    { id: '3', name: 'SPORT+ RUNNER BLUE EDITION', price: 'Rp250.000', image: 'https://yourlink.com/runner.png', category: 'Footwear' },
    { id: '4', name: 'SPORT+ BAG', price: 'Rp350.000', image: 'https://yourlink.com/bag.png', category: 'Bag' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView>
      <ViewPager style={{ height: 150 }}>
        {/* Add your ViewPager Images */}
        <View key="1"><Image source={{ uri: 'https://yourlink.com/banner1.png' }} style={styles.bannerImage} /></View>
        <View key="2"><Image source={{ uri: 'https://yourlink.com/banner2.png' }} style={styles.bannerImage} /></View>
      </ViewPager>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  bannerImage: {
    width: Dimensions.get('window').width,
    height: 150,
  },
});


