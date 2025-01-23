import React from 'react'
import { View, StyleSheet, ScrollView, Alert } from 'react-native'
import StudentTitle from './TileBar/StudentTitle'
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';


type SemSelScreenProp = StackNavigationProp<RootStackParamList, "SemSel">;


export default function SemSel({route}:{route: SemSelScreenProp}) {
  const navigation = useNavigation<SemSelScreenProp>();
  const {reqType, regType, depType, dep} = route.params;
  
  function sendURL(sem:string){
    if (reqType === "semqus" || reqType === "ut1qus" || reqType === "ut2qus" || reqType === "syllabus"){
      navigation.navigate('SubShow',{reqType:reqType, regType:regType, depType:depType, semType:sem})
    }
    
  }

  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Select Semester" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="arrow-decision-outline" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>

    <Card onPress={()=>sendURL("sem1")} 
    style={styles.cardm}>
    <Card.Title
    title="Semester 1" 
    titleStyle={styles.cardts}
    subtitle={dep+" - 1 Year"}
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("sem2")} style={styles.cardm}>
    <Card.Title
    title="Semester 2" 
    titleStyle={styles.cardts}
    subtitle={dep+" - 1 Year"} 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("sem3")} style={styles.cardm}>
    <Card.Title
    title="Semester 3" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle={dep+" - 2 Year"}
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("sem4")} style={styles.cardm}>
    <Card.Title
    title="Semester 4" 
    titleStyle={styles.cardts}
    subtitle={dep+" - 2 Year"}
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("sem5")} style={styles.cardm}>
    <Card.Title
    title="Semester 5" 
    titleStyle={styles.cardts}
    subtitle={dep+" - 3 Year"}
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("sem6")} style={styles.cardm}>
    <Card.Title
    title="Semester 6" 
    titleStyle={styles.cardts}
    subtitle={dep+" - 3 Year"}
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("sem7")} style={styles.cardm}>
    <Card.Title
    title="Semester 7" 
    titleStyle={styles.cardts}
    subtitle={dep+" - 4 Year"} 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("sem8")} style={styles.cardm}>
    <Card.Title
    title="Semester 8" 
    titleStyle={styles.cardts}
    subtitle={dep+" - 4 Year"} 
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

