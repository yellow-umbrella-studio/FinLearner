import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, Icon, Overlay } from 'react-native-elements';

const QuizScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the 50/30/20 rule in budgeting?",
      options: [
        "50% needs, 30% wants, 20% savings",
        "50% savings, 30% needs, 20% wants",
        "50% wants, 30% savings, 20% needs",
        "50% needs, 30% savings, 20% wants"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of these is considered a liquid asset?",
      options: [
        "Real estate",
        "Savings account",
        "Collectibles",
        "Company stocks"
      ],
      correctAnswer: 1
    },
    {
      question: "What does diversification in investing help to reduce?",
      options: [
        "Profits",
        "Taxes",
        "Risk",
        "Dividends"
      ],
      correctAnswer: 2
    }
  ];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h3 style={styles.headerText}>Financial Quiz</Text>
        <Text style={styles.subHeaderText}>Test your knowledge!</Text>
      </View>

      {!showResult ? (
        <Card containerStyle={styles.questionCard}>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              title={option}
              buttonStyle={styles.optionButton}
              titleStyle={styles.optionText}
              onPress={() => handleAnswer(index)}
            />
          ))}
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {questions.length}
          </Text>
        </Card>
      ) : (
        <Overlay isVisible={showResult} onBackdropPress={resetQuiz}>
          <View style={styles.resultContainer}>
            <Icon
              name={score > questions.length / 2 ? "trophy" : "refresh-circle"}
              type="ionicon"
              size={80}
              color={score > questions.length / 2 ? "#FFD700" : "#6C5CE7"}
            />
            <Text h4 style={styles.resultText}>
              You scored {score} out of {questions.length}
            </Text>
            <Button
              title="Try Again"
              onPress={resetQuiz}
              buttonStyle={styles.tryAgainButton}
            />
              <Button
              title="Ok"
              onPress={ () => navigation.navigate("Learn")}
              buttonStyle={styles.tryAgainButton}
            />
          </View>
        </Overlay>
      )}
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
  questionCard: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2D3436',
  },
  optionButton: {
    backgroundColor: '#F0F3F4',
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    color: '#2D3436',
    fontWeight: 'normal',
  },
  progressText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#636E72',
  },
  resultContainer: {
    alignItems: 'center',
    padding: 20,
  },
  resultText: {
    marginVertical: 20,
    textAlign: 'center',
  },
  tryAgainButton: {
    backgroundColor: '#6C5CE7',
    borderRadius: 25,
    paddingHorizontal: 30,
  },
});

export default QuizScreen;