import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';

const LearnScreen = ({ navigation }) => {
  const topics = [
    { title: 'Budgeting', icon: 'wallet-outline', color: '#FF7675' },
    { title: 'Saving', icon: 'piggy-bank-outline', color: '#55EFC4' },
    { title: 'Investing', icon: 'trending-up', color: '#FDCB6E' },
    { title: 'Debt', icon: 'credit-card-outline', color: '#6C5CE7' },
    { title: 'Goals', icon: 'flag-outline', color: '#00CEC9' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h3 style={styles.headerText}>Financial Topics</Text>
        <Text style={styles.subHeaderText}>Choose a topic to start learning</Text>
      </View>

      {topics.map((topic, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => navigation.navigate('TopicScreen', { topic: topic })}
        >
          <Card containerStyle={[styles.card, { borderLeftColor: topic.color, borderLeftWidth: 5 }]}>
            <View style={styles.topicContainer}>
              <Icon
                name={topic.icon}
                type="ionicon"
                color={topic.color}
                size={40}
                containerStyle={styles.iconContainer}
              />
              <View style={styles.topicContent}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <Text style={styles.topicDescription}>Learn about {topic.title.toLowerCase()} strategies</Text>
              </View>
              <Icon name="chevron-forward-outline" type="ionicon" color="#2D3436" />
            </View>
          </Card>
        </TouchableOpacity>
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
    padding: 20,
    backgroundColor: '#6C5CE7',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  card: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 3,
  },
  topicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#F0F3F4',
    padding: 10,
    borderRadius: 10,
  },
  topicContent: {
    flex: 1,
    marginLeft: 15,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  topicDescription: {
    color: '#636E72',
  },
  quizButton: {
    backgroundColor: '#00CEC9',
    borderRadius: 25,
    paddingVertical: 15,
  },
  quizButtonContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default LearnScreen;