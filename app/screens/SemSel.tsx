import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StudentTitle from './StudentTitle'
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


export default function SemSel() {
    const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Select Semester" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="arrow-decision-outline" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 1" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 2" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 3" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 4" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 5" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 6" 
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 7" 
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('RegSel')} style={styles.cardm}>
    <Card.Title
    title="Semester 8" 
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

