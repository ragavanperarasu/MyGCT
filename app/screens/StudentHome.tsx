import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Avatar,Appbar } from 'react-native-paper';
import BottomNav from './BottomNav'




export default function StudentHome() {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');


  return (

    <View style={styles.container}>
        <Appbar.Header style={{backgroundColor:"black"}}>
        <Avatar.Icon size={45} icon="account" style={{ backgroundColor:"black"}}/>
            
            <Appbar.Content title="Student" color='#FFD700' titleStyle={{fontWeight:"700"}}/>
            <Appbar.Action icon="magnify" />
        </Appbar.Header>
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

