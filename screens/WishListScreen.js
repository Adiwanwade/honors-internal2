import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const WishListScreen = () => {
  const wishlistItems = [
    { id: '1', name: 'AERO SPORT INFINITY PRO', price: 'Rp400.000', image: 'https://yourlink.com/infinity.png' },
    { id: '2', name: 'SPORT+ INVINCIBLE PRO', price: 'Rp389.000', image: 'https://yourlink.com/invincible.png' },
    { id: '3', name: 'SPORT SNEAKERS+ BLUE', price: 'Rp200.000', image: 'https://yourlink.com/sneakers.png' },
    { id: '4', name: 'SPORT+ INVINCIBLE MAX', price: 'Rp399.000', image: 'https://yourlink.com/max.png' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={wishlistItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
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
});

export default WishListScreen;
