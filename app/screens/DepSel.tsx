import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StudentTitle from './TileBar/StudentTitle'
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from './RootParam';

type DepSelScreenProp = StackNavigationProp<RootStackParamList, "DepSel">;


export default function DepSel({route}:{route: DepSelScreenProp}) {
  const navigation = useNavigation<DepSelScreenProp>();
  const {reqType, regType} = route.params;


  function sendURL(depType:string, dep:string){
    if (reqType === "semqus" || reqType === "ut1qus" || reqType === "ut2qus" || reqType === "syllabus"){
      navigation.navigate('SemSel',{reqType:reqType, regType:regType, depType:depType, dep:dep})
    }
    else if(reqType === "Book" || reqType === "StaffProfile"){
      navigation.navigate('StaffProfileShow', {reqType:reqType, depType:depType})
    }
    
  }

  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Select Department" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="arrow-decision-outline" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>

    <Card onPress={()=>sendURL("ce","Civil")} style={styles.cardm}>
    <Card.Title
    title="Civil" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("cse","CSE")} style={styles.cardm}>
    <Card.Title
    title="Computer Science" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("ece","ECE")} style={styles.cardm}>
    <Card.Title
    title="Electronics And Communication" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("ee","E&E")} style={styles.cardm}>
    <Card.Title
    title="Electrical And Electronics" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("ei","E&I")} style={styles.cardm}>
    <Card.Title
    title="Electrical And Instrumentation" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("ibt","IBT")} style={styles.cardm}>
    <Card.Title
    title="Industrial Biotechnology" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("it","IT")} style={styles.cardm}>
    <Card.Title
    title="Information Technology" 
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("me","Mechanical")} style={styles.cardm}>
    <Card.Title
    title="Mechanical" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>sendURL("pe","Production")} style={styles.cardm}>
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