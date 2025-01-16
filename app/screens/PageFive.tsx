import * as React from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';


type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;


export default function PageFive() {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View>
      <ScrollView style={{padding:10}}>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="GCT Website" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Official Website" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Clubs" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Club Profiles" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Calender" titleStyle={{fontSize:20, color:"white"}}
    subtitle="GCT Calender" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Forms" titleStyle={{fontSize:20, color:"white"}}
    subtitle="College" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Regulation" titleStyle={{fontSize:20, color:"white"}}
    subtitle="All Regulation" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
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

