import React,{ useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView,Image} from 'react-native'
import StudentTitle from '../StudentTitle'
import { Avatar, Card, Text, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../RootParam';

import axios from "axios";

type StaffProfileShowScreenProp = StackNavigationProp<RootStackParamList, "StaffProfileShow">;


export default function StaffProfileShow({route}:{route: StaffProfileShowScreenProp}) {
    const navigation = useNavigation<StaffProfileShowScreenProp>();
    const {reqType,depType} = route.params;

    console.log(reqType+depType)
    

  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Staffs Profile" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="account-tie" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>
    <Card style={styles.cardm}>
        <Card.Title
        title="Dr. J. C. Miraclin Joyce Pamila" titleStyle={{fontSize:18, color:"white", marginLeft:'30%'}}
        titleNumberOfLines={3}
        
        left={(props) => <Image
          source={{
            uri: 'https://gct.ac.in/sites/gct.ac.in/files/styles/user_profile/public/pictures/picture-88-1638534513.jpg?itok=TNT15krv'
    
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius:10
           
          }}
        />}
        
        style={styles.cardt}
        />

        {/* <Card.Actions>
            <Button icon="cloud-check">View</Button>
        </Card.Actions>  */}
        
        </Card>

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
    cardm: {
      boxShadow:"5 5 5 gray", 
      margin:10,
    },
    cardt: {
      backgroundColor:"#32174D",
      borderRadius:10,
      padding:50,
    },
    cardi: {
      backgroundColor: '#DE3163',
    },
    cards:{
        color:"white",
        
    },
    cardts:{
        fontSize:20,
        color:"white",
        fontWeight:700,
    }
  });

