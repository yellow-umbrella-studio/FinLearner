import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Avatar, ListItem, Icon } from 'react-native-elements';

const ProfileScreen = () => {
  const menuItems = [
    { title: 'Account Settings', icon: 'settings-outline' },
    { title: 'Learning History', icon: 'time-outline' },
    { title: 'Achievements', icon: 'trophy-outline' },
    { title: 'Notifications', icon: 'notifications-outline' },
    { title: 'Help & Support', icon: 'help-circle-outline' },
    { title: 'About', icon: 'information-circle-outline' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          size="large"
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/women/42.jpg' }}
          containerStyle={styles.avatar}
        />
        <Text h3 style={styles.name}>Sarah Johnson</Text>
        <Text style={styles.email}>sarah.johnson@example.com</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Lessons Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Quizzes Taken</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>80%</Text>
          <Text style={styles.statLabel}>Average Score</Text>
        </View>
      </View>

      {menuItems.map((item, index) => (
        <ListItem key={index} bottomDivider>
          <Icon name={item.icon} type="ionicon" color="#6C5CE7" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#6C5CE7',
    paddingVertical: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  name: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  email: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    backgroundColor: '#F0F3F4',
    borderRadius: 15,
    marginHorizontal: 10,
    paddingVertical: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C5CE7',
  },
  statLabel: {
    fontSize: 14,
    color: '#636E72',
},
});

export default ProfileScreen;