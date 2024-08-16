import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, Card, Icon } from "react-native-elements";

const TopicScreen = ({ route, navigation }) => {
  const { topic } = route.params;

  const lessons = [
    {
      title: "Introduction",
      duration: "5 min",
      icon: "book-outline",
      cards: [
        {
          title: "What is " + topic.title + "?",
          content: "Brief explanation of " + topic.title,
        },
        {
          title: "Why is " + topic.title + " important?",
          content: "Importance of " + topic.title + " in personal finance",
        },
        {
          title: "Key terms",
          content: "List of important terms related to " + topic.title,
        },
        {
          title: "Common misconceptions",
          content: "Debunking myths about " + topic.title,
        },
        {
          title: "Getting started",
          content: "First steps to understand " + topic.title,
        },
      ],
    },
    {
      title: "Key Concepts",
      duration: "10 min",
      icon: "key-outline",
      cards: [
        { title: "Concept 1", content: "Explanation of the first key concept" },
        {
          title: "Concept 2",
          content: "Explanation of the second key concept",
        },
        { title: "Concept 3", content: "Explanation of the third key concept" },
        {
          title: "Concept 4",
          content: "Explanation of the fourth key concept",
        },
        { title: "Concept 5", content: "Explanation of the fifth key concept" },
      ],
    },
    {
      title: "Practical Application",
      duration: "15 min",
      icon: "build-outline",
      cards: [
        {
          title: "Real-world example",
          content: "A practical example of " + topic.title + " in action",
        },
        {
          title: "Step-by-step guide",
          content: "How to apply " + topic.title + " in your life",
        },
        {
          title: "Tools and resources",
          content: "Useful tools for managing " + topic.title,
        },
        {
          title: "Common pitfalls",
          content: "Mistakes to avoid when dealing with " + topic.title,
        },
        {
          title: "Success stories",
          content: "Examples of people who mastered " + topic.title,
        },
      ],
    },
    {
      title: "Advanced Strategies",
      duration: "20 min",
      icon: "rocket-outline",
      cards: [
        {
          title: "Advanced technique 1",
          content: "Explanation of an advanced " + topic.title + " technique",
        },
        {
          title: "Advanced technique 2",
          content: "Another advanced strategy for " + topic.title,
        },
        {
          title: "Case study",
          content:
            "In-depth analysis of a complex " + topic.title + " scenario",
        },
        {
          title: "Expert tips",
          content: "Advice from " + topic.title + " professionals",
        },
        {
          title: "Future trends",
          content: "Emerging trends in " + topic.title,
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {lessons.map((lesson, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("LessonScreen", { lesson, topic })
            }
          >
            <Card
              containerStyle={[
                styles.card,
                { borderLeftColor: topic.color, borderLeftWidth: 5 },
              ]}
            >
              <View style={styles.lessonContainer}>
                <Icon
                  name={lesson.icon}
                  type="ionicon"
                  color={topic.color}
                  size={30}
                  containerStyle={styles.iconContainer}
                />
                <View style={styles.lessonContent}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                </View>
                <Icon
                  name="chevron-forward-outline"
                  type="ionicon"
                  color="#2D3436"
                />
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 3,
  },
  lessonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#F0F3F4",
    padding: 10,
    borderRadius: 10,
  },
  lessonContent: {
    flex: 1,
    marginLeft: 15,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2D3436",
  },
  lessonDuration: {
    color: "#636E72",
  },
  quizButton: {
    borderRadius: 25,
    paddingVertical: 15,
  },
  quizButtonContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default TopicScreen;
