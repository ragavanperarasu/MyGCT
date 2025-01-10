import * as React from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;


export default function PageOne() {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View>
      <ScrollView style={{padding:10}}>

    <Card onPress={()=>navigation.navigate('RegSel', {reqType:"semqus"})} style={styles.cardm}>
    <Card.Title
    title="Semester" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Question Paper" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

    <Card style={styles.cardm} onPress={()=>navigation.navigate('RegSel', {reqType:"ut1qus"})}>
    <Card.Title
    title="UT 1" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Question Paper" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" size={45} style={styles.cardi}/>}
    style={styles.cardt}/></Card>

<Card style={styles.cardm} onPress={()=>navigation.navigate('RegSel', {reqType:"ut2qus"})}>
    <Card.Title
    title="UT 2" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Question Paper" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" size={45} style={styles.cardi}/>}
    style={styles.cardt}/></Card>

<Card style={styles.cardm} onPress={()=>navigation.navigate('RegSel', {reqType:"syllabus"})}>
    <Card.Title
    title="BE Syllabus" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Document" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" size={45} style={styles.cardi}/>}
    style={styles.cardt}/></Card>
    
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

