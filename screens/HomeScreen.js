import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h3 style={styles.headerText}>Welcome to FinLearn</Text>
        <Text style={styles.subHeaderText}>Your journey to financial literacy starts here</Text>
      </View>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Continue Learning</Text>
        <Button
          title="Go to Learn"
          icon={<Icon name="book-outline" type="ionicon" color="#FFFFFF" />}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Learn')}
        />
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Quick Stats</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Topics Started</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Quizzes Completed</Text>
          </View>
        </View>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Daily Tip</Text>
        <Text style={styles.tipText}>
          "The best investment you can make is in yourself. The more you learn, the more you'll earn." - Warren Buffett
        </Text>
      </Card>
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2D3436',
  },
  button: {
    backgroundColor: '#6C5CE7',
    borderRadius: 25,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  tipText: {
    fontStyle: 'italic',
    color: '#636E72',
  },
});

export default HomeScreen;