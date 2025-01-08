import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StudentHome from './screens/StudentHome';
import TeacherHome from './screens/TeacherHome';
import DetailsScreen from './screens/DetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  StudentHome: undefined;
  Details: undefined;
  TeacherHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
    
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="StudentHome" component={StudentHome} options={{ headerShown: false }}/>
      <Stack.Screen name="TeacherHome" component={TeacherHome} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>

    
  );
}


