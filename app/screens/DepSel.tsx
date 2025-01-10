import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StudentTitle from './StudentTitle'
import { Avatar, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


export default function DepSel() {
    const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
        <StudentTitle/>
  
    <Card.Title
    title="Select Department" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="arrow-decision-outline" style={{}}/>}
    style={{backgroundColor:"#353839"}} />

    <ScrollView style={{padding:10}}>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Civil" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Computer Science" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Electronics And Communication" 
    titleNumberOfLines={2}
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Electrical And Electronics" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Electrical And Instrumentation" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Industrial Biotechnology" 
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Information Technology" 
    titleStyle={styles.cardts}
    subtitle="B.Tech" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
    <Card.Title
    title="Mechanical" 
    titleStyle={styles.cardts}
    subtitle="Engineering" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="card-account-details" size={45} style={styles.cardi}/>}
    style={styles.cardt} />
    </Card>

    <Card onPress={()=>navigation.navigate('SemSel')} style={styles.cardm}>
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

