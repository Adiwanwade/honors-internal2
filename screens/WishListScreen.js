import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const WishListScreen = () => {
  const wishlist = [
    { id: '1', name: 'Aero Sport Infinity Pro', price: 'Rp400.000',category:'Footware', image: require('../assets/image.png') },
    { id: '2', name: 'Sport+ Invincible Pro', price: 'Rp389.000',category:'Footware', image: require('../assets/pict.png') },
    { id: '3', name: 'Sport Sneakers+ Blue', price: 'Rp200.000',category:'Footware', image: require('../assets/pict (1).png') },
    { id: '4', name: 'Sport+ Invincible Max', price: 'Rp399.000',category:'Footware', image: require('../assets/sporty-man-tying-his-shoelaces.png') },
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header with Cart and Notification Icons */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
        <Ionicons name="chevron-back-outline" style={styles.backButton} />
      </TouchableOpacity>
          Wishlist</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={wishlist}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              source={item.image}
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCategory}>{item.category}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  itemPrice: {
    color: '#f5522f',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemCategory: {
    color: '#333',
    fontSize: 14,
  },
  backButton:{
    color:'black',
    fontSize:23,
  // paddingLeft:20,
  },
});

export default WishListScreen;
