import React,{ useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView,ActivityIndicator } from 'react-native'
import StudentTitle from './StudentTitle'
import { Avatar, Card, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';

import axios from "axios";

type SubShowScreenProp = StackNavigationProp<RootStackParamList, "SubShow">;


export default function SubShow({route}:{route: SubShowScreenProp}) {
    const navigation = useNavigation<SubShowScreenProp>();
    const {reqType, regType, depType, semType} = route.params;
    console.log(reqType+regType+depType+semType)

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Replace with your GitHub raw file URL
          const url = "https://raw.githubusercontent.com/ragavanperarasu/MyGCTConfig/master/SemQus/2022/cse/sem3/semqus2022csesem3.json";
          const response = await axios.get(url);
          setData(response.data); // Assuming the JSON is an array
          setLoading(false);
          console.log(data);
        } catch (error) {
          console.error("Error fetching JSON:", error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#4CAF50" />
        </View>
      );
    }

  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Select Department" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="arrow-decision-outline" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>

    
      {data.length > 0 &&
        (() => {
          const items = [];
          data.forEach((item) => {
            items.push(
              <View>
                <Text>Name: {item.sem}</Text>
                <Text>Email: {item.reg}</Text>
              </View>
            );
          });
          return items;
        })()}
    

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
      padding:30,
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

