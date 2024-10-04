import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view'; 
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const products = [
  {
    id: '1',
    name: 'AIR LEGGING SPORT',
    category: 'Apparel',
    price: 'Rp200.000',
    image: require('../assets/1.jpeg'), 
  },
  {
    id: '2',
    name: 'AERO SPORT INFINITY MAX',
    category: 'Footwear',
    price: 'Rp450.000',
    image: require('../assets/2.jpeg'), 
  },
  {
    id: '3',
    name: 'SPORT+ RUNNER BLUE EDITION',
    category: 'Footwear',
    price: 'Rp250.000',
    image: require('../assets/3.jpeg'),
  },
  {
    id: '4',
    name: 'SPORT+ BAG',
    category: 'Bag',
    price: 'Rp350.000',
    image: require('../assets/4.jpeg'),
  },
];

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetails', { item })}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
       {/* Header */}
       <View style={styles.header}>
        <Text style={styles.headerText}>Sport Shoes</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search items"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Wallet & Top Up */}
      <View style={styles.walletContainer}>
  <View style={styles.walletBalanceSection}>
    <Text style={styles.walletLabelText}>Wallet balance</Text>
    <View style={styles.walletBalanceContent}>
      <Ionicons name="wallet-outline" size={20} color="black" />
      <Text style={styles.walletBalanceText}> Rp1.000.000</Text>
    </View>
  </View>
  <View style={styles.divider} />
  <TouchableOpacity style={styles.topUpSection}>
    <Text style={styles.walletLabelText}>Top up balance</Text>
    <View style={styles.topUpContent}>
      <Ionicons name="add-circle-outline" size={20} color="black" />
      <Text style={styles.topUpButtonText}>Top up</Text>
    </View>
  </TouchableOpacity>
</View>

      
      {/* Promo Banners */}
      <View style={styles.bannerContainer}>
        <PagerView style={styles.pagerView} initialPage={0}>
          <View key="1" style={styles.bannerItem}>
            <Image source={require('../assets/banner.png')} style={styles.bannerImage} /> 
          </View>
          <View key="2" style={styles.bannerItem}>
            <Image source={require('../assets/banner(2).jpg')} style={styles.bannerImage} />
          </View>
        </PagerView>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
   <Text style={styles.categoriesTitle}>SHOP BY CATEGORY</Text>
  <View style={styles.categoryButtonsRow}>
    <TouchableOpacity style={styles.categoryButton}>
      <Ionicons name="footsteps-outline" size={40} color="black" />
      <Text style={styles.categoryButtonText}>FOOTWEAR</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryButton}>
      <Ionicons name="bag-outline" size={40} color="black" />
      <Text style={styles.categoryButtonText}>BAGS</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryButton}>
      <Ionicons name="shirt-outline" size={40} color="black" />
      <Text style={styles.categoryButtonText}>APPAREL</Text>
    </TouchableOpacity>
  </View>
</View>



      {/* Products */}
      <View style={styles.productsContainer}>
        <Text style={styles.productsTitle}>NEW ARRIVALS FOR YOU</Text>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false} // Disable FlatList scrolling to allow full page scroll
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#F26522',
    fontStyle: 'italic',
    paddingTop:25,
    paddingLeft:8,
    fontFamily:'sans-serif-condensed',
  },
  headerIcons: {
    flexDirection: 'row',
    paddingTop:25,
  },
  headerIcon: {
    marginLeft: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButton: {
    marginLeft: 16,
    backgroundColor: '#F26522',
    padding: 8,
    borderRadius: 12,
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Adds a shadow for Android
    marginVertical: 16,
    marginHorizontal: 20, // Adjusts the spacing from the screen edges
  },
  walletBalanceSection: {
    flex: 1,
  },
  walletLabelText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  walletBalanceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletBalanceText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16,
  },
  topUpSection: {
    flex: 1,
  },
  topUpContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topUpButtonText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerContainer: {
    height: 200,
    backgroundColor: 'white',
  },
  pagerView: {
    height: 180,
  },
  bannerItem: {
    width: width,
    height: 180,
    padding:10
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode:'contain',
  },
  categoriesContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  categoryButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryButton: {
    width: 100,
    height: 100,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f5522f', // Orange text
    marginTop: 8,
    // color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  productsContainer: {
    padding: 13,
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  productItem: {
    width: width / 2 - 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Dark text for the title
    fontFamily:'sans-serif-condensed',
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    color: '#f5522f',
  },
});

export default HomeScreen;
