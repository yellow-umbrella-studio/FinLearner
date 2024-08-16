import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const LessonScreen = ({ route, navigation }) => {
  const { lesson, topic } = route.params;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    if (currentCardIndex < lesson.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      navigation.navigate('QuizScreen', { topic: topic });
    }
  };

  const renderCard = () => {
    const card = lesson.cards[currentCardIndex];
    return (
      <Card containerStyle={styles.card}>
        <Card.Title>{card.title}</Card.Title>
        <Card.Divider />
        <Text style={styles.contentText}>{card.content}</Text>
      </Card>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderCard()}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {currentCardIndex + 1} / {lesson.cards.length}
        </Text>
      </View>
      <Button
        title={currentCardIndex === lesson.cards.length - 1 ? "Take Quiz" : "Next Card"}
        icon={<Icon name="arrow-forward-outline" type="ionicon" color="#FFFFFF" />}
        buttonStyle={[styles.nextButton, { backgroundColor: topic.color }]}
        containerStyle={styles.nextButtonContainer}
        onPress={handleNextCard}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  card: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 3,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#636E72',
  },
  nextButton: {
    borderRadius: 25,
    paddingVertical: 15,
  },
  nextButtonContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default LessonScreen;