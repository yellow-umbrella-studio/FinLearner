import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import LearnScreen from './screens/LearnScreen';
import ProfileScreen from './screens/ProfileScreen';
import TopicScreen from './screens/TopicScreen';
import QuizScreen from './screens/QuizScreen';
import LessonScreen from './screens/LessonScreen';

const Tab = createBottomTabNavigator();
const LearnStack = createStackNavigator();

const LearnStackScreen = () => (
  <LearnStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#6C5CE7',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <LearnStack.Screen 
      name="LearnMain" 
      component={LearnScreen} 
      options={{ title: 'Learn' }}
    />
    <LearnStack.Screen 
      name="TopicScreen" 
      component={TopicScreen} 
      options={({ route }) => ({ title: route.params.topic.title })}
    />
    <LearnStack.Screen 
      name="LessonScreen" 
      component={LessonScreen} 
      options={({ route }) => ({ title: route.params.lesson.title })}
    />
    <LearnStack.Screen name="QuizScreen" component={QuizScreen} options={{ title: 'Quiz' }} />
  </LearnStack.Navigator>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#6C5CE7' }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Learn') {
                  iconName = focused ? 'book' : 'book-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
                }
                return <Icon name={iconName} type="ionicon" size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: theme.colors.primary,
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Learn" component={LearnStackScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const theme = {
  colors: {
    primary: '#6C5CE7',
    secondary: '#00CEC9',
    background: '#FFFFFF',
  },
};

export default App;