import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StudentTitle from './StudentTitle'
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';

type DepSelScreenProp = StackNavigationProp<RootStackParamList, "DepSel">;


export default function DepSel({route}:{route: DepSelScreenProp}) {
    const navigation = useNavigation<DepSelScreenProp>();
    const {reqType, regType} = route.params;
  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Select Department" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="arrow-decision-outline" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"ce", dep:"Civil"})} style={styles.cardm}>
    <Card.Title
    title="Civil" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"cse", dep:"CSE"})} style={styles.cardm}>
    <Card.Title
    title="Computer Science" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"ecs", dep:"ECE"})} style={styles.cardm}>
    <Card.Title
    title="Electronics And Communication" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"ee", dep:"E&E"})} style={styles.cardm}>
    <Card.Title
    title="Electrical And Electronics" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"ei", dep:"E&I"})} style={styles.cardm}>
    <Card.Title
    title="Electrical And Instrumentation" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"ibt", dep:"IBT"})} style={styles.cardm}>
    <Card.Title
    title="Industrial Biotechnology" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"it", dep:"IT"})} style={styles.cardm}>
    <Card.Title
    title="Information Technology" 
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"me", dep:"Mechanical"})} style={styles.cardm}>
    <Card.Title
    title="Mechanical" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.
      navigate('SemSel',{reqType:reqType, regType:regType, depType:"pe", dep:"Production"})} style={styles.cardm}>
    <Card.Title
    title="Production" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>



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

