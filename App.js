import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import ViewPager from 'react-native-viewpager';
import HomeScreen from './screens/HomeScreen';
import WishListScreen from './screens/WishListScreen';
import NotificationScreen from './screens/NotificationScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <View>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wishlist" component={WishListScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import ViewPager from 'react-native-viewpager';

// import HomeScreen from './screens/HomeScreen';
// import WishlistScreen from './screens/WishlistScreen';
// import NotificationScreen from './screens/NotificationScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function App() {
//   return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;

    //         if (route.name === 'Home') {
    //           iconName = focused ? 'home' : 'home-outline';
    //         } else if (route.name === 'Wishlist') {
    //           iconName = focused ? 'heart' : 'heart-outline';
    //         } else if (route.name === 'Notifications') {
    //           iconName = focused ? 'notifications' : 'notifications-outline';
    //         }

    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //       tabBarActiveTintColor: 'tomato',
    //       tabBarInactiveTintColor: 'gray',
    //     })}
    //   >
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Wishlist" component={WishlistScreen} />
    //     <Tab.Screen name="Notifications" component={NotificationScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
//   );
// }

// export default App;



