import * as React from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../RootParam';


type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;


export default function PageFour() {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View>
      <ScrollView style={{padding:10}}>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Mess Bill Payment" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Online Payment" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="home-city" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Mess Food Menu" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Hostel Mess" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="home-city" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Boyes Hostel" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Images" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="home-city" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Girls Hostel" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Images" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="home-city" size={45} style={styles.cardi}/>}
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

