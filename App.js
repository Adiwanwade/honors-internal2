import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen'; // Default export
import WishListScreen from './screens/WishListScreen'; // Default export
import NotificationScreen from './screens/NotificationScreen'; // Default export

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
          headerBackTitleVisible: 'true' ,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false,
            headerBackTitleVisible: true  }} // Disable header for Home screen
        />
        <Tab.Screen 
          name="Wishlist" 
          component={WishListScreen} 
          options={{ headerShown: false,
            headerBackTitleVisible: true  }} // Disable header for Wishlist screen
        />
        <Tab.Screen 
          name="Notifications" 
          component={NotificationScreen} 
          options={{ headerShown: false,
            headerBackTitleVisible: true  }} // Disable header for Notifications screen
        />
      </Tab.Navigator>
    </NavigationContainer>
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
