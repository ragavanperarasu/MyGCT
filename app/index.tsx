import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StudentHome from './screens/StudentHome';
import TeacherHome from './screens/TeacherHome';
import DetailsScreen from './screens/DetailsScreen';
import RegSel from './screens/RegSel';
import DepSel from './screens/DepSel';
import SemSel from './screens/SemSel';
import SubShow from './screens/axiosScreen/SubShow';
import StaffProfileShow from './screens/axiosScreen/StaffProfileShow';
import {RootStackParamList} from './screens/RootParam';



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
    
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="StudentHome" component={StudentHome} options={{ headerShown: false }}/>
      <Stack.Screen name="TeacherHome" component={TeacherHome} options={{ headerShown: false }}/>
      <Stack.Screen name="RegSel" component={RegSel} options={{ headerShown: false }}/>
      <Stack.Screen name="DepSel" component={DepSel} options={{ headerShown: false }}/>
      <Stack.Screen name="SemSel" component={SemSel} options={{ headerShown: false }}/>
      <Stack.Screen name="SubShow" component={SubShow} options={{ headerShown: false }}/>
      <Stack.Screen name="StaffProfileShow" component={StaffProfileShow} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>

    
  );
}


