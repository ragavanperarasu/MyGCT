import * as React from 'react';
import { View,ScrollView } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function PageOne() {

  return (
    <View>
      <ScrollView style={{padding:10}}>

      
    <Card.Title
    title="Semester Qustion Paper" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" style={{backgroundColor:"#DE3163"}}/>}
    style={{backgroundColor:"#32174D", margin:10, borderRadius:10}}/>

    <Card.Title
    title="UT 1 Qustion Paper" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" style={{backgroundColor:"#DE3163"}}/>}
    style={{backgroundColor:"#32174D", margin:10, borderRadius:10}}/>

    <Card.Title
    title="UT 2 Qustion Paper" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" style={{backgroundColor:"#DE3163"}}/>}
    style={{backgroundColor:"#32174D", margin:10, borderRadius:10}}/>

    <Card.Title
    title="BE Syllabus" titleStyle={{fontSize:20, color:"white"}}
    left={(props) => <Avatar.Icon {...props} icon="book-open-page-variant" style={{backgroundColor:"#DE3163"}}/>}
    style={{backgroundColor:"#32174D", margin:10, borderRadius:10}}/>
    
    </ScrollView>
  </View>
  );
}

