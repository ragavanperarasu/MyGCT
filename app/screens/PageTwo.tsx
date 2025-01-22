import * as React from 'react';
import { View,ScrollView, StyleSheet, Image } from 'react-native';
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';


type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;


export default function PageTwo() {
  const navigation = useNavigation<HomeScreenProp>();

  function sendURL(reqType:string){
    navigation.navigate('DepSel',{reqType:reqType, regType:""})
  }

  return (
    <View>
      <ScrollView style={{padding:10}}>

    <Card onPress={()=>sendURL('StaffDoc')} style={styles.cardm}>
    <Card.Title
    title="Recommendation" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Staff Documents" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="account-tie" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>sendURL("Book")} style={styles.cardm}>
    <Card.Title
    title="Books" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Book Reference" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="account-tie" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>sendURL("StaffProfile")} style={styles.cardm}>
    <Card.Title
    title="Profile" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Staff Details" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="account-tie" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>
    
    
    </ScrollView>
  </View>
  );
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