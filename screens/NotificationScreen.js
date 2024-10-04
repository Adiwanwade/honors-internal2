import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  const notifications = [
    { id: '1', title: 'LIMITED-TIME PROMO - UP TO 50% OFF!', time: 'Today, 10:20', description: 'Get up to 50% off on all our sports shoes.' },
    { id: '2', title: 'FLASH SALE ALERT - SAVE BIG TODAY!', time: 'Today, 09:05', description: 'Grab your favorite shoes at unbeatable prices.' },
    { id: '3', title: 'GOOD MORNING, RUNNER!', time: 'Yesterday, 08:10', description: 'Give your best to your body today.' },
    { id: '4', title: 'EXCLUSIVE DISCOUNT JUST FOR YOU', time: 'July 13, 2023, 17:30', description: 'Get an exclusive 15% discount on our products.' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  notificationCard: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default NotificationScreen;
