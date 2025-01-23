import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomNav from './StudentBottomNav/BottomNav'
import StudentTitle from './TileBar/StudentTitle';


export default function StudentHome() {
  return (
    <View style={styles.container}>
        <StudentTitle/>
        <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  bottomBar: {
    backgroundColor: '#6200ee',
  },
});

