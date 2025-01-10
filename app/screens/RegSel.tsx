import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StudentTitle from './StudentTitle'
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';

type RegSelScreenProp = StackNavigationProp<RootStackParamList, "RegSel">;


export default function RegSel({route}:{route: RegSelScreenProp}) {
  const navigation = useNavigation<RegSelScreenProp>();
  const {reqType} = route.params;
  
  

  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Select Regulation Type" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="arrow-decision-outline" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

        <ScrollView style={{padding:10}}>

    <Card onPress={()=>navigation.navigate('DepSel')} style={styles.cardm}>
    <Card.Title
    title="2022" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Regulation" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="badge-account" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('DepSel')} style={styles.cardm}>
    <Card.Title
    title="2018" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Regulation" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="badge-account" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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

