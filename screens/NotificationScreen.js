import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const notifications = [
  {
    id: 1,
    date: 'Today, 10:20',
    title: 'LIMITED-TIME PROMO - UP TO 50% OFF!',
    message:
      "Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!",
  },
  {
    id: 2,
    date: 'Today, 09:05',
    title: 'FLASH SALE ALERT - SAVE BIG TODAY!',
    message:
      'Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won’t last long!',
  },
  {
    id: 3,
    date: 'Yesterday, 08:10',
    title: 'GOOD MORNING, RUNNER!',
    message:
      'It’s time to step out and run. Give your best to your body today. Find comfort in every step.',
  },
  {
    id: 4,
    date: 'July 13, 2023, 17:30',
    title: 'EXCLUSIVE DISCOUNT JUST FOR YOU',
    message:
      "Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code 'EXCLUSIVE15' at checkout.",
  },
];

const NotificationScreen = () => {
  const [unreadNotifications, setUnreadNotifications] = useState(
    notifications.map((notification) => notification.id)
  );

  const handleMarkAsRead = (notificationId) => {
    setUnreadNotifications((prevUnreadNotifications) =>
      prevUnreadNotifications.filter(
        (id) => id !== notificationId
      )
    );
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
        <Ionicons name="chevron-back-outline" style={styles.backButton} />
      </TouchableOpacity>
          NOTIFICATION</Text>
        <TouchableOpacity
          onPress={() => setUnreadNotifications([])}
          style={styles.markAsReadButton}
        >
          <View style={styles.markAsReadContainer}>
            <Ionicons name="checkmark-done-outline" style={styles.icon} />
            <Text style={styles.markAsReadButtonText}>
              Mark as read
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.notificationsContainer}>
        {notifications.map((notification) => (
          <View
            key={notification.id}
            style={[
              styles.notification,
              unreadNotifications.includes(notification.id) &&
                styles.unreadNotification,
            ]}
          >
            <View style={styles.notificationHeader}>
              <Text style={styles.notificationDate}>
                {notification.date}
              </Text>
              {unreadNotifications.includes(notification.id) && (
                <View style={styles.unreadDot} />
              )}
            </View>
            <Text style={styles.notificationTitle}>
              {notification.title}
            </Text>
            <Text style={styles.notificationMessage}>
              {notification.message}
            </Text>
            {unreadNotifications.includes(notification.id) && (
              <TouchableOpacity
                onPress={() => handleMarkAsRead(notification.id)}
                style={styles.markAsReadButton}
              >
                <Text style={styles.markAsReadButtonText}>
                  Mark as read
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
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
    paddingTop: 25,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingLeft: 8,
    color: '#333', // Dark text for the title
    fontFamily: 'sans-serif-condensed',
  },
  markAsReadButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  markAsReadContainer: {
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center',
    paddingTop:25,
     // Center vertically
  },
  markAsReadButtonText: {
    color: '#f5522f',
    marginLeft: 4, // Space between icon and text
  },
  notificationsContainer: {
    padding: 16,
  },
  notification: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  unreadNotification: {
    backgroundColor: '#ffdbbb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationDate: {
    fontSize: 14,
    color: '#666',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f5522f',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
  },
  icon: {
    fontSize: 24,
    color: '#f5522f',
  },
  backButton:{
    color:'black',
    fontSize:23,
  paddingLeft:20,
  },
});

export default NotificationScreen;

